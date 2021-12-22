const mongoose=require('mongoose')
const {Schema}=mongoose
const game=new Schema({
    match:{
        required:true,
        type:String
    },
    user:{
        type:String,
        required:true
    },
    team1_goal:{
        type:Number
    },
    team2_goal:{
        type:Number

    },
    score:{
        type:Number,
        default:0
    },
    rank:{
        type:Number,
        default:0
    },
    win:{
        type:String,
        
    },
    position:{
        type:String
    },
    shorts:{
        type:String
    },
    pass_accurecy:{
        type:String
    },
    card:{
        type:String
    }
    

})
module.exports=mongoose.model("Game",game)
