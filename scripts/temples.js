const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

