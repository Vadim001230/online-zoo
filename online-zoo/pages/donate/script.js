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

//donate amount

const range = document.getElementById('range');
const inputAmount = document.getElementById('input__amount');
const price = document.querySelectorAll('.donate__price');

range.addEventListener( 'click', (event) => {
  const element = event.target;
  const elementIndex = element.getAttribute('data-id');
  for (i = 0; i < price.length; i++) {
/*    price[i].style.color = '#333B41';*/
    if (price[i].getAttribute('data-id') == elementIndex ) {
/*      price[i].style.color = '#f9804b';*/
      inputAmount.value = element.getAttribute('data-value');
    }
  }
});

/*inputAmount.addEventListener('input', () => {
  const value = +inputAmount.value;
  const radioButtons = document.querySelectorAll( '.donate-range__input' );
  for (i = 0; i < price.length; i++ ) {
  price[ i ].classList.remove( 'donateSlider__pointText--active' );
    radioButtons[ i ].checked = false;
  }
  for ( i = 0; i < price.length; i++ ) {
    if ( value == radioButtons[ i ].getAttribute( 'data-value' ) ) {
      radioButtons[ i ].checked = true;
      price[ i ].classList.add( 'donateSlider__pointText--active' );
    }

});
*/

