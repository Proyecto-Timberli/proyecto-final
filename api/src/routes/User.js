const axios = require('axios');
const { Router } = require('express');
const { Project, User, Report, Favorites } = require('../db.js');
//const { Op, useInflection } = require('sequelize');
//const { Recipe, API_KEY, Diet } = require("../db")
const Stripe = require("stripe")
const router = Router();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const { verifyToken } = require('../middlewares/authjwt');



const stripe = new Stripe(STRIPE_SECRET_KEY)

router.get('/', async (req, res, next) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Report }, { model: Project }],



        });

        return res.send(allUsers)
    } catch (error) {
        console.log(error);
        next(error);
    }
})


router.get("/id/:idUser", async (req, res, next) => {
    const { idUser } = req.params

    if (!idUser || idUser === "null") {
        return res.sendStatus(400)
    }

    try {
        const user = await User.findByPk(idUser, {
            include: [{ model: Project }, { model: Favorites, include: [{ model: Project, include: User }] }]
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




router.put("/", [verifyToken], async (req, res, next) => {
    const { userId, userEdit } = req.body;
    console.log("entro")
    // Verificar que usuario X no pueda modificar datos de usuario Y
    // ...a menos que sea admin
    if (userId && userId !== req.user_id) {
        /*
        if (req.admin === true)
            no mandar el error que sigue a continuación    
        */

        res.status(401).send({
            status: "error",
            msg: "No tienes autorización para realizar esta acción"
        })
    }
    console.log(userEdit)
    // validación del back
    if (userEdit) {
        if (!userEdit.name) {
            return res.send({
                status: "error",
                msg: "Usuario debe tener un nombre."
            })
        }
    }

    // actualizar cambios
    try {
        if (userId && userEdit) {
            const userUpdate = await User.findByPk(userId);
            await userUpdate.update(userEdit);
            await userUpdate.save();
            res.send({
                status: "success",
                msg: "Información de usuario modificada correctamente"
            });
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send({
            status: "error",
            msg: err
        });
    }
})

router.put("/mockeo/editar", async (req, res, next) => {
    const { userId, userEdit } = req.body;

    try {

        const userUpdate = await User.findByPk(userId);
        await userUpdate.update(userEdit);
        await userUpdate.save();
        res.send("Bien")
        next()
    } catch (error) {
        next(error)
    }
})

router.delete("/", async (req, res, next) => {
    const { userId } = req.body;
    try {
        if (userId) {
            const userDelete = await User.findByPk(userId)
            const name = userDelete.name
            await userDelete.destroy();
            res.send("el usuario " + name + " se elimino correctamente")
        }
    }
    catch (err) {
        next(err);
    }

})


router.get("/favorites/:userId", async (req, res, next) => {
    try {
        const { userId } = req.params;
        
        if (userId) {
            const userFavorites = await User.findByPk(userId, { include: [{ model: Project }, { model: Favorites, include: [{ model: Project }] }] })
            if (!userFavorites) {
                res.sendStatus(404)
            }

            res.send({ favorites: userFavorites.favorites, projects: userFavorites.projects })
        }


    } catch (err) { next(err) }



})
router.put("/favorites", async (req, res, next) => {
    try {
        const { userId, projectId } = req.body;


        let project = await Project.findByPk(projectId)
        let favorite = await Favorites.findOne({ where: { userId, project_id: projectId } })
        if (favorite) {
            favorite.destroy()
            // favorite.filter(p => p.projects[0].id !== projectId)
            favorite.save()
            return res.send(`El proyecto ${project.name} se elimino de favoritos`)

        }
        res.status(401).send("no existe ese favorito")

    } catch (err) {
        next(err)
    }
})

router.post("/favorites", async (req, res, next) => {
    try {
        const { userId, projectId } = req.body;
        if (userId && projectId) {
            const user = await User.findByPk(userId, { include: [{ model: Favorites, include: [{ model: Project }] }] })
            const project = await Project.findByPk(projectId, {
                include: [{ model: User }]
            })
            if (user && project) {
                let validacion = await Favorites.findOne({
                    where: {
                        userId: userId,
                        project_id: projectId
                    }
                })
                if(validacion !== null){
                    return res.status(401).send("El proyecto ya esta en favoritos")
                }
                const newFavorite = await Favorites.create({ project, project_id: project.id })
                await newFavorite.addProjects(project)
                await user.addFavorites(newFavorite)
            }
            res.send("El proyecto " + project.name + " se agrego a favoritos")


        }

    } catch (err) {
        next(err);
    }
})
module.exports = router;