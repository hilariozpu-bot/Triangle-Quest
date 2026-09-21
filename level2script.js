/* =========================================================
   TRIANGLE QUEST - LEVEL 2 JAVASCRIPT
========================================================= */


/* =========================================================
   PLAYER DATA
========================================================= */

let playerData = loadPlayerData();

function loadPlayerData() {
    const defaults = {
        level: 1,
        coins: 100,
        xp: 0,
        cp: 0
    };

    try {
        const saved = localStorage.getItem("triangleQuestPlayer");
        const data = saved ? JSON.parse(saved) : {};

        return {
            level: Number.isFinite(Number(data.level)) ? Number(data.level) : defaults.level,
            coins: Number.isFinite(Number(data.coins)) ? Number(data.coins) : defaults.coins,
            xp: Number.isFinite(Number(data.xp)) ? Number(data.xp) : defaults.xp,
            cp: Number.isFinite(Number(data.cp)) ? Number(data.cp) : defaults.cp
        };
    } catch (error) {
        console.error("Could not load player data:", error);
        return { ...defaults };
    }
}


/* =========================================================
   CHECK LEVEL 2 ACCESS
========================================================= */

if (playerData.level < 2) {

    alert(
        "🔒 Level 2 is locked!\n\n" +
        "Complete Level 1 first."
    );

    window.location.href = "index.html";

}


/* =========================================================
   SAVE PLAYER DATA
========================================================= */

function savePlayerData() {
    try {
        localStorage.setItem(
            "triangleQuestPlayer",
            JSON.stringify(playerData)
        );
    } catch (error) {
        console.error("Could not save player data:", error);
    }
}


/* =========================================================
   LEVEL 2 PROGRESS
========================================================= */

let level2Data = loadLevel2Data();

function loadLevel2Data() {
    const defaults = {
        stage1Complete: false,
        stage2Complete: false,
        stage3Complete: false,
        matchingRewarded: false,
        quizRewarded: false
    };

    try {
        const saved = localStorage.getItem("TriangleQuestLevel2");
        const data = saved ? JSON.parse(saved) : {};

        return {
            stage1Complete: data.stage1Complete === true,
            stage2Complete: data.stage2Complete === true,
            stage3Complete: data.stage3Complete === true,
            matchingRewarded: data.matchingRewarded === true,
            quizRewarded: data.quizRewarded === true
        };
    } catch (error) {
        console.error("Could not load Level 2 progress:", error);
        return { ...defaults };
    }
}


/* =========================================================
   SAVE LEVEL 2 PROGRESS
========================================================= */

function saveLevel2Data() {
    try {
        localStorage.setItem(
            "TriangleQuestLevel2",
            JSON.stringify(level2Data)
        );
    } catch (error) {
        console.error("Could not save Level 2 progress:", error);
    }
}


/* =========================================================
   REWARD HELPERS
========================================================= */

function addCoins(amount) {
    playerData.coins = Math.max(0, Number(playerData.coins || 0) + Number(amount || 0));
    savePlayerData();
    updatePlayerStats();
}

function addXP(amount) {
    playerData.xp = Math.max(0, Number(playerData.xp || 0) + Number(amount || 0));
    savePlayerData();
    updatePlayerStats();
}

function addCP(amount) {
    playerData.cp = Math.min(
        100,
        Math.max(0, Number(playerData.cp || 0) + Number(amount || 0))
    );
    savePlayerData();
    updatePlayerStats();
}


/* =========================================================
   UPDATE PLAYER DISPLAY
========================================================= */

function updatePlayerStats() {

    const level =
        document.getElementById("playerLevel");

    const coins =
        document.getElementById("coinAmount");

    const xp =
        document.getElementById("xpAmount");


    if (level) {

        level.textContent =
            playerData.level;

    }


    if (coins) {

        coins.textContent =
            playerData.coins;

    }


    if (xp) {

        xp.textContent =
            playerData.xp;

    }

}


/* =========================================================
   STAGE BUTTONS
========================================================= */

function updateStageButtons() {

    const button1 =
        document.getElementById("stageButton1");

    const button2 =
        document.getElementById("stageButton2");

    const button3 =
        document.getElementById("stageButton3");


    /* =====================================================
       STAGE 1
    ===================================================== */

    if (button1) {

        button1.classList.remove("locked");

    }


    /* =====================================================
       STAGE 2
    ===================================================== */

    if (
        button2 &&
        level2Data.stage1Complete
    ) {

        button2.classList.remove("locked");

    }


    /* =====================================================
       STAGE 3
    ===================================================== */

    if (
        button3 &&
        level2Data.stage2Complete
    ) {

        button3.classList.remove("locked");

    }

}


