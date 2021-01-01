var mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},

role:{
    type:String,
    required:true
},

joiningDate:{
type:Date,
required:true,
default:Date.now

}

})

module.exports = mongoose.model('datastore',storeSchema)