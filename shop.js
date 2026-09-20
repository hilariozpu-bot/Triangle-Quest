/* TRIANGLE QUEST - SHOP JAVASCRIPT */

let player = JSON.parse(localStorage.getItem("triangleQuestPlayer")) || {
    level: 1, coins: 100, xp: 0, cp: 0
};

const shopItems = {
    SSS: { name: "SSS Similarity", price: 50, link: "" },
    AA: { name: "AA Similarity", price: 75, link: "" },
    SAS: { name: "SAS Similarity", price: 100, link: "" },
    RTS: { name: "Right Triangle Similarity", price: 125, link: "" },
    SRT: { name: "Special Right Triangle", price: 150, link: "" },

    VIDEO1: {
        name: "Triangle Similarity Video",
        price: 200,
        /* Paste your video link between the quotes. */
        link: "https://www.youtube.com/watch?v=K8WiEdwP-fY"
    },

    VIDEO2: {
        name: "Triangle Similarity Video 2",
        price: 200,
        /* Paste your second video link between the quotes. */
        link: "https://www.youtube.com/watch?v=VXlFEilh-cw"
    }
};

let purchasedItems = JSON.parse(
    localStorage.getItem("triangleQuestPurchasedItems")
) || [];

function savePlayer() {
    localStorage.setItem("triangleQuestPlayer", JSON.stringify(player));
}

function savePurchasedItems() {
    localStorage.setItem(
        "triangleQuestPurchasedItems",
        JSON.stringify(purchasedItems)
    );
}

function updateCoins() {
    const coinAmount = document.getElementById("coinAmount");
    const shopCoins = document.getElementById("shopCoins");

    if (coinAmount) coinAmount.textContent = player.coins;
    if (shopCoins) shopCoins.textContent = player.coins;
}

function ownsItem(itemId) {
    return purchasedItems.includes(itemId);
}

function buyItem(itemId) {
    const item = shopItems[itemId];

    if (!item) {
        alert("❌ Item not found.");
        return;
    }

    if (ownsItem(itemId)) {
        alert("🎒 You already own this learning material!");
        window.location.href = "items.html";
        return;
    }

    if (player.coins < item.price) {
        alert(
            "🪙 Not enough coins!\n\n" +
            "You need " + item.price +
            " coins to buy this item.\n\n" +
            "Complete more quests to earn coins!"
        );
        return;
    }

    if (!confirm(
        "🛒 Buy " + item.name +
        " for " + item.price + " coins?"
    )) {
        return;
    }

    player.coins -= item.price;
    purchasedItems.push(itemId);

    savePlayer();
    savePurchasedItems();
    updateCoins();

    alert(
        "🎉 Purchase successful!\n\n" +
        item.name + " has been added to your Items!"
    );

    window.location.href = "items.html";
}

function updateShopButtons() {
    document.querySelectorAll(".buy-button").forEach(function(button) {
        const itemCard = button.closest(".shop-item");
        if (!itemCard) return;

        const itemId = itemCard.dataset.itemId;

        if (ownsItem(itemId)) {
            button.textContent = "OWNED";
            button.classList.add("owned");
        } else {
            button.textContent = "BUY";
            button.classList.remove("owned");
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    updateCoins();
    updateShopButtons();
});
