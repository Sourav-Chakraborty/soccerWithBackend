console.log('Hello world')
function splitScroll(){
    const  controller=new ScrollMagic.Controller()

    new ScrollMagic.Scene({
        duration:'170%',
        triggerElement:'.upcoming_left',
        triggerHook:0
    })
    // .addIndicators()
    .setPin('.upcoming_left')
    .addTo(controller)
}

const nextPage=(n)=>{
    render(n)
}



splitScroll()
let i=0;
function toggleButton(){
    i++
    if(i%2===1){
        document.getElementsByClassName('myTeam')[0].style.display="block"
        document.getElementsByClassName('allTeam')[0].style.display="none"

    }
    else{
        document.getElementsByClassName('myTeam')[0].style.display="none"
        document.getElementsByClassName('allTeam')[0].style.display="block"

    }
}

