const express = require('express')
const Backup = require('../models/backup');
const router = express.Router()

router.get('/', async (req, res) => {


    if(!req.query.deviceId) {
        return res.status(400).json({'message': 'Put device id'})
    }

    try {

        const backup = await Backup.find({deviceId: req.query.deviceId}, {'_id':0});

        if(backup.length > 0) {

            return res.status(200).send({'data': backup});

        } else {

            return res.status(404).json({'message': 'Backups not found.'})
        }

    } catch(e) {

        return res.status(500).json({'message': 'Something went wrong.'})
    }
});

router.post('/save', async (req, res) => {

    const data = req.body.data;

    const backup = new Backup();

    const exist = backup.collection.find({deviceId: data[0].deviceId});

    if(exist) {

        await backup.collection.deleteMany({deviceId: data[0].deviceId})
        .then(result => {

            if(result.acknowledged == true) {
                const save = backup.collection.insertMany(data);
                return res.status(201).json(save);
            }
        })

    } else {

        const save = backup.collection.insertMany(data);
        return res.status(201).json(save);
    }
});

module.exports = router;