const mongoose=require('mongoose')
const {Schema}=mongoose
const user=new Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        require:true,
        min:5
    },
    team:{
        type:Array
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("User",user)