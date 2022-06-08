const { Router } = require('express');
const router = Router();
const axios = require('axios');
const {Project, User} = require('../db.js');
const {Op, where} = require('sequelize');



router.get("/", async (req, res, next) => {
    try{
        const allPosts = await Project.findAll({
          include: {
            model: User,
            attributes: ["id", "name"],
            through:{
              attributes: []
            }
          }
        }) 
        const allPostsCustom = allPosts.map(Post=> Post = {
          ...Post.dataValues,
          User:Post.dataValues.User
        }) 
        if (allPostsCustom.length){
          return res.send(allPostsCustom)
        }     
    }catch(err){
        next(err);
    }
});


router.get("/:idProject", async (req, res, next) => {
    const{idPost} = req.params;
    try{
      if (idPost){{
        const postDetail = await Project.findOne(
          { where: {id: idPost},
          include: {
            model: User,
            attributes: ["id", "name"],
            through:{
              attributes: []
            }
          }}
        )
        const postDetailCustom = {
            ...postDetail.dataValues,
            User:postDetail.dataValues.User
        }
        if (postDetail){
          return res.send(postDetailCustom)
        }     
      }}
    }catch(err){
        next(err);
    }
});


router.post("/", async (req, res, next) => {
  const {name, tecnology, description, repository, score, userid} = req.body;
  try{
    const newPost= await Project.create({name, tecnology, description, repository, score})
    await newPost.addUser(userid)
    res.send(newPost)
  }
  catch(err){
    next(err);
  }
})


router.put("/", async (req, res, next) => {
    const {postId , postEdit} = req.body;
    try{
        if(postId){
          postDelete= await Project.findOne(postId);
          await postDelete.update(postEdit);
          await postDelete.save();
          res.send("el proyecto se elimino correctamente");
        }
    }
    catch(err){
        next(err);
    }
})


router.delete("/", async (req, res, next) => {
    const {postId} = req.body;
    try{
        if(postId){
          postDelete= await Project.findOne(postId)
          await postDelete.destroy();
          res.send("el proyecto se elimino correctamente")
        }
    }
    catch(err){
        next(err);
    }

})

module.exports = router;

