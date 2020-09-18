// Generalized selectors
const hamburger = document.querySelector('.hamburger');
const hamButton = document.querySelector('.ham-btn');
const primaryNav = document.querySelector('#primary-nav');
const galleryNav = primaryNav.querySelector('.gallery');
const homeNav = primaryNav.querySelector('.home');

// Page One selectors
const pageOne = document.querySelector('.page-1');
const collapseButton = document.querySelector('.collapse-btn');

// Page Two selectors
const pageTwo = document.querySelector('.page-2');
const viewGalleryButton = document.querySelector('.btn.btn-View-Gallery');
const goBackButton = document.querySelector('.btn.btn-Go-Back');

// Page Three selectors
const pageThree = document.querySelector('.page-3');
const backHomeButtons = document.querySelectorAll('.go-back-btn');

function checkActiveForPageThree () {
  if (pageThree.classList[2] === 'visible') {
    galleryNav.classList.add('active');
    homeNav.classList.remove('active');
  }
}

// Common events
hamButton.addEventListener('click', e => {
  hamButton.classList.toggle('ham-close');
  hamburger.classList.toggle('short');
  primaryNav.classList.toggle('open');
});

galleryNav.addEventListener('click', e => {
  if (pageThree.classList[2] !== 'visible') {
    if (pageTwo.classList[1] === 'visible') {
      pageTwo.className = pageTwo.className.replace('visible', 'hidden');
    } else {
      pageOne.className = pageOne.className.replace('visible', 'hidden');
    }
    pageThree.className = pageThree.className.replace('hidden', 'visible');
    galleryNav.classList.add('active');
    homeNav.classList.remove('active');
  }
});

// Collapse button on Page One
collapseButton.addEventListener('click', e => {
  pageOne.className = pageOne.className.replace('visible', 'hidden');
  pageTwo.className = pageTwo.className.replace('hidden', 'visible');
  checkActiveForPageThree();
});

// View Gallery button on Page Two
viewGalleryButton.addEventListener('click', e => {
  pageTwo.className = pageTwo.className.replace('visible', 'hidden');
  pageThree.className = pageThree.className.replace('hidden', 'visible');
  checkActiveForPageThree();
});

// Go back button on Page Two
goBackButton.addEventListener('click', e => {
  pageTwo.className = pageTwo.className.replace('visible', 'hidden');
  pageOne.className = pageOne.className.replace('hidden', 'visible');
  checkActiveForPageThree();
});

// Back buttons on Page Three
backHomeButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    pageThree.className = pageThree.className.replace('visible', 'hidden');
    pageOne.className = pageOne.className.replace('hidden', 'visible');

    homeNav.classList.add('active');
    galleryNav.classList.remove('active');
  });
});