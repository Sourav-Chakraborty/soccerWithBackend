const express=require('express')
const MatchDetails=require('../model/match_details')
const Result=require('../model/result')
const Player=require('../model/player')
const fetchUser=require('../fetchUser')
const ls=require('local-storage')

const router=express.Router()





router.get('/',(req,res)=>{
    const token=ls.get('token')
    console.log('token ',token)
    if(token===null){  
        console.log("you are not log in")
       return res.render('index',{login:false,isAdmin:false})
    }
    const email=fetchUser(token)

    
    res.render('index',{login:true,isAdmin:false})

})

router.get('/fixture',(req,res)=>{
    const token=ls.get('token')
    console.log('token ',token)
    if(token===null){  
        console.log("you are not log in")
       return res.render('fixture',{login:false,isAdmin:false})
    }
    const email=fetchUser(token)

    
    res.render('fixture',{login:true,isAdmin:false})
})
router.get('/Contact',(req,res)=>{
    const token=ls.get('token')
    console.log('token ',token)
    if(token===null){  
        console.log("you are not log in")
       return res.render('contact',{login:false,isAdmin:false})
    }
    const email=fetchUser(token)

    
    res.render('contact',{login:true,isAdmin:false})
}),{login:false,isAdmin:false}
router.get('/Teams/:id',(req,res)=>{
    const id=req.params.id
    const token=ls.get('token')
    console.log('token ',token)
    if(token===null){  
        if(id==='brazil')
            return res.render('brazil',{login:false,isAdmin:false})
        else if(id==='argentina')
           return res.render('argentina',{login:false,isAdmin:false})
        else if(id==='italy')
           return res.render('italy',{login:false,isAdmin:false})
        else if(id==='germany')
           return res.render('germany',{login:false,isAdmin:false})
    }
    const email=fetchUser(token)

    
  
    if(id==='brazil')
        res.render('brazil',{login:true,isAdmin:false})
    else if(id==='argentina')
        res.render('argentina',{login:true,isAdmin:false})
    else if(id==='italy')
        res.render('italy',{login:true,isAdmin:false})
    else if(id==='germany')
        res.render('germany',{login:true,isAdmin:false})
    
    
})
router.get('/details/:id',async (req,res)=>{
   
    const id=req.params.id
    const match=await MatchDetails.findOne({
        No:id
    })
    const token=ls.get('token')
    console.log('token ',token)
    if(token===null){  
        console.log("you are not log in")
       return res.render('match_details',{login:false,isAdmin:false,No:match.No,date:match.date,team1:match.team1,team2:match.team2,img1:match.img1,img2:match.img2,team1_prob:match.team1_prob,team2_prob:match.team2_prob,matches:match.matches,team1_win:match.team1_win,team2_win:match.team2_win,draw:match.draw,team1_top:match.team1_top,team2_top:match.team2_top,team1_history:match.team1_history,team2_history:match.team2_history,team1_recent:match.team1_recent,team2_recent:match.team2_recent,team1_player:match.team1_player,team2_player:match.team2_player})

    }
    const email=fetchUser(token)
    res.render('match_details',{login:true,isAdmin:false,No:match.No,date:match.date,team1:match.team1,team2:match.team2,img1:match.img1,img2:match.img2,team1_prob:match.team1_prob,team2_prob:match.team2_prob,matches:match.matches,team1_win:match.team1_win,team2_win:match.team2_win,draw:match.draw,team1_top:match.team1_top,team2_top:match.team2_top,team1_history:match.team1_history,team2_history:match.team2_history,team1_recent:match.team1_recent,team2_recent:match.team2_recent,team1_player:match.team1_player,team2_player:match.team2_player})

})
router.get('/result/:id',async (req,res)=>{
    const id=req.params.id

   
    const match=await Result.findOne({
        No:id
    })
    const token=ls.get('token')
    if(token===null)
        return res.render('result1',{login:false,isAdmin:false,No:match.No,date:match.date,team1:match.team1,team2:match.team2,team1_flag:match.team1_flag,team2_flag:match.team2_flag,team1_score:match.team1_score,team2_score:match.team2_score,team1_goal:match.team1_goal,team2_goal:match.team2_goal,team1_short:match.team1_short,team2_short:match.team2_short,team1_target:match.team1_target,team2_target:match.team2_target,team1_poss:match.team1_poss,team2_poss:match.team2_poss,team1_pass:match.team1_pass,team2_pass:match.team2_pass,team1_acc:match.team1_acc,team2_acc:match.team2_acc,team1_foul:match.team1_foul,team2_foul:match.team2_foul,team1_yellow:match.team1_yellow,team2_yellow:match.team2_yellow,team1_red:match.team1_red,team2_red:match.team2_red,team1_offside:match.team1_offside,team2_offside:match.team2_offside,team1_corner:match.team1_corner,team2_corner:match.team2_corner})
    const email=fetchUser(token)
    res.render('result1',{login:true,isAdmin:false,No:match.No,date:match.date,team1:match.team1,team2:match.team2,team1_flag:match.team1_flag,team2_flag:match.team2_flag,team1_score:match.team1_score,team2_score:match.team2_score,team1_goal:match.team1_goal,team2_goal:match.team2_goal,team1_short:match.team1_short,team2_short:match.team2_short,team1_target:match.team1_target,team2_target:match.team2_target,team1_poss:match.team1_poss,team2_poss:match.team2_poss,team1_pass:match.team1_pass,team2_pass:match.team2_pass,team1_acc:match.team1_acc,team2_acc:match.team2_acc,team1_foul:match.team1_foul,team2_foul:match.team2_foul,team1_yellow:match.team1_yellow,team2_yellow:match.team2_yellow,team1_red:match.team1_red,team2_red:match.team2_red,team1_offside:match.team1_offside,team2_offside:match.team2_offside,team1_corner:match.team1_corner,team2_corner:match.team2_corner})



})
router.get('/player/:id',async (req,res)=>{
    const id=req.params.id
   
    const match=await Player.findOne({
        id:id
    })
    const token=ls.get('token')
    if(token===null)
       return res.render('player',{login:false,isAdmin:false,id:match.id,name:match.name,img:match.img,fullName:match.fullName,born:match.born,died:match.died,age:match.age,country:match.country,height:match.height,foot:match.foot,pos:match.pos,number:match.number,match:match.match,goal:match.goal,club:match.goal,club:match.club,league:match.league,leg_match:match.leg_match,leg_goal:match.leg_goal,photo:match.photo,trophyText:match.trophyText})
    const email=fetchUser(token)
    res.render('player',{login:true,isAdmin:false,id:match.id,name:match.name,img:match.img,fullName:match.fullName,born:match.born,died:match.died,age:match.age,country:match.country,height:match.height,foot:match.foot,pos:match.pos,number:match.number,match:match.match,goal:match.goal,club:match.goal,club:match.club,league:match.league,leg_match:match.leg_match,leg_goal:match.leg_goal,photo:match.photo,trophyText:match.trophyText})

})


module.exports=router