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



