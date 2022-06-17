const { Router } = require('express');
const userRouter = require('./User.js');
const projectRouter = require('./Project.js');
const commentRouter = require('./Comment.js');
const adminRouter = require('./Admin.js')
const router = Router();


router.use('/user', userRouter)
router.use('/project', projectRouter)
router.use('/comment', commentRouter)
router.use('/admin', adminRouter)


module.exports = router;
