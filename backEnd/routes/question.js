const router = require('express').Router();
const verify = require('../verifyToken/verifyToken')
const question = require('../model/questionSchema')

router.post('/', verify, async (req, res) => {
    const newQuestion = new question({
        title : req.body.title,
        userId : req.user.id,
        detailOfProblem : req.body.detailOfProblem,
        tag : req.body.tag,
    })

    try {
        const postedQues = await newQuestion.save();
        res.status(200).json(postedQues)
    } catch (err) {
        console.log(err)
    }
})

router.get('/', async (req, res) => {
    const sort = req.query.sort;
    const search = req.query.search;
    let allQuestion;
    try {
        if (sort) {
            if (sort === 'nto') {
                if (search) {
                    allQuestion = await question.find({tag:{$regex : search.toString()}}).sort({ _id: -1 }).limit(10)
                    res.status(200).json(allQuestion)
                } else {
                    allQuestion = await question.find().sort({ _id: -1 }).limit(10)
                    res.status(200).json(allQuestion)
                }
            } else if (sort === 'otn') {
                if (search) {
                    allQuestion = await question.find({tag:search}).sort({ _id: 1 }).limit(10)
                    res.status(200).json(allQuestion)
                } else {
                    allQuestion = await question.find().sort({ _id: 1 }).limit(10)
                    res.status(200).json(allQuestion)
                }

            }
        } else {
            if (search) {
                allQuestion = await question.find({ tag: search }).sort({ _id: 1 }).limit(10)
                res.status(200).json(allQuestion)

            } else {
                allQuestion = await question.aggregate([
                    { $sample: { size: 10 } }
                ]);
                res.status(200).json(allQuestion)
            }
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;