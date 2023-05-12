
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
      } else {
        element.classList.remove("light-mode");
        element.classList.add("dark-mode");
        lightImage.style.display = "none";
        darkImage.style.display = "block";
      }
    }
  
    toggleMode();
