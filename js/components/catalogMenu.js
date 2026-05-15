export default function catalogMenu() {
    const catalogBtnOpen = document.querySelector('.header__catalog-btn');
    const catalogBtnClose = document.querySelector('.main-menu__close');
    const catalogMenu = document.querySelector('.header__catalog');

    //Открытие меню
    catalogBtnOpen.addEventListener('click', function (e) {
        catalogMenu.classList.add("main-menu--active");
    });

    //Закрытие меню
    catalogBtnClose.addEventListener('click', function (e) {
        catalogMenu.classList.remove("main-menu--active");
    });
}