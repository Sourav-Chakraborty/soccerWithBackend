
console.log("Hello world")
const queryString = window.location.search; 

const urlParams = new URLSearchParams(queryString);
const match = urlParams.get('abc')


const winOrLoss=(n)=>{
    if(n===1)
        return '../'+'other_images/correct.png'
    else if(n===0)
        return '../'+'other_images/wrong.jpg'
    else
        return '../'+'other_images/draw.png'

}

const render=()=>{
   result.map((item)=>{ 
    if(item.No!=match)
        return console.log("Sorry did not match")
     
    document.getElementById('Number').innerText='Match No '+item.No;
    document.getElementById('dateTime').innerText=item.date
    document.getElementById('team1_image').src='../'+item.img1
    document.getElementById('team1_name').innerText=item.team1
    document.getElementById('team2_image').src='../'+item.img2
    document.getElementById('team2_name').innerText=item.team2
    document.getElementById('team1_img').src='../'+item.img1
    document.getElementById('team2_img').src='../'+item.img2
    document.getElementById('team1_matches').innerText=item.matches
    document.getElementById('team2_matches').innerText=item.matches
    document.getElementById('team1_win').innerText=item.team1_win
    document.getElementById('team2_win').innerText=item.team2_win
    document.getElementById('team1_draw').innerText=item.draw
    document.getElementById('team2_draw').innerText=item.draw
    document.getElementById('team1_top').innerText=item.team1_top
    document.getElementById('team2_top').innerText=item.team2_top
    document.getElementById('team1_player').innerText=item.team1_player
    document.getElementById('team2_player').innerText=item.team2_player
    document.getElementById("team1_prob").style.width=item.team1_prob
    document.getElementById("team2_prob").style.width=item.team2_prob
    document.getElementById("team1_prob").innerText=item.team1_prob
    document.getElementById("team2_prob").innerText=item.team2_prob
    



    for(var i=0;i<5;i++){  
        document.getElementsByClassName('team1_hist')[i].src=winOrLoss(item.team1_history[i])
        document.getElementsByClassName('team1_recent')[i].src=winOrLoss(item.team1_recent[i])

    }

    for(var i=0;i<5;i++){  
        document.getElementsByClassName('team2_hist')[i].src=winOrLoss(item.team2_history[i])
        document.getElementsByClassName('team2_recent')[i].src=winOrLoss(item.team2_recent[i])

    }
})

}

render()
