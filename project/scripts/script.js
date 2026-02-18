/* =====================
   MOBILE NAV WITH LOCALSTORAGE
===================== */
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if (menuBtn && navMenu) {
    // Load saved menu state
    const savedMenuState = localStorage.getItem("navOpen") === "true";
    if (savedMenuState) {
        navMenu.classList.add("open");
        menuBtn.textContent = "✖";
        menuBtn.setAttribute("aria-expanded", "true");
    }

    menuBtn.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        menuBtn.textContent = isOpen ? "✖" : "☰";
        menuBtn.setAttribute("aria-expanded", isOpen);
        localStorage.setItem("navOpen", isOpen); // Save state
    });
}

/* =====================
   FOOTER YEAR & LAST MODIFIED
===================== */
const currentYearEl = document.getElementById("currentyear");
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}

/* =====================
   FEATURED MUSIC
===================== */
const musicList = document.getElementById("music-list");

if (musicList) {
    const songs = [
        {
            title: "Regular",
            album: "The Street Menace EP",
            img: "images/album-art.webp",
            link: "https://audiomack.com/cliff-jeans/song/regular-ft-cal-vin-prod-by-cal-vin"
        },
        {
            title: "Ngiyimoko",
            album: "The Street Menace EP",
            img: "images/album-art.webp",
            link: "https://audiomack.com/cliff-jeans/song/ngiyimoko-prod-by-cliff-jean"
        },
        {
            title: "Never Lose Hope",
            album: "Friday Freestyle Sessions S1",
            img: "images/album-art2.webp",
            link: "https://audiomack.com/cliff-jeans/song/never-lose-hope-fridayfreestylesessions"
        }
    ];

    songs.forEach(song => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${song.img}" alt="${song.title} album art">
            <p class="song-title">${song.title}</p>
            <p class="album-name">${song.album}</p>
            <a href="${song.link}" class="listen-btn">Listen</a>
        `;
        musicList.appendChild(li);
    });
}

/* =====================
   DISCOVERY SECTION WITH LOCALSTORAGE
===================== */
const discoveryCards = document.getElementById("discovery-cards");
const discoverBtn = document.getElementById("discover-btn");

if (discoveryCards && discoverBtn) {
    const discoveries = [
        { title: "New Single", desc: "Latest release from Cliff Jeans", img: "images/album-art3.webp" },
        { title: "Live Performances", desc: "Tour highlights & shows", img: "images/cliff-live.webp" },
        { title: "Behind the Scenes", desc: "Studio & creative process", img: "images/cliff-behind-the-scene.webp" }
    ];

    discoveries.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("discovery-card");
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        discoveryCards.appendChild(card);
    });

    // Load saved discovery state
    const savedDiscoveryState = localStorage.getItem("discoveryVisible") === "true";
    if (savedDiscoveryState) {
        discoveryCards.classList.add("show");
        discoverBtn.textContent = "Hide Music";
    }

    discoverBtn.addEventListener("click", () => {
        const isVisible = discoveryCards.classList.toggle("show");
        discoverBtn.textContent = isVisible ? "Hide Music" : "Discover Music";
        localStorage.setItem("discoveryVisible", isVisible); // Save state
    });
}
