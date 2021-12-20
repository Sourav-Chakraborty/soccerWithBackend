const express=require('express')
const MatchDetails=require('../model/match_details')
const Pages = require('./pages')
const route=express.Router()



route.post('/uploadMatch',async (req,res)=>{
  
        console.log('img2',req.body.img2)
        console.log('img1',req.body.img1)

    
   
   
    let {No,matches,team1_win,team2_win,date,team1,team2,img1,img2,team1_prob,team2_prob,draw,team1_top,team2_top,team1_history,team2_history,team1_recent,team2_recent,team1_player,team2_player}=req.body
    if(team1_prob[-1]!=='%')
        team1_prob=team1_prob+'%'
    if(team2_prob[-1]!=='%')
        team2_prob=team2_prob+'%'
    team1_history=team1_history.split(',')
    team2_history=team2_history.split(',')
    team1_recent=team1_recent.split(',')
    team2_recent=team2_recent.split(',')
   
    console.log({No,matches,team1_win,team2_win,date,team1,team2,img1,img2,team1_prob,team2_prob,draw,team1_top,team2_top,team1_history,team2_history,team1_recent,team2_recent,team1_player,team2_player})
    await MatchDetails.create({No,matches,team1_win,team2_win,date,team1,team2,img1,img2,team1_prob,team2_prob,draw,team1_top,team2_top,team1_history,team2_history,team1_recent,team2_recent,team1_player,team2_player})
    console.log("upload done")
   
    res.json({msg:"done "})
   
  

    
        


     
})

module.exports=route