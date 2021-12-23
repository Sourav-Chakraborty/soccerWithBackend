const express=require('express')
const MatchDetails=require('../model/match_details')
const Result=require('../model/result')
const Game=require('../model/game')
const ls=require('local-storage')
const route=express.Router()



route.post('/uploadMatch',async (req,res)=>{
  
    const file1=req.files.img1
   
    let path1=__dirname.slice(0,18)+"/public/flag/"+Date.now()+".jpg"

   file1.mv(path1,(err)=>{
        if(err)
            return console.log(err)
        console.log("file1 updated")
    })
    path1=path1.slice(26)

    const file2=req.files.img2
    let path2=__dirname.slice(0,18)+"/public/flag/"+Date.now()+".jpg"
    file2.mv(path2,(err)=>{
        if(err)
            return console.log(err)
        console.log("file2 updated")
        
    })
   
    path2=path2.slice(26)
  
     let {No,matches,team1_win,team2_win,date,team1,team2,team1_prob,team2_prob,draw,team1_top,team2_top,team1_history,team2_history,team1_recent,team2_recent,team1_player,team2_player}=req.body
     if(team1_prob[-1]!=='%')
         team1_prob=team1_prob+'%'
     if(team2_prob[-1]!=='%')
         team2_prob=team2_prob+'%'
     team1_history=team1_history.split(',')
     team2_history=team2_history.split(',')
     team1_recent=team1_recent.split(',')
     team2_recent=team2_recent.split(',')
   
    //  console.log({No,matches,team1_win,team2_win,date,team1,team2,,img2,team1_prob,team2_prob,draw,team1_top,team2_top,team1_history,team2_history,team1_recent,team2_recent,team1_player,team2_player})
     await MatchDetails.create({No,matches,team1_win,team2_win,date,team1,team2,img1:path1,img2:path2,team1_prob,team2_prob,draw,team1_top,team2_top,team1_history,team2_history,team1_recent,team2_recent,team1_player,team2_player})
    // console.log("upload done")
   
    res.redirect('/')
   
     
})

route.post('/uploadResult',async (req,res)=>{
   let {No,date,team1,team2,team1_flag,team2_flag,team1_score,team2_score,team1_goal,team2_goal,team1_short,team2_short,team1_target,team2_target,team1_poss,team2_poss,team1_pass,team2_pass,team1_acc,team2_acc,team1_foul,team2_foul,team1_yellow,team2_yellow,team1_red,team2_red,team1_offside,team2_offside,team1_corner,team2_corner}=req.body
    team1_goal=team1_goal.split(',')
    team2_goal=team2_goal.split(',')
    await Result.create({No,date,team1,team2,team1_flag,team2_flag,team1_score,team2_score,team1_goal,team2_goal,team1_short,team2_short,team1_target,team2_target,team1_poss,team2_poss,team1_pass,team2_pass,team1_acc,team2_acc,team1_foul,team2_foul,team1_yellow,team2_yellow,team1_red,team2_red,team1_offside,team2_offside,team1_corner,team2_corner})
    await MatchDetails.findOneAndRemove({No:No.toString()})
    
    /*Logic to  add score & rank to user */
    const game=await Game.find({match:No})
    if(game===null)
        return res.redirect('/')
    let matchResult='',matchPoss='',matchShorts='',matchPassAcc=''
    



    if(team1_score===team2_score)
        matchResult='Draw'
    else if(team1_score>team2_score)
        matchResult=team1
    else
        matchResult=team2


    if(team1_poss===team2_poss)
        matchPoss='Draw'
    else if(team1_poss>team2_poss)
        matchPoss=team1
    else
        matchPoss=team2
    
    if(team1_short===team2_short)
        matchShorts='Draw'
    else if(team1_poss>team2_poss)
        matchShorts=team1
    else
        matchShorts=team2

    if(team1_acc===team2_acc)
        matchPassAcc='Draw'
    else if(team1_acc>team2_acc)
        matchPassAcc=team1
    else
        matchPassAcc=team2

    let matchCards=parseInt(team1_yellow)+parseInt(team2_yellow)+parseInt(team1_red)+parseInt(team2_red)
    console.log(game)

    game.forEach((gam)=>{
        let sum=0
        if(gam.team1_goal===parseInt(team1_score))
            sum+=5
        else
            sum-=5
        if(gam.team2_goal===parseInt(team2_score))
            sum+=5
        else
            sum-=5

        if(matchResult===gam.win)
            sum+=5
        else
            sum-=5

        if(matchPoss===gam.position)
            sum+=5
        else
            sum-=5

        if(matchShorts===gam.shorts)
            sum+=5
        else
            sum-=5

        if(matchPassAcc===gam.pass_accurecy)
            sum+=5
        else
            sum-=5
            
        if(matchCards===gam.card)
            sum+=5
        else
            sum-=5
        
        gam.score=sum
    })

    game.sort((a,b)=>{
        if(a.score<b.score)
            return 1
        else if(a.score>b.score)
            return -1
        return 0
    })
    
    game.forEach(async (gam,index)=>{
        gam.rank=index+1
        await Game.findOneAndUpdate({$and:[{match:gam.match},{user:gam.user}]},{score:gam.score,rank:gam.rank})
    })



    res.redirect('/')
})


route.post('/game',async (req,res)=>{
    const {win,team1_goal,team2_goal,position,shorts,pass_accurecy,card,user,match}=req.body
    // console.log( {win,team1_goal,team2_goal,position,corner,pass_accurecy,card,user,match})
    await Game.create({win,team1_goal,team2_goal,position,shorts,pass_accurecy,card,user,match})
    res.redirect('/')
})

route.get('/deleteMatch/:id',async (req,res)=>{
    const id=req.params.id
    await Result.findOneAndDelete({No:id.toString()})
    res.redirect('/fixture')
})


module.exports=route