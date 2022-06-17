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