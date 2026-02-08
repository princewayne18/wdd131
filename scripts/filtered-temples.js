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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
        templeName: "Harare Zimbabwe",
        location: "Harare, Zimbabwe",
        dedicated: "2020, December 12",
        area: 17247,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-67718-thumb.jpg"
  },
  {
      templeName: "Frankfurt German",
      location: "Frankfurt, Germany",
      dedicated: "1987, August 28-30",
      area: 32895,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-6612-thumb.jpg"
  }, 
  {
      templeName: "Auckland New Zealand",
      location: "Auckland, New Zealand",
      dedicated: "2005, April 13",
      area: 45456,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57799.jpg"
  }, 
   
];
const container = document.querySelector(".container");
//Loop through the array and create "temple cards" for each temple by displaying:
function createTempleCard(templeList) {
    container.innerHTML = ""; // this clears all existing cards
    for (let i = 0; i < templeList.length; i++) {
        //a variable with all the temples listed
        const temple = templeList[i];

        //creating a card
        const card = document.createElement("section");

        //creating element to be inserted under the card
        const name = document.createElement("h2")
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        // adding context to imageges
        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area} sq ft`;

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        image.classList.add("hover", "border-radius")

        if (temple.area === 11500) {
            image.classList.add("contrast");
             } else {
            image.classList.add("grayscale");
        }


        //appending created elements into the card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        //add card to the page 
        container.appendChild(card);
    }

}

createTempleCard(temples);

function getYear(dedicated) {
  return parseInt(dedicated.split(",")[0]);
}


//using the array filtering functions
function showHome() {
    createTempleCard(temples)
}

function showOld() {
    const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1900);
    createTempleCard(oldTemples);
}

function showNew() {
    const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
    createTempleCard(newTemples);
}



function showLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples)
}

function showSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples)
}

