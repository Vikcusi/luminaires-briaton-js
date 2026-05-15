import { getContainerEl, getTitleEl, getTextEl, getIconEl, getButtonEl } from "./fragments.js";


//Добавила 2 иконки и поменяла текст
export default function renderModalSuccess() {
    const btnClose = getButtonEl("modal_btnClose", "");
    btnClose.style.cssText = 'position: absolute; top: 5px; right: 5px;  width: 25px; height: 24px; margin: 0; padding: 0; border: none; background-color: unset; align-items: center; justify-items: center;';

    const iconClose = getIconEl("modal_iconClose", "25", "24", '<use xlink:href="images/sprite.svg#icon-close"></use>')
    iconClose.style.cssText = 'width: 25px; height: 24px;';

    const iconCheckCircle = getIconEl("modal__iconCheck", "44", "44", '<use xlink:href="images/sprite.svg#icon-CheckCircle"></use>')
    iconCheckCircle.style.cssText = 'width: 44px; height: 44px;';

    const modalContainer = getContainerEl("modal");
    modalContainer.style.cssText = 'display: none; position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.5);'

    const modalContent = getContainerEl("modal___content");
    modalContent.style.cssText = 'background: #fff; padding: 40px; border-radius: 6px; max-width: 500px; width: 90%; position: relative;';

    modalContainer.addEventListener("click", e => { if (e.target === modalContainer) modalContainer.remove(); })

    const modalTitle = getTitleEl("modal__title", "Благодарим за обращение!");
    const modalText = getTextEl("modal__text", "Мы получили вашу заявку и свяжемся с вами в ближайшее время");

    btnClose.appendChild(iconClose);
    modalContent.append(btnClose, iconCheckCircle, modalTitle, modalText);

    btnClose.addEventListener("click", () => {
        modalContainer.remove();
    });

    modalContainer.appendChild(modalContent);
    return modalContainer;
}