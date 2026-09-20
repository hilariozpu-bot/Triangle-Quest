/* TRIANGLE QUEST - ITEMS JAVASCRIPT */

let player = JSON.parse(localStorage.getItem("triangleQuestPlayer")) || {
    level: 1, coins: 100, xp: 0, cp: 0
};

let purchasedItems = JSON.parse(
    localStorage.getItem("triangleQuestPurchasedItems")
) || [];

const items = {
    SSS: {
        name: "SSS Postulate",
        type: "POSTULATE",
        description: "Learn how Side-Side-Side proves triangle congruence.",
        image: "sss-preview.png",
        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"
    },

    AA: {
        name: "AA Theorem",
        type: "THEOREM",
        description: "Learn how Angle-Angle establishes triangle similarity.",
        image: "aa-preview.png",
        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"
    },

    SAS: {
        name: "SAS Postulate",
        type: "POSTULATE",
        description: "Learn how Side-Angle-Side proves triangle congruence.",
        image: "sas-preview.png",
        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"
    },

    RTS: {
        name: "Right Triangle Similarity Theorem",
        type: "THEOREM",
        description: "Learn Right Triangle Similarity.",
        image: "rts-preview.png",
        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"
    },

    SRT: {
        name: "Special Right Triangle Similarity Theorem",
        type: "THEOREM",
        description: "Learn Special Right Triangle Similarity.",
        image: "srt-preview.png",
        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"
    },

    VIDEO1: {
        name: "Triangle Similarity Video",
        type: "VIDEO LESSON",
        description: "Watch the triangle similarity video you unlock from the shop.",
        image: "",
        /* Paste your video link between the quotes. */
        link: ""
    },

    VIDEO2: {
        name: "Triangle Similarity Video 2",
        type: "VIDEO LESSON",
        description: "Watch your second triangle similarity video lesson.",
        image: "",
        /* Paste your second video link between the quotes. */
        link: ""
    }
};

function updatePlayer() {
    document.getElementById("playerLevel").textContent = player.level;
    document.getElementById("coinAmount").textContent = player.coins;
}

function openItem(itemId) {
    const item = items[itemId];
    if (!item) return;

    if (!item.link || item.link.trim() === "") {
        alert(
            "📚 This learning material does not have a link yet.\n\n" +
            "Add the link in items.js when it is ready!"
        );
        return;
    }

    window.location.href = item.link;
}

function displayItems() {
    const container = document.getElementById("itemsContainer");
    const empty = document.getElementById("emptyItems");

    container.innerHTML = "";

    if (purchasedItems.length === 0) {
        empty.style.display = "block";
        return;
    }

    empty.style.display = "none";

    purchasedItems.forEach(function(itemId) {
        const item = items[itemId];
        if (!item) return;

        const card = document.createElement("div");
        card.className = "inventory-item";

        const imageHTML = item.image
            ? `<img src="${item.image}" alt="${item.name}">`
            : `<div class="inventory-placeholder">🎬</div>`;

        card.innerHTML = `
            <div class="inventory-image">
                ${imageHTML}
            </div>

            <div class="inventory-content">
                <span class="inventory-type">${item.type}</span>
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <button
                    class="open-item"
                    onclick="openItem('${itemId}')"
                >
                    🎬 OPEN ITEM
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updatePlayer();
    displayItems();
});
