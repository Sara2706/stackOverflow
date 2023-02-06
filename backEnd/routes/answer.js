const verify = require('../verifyToken/verifyToken');
const Answer = require('../model/answerSchema')
const router = require('express').Router();

router.post('/:id', verify, async (req, res) => {
    const newAnswer = new Answer({
        questionId: req.params.id,
        username: req.user.name,
        userId: req.user.id,
        answer: req.body.answer,
    })

    try {
        const postedAnswer = await newAnswer.save();
        res.status(200).json(postedAnswer)
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const answers = await Answer.find({questionId: req.params.id}).sort({_id:-1});
        res.status(200).json(answers)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;