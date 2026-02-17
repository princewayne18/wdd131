const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


const select = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;
    option.value = product.id;
    select.appendChild(option);


});