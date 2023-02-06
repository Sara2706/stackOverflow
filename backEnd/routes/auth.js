const bcrypt = require('bcryptjs')
const router = require('express').Router();
const User = require('../model/userSchema')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    const anyUser = await User.findOne({ email: req.body.email });
    if (!anyUser) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        })

        try {
            const registeredUser = await newUser.save();
            res.status(200).json(registeredUser);
        } catch (err) {
            console.log(err)
        }
    } else {
        res.status(404).json('Email is already registered');

    }
})

router.post('/login', async (req, res) => {

    const password = req.body.password
    try {
        const anyUser = await User.findOne({ email: req.body.email })

        if (!anyUser) {
            res.status(404).json('Email not registered')
        } else {
            if (bcrypt.compareSync(password, anyUser.password)) {
                const accessToken = jwt.sign({
                    id: anyUser._id,
                    name: anyUser.userName
                }, process.env.SECRET_KEY)
                res.status(200).json(accessToken)
            } else {
                res.status(404).json('Password not match')

            }
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;