import renderSingleCard from "./renderSingleCard.js"

// swiper.js
export default function renderCardsInSlider(cards) {
    const dayProductsList = document.querySelector('.day-products__list');
    if (!dayProductsList) return;

    cards.forEach(card => {
        if (card.goodsOfDay) {
            const cardEl = renderSingleCard(card,['day-products__item', 'swiper-slide'], "day-products", "344");
            if (!cardEl) return;

            const productCardEl = cardEl.classList.contains('product-card')
                ? cardEl
                : cardEl.querySelector('.product-card');

            if (productCardEl) {
                productCardEl.classList.add('product-card--small');
            } else {
                cardEl.classList.add('product-card--small');
            }

            dayProductsList.appendChild(cardEl);
        }

    });

    slider();
}

function slider() {
    const root = document.querySelector(".day-products__slider");
    if (!root) return null;

    const top = root.closest('.day-products')?.querySelector('.day-products__top');
    const btnPrev = top.querySelector('.day-products__navigation-btn--prev');
    const btnNext = top.querySelector('.day-products__navigation-btn--next');

    const swiper = new Swiper(root, {
        spaceBetween: 16,
        slidesPerView: 4,
        navigation: {
            nextEl: btnNext,
            prevEl: btnPrev,
        },
        wrapperClass: 'swiper-wrapper',
        slideClass: 'day-products__item',
        breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 8 },
            576: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
        },
    })

    return swiper;
}