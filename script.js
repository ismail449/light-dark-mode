const toggleSwitch = document.querySelector('input[type="checkbox"]');
const root = document.documentElement;
const themeText = document.querySelector('.toggle-text');
const themeIcon = document.querySelector('.fa-solid');
const image_1 = document.getElementById('image1');
const image_2 = document.getElementById('image2');
const image_3 = document.getElementById('image3');
const nav = document.getElementById('nav');
const textBox = document.getElementById('text-box');
const checkbox = document.getElementById('checkbox');

const changeImage = (theme) => {
  image_1.src = `img/undraw_proud_coder_${theme}.svg`;
  image_2.src = `img/undraw_conceptual_idea_${theme}.svg`;
  image_3.src = `img/undraw_feeling_proud_${theme}.svg`;
};

const darkTheme = () => {
  themeIcon.classList.replace('fa-sun', 'fa-moon');
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  changeImage('dark');
  localStorage.setItem('theme', 'dark');
};
const lightTheme = () => {
  themeIcon.classList.replace('fa-moon', 'fa-sun');
  changeImage('light');
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  localStorage.setItem('theme', 'light');
};

const switchTheme = (checked) => {
  root.setAttribute('data-theme', checked ? 'dark' : 'light');
  themeText.textContent = checked ? 'Dark Mode' : 'Light Mode';
  if (checked) {
    darkTheme();
  } else {
    lightTheme();
  }
};

const onLoad = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    switchTheme(true);
    checkbox.checked = true;
  } else {
    switchTheme(false);
    checkbox.checked = false;
  }
};

toggleSwitch.addEventListener('change', (e) => switchTheme(e.target.checked));
onLoad();
