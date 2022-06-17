const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Project, User } = require('../db.js');
const { Op, where } = require('sequelize');
const { verifyToken } = require('../middlewares/authjwt')




router.get("/", [verifyToken], async (req, res, next) => {
  try {
    console.log("entro a get /projects")

    const allProjects = await Project.findAll({
      include: User
    })
    if (allProjects.length) {
      return res.send(allProjects)
    }
  } catch (err) {
    next(err);
  }
});

router.get("/id/:idProject", async (req, res, next) => {
  const { idProject } = req.params;
  try {
    if (idProject) {
      {
        const projectDetail = await Project.findByPk(idProject, { include: User })
        if (projectDetail) {
          return res.send(projectDetail)
        }
      }
    }
  } catch (err) {
    next(err);
  }
});


router.post("/", [verifyToken], async (req, res, next) => {
  const { name, tecnology, description, repository, score, userid, deploying, imagen } = req.body;
  try {
    const newProject = await Project.create({ name, tecnology, description, repository, score, deploying, imagen })
    let user = await User.findByPk(userid)
    await user.addProject(newProject)

    res.send(newProject)
  }
  catch (err) {
    next(err);
  }
})


router.put("/", [verifyToken], async (req, res, next) => {
  const { postId, postEdit } = req.body;
  try {
    if (postId) {
      postDelete = await Project.findOne(postId);
      await postDelete.update(postEdit);
      await postDelete.save();
      res.send("el proyecto se elimino correctamente");
    }
  }
  catch (err) {
    next(err);
  }
})


router.delete("/", async (req, res, next) => {
  const { projectId } = req.body;
  try {
    if (projectId) {
      projectDelete = await Project.findByPk(projectId)
      await projectDelete.destroy();
      res.send("el proyecto se elimino correctamente")
    }
  }
  catch (err) {
    next(err);
  }

})

module.exports = router;

