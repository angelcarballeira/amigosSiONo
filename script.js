const YesBtn = document.querySelector('#yes-btn');
const NoBtn = document.querySelector('#no-btn');

YesBtn.addEventListener('click', function () {
  alert('Siempre supe que aceptarias');
});

NoBtn.addEventListener('mouseover', function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);

  NoBtn.style.setProperty('top', randomY + '%');
  NoBtn.style.setProperty('left', randomX + '%');
  NoBtn.style.setProperty('transform', `translate(-${randomX}, -${randomY})`);
});
