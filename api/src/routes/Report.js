
const { Router } = require('express');
const { Project, User, Report} = require('../db.js');
const router = Router();
const { verifyToken } = require('../middlewares/authjwt')


// PROYECTOS //
router.post("/project", async (req, res, next) => {
    const {projectId,reportedBy,reportComment} = req.body;
    
    try {
        if(!reportedBy){
            throw new Error('Error, debe estar logeado para reportar')
        }
        const reportExist= await Report.findOne({where: {projectId:projectId,reportedBy:reportedBy}})
        const projectToReport= await Project.findByPk(projectId)
        if(reportComment.length===0){
            return res.send('Error, el comentario es obligatorio')
        }
        if (!reportExist){
            const newReport= await Report.create({comment:reportComment,reportedBy:reportedBy})
            await projectToReport.addReport(newReport)
            const countReport= await Project.findByPk(
                projectId,
                {
                include: Report
            })

            if(countReport.dataValues.reports.length ===3 ){
                projectToReport.update({
                    state: 'Pendiente'
                })
            }
            return res.send("se reporto correctamente el proyecto "+projectToReport.name)
        }else{
            return res.send("no puede reportar mas de una vez a un proyecto")
        }
    } catch (error) {
        next(error);
    } 
})







// USUARIOS //
router.post("/user", async (req, res, next) => {
    const {userId,reportedBy,reportComment} = req.body;
    try {
        if(!reportedBy){
            return res.send('Error, debe estar logeado para reportar')
        }
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