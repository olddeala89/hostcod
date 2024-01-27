
let navcontact = document.getElementById("navcontact");
navcontact.addEventListener("click", function() {
    if (window.innerWidth >= 1080) {
        window.scrollTo({
            top: 3600,
            left: 0,
            behavior: 'smooth'
          });
    }
    else if (window.innerWidth <= 500) {
        window.scrollTo({
            top: 9000,
            left: 0,
            behavior: 'smooth'
          });
    }
});

let herocontact = document.getElementById("herocontact");
herocontact.addEventListener("click", function() {
    if (window.innerWidth >= 1080) {
        window.scrollTo({
            top: 3600,
            left: 0,
            behavior: 'smooth'
          });
    }
    else if (window.innerWidth <= 500) {
        window.scrollTo({
            top: 9000,
            left: 0,
            behavior: 'smooth'
          });
    }
});

let herotg = document.getElementById("herotg");
herotg.addEventListener("click", function() {
    window.open("https://t.me/olddeala89", "_blank");
});