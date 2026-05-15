
// Фильтрация 
export default function filterCards(cards) {
    const types = ['pendant', 'ceiling', 'overhead', 'point', 'nightlights'];

    const selected = types
        .map(id => document.getElementById(id))
        .filter(el => el && el.checked)
        .map(el => el.value);

    const instockFilterActive = document.getElementById('instock').checked;
    const allItemFilterActive = document.getElementById('all-item').checked;

    const filter = cards.filter(card => {
        const typesOfCard = Array.isArray(card.type) ? card.type : [card.type];

        const typeMatches = selected.length === 0
            ? true
            : typesOfCard.some(t => selected.includes(t));

        const instock = card.availability || {};
        const availableSomewhere = (instock.moscow || 0) > 0 || (instock.orenburg || 0) > 0 || (instock.saintPetersburg || 0) > 0;

        const instockOn = !instockFilterActive || availableSomewhere;
        const allItemOn = allItemFilterActive ? true : instockOn;

        return typeMatches && instockOn && allItemOn;
    })

    return filter;
}
