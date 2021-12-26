const mongoose=require('mongoose')
const {Schema}=mongoose
const contact=new Schema({

    email:{
        required:true,
        type:String

    },

    name:{
        type:String
    },
    topic:{
        type:String
    },
    details:{
        type:String
    },
    Date:{
        type:Date,
        default:new Date
    }

})

module.exports=mongoose.model("Contact",contact)