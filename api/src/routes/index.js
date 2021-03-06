const { Router } = require('express');
const userRouter = require('./User.js');
const projectRouter = require('./Project.js');
const reviewRouter = require('./Review.js');
const authRouter = require('./Auth.js')
const adminRouter = require('./Admin.js')
const reportRouter = require('./Report.js')
const router = Router();

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/project', projectRouter)
router.use('/review', reviewRouter)
router.use('/admin', adminRouter)
router.use('/report', reportRouter)


module.exports = router;
