const bindScrollEvents = () => {
  const arrowElements = document.querySelectorAll('.arrow-element');
  arrowElements[0].addEventListener('click', () => {
    window.scroll({
      top: 550,
      left: 0,
      behavior: 'smooth'
    });
  });

  arrowElements[2].addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });

}

window.onload = () => {
  bindScrollEvents();
}