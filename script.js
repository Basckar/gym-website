'use strict';
const menuIcone = document.querySelector('#menu');
const ELmenubar = document.querySelector('.menubar');
const overlay = document.querySelector('.overlay');

const closeModal = function () {
  ELmenubar.style.animation = 'slideOutToLeft 1s ease-in forwards';
  overlay.classList.add('hidden');
  setTimeout(() => {
    ELmenubar.classList.add('hidden');
  }, 1000);
};

const openModal = function () {
  if (window.innerWidth <= 480) {
    ELmenubar.style.animation = 'slideInFromLeft 1s ease-in forwards';
    ELmenubar.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};
window.addEventListener('resize', () => {
  if (window.innerWidth > 480) {
    closeModal();
  }
});

menuIcone.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

//slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      s.classList.remove('active');
    });
    slides[slide].classList.add('active');
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();

//shop-slider

const shopSlider = function () {
  const shopSlides = document.querySelectorAll('.shop-slide');
  const btnLeft = document.querySelector('.shop-shop-slider__btn--left');
  const btnRight = document.querySelector('.shop-shop-slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curshopSlide = 0;
  const maxshopSlide = shopSlides.length;

  // Functions
  const createDots = function () {
    shopSlides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-shop-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (shopSlide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-shop-slide="${shopSlide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToshopSlide = function (shopSlide) {
    shopSlides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - shopSlide)}%)`)
    );
  };

  // Next shop-slide
  const nextshopSlide = function () {
    if (curshopSlide === maxshopSlide - 1) {
      curshopSlide = 0;
    } else {
      curshopSlide++;
    }

    goToshopSlide(curshopSlide);
    activateDot(curshopSlide);
  };

  const prevshopSlide = function () {
    if (curshopSlide === 0) {
      curshopSlide = maxshopSlide - 1;
    } else {
      curshopSlide--;
    }
    goToshopSlide(curshopSlide);
    activateDot(curshopSlide);
  };

  const init = function () {
    goToshopSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextshopSlide);
  btnLeft.addEventListener('click', prevshopSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevshop - slide();
    e.key === 'ArrowRight' && nextshop - slide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current shop-slide when clicking on a shop-slide
      // const { shop-slide } = e.target.dataset;

      curshopSlide = Number(e.target.dataset.shopSlide);
      goToshopSlide(curshopSlide);
      activateDot(curshopSlide);
    }
  });
};
shopSlider();

const CoachGym = function () {
  const Coachs = document.querySelectorAll('.Coach');
  const coachdotContainer = document.querySelector('.coachDots');

  let curCoach = 0;
  const maxCoach = Coachs.length;

  const createcoachDots = function () {
    Coachs.forEach((_, i) => {
      coachdotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="coachDots__dot" data-coach="${i}"></button>`
      );
    });
  };

  const activateDot = function (CoachIndex) {
    document
      .querySelectorAll('.coachDots__dot')
      .forEach(dot => dot.classList.remove('coachDots__dot--active'));

    const activeDot = document.querySelector(
      `.coachDots__dot[data-Coach="${CoachIndex}"]`
    );
    if (activeDot) activeDot.classList.add('coachDots__dot--active');
  };

  const goToCoach = function (CoachIndex) {
    Coachs.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - CoachIndex)}%)`;
    });
  };

  const nextCoach = function () {
    curCoach = (curCoach + 1) % maxCoach;
    goToCoach(curCoach);
    activateDot(curCoach);
  };

  const prevCoach = function () {
    curCoach = (curCoach - 1 + maxCoach) % maxCoach;
    goToCoach(curCoach);
    activateDot(curCoach);
  };

  const init = function () {
    Coachs.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * i}%)`;
    });
    createcoachDots();
    activateDot(curCoach);
  };
  init();

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevCoach();
    if (e.key === 'ArrowRight') nextCoach();
  });

  coachdotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('coachDots__dot')) {
      const clickedIndex = Number(e.target.dataset.coach); // اصلاح این خط
      if (!isNaN(clickedIndex)) {
        curCoach = clickedIndex;
        goToCoach(curCoach);
        activateDot(curCoach);
      }
    }
  });
};
CoachGym();

