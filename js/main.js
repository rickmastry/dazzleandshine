let showMenu = false;
let navicon = document.querySelector('.nav-icon');
let sidemenu = document.querySelector('.side-nav');


navicon.addEventListener('click', toggleMenu, false);

function toggleMenu(event){
    if(!showMenu){
      if(sidemenu.style.width = '250px');
     
        //Set Menu state
        showMenu = true;
       
    }else{
     
      sidemenu.style.width = '0px';
     
        //Set Menu State
        showMenu = false;

    }
}

let closed = document.querySelector('.btn-close');
closed.addEventListener("click", toggleBtn);


function toggleBtn(event){
  
    sidemenu.style.width = '0px';
    showMenu = false;
}


const slideshowImages = document.querySelectorAll(".intro-slideshow img");
const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)
slideshowImages[currentImageCounter].style.animation = "slideShow 24s linear infinite 0s";


// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages[currentImageCounter].style.animation = "none";

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
  slideshowImages[currentImageCounter].style.animation = "slideShow 24s linear infinite 0s";
  
}

const quotes = [
 
  {
      name: 'Dazzle & Shine',
      quote: 'Laundry Services'
  },
  {
      name: 'Dazzle & Shine',
      quote: 'Cleaning Services'
  },
  {
    name: 'Dazzle & Shine',
    quote: 'Folding Services'
}
 
];

const quoteHeadline = document.querySelector('.quoteHeadline');
const quoteSubHeadline = document.querySelector('.quoteSubHeadline');
const nextQuoteDelay = 5000;
let currentQuoteCounter = 0;
quoteHeadline.style.animation = "slideShow 24s linear infinite 0s";
quoteSubHeadline.style.animation = "slideShow 24s linear infinite 0s";
quoteHeadline.style.opacity = 1;
quoteSubHeadline.style.opacity = 1;



setInterval(displayQuote, nextQuoteDelay);

function displayQuote() {
 
    //let number = Math.floor(Math.random()*quotes.length);
    quoteHeadline.style.opacity = 0;
    quoteHeadline.innerHTML = quotes[currentQuoteCounter].name;
    quoteHeadline.style.animation = "none";
    quoteSubHeadline.innerHTML = quotes[currentQuoteCounter].quote;
    quoteSubHeadline.style.animation = "none";

    currentQuoteCounter = (currentQuoteCounter+1) % quotes.length;

    quoteHeadline.style.opacity = 1;

}


//const counters = document.querySelectorAll('.counter');
//const speed = 200;

/*const counterContainer = document.querySelector('.counter-container');
const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "-100px",
}
const theObserver = new IntersectionObserver(callbackFunction, options);
theObserver.observe(counterContainer);

function callbackFunction(entries) {
  const [entry] = entries;

  if(entry.isIntersecting){
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = Math.ceil(target / speed);
    
        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
    
    
      };
    
      updateCount();
    });

  }else{
    return;
  }
}*/