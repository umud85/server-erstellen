const gerichte = [
    {
        name: 'Roter Heringsalat',
        zutaten: [
            {zutat: 'Heringsfilets', menge: '2'},
            {zutat: 'Äpfel', menge: '1'},
            {zutat: 'Eier', menge: '2'},
            {zutat: 'Rote Beete', menge: '166 g'},
            {zutat: 'Zwiebeln', menge: '1'},
            {zutat: 'Gewürzgurken', menge: '4'},
            {zutat: 'Schmand', menge: '1/3 Becher'},
            {zutat: 'Saure Sahne', menge: '1/3 Becher'},
            {zutat: 'Naturjoghurt', menge: '1/3 Becher'},
            {zutat: 'Milch', menge: ''},
            {zutat: 'Zucker', menge: ''},
        ],
    },
    {   
        name: 'Rinderbraten mit Essig und Rahm',
        zutaten: [
            {zutat: 'Rinderbraten', menge: '800 g'},
            {zutat: 'Mehl', menge: '1 EL'},
            {zutat: 'Butterschmalz', menge: '3 EL'},
            {zutat: 'Zwiebel', menge: '1'},
            {zutat: 'Balsamico', menge: '50 ml'},
            {zutat: 'Fleischbrühe', menge: '200 ml'},
            {zutat: 'Sahne', menge: '250 ml'},
            {zutat: 'Salz', menge: ''},
            {zutat: 'Pfeffer', menge: ''},
        ],
    },
    {
        name: 'Schwäbischer Kartoffelsalat',
        zutaten: [
            {zutat: 'Kartoffeln', menge: '500 g'},
            {zutat: 'Zwiebeln', menge: '2'},
            {zutat: 'Senf', menge: '1 EL'},
            {zutat: 'Brühe', menge: '125 ml'},
            {zutat: 'Muskat', menge: ''},
            {zutat: 'Salz', menge: ''},
            {zutat: 'Pfeffer', menge: ''},
            {zutat: 'Weißweinessig' , menge: ''},
            {zutat: 'Öl', menge: ''},
        ],
    },
    {
        name: 'Selbstgemachtes Backtrennmittel',
        zutaten: [
            {zutat: 'Kokosfett', menge: '100 g'},
            {zutat: 'Mehl', menge: '100 g'},
            {zutat: 'Öl', menge: '100 ml'},
        ],
    },
    {
        name: 'Torta al cioccolato morbide',
        zutaten: [
            {zutat: 'Schokolade', menge: '200 g'},
            {zutat: 'Butter', menge: '100 g'},
            {zutat: 'Zucker', menge: '200 g'},
            {zutat: 'Mehl', menge: '2 EL'},
            {zutat: 'Eier', menge: '4'},
        ],
    }
];

export const getGerichte = () => {
    return gerichte;
}