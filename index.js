function theme_click(){
    var moon = document.getElementById("moon");
    var sun = document.getElementById("sun");
    if (window.getComputedStyle(sun).display === "none") {
        sun.style.display = "block";
        moon.style.display = "none";
        document.documentElement.style.setProperty('--p-light-color', "#e6fffe");
        document.documentElement.style.setProperty('--p-dark-color', "#17252a");
    }
    else{
        sun.style.display = "none";
        moon.style.display = "block";
        document.documentElement.style.setProperty('--p-light-color', "#17252a");
        document.documentElement.style.setProperty('--p-dark-color', "#e6fffe");
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("load", reveal);
  window.addEventListener("scroll", reveal);