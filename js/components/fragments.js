//Фрагменты
function createAvailItem(cityName, count) {
    const li = document.createElement("li");
    li.classList.add('tooltip__item');

    const name = document.createElement("span");
    name.classList.add('tooltip__text');
    name.textContent = cityName + ': ';

    const cnt = document.createElement("span");
    cnt.classList.add('tooltip__count');
    cnt.textContent = (typeof count === 'number') ? String(count) : '—';
    li.appendChild(name);
    li.appendChild(cnt);
    return li;
}

function getContainerEl(cl) {
    const divEl = document.createElement("div");
    divEl.className = cl;

    return divEl;
}

function getListrEl(cl) {
    const listEl = document.createElement("ul");
    listEl.classList.add(cl);

    return listEl;
}

function getItemEl(cls = [], clsBase = '') {
    const itemEl = document.createElement("li");
    
    if (Array.isArray(cls) && cls.length) {
       itemEl.classList.add(...cls); 
    }

    if (clsBase) {
        itemEl.classList.add(clsBase);
    }

    return itemEl;
}

function getImgEl(cl, src, height, width, alt) {
    const imgEl = document.createElement("img");
    imgEl.className = cl;
    imgEl.src = src;
    imgEl.height = height;
    imgEl.width = width;
    imgEl.alt = alt;

    return imgEl;
}

function getLinkEl(cl, href, text) {
    const linkEl = document.createElement("a");
    linkEl.className = cl;
    linkEl.href = href;
    linkEl.textContent = text;

    return linkEl;
}

function getTextEl(cl, text) {
    const textEl = document.createElement("span");
    textEl.classList.add(cl);
    textEl.textContent = text;

    return textEl;
}

//Поменяла функцию туутааа иконки
function getIconEl(cl, height, width, use) {
    const iconEl = document.createElement("svg");
    iconEl.className = cl;
    iconEl.setAttribute("height", height)
    iconEl.setAttribute("width", width)
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.innerHTML = use;

    return iconEl;
}

function getTitleEl(cl, text) {
    const titleEl = document.createElement("h2");
    titleEl.classList.add(cl);
    titleEl.textContent = text;

    return titleEl;
}

function getButtonEl(cl, text) {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add(cl);
    buttonEl.setAttribute('aria-label', text);

    return buttonEl;
}

export {
    createAvailItem,
    getContainerEl,
    getListrEl,
    getItemEl,
    getImgEl,
    getLinkEl,
    getTextEl,
    getIconEl,
    getTitleEl,
    getButtonEl,
}