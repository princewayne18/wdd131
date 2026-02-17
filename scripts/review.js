const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;




let count = Number(localStorage.getItem("reviewCount") || 0);
count++;

localStorage.setItem("reviewCount", count)

document.querySelector(".reviews").textContent = count;