const express = require('express')
//const Atm = require('../models/atm')
const Feedback = require('../models/feedback');
const router = express.Router()

router.get('/',  (req, res) => {

    res.send('Ok!');

    // try {

    //     const atms = await Atm.find();

    //     if(atms.length) {

    //         return res.status(200).send({'data': atms});

    //     } else {

    //         return res.status(404).json({'message': 'ATMs not found.'})
    //     }

    // } catch(e) {

    //     return res.status(400).json({'message': 'Something went wrong.'})
    // }
})

router.post('/save', async (req, res) => {
    const feedback = new Feedback(req.body);

    const save = await feedback.save();

    return res.status(201).json(save);
})

module.exports = router;