/* =========================================================
   GO TO STAGE
========================================================= */

function goToStage(stageNumber) {


    /* =====================================================
       CHECK STAGE 2
    ===================================================== */

    if (
        stageNumber === 2 &&
        !level2Data.stage1Complete
    ) {

        alert(
            "🔒 Complete Stage 1 first!"
        );

        return;

    }


    /* =====================================================
       CHECK STAGE 3
    ===================================================== */

    if (
        stageNumber === 3 &&
        !level2Data.stage2Complete
    ) {

        alert(
            "🔒 Complete Stage 2 first!"
        );

        return;

    }


    /* =====================================================
       HIDE ALL STAGES
    ===================================================== */

    document.querySelectorAll(".stage")
        .forEach(
            function(stage) {

                stage.classList.remove(
                    "active"
                );

            }
        );


    /* =====================================================
       SHOW SELECTED STAGE
    ===================================================== */

    const selectedStage =
        document.getElementById(
            "stage" + stageNumber
        );


    if (selectedStage) {

        selectedStage.classList.add(
            "active"
        );

    }


    /* =====================================================
       UPDATE NAVIGATION BUTTONS
    ===================================================== */

    document.querySelectorAll(
        ".stage-button"
    ).forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    const selectedButton =
        document.getElementById(
            "stageButton" + stageNumber
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );

    }

}


/* =========================================================
   COMPLETE STAGE 1
========================================================= */

function completeStage1() {

    level2Data.stage1Complete = true;
    saveLevel2Data();
    updateStageButtons();


    alert(
        "✨ Stage 1 complete!\n\n" +
        "You reviewed all five topics.\n\n" +
        "Stage 2 is now unlocked!"
    );


    goToStage(2);

}


/* =========================================================
   STAGE 2 MATCHING QUESTIONS
========================================================= */

/*
   These are the correct answers for
   the five Triangle Similarity topics.
*/

const matchingQuestions = [

    {
        id: 1,

        image: "sssl2.png",

        answer: "SSS",

        options: [
            "SSS",
            "AA",
            "SAS",
            "Right Triangle Similarity",
            "Special Right Triangle"
        ]

    },


    {
        id: 2,

        image: "aal2.png",

        answer: "AA",

        options: [
            "SSS",
            "AA",
            "SAS",
            "Right Triangle Similarity",
            "Special Right Triangle"
        ]

    },


    {
        id: 3,

        image: "sasl2.png",

        answer: "SAS",

        options: [
            "SSS",
            "AA",
            "SAS",
            "Right Triangle Similarity",
            "Special Right Triangle"
        ]

    },


    {
        id: 4,

        image: "rtsl2.png",

        answer: "Right Triangle Similarity",

        options: [
            "SSS",
            "AA",
            "SAS",
            "Right Triangle Similarity",
            "Special Right Triangle"
        ]

    },


    {
        id: 5,

        image: "srtl2.png",

        answer: "Special Right Triangle",

        options: [
            "SSS",
            "AA",
            "SAS",
            "Right Triangle Similarity",
            "Special Right Triangle"
        ]

    }

];


/* =========================================================
   CREATE MATCHING QUESTIONS
========================================================= */

/*
   THIS WAS THE PART MISSING FROM YOUR OLD CODE.

   The array above stores the questions.

   This function actually puts the questions
   inside the HTML matchingContainer.
*/

