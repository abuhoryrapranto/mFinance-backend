const express = require('express')
const Atm = require('../models/atm')
const router = express.Router()

router.get('/', async (req, res) => {

    try {

        const atms = await Atm.find();

        if(atms.length) {

            return res.status(200).send({'data': atms});

        } else {

            return res.status(404).json({'message': 'ATMs not found.'})
        }

    } catch(e) {

        return res.status(400).json({'message': 'Something went wrong.'})
    }
})

router.post('/save', async (req, res) => {
    const atm = new Atm(req.body);

    const saveAtm = await atm.save();

    res.status(201).json(saveAtm);
})

module.exports = router;