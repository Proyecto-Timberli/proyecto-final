const axios = require('axios');
const { Router } = require('express');
const { User } = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const GitHubStrategy = require('passport-github2')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const router = Router();

passport.serializeUser(function (user, done) {
    done(null, user)
})

passport.deserializeUser(function (user, done) {
    done(null, user)
})

router.post("/register", (req, res, next) => {
    const userData = {
        name: req.body.name,
        mail: req.body.email,
        password: req.body.password,
    }
    User.findOne({
        where: {
            mail: req.body.email
        }
    }).then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, Number.parseInt(process.env.SALT_ROUNDS), (err, hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.json({ status: 'success' })
                    })
                    .catch(err => {
                        res.json({
                            status: 'error',
                            error: err
                        })
                    })
            })
        } else {
            res.json({
                status: 'error',
                error: 'Email ya registrado.'
            })
        }
    })
        .catch(err => {
            res.json({
                status: 'error',
                error: err
            })
        })
})

router.post("/login", (req, res, next) => {
    User.findOne({
        where: {
            mail: req.body.email
        }
    }).then(user => {
        if (user) {
            if (user.userType === "suspended") {
                return res.status(401).json({ error: "Tu cuenta se encuentra suspendida" });
            }
            if (bcrypt.compareSync(req.body.password, user.password)) {

                let token = jwt.sign({
                    user_id: user.dataValues.id,
                    email: user.dataValues.mail,
                    user_type: user.dataValues.userType
                }, process.env.JWT_SECRET_KEY, {
                    // expiresIn: 1440
                })

                res.send({
                    status: "success",
                    token: token,
                    id: user.dataValues.id
                })

            } else {
                res.status(400).send({
                    status: "error",
                    error: 'Usuario o Contraseña Incorrecta'
                })
            }
        } else {
            res.status(400).send({
                status: "error",
                error: 'Usuario o Contraseña Incorrecta'
            })
        }
    }).catch(err => {
        res.status(400).json({ status: "error", error: err.message })
        console.log(err)
    })
})

/**
 * Github Oauth
 */

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.BACKEND_BASE_URL + "/api/auth/github/callback"
},
    async function (accessToken, refreshToken, profile, done) {

        let name = profile.displayName;

        if (!profile.displayName) {
            name = profile.username
        }

        const [user, created] = await User.findOrCreate({
            where: {
                githubId: profile.id
            },
            defaults: {
                githubId: profile.id,
                name: name,
                github: profile.profileUrl,
                image: profile._json.avatar_url,
                mail: "oauth",
                password: "oauth"
            }
        });

        done(null, user)
    }
));

router.get('/github',
    passport.authenticate('github', { session: 'false', scope: ['user:email'] }));

router.get('/github/callback',
    passport.authenticate('github', { session: 'false', failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.


        let token = jwt.sign({
            user_id: res.req.user.dataValues.id,
            email: res.req.user.dataValues.mail,
            user_type: res.req.user.dataValues.userType
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: 1440
        })

        res.redirect(process.env.FRONTEND_BASE_URL + '/home?token=' + token + '&id=' + res.req.user.dataValues.id);
    });

//Google

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.BACKEND_BASE_URL + "/api/auth/google/callback",
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {

        const [user, created] = await User.findOrCreate({
            where: {
                mail: profile.email
            },
            defaults: {
                name: profile.displayName,
                image: profile.picture,
                mail: profile.email,
                password: "oauth"
            }
        });
        done(null, user)
    }
));

router.get('/google',
    passport.authenticate('google', { session: 'false', scope: ['email', 'profile'] }));

router.get('/google/callback',
    passport.authenticate('google', { session: 'false', failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.


        let token = jwt.sign({
            user_id: res.req.user.dataValues.id,
            email: res.req.user.dataValues.mail,
            user_type: res.req.user.dataValues.userType
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: 1440
        })

        res.redirect(process.env.FRONTEND_BASE_URL + '/home?token=' + token + '&id=' + res.req.user.dataValues.id);
    });



module.exports = router;