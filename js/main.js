import catalogMenu from "./components/catalogMenu.js"
import locationCity from "./components/locationCity.js";
import accordion from "./components/accordion.js";
import {loadCards} from "./components/loadCards.js";
import sendForm from "./components/sendForm.js"; // Исправила функцию
import basketBtn from "./components/basketBtn.js"; // Создала новую функцию 

window.addEventListener('DOMContentLoaded', () => {
    catalogMenu();
    locationCity();
    basketBtn();
    accordion();
    loadCards();
    sendForm();
});




