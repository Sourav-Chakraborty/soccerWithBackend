const mongoose=require('mongoose')
const { Schema } = mongoose;
const matchDetails=new Schema({
    No:{
        type:String,
        required:true
    },
    team1_win:{
        type:String

    },
    team2_win:{
        type:String

    },
    matches:{
        type:String
    },
    date:{
        type:String

    },
    team1:{
        type:String
    },
    team2:{
        type:String
    },
    img1:{
        type:String
    },
    img2:{
        type:String
    },
    team1_prob:{
        type:String
    },
    team2_prob:{
        type:String
    },
    draw:{
        type:String
    },
    team1_top:{
        type:String
    },
    team2_top:{
        type:String
    },
    team1_history:{
        type:Array
    },
    team2_history:{
        type:Array
    },
    team1_recent:{
        type:Array
    },
    team2_recent:{
        type:Array
    },
    team1_player:{
        type:String
    },
    team2_player:{
        type:String
    }
})

module.exports=mongoose.model("MatchDetails",matchDetails)



