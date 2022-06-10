const axios = require('axios');
const { Router } = require('express');
const {Project, User} = require('../db.js');
//const { Op, useInflection } = require('sequelize');
//const { Recipe, API_KEY, Diet } = require("../db")

const router = Router();

router.get("/id/:idUser", async (req, res, next) => {
    const{idUser}=req.params
    try{
        const user = await User.findByPk(idUser, {
            include: Project
        })
        if (user){
          return res.send(user)
        } 
    }catch(err){
        next(err);
    }
});

module.exports = router;