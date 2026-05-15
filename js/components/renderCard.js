import renderSingleCard from "./renderSingleCard.js"
import filterCards from "./filterCards.js"
import sortCards from "./sortCards.js"
import {updateTypeCounts} from "./updateTypeCounts.js"

export default function renderCards(cards) {
    const catalogList = document.querySelector('.catalog__list');
    if (!catalogList) return;

    function updateList(items) {
        catalogList.innerHTML = '';
        const frag = document.createDocumentFragment();
        items.forEach(item => frag.appendChild(renderSingleCard(item, [], "catalog", "436")));
        catalogList.appendChild(frag);
    }

    updateList(cards);
    updateTypeCounts(cards);

    let currentCard = cards;

    const filters = document.querySelectorAll('.custom-checkbox__field, #instock, #all-item');
    filters.forEach(f => f.addEventListener('change', () => {
        currentCard = filterCards(cards);

        const selectSort = document.querySelector('.catalog__sort-select');
        if (selectSort.value !== '') {
            currentCard = sortCards(currentCard, selectSort.value);
        }
        updateList(currentCard);
        updateTypeCounts(currentCard);
    }));


    const selectSort = document.querySelector('.catalog__sort-select');
    selectSort.addEventListener('change', function (e) {
        currentCard = filterCards(cards);

        currentCard = sortCards(currentCard, e.target.value);
        updateList(currentCard);
        updateTypeCounts(currentCard);
    });
}