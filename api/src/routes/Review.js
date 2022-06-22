const axios = require('axios');
const { Router } = require('express');
const { Project, User, Review } = require('../db.js');

const router = Router();


router.get("/", async (req, res, next) => {
    const { idProject } = req.params;
    try {
        if (idProject) {
            {
                const reviewDetail = await Review.findByPk(idProject, { include: User })
                if (reviewDetail) {
                    return res.send(reviewDetail)
                }
            }
        }
    } catch (err) {
        next(err);
    }
});




router.post("/", async (req, res, next) => {
    const { userid, projectId, scoreStyle, scoreFunctionality, scoreOriginality, text } = req.body
    try {
        const newReview = await Review.create({ scoreStyle, scoreFunctionality, scoreOriginality, text })
        let user = await User.findByPk(userid)
        let project = await Project.findByPk(projectId)
        await user.addReview(newReview)
        await project.addReview(newReview)
        project.set({
            scoreFunctionality: [[...project.scoreFunctionality], [scoreFunctionality]],
            scoreStyle: [[...project.scoreStyle], [scoreFunctionality]],
            scoreOriginality: [[...project.scoreOriginality], [scoreOriginality]],
        })

        // project.save()
        console.log("hola");
        project.set({
            scoreAverage: ((project.scoreStyle.reduce((e, a) => Number(e) + Number(a)) / project.scoreStyle.length) +
                (project.scoreFunctionality.reduce((e, a) => Number(e) + Number(a)) / project.scoreFunctionality.length) +
                (project.scoreOriginality.reduce((e, a) => Number(e) + Number(a)) / project.scoreOriginality.length)) / 3
        })

        project.save()

        res.send(newReview)

    } catch (error) {

        res.send(error)
    }
})

module.exports = router;