const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}


const tempC = 10;       
const windSpeedKmh = 15; 

let windChillDisplay;

if (tempC <= 10 && windSpeedKmh > 4.8) {
    windChillDisplay = calculateWindChill(tempC, windSpeedKmh).toFixed(1) + "°C";
} else {
    windChillDisplay = "N/A";
}

document.getElementById("windchill").textContent = windChillDisplay;


window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('loaded');
    }
});