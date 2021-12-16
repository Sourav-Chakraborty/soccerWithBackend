 console.log(item)

        
        document.getElementById("number").innerText="Match NO "+item.no
        document.getElementById("dateTime").innerText=item.date
        document.getElementById("team1_Img").src=item.team1_flag
        document.getElementById("team2_Img").src=item.team2_flag
        document.getElementById("team1").innerText=item.team1
        document.getElementById("team2").innerText=item.team2
        document.getElementById("team1_score").innerText=item.team1_score
        document.getElementById("team2_score").innerText=item.team2_score
        document.getElementById("team1_flag").src=item.team1_flag
        document.getElementById("team2_flag").src=item.team2_flag
        document.getElementById("team1_short").innerText=item.team1_short
        document.getElementById("team2_short").innerText=item.team2_short
        document.getElementById("team1_target").innerText=item.team1_target
        document.getElementById("team2_target").innerText=item.team2_target
        document.getElementById("team1_poss").innerText=item.team1_poss
        document.getElementById("team2_poss").innerText=item.team2_poss
        document.getElementById("team1_pass").innerText=item.team1_pass
        document.getElementById("team2_pass").innerText=item.team2_pass
        document.getElementById("team1_acc").innerText=item.team1_acc
        document.getElementById("team2_acc").innerText=item.team2_acc
        document.getElementById("team1_foul").innerText=item.team1_foul
        document.getElementById("team2_foul").innerText=item.team2_foul
        document.getElementById("team1_yellow").innerText=0
        document.getElementById("team2_yellow").innerText=item.team2_yellow
        document.getElementById("team1_red").innerText=item.team1_red
        document.getElementById("team2_red").innerText=item.team2_red
        document.getElementById("team1_off").innerText=item.team1_offside
        document.getElementById("team2_off").innerText=item.team2_offside
        document.getElementById("team1_corner").innerText=item.team1_corner
        document.getElementById("team2_corner").innerText=0

        var player1=""
        for(var i=0;i<item.team1_goal.length;i++){
            if(item.team1_goal[i]===',')
                 player1+="<br/>"
            else
                player1=player1+item.team1_goal[i]
            // player1+="<br/>"
        }
        document.getElementById("team1_goal").innerHTML=player1
        var player2=""
        for(var i=0;i<item.team2_goal.length;i++){
            if(item.team2_goal[i]===',')
                 player2+="<br/>"
            else
            player2=player2+item.team2_goal[i]
            // player2+="<br/>"
        }
        document.getElementById("team2_goal").innerHTML=player2
    
    
    




   


