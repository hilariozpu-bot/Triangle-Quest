/* =========================================================
   TRIANGLE QUEST - ITEMS JAVASCRIPT
========================================================= */


/* =========================================================
   PLAYER
========================================================= */

let player = JSON.parse(
    localStorage.getItem("triangleQuestPlayer")
) || {
    level: 1,
    coins: 100,
    xp: 0,
    cp: 0
};


/* =========================================================
   PURCHASED ITEMS
========================================================= */

let purchasedItems = JSON.parse(
    localStorage.getItem("triangleQuestPurchasedItems")
) || [];


/* =========================================================
   ITEM INFORMATION
========================================================= */

const items = {

    NEW_CHAR: {
        name: "New Character",
        type: "CHARACTER REWARD",
        description: "A new character icon earned for completing all Level 3 stages.",
        image: "new-char.png",
        link: ""
    },

    UNLIMITED_ED: {
        name: "Unlimited Education",
        type: "LEARNING MATERIAL",
        description: "A special learning material earned for completing all Level 3 stages.",
        image: "Unlimited-ed.png",
        link: ""
    },

    SSS: {

        name: "SSS Postulate",

        type: "POSTULATE",

        description:
            "Learn how Side-Side-Side proves triangle congruence.",

        image:
            "sss-preview.png",

        /*
         * LEAVE BLANK FOR NOW.
         * Paste your link here later.
         */
        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"

    },


    SAS: {

        name: "SAS Postulate",

        type: "POSTULATE",

        description:
            "Learn how Side-Angle-Side proves triangle congruence.",

        image:
            "sas-preview.png",

        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"

    },


    RTS: {

        name: "Right Triangle Similarity Theorem",

        type: "THEOREM",

        description:
            "Learn Right Triagnle Similarity.",

        image:
            "rts-preview.png",

        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"

    },

    RTS: {

        name: "Special Right Triangle Similarity Theorem",

        type: "THEOREM",

        description:
            "Learn Special Right Triagnle Similarity.",

        image:
            "srt-preview.png",

        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"

    },


    AAS: {

        name: "AA Theorem",

        type: "THEOREM",

        description:
            "Learn how Angle-Angle Triangle similarity",

        image:
            "aa-preview.png",

        link: "https://www.scribd.com/document/714401770/MATH9-Q3-MODULE11#google_vignette"

    }

};


/* =========================================================
   UPDATE PLAYER
========================================================= */

function updatePlayer() {

    document.getElementById(
        "playerLevel"
    ).textContent =
        player.level;


    document.getElementById(
        "coinAmount"
    ).textContent =
        player.coins;

}


/* =========================================================
   OPEN ITEM
========================================================= */

function openItem(itemId) {

    const item =
        items[itemId];


    if (!item) {

        return;

    }


    /*
     * The link is blank for now.
     * When you add a link, it will open.
     */

    if (
        !item.link ||
        item.link.trim() === ""
    ) {

        alert(
            "📚 This learning material does not have a link yet.\n\n" +
            "Add the link in items.js when it is ready!"
        );

        return;

    }


    window.location.href =
        item.link;

}


/* =========================================================
   DISPLAY ITEMS
========================================================= */

function displayItems() {

    const container =
        document.getElementById(
            "itemsContainer"
        );

    const empty =
        document.getElementById(
            "emptyItems"
        );


    container.innerHTML = "";


    /* No purchased items */

    if (
        purchasedItems.length === 0
    ) {

        empty.style.display =
            "block";

        return;

    }


    empty.style.display =
        "none";


    purchasedItems.forEach(
        function(itemId) {

            const item =
                items[itemId];


            if (!item) {

                return;

            }


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "inventory-item";


            card.innerHTML = `

                <div class="inventory-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="inventory-content">

                    <span class="inventory-type">
                        ${item.type}
                    </span>


                    <h2>
                        ${item.name}
                    </h2>


                    <p>
                        ${item.description}
                    </p>


                    <button
                        class="open-item"
                        onclick="openItem('${itemId}')"
                    >
                        📖 OPEN ITEM
                    </button>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updatePlayer();

        displayItems();

    }
);