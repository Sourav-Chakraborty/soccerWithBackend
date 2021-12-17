const express=require('express')
const MatchDetails=require('../model/match_details')
const Result=require('../model/result')
const Player=require('../model/player')
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
router.get('/result/:id',async (req,res)=>{
    const id=req.params.id
   
    const match=await Result.findOne({
        No:id
    })
   
    res.render('result1',{No:match.No,date:match.date,team1:match.team1,team2:match.team2,team1_flag:match.team1_flag,team2_flag:match.team2_flag,team1_score:match.team1_score,team2_score:match.team2_score,team1_goal:match.team1_goal,team2_goal:match.team2_goal,team1_short:match.team1_short,team2_short:match.team2_short,team1_target:match.team1_target,team2_target:match.team2_target,team1_poss:match.team1_poss,team2_poss:match.team2_poss,team1_pass:match.team1_pass,team2_pass:match.team2_pass,team1_acc:match.team1_acc,team2_acc:match.team2_acc,team1_foul:match.team1_foul,team2_foul:match.team2_foul,team1_yellow:match.team1_yellow,team2_yellow:match.team2_yellow,team1_red:match.team1_red,team2_red:match.team2_red,team1_offside:match.team1_offside,team2_offside:match.team2_offside,team1_corner:match.team1_corner,team2_corner:match.team2_corner})
})
router.get('/player/:id',async (req,res)=>{
    const id=req.params.id
   
    const match=await Player.findOne({
        id:id
    })
    console.log(match)
   res.render('player',{id:match.id,name:match.name,img:match.img,fullName:match.fullName,born:match.born,died:match.died,age:match.age,country:match.country,height:match.height,foot:match.foot,pos:match.pos,number:match.number,match:match.match,goal:match.goal,club:match.goal,club:match.club,league:match.league,leg_match:match.leg_match,leg_goal:match.leg_goal,photo:match.photo,trophyText:match.trophyText})
})

module.exports=router