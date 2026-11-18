function toggleMode(){
    document.getElementById("body").classList.toggle("dark")
}

const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const darkBtn = document.querySelector('#dark-btn');


menuBtn.addEventListener('click', function () {
  menu.classList.toggle('show');
});
darkBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    darkBtn.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    darkBtn.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});


if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  darkBtn.textContent = 'Light Mode';
}