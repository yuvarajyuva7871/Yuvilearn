const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
