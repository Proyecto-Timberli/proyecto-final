const axios = require('axios');
const { Router } = require('express');
const { Project, User, Report, Contributions } = require('../db.js');
//const { Op, useInflection } = require('sequelize');
//const { Recipe, API_KEY, Diet } = require("../db")
const Stripe = require("stripe")
const router = Router();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const { verifyToken } = require('../middlewares/authjwt')


const stripe = new Stripe(STRIPE_SECRET_KEY)

router.get('/', async (req, res, next) => {
    try {
        const allUsers = await User.findAll({
            include: Project,
            include: Report,
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




router.put("/", [ verifyToken ], async (req, res, next) => {
    const { userId, userEdit } = req.body;

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
        res.status(400).send({
            status: "error",
            msg: err
        });
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

module.exports = router;