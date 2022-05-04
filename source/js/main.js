import Swiper from './vendor';

const priceButtons = document.querySelectorAll('.tabs__link');
const priceCards = document.querySelectorAll('.price__list');
const sliderCoaches = document.querySelector('.slider');
const prevButtonCoaches = document.querySelector('.coaches__button-left');
const nextButtonCoaches = document.querySelector('.coaches__button-right');
const sliderFeedback = document.querySelector('.feedback__slider');
const prevButtonFeedback = document.querySelector('.feedback__button-left');
const nextButtonFeedback = document.querySelector('.feedback__button-right');

const isPriceElements = priceButtons && priceCards;
const isCoachesElements = sliderCoaches && prevButtonCoaches && nextButtonCoaches;
const isFeedbackElements = sliderFeedback && prevButtonFeedback && nextButtonFeedback;

const activatePrice = () => {
  priceCards.forEach((card) => {
    card.classList.add('price__list--hidden');
  });

  priceButtons[0].classList.add('tabs__link--active');
  priceCards[0].classList.remove('price__list--hidden');
};

const showCards = (index) => {
  priceButtons.forEach((tab) => {
    tab.classList.remove('tabs__link--active');
  });
  priceCards.forEach((card) => {
    card.classList.add('price__list--hidden');
  });

  priceButtons[index].classList.add('tabs__link--active');
  priceCards[index].classList.remove('price__list--hidden');
};

const onClickTab = (tab, index) => {
  tab.addEventListener('click', (evt) => {
    evt.preventDefault();
    showCards(index);
  });
};

const selectPriceButtons = () => {
  priceButtons.forEach((button, index) => {
    onClickTab(button, index);
  });
};

if (isPriceElements) {
  activatePrice();
  selectPriceButtons();
}

const onClickPrevButton = (button, swiper) => {
  button.addEventListener('click', () => {
    swiper.slidePrev();
  });
};

const onClickNextButton = (button, swiper) => {
  button.addEventListener('click', () => {
    swiper.slideNext();
  });
};

if (isCoachesElements) {
  const swiperCoaches = new Swiper(sliderCoaches, {
    loop: true,

    navigation: {
      nextEl: nextButtonCoaches,
      prevEl: prevButtonCoaches,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
        simulateTouch: false,
      },
    },
  });

  onClickPrevButton(prevButtonCoaches, swiperCoaches);
  onClickNextButton(nextButtonCoaches, swiperCoaches);
}

if (isFeedbackElements) {
  const swiperFeedback = new Swiper(sliderFeedback, {
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: false,
    navigation: {
      nextEl: nextButtonFeedback,
      prevEl: prevButtonFeedback,
    },
  });

  onClickPrevButton(prevButtonFeedback, swiperFeedback);
  onClickNextButton(nextButtonFeedback, swiperFeedback);
}
