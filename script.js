document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('#navSite');
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 480) {
        navbar.classList.add("fundopretoNav");
      } else {
        navbar.classList.remove("fundopretoNav");
      }
    });
  });
  