'use strict';

const play = document.querySelector('.play');
const featuresButtons = document.querySelector('.features__buttons');

play.addEventListener('click', () => {
  const playCircle = document.querySelector('.play__circle');
  const playWidth = play.offsetWidth;
  const playHeight = play.offsetHeight;

  playCircle.hidden = true;

  play.insertAdjacentHTML(
    `beforeend`,
    `<iframe id="dad" width="${playWidth}" height="${playHeight}"
        src="https://www.youtube.com/embed/duvlWEJJmU0?autoplay=1&start=4"
        title="YouTube video player" frameborder="1" allow="accelerometer;
        clipboard-write; encrypted-media; gyroscope;
        picture-in-picture"></iframe>`,
  );
  play.insertAdjacentHTML('afterbegin', '<div class="close"></div>');

  const close = document.querySelector('.close');

  close.addEventListener('click', (clickEvent) => {
    clickEvent.stopPropagation();
    document.querySelector('#dad').remove();
    playCircle.hidden = false;
    close.remove();
  });
});

let count = 0;

featuresButtons.addEventListener('click', (clickEvent) => {
  const cards = [...document.querySelectorAll('.card')];

  cards[count].style.display = 'none';

  if (clickEvent.target.id === 'right') {
    count++;

    if (count === cards.length) {
      count = 0;
    }
  }

  if (clickEvent.target.id === 'left') {
    count--;

    if (count < 0) {
      count = cards.length - 1;
    }
  }
  cards[count].style.display = 'block';
});
