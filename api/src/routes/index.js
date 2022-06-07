const { Router } = require('express');

const userRouter = require('./User.js');
const postRouter = require('./Post.js');
const commentRouter = require('./Comment.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/User', userRouter)
router.use('/Post', postRouter)
router.use('/Comment', commentRouter)


module.exports = router;
