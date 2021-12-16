


var navbar = document.querySelector('nav')
const caption=['The game that define itself','More than 2000 player from 180 contries','200+ match per day']

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 200) {
    navbar.classList.remove('bg-trans')
    navbar.classList.add('bg-dark')
  } else {
    navbar.classList.remove('bg-dark')
    navbar.classList.add('bg-trans')
  }
}

var _CONTENT = ['The game that define itself','More than 2000 player from 180 contries','200+ match per day']


// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#captionText");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


// function splitScroll(){
//   const controller = new ScrollMagic.Controller();

//   new ScrollMagic.Scene({
//       duration: '200%',
//       triggerElement: '.about-title',
//       triggerHook: 0
//   })
//   .setPin('.about-title')
//   .addIndicators()
//   .addTo(controller);
// }

// splitScroll();

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({ 
    
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },1000:{
        items:3,
        nav:false
      }

    }


  });
});

const copyRight=()=>{
  const year=new Date().getFullYear()
  document.getElementById('copy_right').innerText='Copyright @'+year
}
copyRight()