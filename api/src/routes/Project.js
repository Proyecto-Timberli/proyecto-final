const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Project, User, Report, Review } = require('../db.js');
const { Op, where } = require('sequelize');
const { verifyToken } = require('../middlewares/authjwt')


router.get("/", async (req, res, next) => {
  try {
    const allProjects = await Project.findAll({ include: [{ model: User }, { model: Report }] })
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
        const projectDetail = await Project.findByPk(idProject, { include: [{ model: User }, { model: Review, include: User }] })
        if (projectDetail) {
          return res.send(projectDetail)
        }
      }
    }
  } catch (err) {
    next(err);
  }
});


router.post("/", async (req, res, next) => {
  const { name, tecnology, shortDescription, imagen, description, repository, userid, deploying } = req.body;
  try {
    const newProject = await Project.create({ name, imagen, shortDescription, tecnology, description, repository, deploying })
    let user = await User.findByPk(userid)
    await user.addProject(newProject)

    res.send(newProject)
  }
  catch (err) {
    next(err);
  }
})


router.put("/", async (req, res, next) => {
  const { projectId, projectEdit } = req.body;
  try {
    if (projectId && projectEdit) {
      const projectUpdate = await Project.findByPk(projectId);
      await projectUpdate.update(projectEdit);
      await projectUpdate.save();
      res.send("el proyecto " + projectUpdate.name + " se modifico correctamente");
    }
  } catch (err) {
    next(err);
  }
})


router.delete("/", [verifyToken], async (req, res, next) => {
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

