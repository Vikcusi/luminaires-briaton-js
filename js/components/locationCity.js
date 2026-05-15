export default function locationCity() {
    const locationCityBtn = document.querySelector('.location__city');
    const locationCityText = document.querySelector('.location__city-name');
    const locationSublinkBtn = document.querySelectorAll('.location__sublink');

    //Меню выбора города
    locationCityBtn.addEventListener('click', function (e) {
        locationCityBtn.classList.toggle("location__city--active");
    });

    locationSublinkBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const newCity = btn.textContent.trim();
            if (newCity) {
                locationCityText.textContent = newCity;
            };
            locationCityBtn.classList.remove("location__city--active");
        });
    })
}