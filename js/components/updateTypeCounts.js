// Отображение колличества товараов
export function updateTypeCounts(cards) {
    const types = ['pendant', 'ceiling', 'overhead', 'point', 'nightlights'];

    types.forEach(type => {
        const label = document.querySelector(`label[for="${type}"]`);
        if (!label) return;

        const countEl = label.querySelector('.custom-checkbox__count');
        if (countEl) {
            countEl.textContent = '0';
        }
    });

    const counts = types.reduce((acc, t) => {
        acc[t] = 0;
        return acc;
    }, {});

    cards.forEach(card => {
        if (!card) return;
        const t = card.type;

        if (Array.isArray(t)) {
            t.forEach(v => {
                if (typeof v === 'string' && counts.hasOwnProperty(v)) {
                    counts[v]++;
                }
            });
        } else if (typeof t === 'string' && counts.hasOwnProperty(t)) {
            counts[t]++;
        }
    });

    types.forEach(type => {
        const label = document.querySelector(`label[for="${type}"]`);
        if (!label) return;

        const countEl = label.querySelector('.custom-checkbox__count');
        if (countEl) {
            countEl.textContent = String(counts[type]);
        }
    });

};