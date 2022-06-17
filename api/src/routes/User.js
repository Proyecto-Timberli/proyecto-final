const axios = require('axios');
const { Router } = require('express');
const {Project, User} = require('../db.js');
//const { Op, useInflection } = require('sequelize');
//const { Recipe, API_KEY, Diet } = require("../db")

const router = Router();

router.get('/', async(req, res, next)=>{
    try {
        const allUsers = await User.findAll();
        return res.send(allUsers)
    } catch (error) {
        console.log(error);
        next(error);
    }
})


router.get("/id/:idUser", async (req, res, next) => {
    const{idUser}=req.params
    try{
        const user = await User.findByPk(idUser, {
            include: Project
        })

        if (!user){ 
            res.sendStatus(404)
            return 
        } 

        return res.send(user)

    }catch(err){
        console.log(err)
        res.sendStatus(500)
        next(err);
    }
});

module.exports = router;