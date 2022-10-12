//img///////////
/*alert('Если у вас есть возможность отложить проверку этой работы до вечера, буду очень благодарен!')*/
const mediaQuery1000 = window.matchMedia('(max-width: 1440px)'),
      mediaQuery640 = window.matchMedia('(max-width: 980px)'),
      mediaQuery320 = window.matchMedia('(max-width: 630px)'),
      petsLeftImg = document.getElementById("petsLeftImg"),
      petsRightImg = document.getElementById("petsRightImg"),
      backstageImg = document.getElementById("backstageImg");

if (mediaQuery1000.matches) {
   backstageImg.src = "../../assets/images/bamboo-cap1000.jpg";
   petsLeftImg.src = "../../assets/images/palm_foto1000.png";
}
if (mediaQuery640.matches) {
   petsLeftImg.src = "../../assets/images/palm_foto640.png";
}
if (mediaQuery320.matches) {
   petsLeftImg.src = "../../assets/images/palm_foto320.png";
   petsRightImg.src = "../../assets/images/strelitzia320.png";
}

//burger///////////
const blackout = document.querySelector('.blackout'),
      burger = document.querySelector('.burger'),
      body = document.querySelector('body'),
      navList = document.querySelector('.nav__list'),
      navLinks = document.querySelectorAll('.nav__link');

function openMenu() {
   blackout.classList.toggle('display-block');
   burger.classList.toggle('burger-rotate');
   navList.classList.toggle('nav__list-active');
   body.classList.toggle('not-scroll');
   for (let navLink of navLinks) {
      navLink.classList.toggle('nav__link-active');
   }
}

function closeMenu() {
   blackout.classList.remove('display-block');
   burger.classList.remove('burger-rotate');
   navList.classList.remove('nav__list-active');
   body.classList.remove('not-scroll');
}

burger.addEventListener('click', openMenu);
blackout.addEventListener('click', closeMenu);
for (let navLink of navLinks) {
   navLink.addEventListener('click', closeMenu);
}

// testimonials slider///////////
const testimonialsContent= document.querySelector('.testimonials__content');
const testimonialsSlidebar = document.querySelector('.testimonials__slidebar');

testimonialsSlidebar.addEventListener('input', e => {
   if (mediaQuery1000.matches) {
      testimonialsContent.style.transform = `translateX(-${(testimonialsSlidebar.value - 1) * 322}px)`;
   } else {
      testimonialsContent.style.transform = `translateX(-${(testimonialsSlidebar.value - 1) * 297}px)`;
   }
});

//popap///////////
const popap = document.querySelector('.popap'),
      popapCard = document.querySelector('.popap__card'),
      popapClose = document.querySelector('.popap__close'),
      testimonialsCards = document.querySelectorAll('.testimonials__card');
      
const openPopap = function () {
   popap.classList.remove('popap-hidden');
   body.classList.add('not-scroll');
};

const closePopap = function (e) {
   if (e.target.className === 'popap__close') {
      popap.classList.add('popap-hidden');
   } else if (popapClose.classList.contains('active-btn')) {
      popap.classList.add('popap-hidden');
   }
   body.classList.remove('not-scroll');
};

function leavePopap() {
   popapClose.classList.add('active-btn');
}
function pointPopap() {
   popapClose.classList.remove('active-btn');
}

for (let testimonialsCard of testimonialsCards) {
   testimonialsCard.addEventListener('click', openPopap);
}
popapClose.addEventListener('click', closePopap);
popap.addEventListener('click', closePopap);
popapCard.addEventListener('mouseleave', leavePopap);
popapCard.addEventListener('mouseenter', pointPopap);

const insertContentToModal = function (e) {
  if (e.target.className === 'testimonials__card') {
    popapCard.innerHTML = `${e.target.innerHTML}`;
    console.log(e.target.innerHTML)
  } else if (e.target.className === 'testimonials__photo') {
    popapCard.innerHTML = `${e.target.parentElement.parentElement.innerHTML}`;
    console.log(e.target.parentElement.parentElement.innerHTML)
  } else {
    popapCard.innerHTML = `${e.target.parentElement.innerHTML}`;
   console.log(e.target.parentElement.innerHTML)
  }
};
/*
const changeClassesInsertedContent = function () {
  for (let val of popapCard.childNodes) {
    if (val.className) {
      val.className = `modal${val.className.slice(val.className.indexOf('_'))}`;
    }
  }
};

for (let i = 0; i < testimonialsCard.length; i++) {
  testimonialsCard[i].addEventListener('click', e => {
    insertContentToModal(e);
    changeClassesInsertedContent();
    openModal();
  });
}

popap.addEventListener('click', e => {
  if (e.target.className === 'modal' || e.target.className === 'modal__close') {
    closeModal();
  }
});*/

