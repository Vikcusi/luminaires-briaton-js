import * as fragments from "./fragments.js";

// Рендер одной карточки
export default function renderSingleCard(card, clsItem, clsBase, height) {
    const item = fragments.getItemEl(clsItem, clsBase);

    const productCard = fragments.getContainerEl("product-card");
    const productCardVisual = fragments.getContainerEl("product-card__visual");
    const productCardInfo = fragments.getContainerEl("product-card__info");

    const productCardImg = fragments.getImgEl("product-card__img", card.image || '', height, "290", card.name || 'Изображение товара');
    const productCardMore = fragments.getContainerEl("product-card__more");

    const productCardLinkIcon = fragments.getLinkEl("product-card__link btn btn--icon", "#", "");
    const productCardLinkSecondary = fragments.getLinkEl("product-card__link btn btn--secondary", "#", "");

    const btnTextIcon = fragments.getTextEl("btn__text", "В корзину");
    const iconBasket = fragments.getIconEl("", "24", "24", '<use xlink:href="images/sprite.svg#icon-basket"></use>');
    const btnTextSecond = fragments.getTextEl("btn__text", "Подробнее");

    const productCardTitle = fragments.getTitleEl("product-card__title", card.name || '');
    const productCardOld = fragments.getTextEl("product-card__old", "");
    const productCardOldNumber = fragments.getTextEl("product-card__old-number", card.price && card.price.old ? card.price.old : '');
    const productCardOldAdd = fragments.getTextEl("product-card__old-add", "₽");

    const productCardPrice = fragments.getTextEl("product-card__price", "");
    const productCardPriceNumber = fragments.getTextEl("product-card__price-number", card.price && card.price.new ? card.price.new : '');
    const productCardPriceAdd = fragments.getTextEl("product-card__price-add", "₽");

    const productCardTooltip = fragments.getContainerEl("product-card__tooltip tooltip");

    const tooltipBtn = fragments.getButtonEl("tooltip__btn", "Показать подсказку");
    const tooltipIcon = fragments.getIconEl("tooltip__icon", "5", "10", '<use xlink:href="images/sprite.svg#icon-i"></use>');

    const tooltipContent = fragments.getContainerEl("tooltip__content");
    const tooltipText = fragments.getTextEl("tooltip__text", "Наличие товара по городам:");
    const tooltipList = fragments.getListrEl("tooltip__list");


    const avail = card.availability || {};
    tooltipList.appendChild(fragments.createAvailItem('Москва', avail.moscow));
    tooltipList.appendChild(fragments.createAvailItem('Оренбург', avail.orenburg));
    tooltipList.appendChild(fragments.createAvailItem('Санкт-Петербург', avail.saintPetersburg));

    productCardLinkIcon.append(btnTextIcon, iconBasket);
    productCardLinkSecondary.appendChild(btnTextSecond);
    productCardMore.append(productCardLinkIcon, productCardLinkSecondary);
    productCardVisual.append(productCardImg, productCardMore);

    productCardOld.append(productCardOldNumber, productCardOldAdd);
    productCardPrice.append(productCardPriceNumber, productCardPriceAdd);

    tooltipBtn.appendChild(tooltipIcon);

    tooltipContent.append(tooltipText, tooltipList);
    productCardTooltip.append(tooltipBtn, tooltipContent);

    productCardInfo.append(productCardTitle, productCardOld, productCardPrice, productCardTooltip);
    productCard.append(productCardVisual, productCardInfo);
    item.appendChild(productCard);

    return item;
}