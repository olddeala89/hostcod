let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch("/submit-feedback", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });
});