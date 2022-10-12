//img
alert('Осталось немного доделать, если у вас есть возможность отложить проверку до вечера, буду очень благодарен')
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

//burger
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




/*//range
if (document.querySelector("#range")) {
    document.querySelector("#range").addEventListener('input', (e) => {
        let value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
        e.target.style.background = 'linear-gradient(to right, #F9804B 0%, #F9804B ' + value + '%,  #F5F7F6 ' + value + '%,  #F5F7F6 100%)'
    })
}*/