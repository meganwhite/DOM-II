// Your code goes here
// 1. Change background of header to schoolbus yellow on mouseover
const header = document.querySelector('header');

header.addEventListener('mouseover', function() {
    header.style.background = '#ffcc00';
    navLinks.style.background = header.style.background;
});

// 2. Increase font size of header on mouseover
const headline = document.querySelector('.logo-heading');
header.addEventListener('mouseover', function() {
    headline.style.fontSize = '1000%';
});
header.addEventListener('mouseout', function() {
    headline.style.fontSize = '4rem';
});

// 3. Change background to gray and bold font of navlinks on mouseover
const navLinks = document.querySelectorAll('.nav-link');
header.addEventListener('mouseenter', function() {
    navLinks.style.background = '#ffcc00';
});
navLinks.forEach(navLinks => navLinks.addEventListener('mouseenter', function() {
    navLinks.style.background = '#cccccc';
    navLinks.style.fontWeight = 'bold';
    navLinks.style.fontSize = '300%';
}));

navLinks.forEach(navLinks => navLinks.addEventListener('mouseleave', function() {
    navLinks.style.background = header.style.background;
    navLinks.style.fontWeight = 'normal';
    navLinks.style.fontSize = '1.6rem';
}));

// Attempt to change header back after nav changes
header.addEventListener('mouseleave', function() {
    header.style.background = 'white';
});

header.addEventListener('mouseleave', function() {
    navLinks.forEach(item => item.style.background = header.style.background);  
});

// 4. Turn background a random color on keydown
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const body = document.querySelector('body');
  body.addEventListener('keydown', function() {
      body.style.background = getRandomColor();
  });

  // 5. Change picture on click
  const mainImg = document.querySelector('.intro img');
  mainImg.addEventListener('click',function() {
    mainImg.setAttribute('src','img/denis-bayer-97398-unsplash.jpg');
  });

  // 6. 
