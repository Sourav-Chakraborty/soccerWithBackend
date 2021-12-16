const Result=require('./model/result')
const summary=require('./data.js')
const abc=async ()=>{
    summary.map(async (res)=>{
     try{
        const result=await new Result({
   
            No:res.no,
            date:res.date,
            team1:res.team1,
            team2:res.team2,
            team1_flag:res.team1_flag,
            team2_flag:res.team2_flag,
            team1_score:res.team1_score,
            team2_score:res.team2_score,
            team1_goal:res.team1_goal,
            team2_goal:res.team2_goal,
            team1_short:res.team1_short,
            team2_short:res.team2_short,
            team1_target:res.team1_target,
            team2_target:res.team2_target,
            team1_poss:res.team1_poss,
            team2_poss:res.team2_poss,
            team1_pass:res.team1_pass,
            team2_pass:res.team2_pass,
            team1_acc:res.team1_acc,
            team2_acc:res.team2_acc,
            team1_foul:res.team1_foul,
            team2_foul:res.team2_foul,
            team1_yellow:res.team1_yellow,
            team2_yellow:res.team2_yellow,
            team1_red:res.team1_red,
            team2_red:res.team2_red,
            team1_offside:res.team1_offside,
            team2_offside:res.team2_offside,
            team1_corner:res.team1_corner,
            team2_corner:res.team2_corner
            })
            await result.save()
        }catch(err){
            console.log(err)
        }
    })
   
}
module.exports=abc