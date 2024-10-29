// loadNavbar.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("../footer-2.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-principal").innerHTML = data;
    })
    .catch(error => console.error("Error al cargar el footer:", error));
});
