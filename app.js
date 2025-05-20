/*Carrossel*/ 

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

/*Dark | Light Mode*/

const btnDark = document.getElementById('btnDark');
const btnLight = document.getElementById('btnLight');

btnDark.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  btnDark.classList.remove('show_icon');
  btnLight.classList.add('show_icon');
});

btnLight.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  btnLight.classList.remove('show_icon');
  btnDark.classList.add('show_icon');
});

/* Botão de inicio */

const upButton = document.getElementById('up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    upButton.classList.add('show');
  } else {
    upButton.classList.remove('show');
  }
});

upButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* Numeros */

const counters = document.querySelectorAll('.numbers h1');
let animated = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 60;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      animateCounters();
      animated = true; 
    }
  });
}, {
  threshold: 0.5 
});

observer.observe(document.querySelector('.numbers'));
