const { Router } = require('express');

const userRouter = require('./User.js');
const postRouter = require('./Project.js');
const commentRouter = require('./Comment.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/User', userRouter)
router.use('/Project', postRouter)
router.use('/Comment', commentRouter)


module.exports = router;
