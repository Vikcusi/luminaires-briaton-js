// Сортировка
export default function sortCards(cards) {
    const select = document.querySelector('.catalog__sort-select');
    if (!select) return cards;

    const field = select.value;
    const sorted = cards.slice().sort((a, b) => {
        if (field === 'price-min') {
            return Number(a.price.new) - Number(b.price.new);
        }
        if (field === 'price-max') {
            return Number(b.price.new) - Number(a.price.new);
        }
        if (field === 'rating-max') {
            return Number(b.rating) - Number(a.rating);
        }
        return 0;
    });

    return sorted;
}