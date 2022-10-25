const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:[true,{errors:'email already registered'}],
        validate:{
            validator:(email)=>{
                return isEmail(email)
            },
            message:()=>{
                return 'invalid email format'
            }
        }
    },
    password:{
        type:String,
        minLength:8,
        required:true
    }
},{timestamps:true})

const User = mongoose.model('User',userSchema)

module.exports = User