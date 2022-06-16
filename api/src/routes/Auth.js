const axios = require('axios');
const { Router } = require('express');
const { User } = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = Router();

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
                error: 'Usuario ya existe.'
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
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign({ id: user.dataValues.id, email: user.dataValues.mail }, process.env.JWT_SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send({
                    status: "success",
                    token: token
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
    })
})

module.exports = router;