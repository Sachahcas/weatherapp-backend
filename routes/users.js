require('../models/connection')
var express = require('express');
var router = express.Router();
const { checkBody } = require('../modules/checkBody');
const fetch = require('node-fetch');
const User = require('../models/users')



router.post('/signup', (req, res) => {
    if (!checkBody(req.body, ["email","password","name"])){
        res.json({result : false, error :  'Missing or empty fields' })
    } else {
        User.findOne({email:req.body.email}).then(data => {
            if (data) {
                res.json({result : false, error : 'User already exists'})
            } else {
                const newUser = new User({
                    name: req.body.name,
	                email: req.body.email,
	                password: req.body.password
                })
                newUser.save()
                .then(()=>res.json({result: true}))
            }
        })
    } 

});


router.post('/signin', (req, res) => {
    if (!checkBody(req.body, ["email","password"])){
        res.json({result : false, error :  'Missing or empty fields' })
    } else {
        User.findOne({email:req.body.email}).then(data => {
            if (!data) {
                res.json({result : false, error : 'User not found'})
            } else {
                res.json({result: true})
            }
        })
    } 
});


router.get('/', (req, res) => {
    User.find()
    .then()
    res.json({result : true})
})

module.exports = router;