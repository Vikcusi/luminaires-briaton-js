import renderCards from "./renderCard.js"
import renderBasket from "./renderBasket.js"
import renderCardsInSlider from "./slider.js"

export async function loadCards() {
    try {
        const res = await fetch('./data/data.json');
        if (!res.ok) throw new Error('Fetch error: ' + res.status);
        const data = await res.json();
        renderCards(data);
        renderBasket(data);
        renderCardsInSlider(data);
    } catch (err) {
        console.error(err);
    }
}
