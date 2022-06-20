const axios = require('axios');
const { Router } = require('express');
const { Project, User,Contributions } = require('../db.js');
const { verifyToken } = require('../middlewares/authadjwt')


const router = Router();



router.put("/user", [verifyToken], async (req, res, next) => {
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
    }        catch(err){
        next(err)
    }
})

router.post("/donation", async (req, res, next) => {
    const { contribution, user } = req.body
    try {
        console.log(contribution)
        const newContribution = await Contributions.create ({
            amount: contribution, 
            name: user,
        })
        return res.send(newContribution);
    } 
    catch(err){
        next(err)
    }
})


router.put("/project", [verifyToken], async (req, res, next) => {
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