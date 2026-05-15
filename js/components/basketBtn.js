export default function basketBtn() {
    const basketBtn = document.querySelector('.header__user-btn');
    const basket = document.querySelector('.basket');
    basketBtn.addEventListener('click', (e) => {
        basket.classList.toggle("basket--active");
    });
}