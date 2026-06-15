const canvas = document.getElementById('sprintCanvas');
const design = canvas.getContext('2d');
const startBtn = document.getElementById('start-sim-btn');
const strecke = document.getElementById('distance-select');

const laneInputs = [
    document.getElementById('lane1'),
    document.getElementById('lane2'),
    document.getElementById('lane3'),
    document.getElementById('lane4')
];

canvas.width = 800;
canvas.height = 400;

let animation;
let startZeit = null;

let rennDaten = {
    zielX: 700,
    zielZeitenMs: [15000, 15000, 15000, 15000]
};

function zeichneFrame(aktuelleUhrzeit) {
    if (!startZeit) startZeit = aktuelleUhrzeit;
    const vergangeneZeit = aktuelleUhrzeit - startZeit;

    design.clearRect(0, 0, canvas.width, canvas.height);

    const startX = 100;
    const streckenLaenge = rennDaten.zielX - startX;
    const bahnMitten = [125, 175, 225, 275];

    let alleImZiel = true;

    for (let i = 0; i < 4; i++) {
        const zielZeitMs = rennDaten.zielZeitenMs[i];
        let fortschritt = vergangeneZeit / zielZeitMs;

        if (fortschritt >= 1.0) {
            fortschritt = 1.0;
        } else {
            alleImZiel = false;
        }

        const aktuellesX = startX + (streckenLaenge * fortschritt);
        const aktuellesY = bahnMitten[i];

        design.beginPath();
        design.arc(aktuellesX, aktuellesY, 10, 0, Math.PI * 2);
        design.fillStyle = '#CCFF00';
        design.fill();
        design.closePath();
    }

    if (!alleImZiel) {
        animation = requestAnimationFrame(zeichneFrame);
    }
}

startBtn.addEventListener('click', () => {
    if (animation) cancelAnimationFrame(animation);
    startZeit = null;

    const ausgewaehlteDistanz = strecke.value;
    if (ausgewaehlteDistanz === "30") {
        rennDaten.zielX = 280;
    } else if (ausgewaehlteDistanz === "60") {
        rennDaten.zielX = 460;
    } else {
        rennDaten.zielX = 700;
    }

    for (let i = 0; i < 4; i++) {
        let zielZeitSekunden = parseFloat(laneInputs[i].value);
        if (isNaN(zielZeitSekunden) || zielZeitSekunden <= 0) {
            zielZeitSekunden = 15.0;
        }
        rennDaten.zielZeitenMs[i] = zielZeitSekunden * 1000;
    }

    animation = requestAnimationFrame(zeichneFrame);
});