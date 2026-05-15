import renderModalSuccess from "./renderModalSuccess.js"

//Переместила малидацию сюда из мейн 

const form = document.querySelector('.questions__form');

const validator = new window.JustValidate(form);
validator
    .addField((document.querySelector('#name')), [
        {
            rule: 'required',
            errorMessage: 'Введите имя',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимум 3 символа'
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Максимум 15 символов'
        },
    ])
    .addField((document.querySelector('#email')), [
        {
            rule: 'required',
            errorMessage: 'Введите почту',
        },
        {
            rule: 'email',
            errorMessage: 'Некорректный email',
        },
    ])
    .addField((document.querySelector('#agree')),
        [
            {
                rule: 'required',
                errorMessage: 'Согласие обязательно',
            },
        ],
    );



// Перенесла рендер формы сюда    
export default function sendForm() {
    const form = document.querySelector(".questions__form");
    form.addEventListener('submit', handleFormSubmit);
}    

function handleFormSubmit(e) {
    validator.onSuccess(async (e) => {
        e.preventDefault();
        try {
            await SendToServer(e.target);
            e.target.reset();
        } catch (err) {
            console.error(err);
        }
    });
}

async function SendToServer(formEl) {
    try {
        const res = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: new FormData(formEl),
        });
        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();
        const modal = renderModalSuccess();
        document.querySelector(".questions__wrapper").appendChild(modal);
        modal.style.display = "flex";
        return data;
    } catch (err) {
        console.error(err);

        const modalError = renderModalSuccess();
        document.querySelector(".questions__wrapper").appendChild(modalError);
        modalError.style.display = "flex";
    }
}