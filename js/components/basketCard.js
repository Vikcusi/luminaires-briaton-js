import * as fragments from "./fragments.js";

// Рендер карточки в корзине
export default function basketCard(card) {
    const basketItem = fragments.getItemEl([], "basket__item");
    const basketImgConteiner = fragments.getContainerEl("basket__img");
    const basketImg = fragments.getImgEl("", card.image || '', "60", "60", "Фотография товара");

    const basketName = fragments.getTextEl("basket__name", card.name || '');
    const basketPrice = fragments.getTextEl("basket__price", card.price && card.price.new ? card.price.new : '');

    const basketBtnClose = fragments.getButtonEl("basket__item-close", "");
    const basketIconClose = fragments.getIconEl("main-menu__icon", "24", "25", '<use xlink:href="images/sprite.svg#icon-close"></use>');

    basketImgConteiner.appendChild(basketImg);
    basketBtnClose.append(basketIconClose);

    basketBtnClose.addEventListener('click', function () {
        const countEl = document.querySelector(".header__user-count");
        const basketList = document.querySelector('.basket__list');
        const basketContainer = basketList && basketList.parentNode;
        if (!basketList || !basketContainer) return;

        if (basketItem && basketItem.parentNode === basketList) {
            basketList.removeChild(basketItem);
        }

        if (countEl) {
            const current = parseInt(countEl.textContent, 10);
            const newVal = Number.isNaN(current) ? 0 : Math.max(0, current - 1);
            countEl.textContent = String(newVal);
        }

        if (basketList.children.length === 0) {
            let empty = basketContainer.querySelector('.basket__empty-block');
            if (!empty) {
                empty = document.createElement('div');
                empty.classList.add('basket__empty-block');
                empty.textContent = 'Корзина пока пуста';
            }

            if (!basketContainer.contains(empty)) {
                basketContainer.appendChild(empty);
            }

            const link = basketContainer.querySelector('.basket__link');
            if (link && link.parentNode) {
                link.parentNode.removeChild(link);
            }
        }
    });

    basketItem.append(basketImgConteiner, basketName, basketPrice, basketBtnClose);
    return basketItem;
};