

function toggleMode() {
  var element = document.body;
  var container = document.getElementById("image-container");
  var darkImage = document.getElementById("dark-image");
  var lightImage = document.getElementById("light-image");

  if (element.classList.contains("dark-mode")) {
    element.classList.remove("dark-mode");
    element.classList.add("light-mode");
    darkImage.style.display = "none";
    lightImage.style.display = "block";
    localStorage.setItem("mode", "light"); // sla de keuze van de gebruiker op
  } else {
    element.classList.remove("light-mode");
    element.classList.add("dark-mode");
    lightImage.style.display = "none";
    darkImage.style.display = "block";
    localStorage.setItem("mode", "dark"); // sla de keuze van de gebruiker op
  }
}
      
var mode = localStorage.getItem("mode");
if (mode === "dark") {
  document.body.classList.add("dark-mode");
  document.getElementById("dark-image").style.display = "block";
} else {
  document.body.classList.add("light-mode");
  document.getElementById("light-image").style.display = "block";
}

