const MatchDetails=require('./model/match_details')
const result=require('./data.js')
const abc=async ()=>{
    result.map(async (res)=>{
     try{
        const matchDetails=await new MatchDetails({
   
            No:res.No,
            date:res.date,
            team1:res.team1,
            team2:res.team2,
            img1:res.img1,
            img2:res.img2,
            team1_prob:res.team1_prob,
            team2_prob:res.team2_prob,
            matches:res.matches,
            team1_win:res.team1_win,
            team2_win:res.team2_win,
            win:res.win,
            draw:res.draw,
            team1_top:res.team1_top,
            team2_top:res.team2_top,
            team1_history:res.team1_history,
            team2_history:res.team2_history,
            team1_recent:res.team1_recent,
            team2_recent:res.team2_recent,
        
            team1_player:res.team1_player,
            team2_player:res.team2_player
            })
            await matchDetails.save()
        }catch(err){
            console.log(err)
        }
    })
   
}
module.exports=abc