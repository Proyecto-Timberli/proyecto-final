const axios = require('axios');
const { Router } = require('express');
const { Project, User, Contributions } = require('../db.js');
const { verifyToken } = require('../middlewares/authadjwt')
const Stripe = require("stripe")
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(STRIPE_SECRET_KEY)
const router = Router();



router.put("/user", async (req, res, next) => {
    const { userId, userType } = req.body;

    try {
        if (userId && userType) {
            const userUpdate = await User.findByPk(userId);
            const userEdit = { ...userUpdate, userType: userType }
            await userUpdate.update(userEdit);
            await userUpdate.save();
            res.send("se modifico correctamente el usuario " + userUpdate.name);
        }
    }
    catch (err) {
        next(err);
    }
})

router.get("/donation", async (req, res, next) => {
    try {
        const allCotributions = await Contributions.findAll({
            include: User
        })
        return res.send(allCotributions)
    } catch (err) {
        next(err)
    }
})

router.post("/donation", async (req, res, next) => {
    const { contribution, user, paymentMethod } = req.body

    try {
        console.log(contribution)
        if (user !== "Anonimo") {
            const contribuidor = await User.findByPk(user)
            const payment = await stripe.paymentIntents.create({
                payment_method: paymentMethod.id,
                currency: "USD",
                description: " realizada por " + contribuidor.name,
                amount: contribution,
                confirm: true,
            })

            if (payment.status === "succeeded") {

                var newContribution = await Contributions.create({
                    amount: contribution / 100,
                    name: contribuidor.name,
                })
                return res.send({ newContribution, payment });
            }

            
        }
        else {
            const payment = await stripe.paymentIntents.create({
                payment_method: paymentMethod.id,
                currency: "USD",
                description: " realizada por usuario anonimo",
                amount: contribution,
                confirm: true,
            })
            if (payment.status === "succeeded") {
                var newContribution = await Contributions.create({
                    amount: contribution / 100,
                    name: 'Anonimo',
                })
                return res.send({ newContribution, payment });
            }
            
        }


    }
    catch (err) {
        return res.status(202).send({ error: err})
    }
});



router.put("/project", async (req, res, next) => {
    const { projectId, state } = req.body;
    try {
        if (projectId && state) {
            const projectUpdate = await Project.findByPk(projectId);
            const projectEdit = { ...projectUpdate, state: state }
            await projectUpdate.update(projectEdit);
            await projectUpdate.save();
            res.send("se modifico correctamente el proyecto " + projectUpdate.name);
        }
    }
    catch (err) {
        next(err);
    }
})
module.exports = router;