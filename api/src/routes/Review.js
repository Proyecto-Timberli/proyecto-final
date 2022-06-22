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
    const { projectid, input } = req.body
    const { scoreStyle, scoreFunctionality, scoreOriginality, text } = input
    console.log(text);
    try {
        console.log(scoreFunctionality);
        const newReview = await Review.create({ scoreStyle, scoreFunctionality, scoreOriginality, text })
        let user = await User.findByPk(1)
        let project = await Project.findByPk(projectid)
        await user.addReviews(newReview)
        await project.addReviews(newReview)
        project.set({
            scoreFunctionality: [...project.scoreFunctionality].concat(scoreFunctionality),
            scoreStyle: [...project.scoreStyle].concat(scoreFunctionality),
            scoreOriginality: [...project.scoreOriginality].concat(scoreOriginality),
        })

        // project.save()

        project.set({
            scoreAverage: ((project.scoreStyle.reduce((e, a) => Number(e) + Number(a)) / project.scoreStyle.length) +
                (project.scoreFunctionality.reduce((e, a) => Number(e) + Number(a)) / project.scoreFunctionality.length) +
                (project.scoreOriginality.reduce((e, a) => Number(e) + Number(a)) / project.scoreOriginality.length)) / 3
        })

        project.save()

        res.send(newReview)

    } catch (error) {
        // console.log(error);
        next(error)
    }
})

module.exports = router;