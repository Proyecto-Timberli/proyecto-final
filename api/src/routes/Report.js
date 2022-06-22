
const { Router } = require('express');
const { Project, User, Report} = require('../db.js');
const router = Router();
const { verifyToken } = require('../middlewares/authjwt')


router.get('/project', async (req, res, next) => {
    const {projectId}=req.body
    try {
        const allReports= await Report.findAll({where:{projectId:projectId}})
        if(!allReports.length){
            return res.send(undefined)
        }
        return res.send(allReports)
    } catch (error) {
        next(error);
    }
})
router.get('/user', async (req, res, next) => {
    const {userId}=req.body
    try {
        const allReports= await Report.findAll({where:{userId:userId}})
        if(!allReports.length){
            return res.send(undefined)
        }
        return res.send(allReports)
    } catch (error) {
        next(error);
    }
})
router.post("/project", async (req, res, next) => {
    const {projectId,reportedBy,reportComment} = req.body;
    try {
        const reportExist= await Report.findOne({where: {projectId:projectId,reportedBy:reportedBy}})
        if (!reportExist){
            const newReport= await Report.create({comment:reportComment,reportedBy:reportedBy})
            const projectToReport= await Project.findByPk(projectId)
            await projectToReport.addReport(newReport)
            return res.send("se reporto correctamente el proyecto "+projectToReport.name)
        }else{
            return res.send("no puede reportar mas de una vez a un proyecto")
        }
    } catch (error) {
        next(error);
    } 
})
router.post("/user", async (req, res, next) => {
    const {userId,reportedBy,reportComment} = req.body;
    try {
        const reportExist= await Report.findOne({where: {userId:userId,reportedBy:reportedBy}})
        if (!reportExist){
            const userToReport= await User.findByPk(userId)
            const newReport= await Report.create({comment:reportComment,reportedBy:reportedBy})
            await userToReport.addReport(newReport)
            return res.send("se reporto correctamen al usuario "+userToReport.name)
        }else{
            return res.send("no puede reportar mas de una vez a un usuario")
        }
    } catch (error) {
        next(error);
    } 
})


module.exports = router;