const Player=require('./model/player')
const player=require('./data.js')
const abc=async ()=>{
    player.map(async (res)=>{
     try{
        const player=await new Player({
   
            id:res.id,
            name:res.name,
            img:res.img,
            fullName:res.fullName,
            born:res.born,
            died:res.died,
            age:res.age,
            country:res.country,
            height:res.height,
            foot:res.foot,
            pos:res.pos,
            number:res.number,
            match:res.match,
            goal:res.goal,
            club:res.club,
            league:res.league,
            leg_match:res.leg_match,
            leg_goal:res.leg_goal,
            photo:res.photo,
            trophyText:res.trophyText
           
            })
            await player.save()
        }catch(err){
            console.log(err)
        }
    })
   
}
module.exports=abc