const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersCtlr = {}

usersCtlr.registerUser = (req,res) => {
    const body = req.body
    const newUser = new User(body)
    if(newUser.password&&newUser.email){
        bcryptjs.genSalt()
        .then(salt=>{
            bcryptjs.hash(newUser.password,salt)
                .then(encPwd=>{
                    newUser.password = encPwd
                    newUser.save()
                        .then(newUser=>res.json(newUser))
                        .catch(err=>res.json(err))
                })
        })
        .catch(err=>res.json(err))
    }
    else if(!newUser.email&&!newUser.password){
        res.json({errors:'email, password both are missing'})
    }
    else if(!newUser.password){
        res.json({errors:'password is required'})
    }
}

usersCtlr.listUsers = (req,res) => {
    User.find()
        .then((users)=>res.json(users))
        .catch((err)=>res.json(err))
}

usersCtlr.removeUser = (req,res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(deletedOne => res.json(deletedOne))
        .catch(err => res.json(err))
}

usersCtlr.login = (req,res) => {
    const body = req.body
    User.findOne({email:body.email})
        .then(user=>{
            if(!user) {
                res.json({errors:'invalid email or password'})
            }
            else{
                bcryptjs.compare(body.password,user.password)
                .then(match=>{
                    if(match){
                        const data = {
                            _id:user._id,
                            email:user.email
                        }
                        const token = jwt.sign(data,'key',{expiresIn:'100d'})
                        res.json({token})
                    }
                    else {
                        res.json({errors:'invalid email or password'})
                    }
                })
            }
        })
}

module.exports = usersCtlr