const mongoose = require('mongoose')

const configDb = () => {
    mongoose.connect('mongodb://localhost:27017/nhance1')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log('ERROR in connecting to db')
    })
}

module.exports = configDb