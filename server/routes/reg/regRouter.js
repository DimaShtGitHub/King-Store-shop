const express = require('express');
const router = express.Router();
const {User} = require('../../db/models')

router.post('/', async (req, res) => {
    const { name, email, password } = req.body

    try {
        const newUser = await User.create({name, email, password});
        res.json(newUser)
    } catch (err) {
        console.error(err.message)
        return res.status(500).end()
    }
    res.status(200).end()   
})

module.exports = router