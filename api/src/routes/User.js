const axios = require('axios');
const { Router } = require('express');
const { Project, User } = require('../db.js');
//const { Op, useInflection } = require('sequelize');
//const { Recipe, API_KEY, Diet } = require("../db")
const Stripe = require("stripe")
const router = Router();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY


const stripe = new Stripe(STRIPE_SECRET_KEY)

router.get("/id/:idUser", async (req, res, next) => {
    const { idUser } = req.params
    try {
        const user = await User.findByPk(idUser, {
            include: Project
        })

        if (!user) {
            res.sendStatus(404)
            return
        }

        return res.send(user)

    } catch (err) {
        console.log(err)
        res.sendStatus(500)
        next(err);
    }
});

router.post("/donation", async (req, res, next) => {
    try{

      
        const { id, amount } = req.body;
        
        const payment=await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            payment_method: id,
            confirm: true
        })
    
        res.send(payment)
    }catch(err){
        console.log(err)
        
        next(err);
    }
})

module.exports = router;