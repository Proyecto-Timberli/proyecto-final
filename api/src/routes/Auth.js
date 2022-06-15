const axios = require('axios');
const { Router } = require('express');
const { User } = require('../db.js');


const router = Router();

router.post("/register", (req, res, next) => {
    console.log(">> Register attempt")
    res.sendStatus(200)
})

router.post("/login", (req, res, next) => {
    console.log(">> Login attempt")
    res.sendStatus(200)
})

module.exports = router;