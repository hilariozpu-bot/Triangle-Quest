/* =========================
   PLAYER DATA
========================= */

/*
   Get the saved player data.

   If there is no saved data yet,
   create a new player.
*/

let player = JSON.parse(
    localStorage.getItem("triangleQuestPlayer")
) || {

    level: 1,
    xp: 0,
    coins: 100,
    cp: 0

};


/*
   Make sure level exists.

   This is useful if the player
   already has old saved data.
*/

if (player.level === undefined) {

    player.level = 1;

}


/* =========================
   SAVE PLAYER DATA
========================= */

function savePlayer() {

    localStorage.setItem(
        "triangleQuestPlayer",
        JSON.stringify(player)
    );

}


/* =========================
   UPDATE PLAYER DISPLAY
========================= */

function updatePlayer() {

    /* Update Level */
    document.getElementById("playerLevel").textContent =
        player.level;

    document.getElementById("playerLevel2").textContent =
        player.level;


    /* Update Coins */
    document.getElementById("coinAmount").textContent =
        player.coins;

    document.getElementById("coinAmount2").textContent =
        player.coins;


    /* Update XP */
    document.getElementById("xpAmount").textContent =
        player.xp;


    /* Calculate XP percentage */

    let xpPercentage =
        (player.xp / 100) * 100;


    document.getElementById("xpProgress").style.width =
        xpPercentage + "%";


    /* Update CP */

    document.getElementById("cpAmount").textContent =
        player.cp + " / 100 CP";


    let cpPercentage =
        (player.cp / 100) * 100;


    document.getElementById("cpProgress").style.width =
        cpPercentage + "%";


    /* Update quest locks */

    updateQuestLocks();

}


/* =========================
   ADD XP
========================= */

function addXP(amount) {

    player.xp += amount;


    /*
       Level up when XP reaches 100
    */

    if (player.xp >= 100) {

        player.level++;

        player.xp = 0;

        alert(
            "Congratulations! You reached Level "
            + player.level
            + "!"
        );

    }


    savePlayer();

    updatePlayer();

}


/* =========================
   ADD COINS
========================= */

function addCoins(amount) {

    player.coins += amount;

    savePlayer();

    updatePlayer();

}


/* =========================
   ADD CP
========================= */

function addCP(amount) {

    player.cp += amount;


    /* Prevent CP from going over 100 */

    if (player.cp > 100) {

        player.cp = 100;

    }


    savePlayer();

    updatePlayer();

}


/* =========================
   QUEST LOCKS
========================= */

function updateQuestLocks() {

    const level2Card =
        document.querySelector(".quest-card.level2");

    const level3Card =
        document.querySelector(".quest-card.level3");


    /*
       LEVEL 2

       Unlock when player reaches Level 2.
    */

    if (level2Card) {

        const button =
            level2Card.querySelector(".quest-button");


        if (player.level >= 2) {

            level2Card.classList.remove("locked");
            level2Card.classList.add("active");

            button.textContent = "PLAY";

            button.href = "level2.html";

        }

    }


    /*
       LEVEL 3

       Unlock when player reaches Level 3.
    */

    if (level3Card) {

        const button =
            level3Card.querySelector(".quest-button");


        if (player.level >= 3) {

            level3Card.classList.remove("locked");
            level3Card.classList.add("active");

            button.textContent = "PLAY";

            button.href = "level3.html";

        }

    }

}


/* =========================
   START
========================= */

savePlayer();

updatePlayer();