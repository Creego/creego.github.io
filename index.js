var body = document.querySelector('body');
var toggle = document.querySelector('.toggle');

if (body && toggle) {
  toggle.addEventListener('change', e => {
    body.classList.toggle('theme-dark');
  });
}