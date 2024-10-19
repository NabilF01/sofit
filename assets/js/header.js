// Fonction pour ajouter la classe "active" au lien actuel
function setActiveLink() {
    var liens = document.querySelectorAll(".header-link");
    var currentPath = window.location.pathname;
  
    liens.forEach(function (lien) {
      var linkPath = new URL(lien.href).pathname;
  
      // Compare les chemins de fichiers sans extension
      if (currentPath === linkPath) {
        lien.classList.add("active");
      } else {
        lien.classList.remove("active");
      }
    });
  }
  
  // Attacher l'événement DOMContentLoaded à la fonction setActiveLink
  document.addEventListener("DOMContentLoaded", setActiveLink);
  
  // Attacher l'événement click à chaque lien du header
  var liens = document.querySelectorAll(".header-link");
  liens.forEach(function (lien) {
    lien.addEventListener("click", function (event) {
      // Récupérer l'URL du lien
      var href = lien.getAttribute("href");
  
      // Ajouter la classe "active" au lien cliqué
      liens.forEach(function (l) {
        l.classList.remove("active");
      });
      lien.classList.add("active");
    });
  });
  