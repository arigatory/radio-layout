const width = document.body.clientWidth;
let numberOfCards = 2;
var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: numberOfCards,
  perMove: 1,
} );

splide.mount();