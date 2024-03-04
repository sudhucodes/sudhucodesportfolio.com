/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Youtuber","Developer","Editor"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

function downloadCV() {
    // Yahan par aap apne CV ka file path denge
    var cvFilePath = 'photo/my-cv.pdf';

    // Ek temporary <a> element create karen
    var link = document.createElement('a');

    // Anchor element ke href attribute mein CV file ka path set karen
    link.href = cvFilePath;

    // Download ke liye attribute set karen
    link.download = 'your_cv.pdf';

    // Link ko document body mein append karen
    document.body.appendChild(link);

    // Click event simulate karen
    link.click();

    // Link ko remove karen, taki yeh page par dikhe na
    document.body.removeChild(link);
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyAcdEZ-1u_6U8WFaJiRF_m4f5jmnW2JWx9DSJKz8A0F8-vpB1VyBgixhkyDlZtS11s/exec';
const form = document.forms['submit-to-google-sheet'];
const submitBtn = form.querySelector('button[type="submit"]');
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    // Disable the submit button and show loading text
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    setTimeout(() => {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                console.log('Success:', data);
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () {
                    msg.innerHTML = "";
                    form.reset();
                    // Re-enable the submit button after form is reset
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = "Send <i class='uil uil-message'></i>";
                }, 4000);
            })
            .catch(error => {
                console.error('Error!', error.message);
                msg.innerHTML = "Error submitting form. Please try again later.";
                // Re-enable the submit button on error
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Send <i class='uil uil-message'></i>";
            });
    }, 4000);
});


// Get the Instagram icon element by its ID
var instagramIcon = document.getElementById('instagramIcon');

// Add a click event listener
instagramIcon.addEventListener('click', function() {
  // Define the Instagram profile URL
  var instagramProfileUrl = 'https://www.instagram.com/sudhucodes';

  // Open the Instagram profile in a new tab
  window.open(instagramProfileUrl, '_blank');
});

// Get the Instagram icon element by its ID
var instagramIcon = document.getElementById('facebookIcon');

// Add a click event listener
instagramIcon.addEventListener('click', function() {
  // Define the Instagram profile URL
  var facebookProfileUrl = 'https://www.facebook.com/profile.php?id=100036861284080';

  // Open the Instagram profile in a new tab
  window.open(facebookProfileUrl, '_blank');
});

// Get the Instagram icon element by its ID
var instagramIcon = document.getElementById('twitterIcon');

// Add a click event listener
instagramIcon.addEventListener('click', function() {
  // Define the Instagram profile URL
  var twitterProfileUrl = 'https://www.twitter.com/sudhucodes';

  // Open the Instagram profile in a new tab
  window.open(twitterProfileUrl, '_blank');
});

// Get the Instagram icon element by its ID
var instagramIcon = document.getElementById('youtubeIcon');

// Add a click event listener
instagramIcon.addEventListener('click', function() {
  // Define the Instagram profile URL
  var youtubeProfileUrl = 'https://www.youtube.com/@sudhucodes';

  // Open the Instagram profile in a new tab
  window.open(youtubeProfileUrl, '_blank');
});

document.getElementById('hireBtn').addEventListener('click', function() {
  // Scroll to the #contact element
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