function createMatchingQuestions() {

    const container =
        document.getElementById(
            "matchingContainer"
        );


    /* Make sure the container exists */

    if (!container) {

        return;

    }


    /* Clear the container */

    container.innerHTML = "";


    /* Create each matching question */

    matchingQuestions.forEach(
        function(question) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "matching-card";


            /* =================================================
               CREATE OPTIONS
            ================================================== */

            let optionsHTML = "";


            question.options.forEach(
                function(option, index) {

                    optionsHTML += `

                        <label class="matching-option">

                            <input
                                type="radio"
                                name="match${question.id}"
                                value="${option}"
                            >

                            <span>
                                ${option}
                            </span>

                        </label>

                    `;

                }
            );


            /* =================================================
               CREATE CARD
            ================================================== */

            card.innerHTML = `

                <div class="matching-number">

                    QUESTION ${question.id}

                </div>


                <div class="matching-image">

                    <img
                        src="${question.image}"
                        alt="Triangle similarity figure"
                    >

                </div>


                <div class="matching-content">

                    <h3>
                        Which similarity theorem
                        or topic does this figure represent?
                    </h3>


                    <div class="matching-options">

                        ${optionsHTML}

                    </div>

                </div>

            `;


            /* Add card to container */

            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   CHECK MATCHING ANSWERS
========================================================= */

function checkMatching() {

    let score = 0;


    /* =====================================================
       CHECK EACH QUESTION
    ===================================================== */

    matchingQuestions.forEach(
        function(question) {

            const selected =
                document.querySelector(
                    `input[name="match${question.id}"]:checked`
                );


            if (
                selected &&
                selected.value ===
                question.answer
            ) {

                score++;

            }

        }
    );


    /* =====================================================
       NOT PERFECT
    ===================================================== */

    if (score !== 5) {

        alert(
            "You got " +
            score +
            " / 5 correct.\n\n" +
            "Review the figures and try again!"
        );

        return;

    }


    /* =====================================================
       GIVE REWARD ONLY ONCE
    ===================================================== */

    if (!level2Data.matchingRewarded) {

        addCoins(10);
        addXP(10);

        level2Data.matchingRewarded = true;
        saveLevel2Data();

    }


    /* =====================================================
       COMPLETE STAGE 2
    ===================================================== */

    level2Data.stage2Complete = true;

    saveLevel2Data();

    updatePlayerStats();

    updateStageButtons();


    /* =====================================================
       SUCCESS MESSAGE
    ===================================================== */

    alert(
        "🎉 Perfect!\n\n" +
        "5 / 5 correct!\n\n" +
        "+10 Coins\n" +
        "+10 XP\n\n" +
        "Stage 3 is now unlocked!"
    );


    /* Go to Stage 3 */

    goToStage(3);

}


/* =========================================================
   STAGE 3 QUIZ QUESTIONS
========================================================= */

const quizQuestions = [

    /* =====================================================
       QUESTION 1 - SAS
    ===================================================== */

    {

        question:
            "In △ABC, AB = 9, AC = 12, and m∠A = 50°. " +
            "In △PQR, PQ = 3, PR = 4, and m∠P = 50°. " +
            "Determine if △ABC ~ △PQR.",


        options: [

            "SSS Similarity",

            "AA Similarity",

            "SAS Similarity",

            "Special Right Triangle"

        ],


        /*
           Correct answer:
           SAS Similarity

           9 / 3 = 3
           12 / 4 = 3
           Included angles are equal.
        */

        answer: 2

    },


    /* =====================================================
       QUESTION 2 - AA
    ===================================================== */

    {

        question:
            "In △PQR, m∠P = 62° and m∠R = 48°. " +
            "In △STU, m∠S = 62° and m∠T = 70°. " +
            "Determine if △PQR ~ △STU.",


        options: [

            "AA Similarity",

            "Right Triangle Similarity",

            "SSS Similarity",

            "Special Right Triangle"

        ],


        /*
           Correct answer:
           AA Similarity
        */

        answer: 0

    },


    /* =====================================================
       QUESTION 3 - SSS
    ===================================================== */

    {

        question:
            "△DEF has sides DE = 4, EF = 5, DF = 7. " +
            "△GHI has sides GH = 12, HI = 15, GI = 21. " +
            "Is △DEF ~ △GHI?",


        options: [

            "SAS Similarity",

            "SSS Similarity",

            "AA Similarity",

            "Right Triangle Similarity"

        ],


        /*
           4 / 12 = 1 / 3
           5 / 15 = 1 / 3
           7 / 21 = 1 / 3

           Therefore SSS Similarity.
        */

        answer: 1

    },


    /* =====================================================
       QUESTION 4 - RIGHT TRIANGLE SIMILARITY
    ===================================================== */

    {

        question:
            "In the right △ABC with the right angle at B, " +
            "altitude BD is drawn to hypotenuse AC. " +
            "If AD = 5 and DC = 20, find the length of " +
            "altitude BD using the Right Triangle Similarity Theorem.",


        options: [

            "6 m",

            "10 m",

            "24 m",

            "3 m"

        ],


        /*
           BD² = AD × DC

           BD² = 5 × 20

           BD² = 100

           BD = 10
        */

        answer: 1

    },


    /* =====================================================
       QUESTION 5 - SPECIAL RIGHT TRIANGLE
    ===================================================== */

    {

        question:
            "A right triangle has two legs of equal length, " +
            "forming a 45°–45°–90° triangle. If the hypotenuse " +
            "measures 12√2 cm, find the length of each leg. " +
            "(Recall: Hypotenuse = Leg × √2)",


        options: [

            "6 cm",

            "10 cm",

            "12 cm",

            "24 cm"

        ],


        /*
           12√2 = Leg × √2

           Leg = 12 cm
        */

        answer: 2

    }

];


/* =========================================================
   CREATE QUIZ
========================================================= */

function createQuiz() {

    const container =
        document.getElementById(
            "quizContainer"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    quizQuestions.forEach(
        function(question, index) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "quiz-card";


            let optionsHTML = "";


            question.options.forEach(
                function(option, optionIndex) {

                    optionsHTML += `

                        <button
                            type="button"
                            class="quiz-option"
                            onclick="
                                selectQuizAnswer(
                                    ${index},
                                    ${optionIndex},
                                    this
                                )
                            "
                        >

                            ${option}

                        </button>

                    `;

                }
            );


            card.innerHTML = `

                <span class="quiz-number">

                    QUESTION ${index + 1}

                </span>


                <h3>

                    ${question.question}

                </h3>


                <div class="quiz-options">

                    ${optionsHTML}

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   SELECTED QUIZ ANSWERS
========================================================= */

let selectedQuizAnswers = [];


/* =========================================================
   SELECT QUIZ ANSWER
========================================================= */

function selectQuizAnswer(
    questionIndex,
    optionIndex,
    button
) {

    selectedQuizAnswers[
        questionIndex
    ] = optionIndex;


    /* =====================================================
       REMOVE SELECTED STYLE
    ===================================================== */

    const card =
        button.closest(
            ".quiz-card"
        );


    card.querySelectorAll(
        ".quiz-option"
    ).forEach(
        function(option) {

            option.classList.remove(
                "selected"
            );

        }
    );


    /* =====================================================
       ADD SELECTED STYLE
    ===================================================== */

    button.classList.add(
        "selected"
    );

}


/* =========================================================
   SUBMIT QUIZ
========================================================= */

function submitQuiz() {


    /* =====================================================
       CHECK IF ALL QUESTIONS ARE ANSWERED
    ===================================================== */

    if (
        selectedQuizAnswers.length !==
        quizQuestions.length
    ) {

        alert(
            "Please answer all 5 questions first."
        );

        return;

    }


    let score = 0;


    /* =====================================================
       CHECK EACH QUESTION
    ===================================================== */

    quizQuestions.forEach(
        function(question, index) {

            const cards =
                document.querySelectorAll(
                    ".quiz-card"
                );


            const card =
                cards[index];


            const options =
                card.querySelectorAll(
                    ".quiz-option"
                );


            options.forEach(
                function(
                    option,
                    optionIndex
                ) {

                    option.disabled = true;


                    /* Correct answer */

                    if (
                        optionIndex ===
                        question.answer
                    ) {

                        option.classList.add(
                            "correct"
                        );

                    }


                    /* Wrong selected answer */

                    if (
                        optionIndex ===
                        selectedQuizAnswers[index] &&
                        optionIndex !==
                        question.answer
                    ) {

                        option.classList.add(
                            "wrong"
                        );

                    }

                }
            );


            /* Add to score */

            if (
                selectedQuizAnswers[index] ===
                question.answer
            ) {

                score++;

            }

        }
    );


    /* =====================================================
       DISPLAY SCORE
    ===================================================== */

    const quizScore =
        document.getElementById(
            "quizScore"
        );


    if (quizScore) {

        quizScore.textContent =
            score;

    }


    /* =====================================================
       IF SCORE IS NOT 5
    ===================================================== */

    if (score < 5) {

        alert(
            "You scored " +
            score +
            " / 5.\n\n" +
            "You need 5 / 5 to complete Level 2.\n\n" +
            "Review the questions and try again."
        );


        /*
           Allow another attempt.
        */

        document.querySelectorAll(
            ".quiz-option"
        ).forEach(
            function(option) {

                option.disabled = false;

            }
        );


        return;

    }


    /* =====================================================
       GIVE QUIZ REWARD ONLY ONCE
    ===================================================== */

    if (!level2Data.quizRewarded) {

        addCoins(20);
        addXP(20);
        addCP(10);

        level2Data.quizRewarded = true;
        saveLevel2Data();

    }


    /* =====================================================
       COMPLETE STAGE 3
    ===================================================== */

    level2Data.stage3Complete = true;

    saveLevel2Data();

    updatePlayerStats();


    /* =====================================================
       HIDE ALL STAGES
    ===================================================== */

    document.querySelectorAll(
        ".stage"
    ).forEach(
        function(stage) {

            stage.classList.remove(
                "active"
            );

        }
    );


    /* =====================================================
       SHOW LEVEL COMPLETE
    ===================================================== */

    const levelComplete =
        document.getElementById(
            "levelComplete"
        );


    if (levelComplete) {

        levelComplete.style.display =
            "block";

    }


    /* =====================================================
       HIDE STAGE NAVIGATION
    ===================================================== */

    const navigation =
        document.querySelector(
            ".stage-navigation"
        );


    if (navigation) {

        navigation.style.display =
            "none";

    }

}


/* =========================================================
   FINISH LEVEL 2
========================================================= */

function finishLevel2() {


    /* =====================================================
       CHECK QUIZ
    ===================================================== */

    if (
        !level2Data.stage3Complete
    ) {

        alert(
            "Complete the Level 2 quiz first!"
        );

        return;

    }


    /* =====================================================
       UNLOCK LEVEL 3
    ===================================================== */

    playerData.level = 3;


    /* =====================================================
       SAVE PLAYER
    ===================================================== */

    savePlayerData();


    /* =====================================================
       COMPLETION MESSAGE
    ===================================================== */

    alert(
        "🏆 LEVEL 2 COMPLETE!\n\n" +
        "LEVEL 3 IS NOW UNLOCKED!"
    );


    /* =====================================================
       RETURN HOME
    ===================================================== */

    window.location.href =
        "index.html";

}


/* =========================================================
   START LEVEL 2
========================================================= */

function startLevel2() {


    /* =====================================================
       UPDATE PLAYER
    ===================================================== */

    updatePlayerStats();


    /* =====================================================
       UPDATE STAGE BUTTONS
    ===================================================== */

    updateStageButtons();


    /* =====================================================
       CREATE STAGE 2
    ===================================================== */

    createMatchingQuestions();


    /* =====================================================
       CREATE STAGE 3
    ===================================================== */

    createQuiz();


    /* =====================================================
       IF LEVEL 2 IS ALREADY COMPLETE
    ===================================================== */

    if (
        level2Data.stage3Complete
    ) {

        document.querySelectorAll(
            ".stage"
        ).forEach(
            function(stage) {

                stage.classList.remove(
                    "active"
                );

            }
        );


        const levelComplete =
            document.getElementById(
                "levelComplete"
            );


        if (levelComplete) {

            levelComplete.style.display =
                "block";

        }


        const navigation =
            document.querySelector(
                ".stage-navigation"
            );


        if (navigation) {

            navigation.style.display =
                "none";

        }


        return;

    }


    /* =====================================================
       IF STAGE 2 IS COMPLETE
    ===================================================== */

    if (
        level2Data.stage2Complete
    ) {

        goToStage(3);

        return;

    }


    /* =====================================================
       IF STAGE 1 IS COMPLETE
    ===================================================== */

    if (
        level2Data.stage1Complete
    ) {

        goToStage(2);

        return;

    }


    /* =====================================================
       START AT STAGE 1
    ===================================================== */

    goToStage(1);

}


/* =========================================================
   TEXT TO SPEECH
========================================================= */

function speakText(text) {

    if (!window.speechSynthesis) {
        alert("Text-to-speech is not supported by this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const cleanText = String(text)
        .replace(/<[^>]*>/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}

function addLevel2SpeechButton() {

    const content = document.querySelector(".level-content");
    if (!content || document.getElementById("level2SpeechButton")) return;

    const button = document.createElement("button");
    button.id = "level2SpeechButton";
    button.type = "button";
    button.textContent = "🔊 READ ALOUD";
    button.style.cssText = "margin: 0 0 18px 0; padding: 10px 16px; border: 0; border-radius: 10px; cursor: pointer; font-weight: 700;";
    button.onclick = function() {
        const activeStage = document.querySelector(".stage.active");
        speakText(activeStage ? activeStage.innerText : content.innerText);
    };

    content.insertBefore(button, content.firstElementChild);
}


/* =========================================================
   PUBLIC BUTTON HANDLERS
   GitHub Pages / inline onclick compatibility
========================================================= */

window.goToStage = goToStage;
window.completeStage1 = completeStage1;
window.checkMatching = checkMatching;
window.submitQuiz = submitQuiz;
window.finishLevel2 = finishLevel2;

/* =========================================================
   START LEVEL 2 WHEN PAGE LOADS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        startLevel2();
        addLevel2SpeechButton();

    }
);
