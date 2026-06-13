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
