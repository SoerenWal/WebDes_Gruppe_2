const pickers = document.querySelectorAll(".colorpicker");
const ausblick = document.getElementById("ausblick-wahl");

pickers.forEach(picker => {
    picker.addEventListener("click", () => {
        // optional: nur ein aktiver gleichzeitig
        pickers.forEach(p => p.classList.remove("active"));

        // aktuelles aktivieren
        picker.classList.add("active");
        ausblick.src = picker.dataset.image;
    });
});


const canvas = document.getElementById("abwaerts_logo");
const ctx = canvas.getContext("2d");

canvas.width = 1050;
canvas.height = 400;

// Hintergrund (dunkel)
ctx.fillStyle = "#050505"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Schriftstil (fett + geneigt)
ctx.fillStyle = "#c40000"; // kräftiges Rot
ctx.font = "bold italic 120px Arial Black, Impact, sans-serif";
ctx.textAlign = "center";

// Text zeichnen
const text = "ABWÄRTS";
const x = canvas.width / 2;
const y = canvas.height / 2 + 20;

ctx.fillText(text, x, y);

// Unterstrich (rote Linie)
const metrics = ctx.measureText(text);
const textWidth = metrics.width;

ctx.strokeStyle = "#c40000";
ctx.lineWidth = 8;

// Linie etwas unterhalb des Textes
ctx.beginPath();
ctx.moveTo(x - textWidth / 2, y + 20);
ctx.lineTo(x + textWidth / 2, y + 20);
ctx.stroke();

const karte = document.getElementById("karte");
const button = document.getElementById("home-btn")

route.forEach(route => {
    button.addEventListener("click", () => {
        karte.src = "assets/karte_mit_route.svg";
    })});
