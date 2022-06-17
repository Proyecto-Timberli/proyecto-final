const axios = require('axios');
const { Router } = require('express');
const {Project, User} = require('../db.js');


const router = Router();


router.put("/user", async (req, res, next) => {
    const {userId , userType} = req.body;
    try{
        if(userId && userType){
          const userUpdate= await User.findByPk(userId);
          const userEdit= {...userUpdate, userType: userType}
          await userUpdate.update(userEdit);
          await userUpdate.save();
          res.send("se modifico correctamente el usuario "+userUpdate.name);
        }
    }
    catch(err){
        next(err);
    }
})

router.put("/project", async (req, res, next) => {
    const {projectId , state} = req.body;
    try{
        if(projectId && state){
          const projectUpdate= await Project.findByPk(projectId);
          const projectEdit= {...projectUpdate, state: state}
          await projectUpdate.update(projectEdit);
          await projectUpdate.save();
          res.send("se modifico correctamente el usuario "+projectUpdate.name);
        }
    }
    catch(err){
        next(err);
    }
})