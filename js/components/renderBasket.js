import  {getLinkEl} from "./fragments.js"
import  basketCard from "./basketCard.js"

// Рендер карзины (добавление и удаление)
export default function renderBasket(cards) {
    const basketContainer = document.querySelector('.basket');
    const basketList = document.querySelector('.basket__list');
    const basketButtonsAdd = document.querySelectorAll('.btn--icon');

    const basketLink = getLinkEl("basket__link btn", "#", "Перейти к оформлению");

    let counts = 0;
    const countEl = document.querySelector(".header__user-count");
    countEl.textContent = 0;

    basketButtonsAdd.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const card = cards[index];
            if (!card || !card.id) return;

            const basketCar = basketCard(card);
            basketList.appendChild(basketCar);

            const basketEmptyBlock = basketContainer.querySelector('.basket__empty-block');
            if (basketEmptyBlock && basketEmptyBlock.parentNode) {
                basketEmptyBlock.parentNode.removeChild(basketEmptyBlock);
            }

            if (!basketContainer.querySelector('.basket__link')) {
                basketContainer.appendChild(basketLink);
            }

            if (countEl) {
                counts += 1;
                countEl.textContent = String(counts);
            }

        });
    });
}