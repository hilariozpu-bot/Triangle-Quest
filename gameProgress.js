/* =========================================================
   TRIANGLE QUEST - GAME PROGRESS
   This file handles RESETTING the whole game.
   
   IMPORTANT:
   This file does NOT contain the Level 1 game logic.
   It only handles shared progress such as:
   - Coins
   - XP
   - CP
   - Part progress
   - Practice progress
   - Application rewards
   - Level 1 reward
========================================================= */


/* =========================================================
   RESTART ALL GAME PROGRESS
========================================================= */

function restartProgress() {

    /* Ask the player to confirm */
    const confirmRestart = confirm(
        "⚠️ Are you sure you want to restart your progress?\n\n" +
        "This will reset:\n" +
        "• Coins\n" +
        "• XP\n" +
        "• CP\n" +
        "• Practice progress\n" +
        "• Application progress\n" +
        "• Unlocked parts\n" +
        "• Level 1 completion\n" +
        "• Level 2 progress\n" +
        "• Level 3 progress\n" +
        "• Shop items / inventory\n\n" +
        "This cannot be undone."
    );


    /* Stop if the player clicks Cancel */
    if (!confirmRestart) {
        return;
    }


    /* =====================================================
       REMOVE SAVED PLAYER DATA
    ===================================================== */

    localStorage.removeItem(
        "triangleQuestPlayer"
    );


    /* =====================================================
       REMOVE SAVED PART PROGRESS
    ===================================================== */

    localStorage.removeItem(
        "TriangleQuestParts"
    );


    /* =====================================================
       REMOVE APPLICATION REWARDS
    ===================================================== */

    localStorage.removeItem(
        "triangleQuestApplicationRewards"
    );


    /* =====================================================
       REMOVE LEVEL 1 REWARD
    ===================================================== */

    localStorage.removeItem(
        "triangleQuestLevel1Reward"
    );


    /* =====================================================
       REMOVE OTHER TRIANGLE QUEST PROGRESS
       
       These are included in case another page in your
       project saves progress using these names.
    ===================================================== */

    localStorage.removeItem(
        "triangleQuestProgress"
    );

    localStorage.removeItem(
        "triangleQuestLevel"
    );


    /* =====================================================
       REMOVE LEVEL 2 PROGRESS
    ===================================================== */

    localStorage.removeItem(
        "TriangleQuestLevel2"
    );


    /* =====================================================
       REMOVE LEVEL 3 PROGRESS
    ===================================================== */

    localStorage.removeItem(
        "TriangleQuestLevel3"
    );


    /* =====================================================
       REMOVE PURCHASED SHOP ITEMS
    ===================================================== */

    localStorage.removeItem(
        "triangleQuestPurchasedItems"
    );


    /* =====================================================
       RESET PLAYER DATA IMMEDIATELY
       
       This makes sure the next page starts with:
       Coins = 100
       XP = 0
       CP = 0
    ===================================================== */

    localStorage.setItem(
        "triangleQuestPlayer",
        JSON.stringify({
            level: 1,
            coins: 100,
            xp: 0,
            cp: 0
        })
    );

/* Get saved player data */
    const playerData = JSON.parse(
        localStorage.getItem("triangleQuestPlayer")
    ) || {
        coins: 100,
        xp: 0,
        cp: 0
    };

    /* Show saved coins on the Home page */
    document.getElementById("coins").textContent = playerData.coins;
    /* =====================================================
       RESET ALL FIVE PARTS
       
       Part 1 = unlocked
       Parts 2-5 = locked
       
       Each part starts at Stage 1.
       Each part has two practice questions.
    ===================================================== */

    localStorage.setItem(
        "TriangleQuestParts",
        JSON.stringify({

            1: {
                unlocked: true,
                completed: false,
                stage: 1,
                practices: [false, false]
            },

            2: {
                unlocked: false,
                completed: false,
                stage: 1,
                practices: [false, false]
            },

            3: {
                unlocked: false,
                completed: false,
                stage: 1,
                practices: [false, false]
            },

            4: {
                unlocked: false,
                completed: false,
                stage: 1,
                practices: [false, false]
            },

            5: {
                unlocked: false,
                completed: false,
                stage: 1,
                practices: [false, false]
            }

        })
    );


    /* =====================================================
       RESET APPLICATION REWARDS
    ===================================================== */

    localStorage.setItem(
        "triangleQuestApplicationRewards",
        JSON.stringify({

            1: false,
            2: false,
            3: false,
            4: false,
            5: false

        })
    );


    /* =====================================================
       SHOW RESET MESSAGE
    ===================================================== */

    alert(
        "✅ Progress has been completely reset!\n\n" +
        "Coins: 100\n" +
        "XP: 0\n" +
        "CP: 0\n\n" +
        "Part 1 is unlocked.\n" +
        "Parts 2-5 are locked."
    );


    /* =====================================================
       RELOAD THE PAGE
       
       The page will now load the fresh reset data.
    ===================================================== */

    window.location.reload();

}