// passesGym
const passesGym = function () {
  const passess = document.querySelectorAll('.passes');
  const btnLeft = document.querySelector('.passesGym__btn--left');
  const btnRight = document.querySelector('.passesGym__btn--right');
  const passesdotContainer = document.querySelector('.passesDots');

  let curpasses = 0;
  const maxpasses = passess.length;

  // Functions
  const createpassesDots = function () {
    passess.forEach(function (_, i) {
      passesdotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="passesDots__dot" data-passes="${i}"></button>`
      );
    });
  };

  const activateDot = function (passes) {
    document
      .querySelectorAll('.passesDots__dot')
      .forEach(dot => dot.classList.remove('passesDots__dot--active'));

    document
      .querySelector(`.passesDots__dot[data-passes="${passes}"]`)
      .classList.add('passesDots__dot--active');
  };

  const goTopasses = function (passes) {
    passess.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - passes)}%)`)
    );
  };

  // Next passes
  const nextpasses = function () {
    if (curpasses === maxpasses - 1) {
      curpasses = 0;
    } else {
      curpasses++;
    }

    goTopasses(curpasses);
    activateDot(curpasses);
  };

  const prevpasses = function () {
    if (curpasses === 0) {
      curpasses = maxpasses - 1;
    } else {
      curpasses--;
    }
    goTopasses(curpasses);
    activateDot(curpasses);
  };

  const init = function () {
    goTopasses(0);
    createpassesDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextpasses);
  btnLeft.addEventListener('click', prevpasses);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevpasses();
    e.key === 'ArrowRight' && nextpasses();
  });

  passesdotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('passesDots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current passes when clicking on a passes
      // const { passes } = e.target.dataset;

      curpasses = Number(e.target.dataset.passes);
      goTopasses(curpasses);
      activateDot(curpasses);
    }
  });
};
passesGym();

//peples
const peples = function () {
  const pepleAll = document.querySelectorAll('.peple');
  const btnLeft = document.querySelector('.peples__btn--left');
  const btnRight = document.querySelector('.peples__btn--right');
  const counter = document.querySelector('.person-comment > div'); // بخش شمارنده

  let curPeple = 0;
  const maxPeple = pepleAll.length;

  // نمایش اسلاید و آپدیت شمارنده
  const goToPeple = function (peple) {
    pepleAll.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - peple)}%)`)
    );
    updateCounter(); // آپدیت شمارنده بعد از حرکت
  };

  // آپدیت شمارنده
  const updateCounter = function () {
    counter.innerHTML = `<span>${
      curPeple + 1
    }</span> <span>/</span> <span>${maxPeple}</span>`;
  };

  // حرکت به اسلاید بعدی
  const nextPeple = function () {
    curPeple = (curPeple + 1) % maxPeple;
    goToPeple(curPeple);
  };

  // حرکت به اسلاید قبلی
  const prevPeple = function () {
    curPeple = (curPeple - 1 + maxPeple) % maxPeple;
    goToPeple(curPeple);
  };

  // شروع اولیه
  const init = function () {
    goToPeple(0);
  };
  init();

  // هندل کلیک و کیبورد
  btnRight.addEventListener('click', nextPeple);
  btnLeft.addEventListener('click', prevPeple);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevPeple();
    if (e.key === 'ArrowRight') nextPeple();
  });
};

peples();

// blogGym
const blogGym = function () {
  const blogs = document.querySelectorAll('.blog');
  const btnLeft = document.querySelector('.blogGym__btn--left');
  const btnRight = document.querySelector('.blogGym__btn--right');
  const blogdotContainer = document.querySelector('.blogDots');

  let curblog = 0;
  const maxblog = blogs.length;

  // Functions
  const createblogDots = function () {
    blogs.forEach(function (_, i) {
      blogdotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="blogDots__dot" data-blog="${i}"></button>`
      );
    });
  };

  const activateDot = function (blog) {
    document
      .querySelectorAll('.blogDots__dot')
      .forEach(dot => dot.classList.remove('blogDots__dot--active'));

    document
      .querySelector(`.blogDots__dot[data-blog="${blog}"]`)
      .classList.add('blogDots__dot--active');
  };

  const goToblog = function (blog) {
    blogs.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - blog)}%)`)
    );
  };

  // Next blog
  const nextblog = function () {
    if (curblog === maxblog - 1) {
      curblog = 0;
    } else {
      curblog++;
    }

    goToblog(curblog);
    activateDot(curblog);
  };

  const prevblog = function () {
    if (curblog === 0) {
      curblog = maxblog - 1;
    } else {
      curblog--;
    }
    goToblog(curblog);
    activateDot(curblog);
  };

  const init = function () {
    goToblog(0);
    createblogDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextblog);
  btnLeft.addEventListener('click', prevblog);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevblog();
    e.key === 'ArrowRight' && nextblog();
  });

  blogdotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('blogDots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current blog when clicking on a blog
      // const { blog } = e.target.dataset;

      curblog = Number(e.target.dataset.blog);
      goToblog(curblog);
      activateDot(curblog);
    }
  });
};
blogGym();
const checkbox = document.getElementById('check');
const priceElements = document.querySelectorAll('#price');

checkbox.addEventListener('change', () => {
  priceElements.forEach(el => {
    const text = el.textContent;
    const match = text.match(/(\d+)/); // پیدا کردن عدد
    if (match) {
      const basePrice = parseInt(match[1]);
      const finalPrice = checkbox.checked ? basePrice * 2 : basePrice / 2;
      el.innerHTML = `${finalPrice}$ <span>/MD</span>`;
    }
  });
});
