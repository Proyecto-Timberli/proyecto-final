const axios = require('axios');
const { Router } = require('express');
const { Project, User } = require('../db.js');
//const { Op, useInflection } = require('sequelize');
//const { Recipe, API_KEY, Diet } = require("../db")
const Stripe = require("stripe")
const router = Router();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY


const stripe = new Stripe(STRIPE_SECRET_KEY)

router.get('/', async(req, res, next)=>{
    try {
        const allUsers = await User.findAll({
            include: Project
        });
        return res.send(allUsers)
    } catch (error) {
        console.log(error);
        next(error);
    }
})


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
        next(err);
         }
})

router.put("/", async (req, res, next) => {
    const {userId , userEdit} = req.body;
    try{
        if(userId && userEdit){
          const userUpdate= await User.findByPk(userId);
          await userUpdate.update(userEdit);
          await userUpdate.save();
          res.send("su usuario se modifico correctamente ");
        }
    }
    catch(err){

        next(err);
    }
})


router.delete("/", async (req, res, next) => {
    const {userId} = req.body;
    try{
        if(userId){
          const userDelete = await User.findByPk(userId)
          const name = userDelete.name
          await userDelete.destroy();
          res.send("el usuario "+name+" se elimino correctamente")
        }
    }
    catch(err){
        next(err);
    }

})

module.exports = router;