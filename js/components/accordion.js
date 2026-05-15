export default function accordion() {
    const accordionBtns = document.querySelectorAll('.accordion__btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.classList.contains('accordion__btn--active')) {
                accordionBtns.forEach(b => b.classList.remove('accordion__btn--active'));
            }

            btn.classList.toggle('accordion__btn--active');
        });
    })
}