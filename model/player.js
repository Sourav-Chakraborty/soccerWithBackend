const mongoose=require('mongoose')
const {Schema}=mongoose

const player=new Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    img:{
        type:String

    },
    fullName:{
        type:String

    },
    born:{
        type:String

    },
    died:{
        type:String

    },
    age:{
        type:String

    },
    country:{
        type:String

    },
    height:{
        type:String

    },
    foot:{
        type:String

    },
    pos:{
        type:String

    },
    number:{
        type:String

    },
    match:{
        type:String

    },
    goal:{
        type:String

    },
    club:{
        type:Array
    },
    league:{
        type:Array

    },
    leg_match:{
        type:Array

    },
    leg_goal:{
        type:Array

    },
    photo:{
        type:Array

    },
    trophyText:{
        type:Array

    }


})
module.exports=mongoose.model("Player",player)
