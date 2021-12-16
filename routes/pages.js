const express=require('express')
const MatchDetails=require('../model/match_details')
const abc=require('../abc')
const router=express.Router()

router.get('/',(req,res)=>{
   
    res.render('index')
})
router.get('/fixture',(req,res)=>{
    res.render('fixture')
})
router.get('/Contact',(req,res)=>{
    res.render('contact')
})
router.get('/Teams/:id',(req,res)=>{
    const id=req.params.id
    if(id==='brazil')
        res.render('brazil')
    else if(id==='argentina')
        res.render('argentina')
    else if(id==='italy')
        res.render('italy')
    else if(id==='germany')
        res.render('germany')
    
    
})
router.get('/details/:id',async (req,res)=>{
    const id=req.params.id
    const match=await MatchDetails.findOne({
        No:id
    })
   
    res.render('match_details',{No:match.No,date:match.date,team1:match.team1,team2:match.team2,img1:match.img1,img2:match.img2,team1_prob:match.team1_prob,team2_prob:match.team2_prob,matches:match.matches,team1_win:match.team1_win,team2_win:match.team2_win,draw:match.draw,team1_top:match.team1_top,team2_top:match.team2_top,team1_history:match.team1_history,team2_history:match.team2_history,team1_recent:match.team1_recent,team2_recent:match.team2_recent,team1_player:match.team1_player,team2_player:match.team2_player})
})
module.exports=router