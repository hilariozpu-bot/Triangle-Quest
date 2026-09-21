/* =========================================================
   TRIANGLE QUEST - LEVEL 1 JAVASCRIPT
========================================================= */


/* =========================================================
   PLAYER DATA
   LOAD SAVED DATA FIRST
========================================================= */

let playerData = JSON.parse(
    localStorage.getItem("triangleQuestPlayer")
) || {
    coins: 100,
    xp: 0,
    cp: 0
};


/* =========================================================
   PART DATA
   LOAD SAVED PROGRESS
========================================================= */

let partData = JSON.parse(
    localStorage.getItem("TriangleQuestParts")
) || {

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

};


/* =========================================================
   APPLICATION REWARD DATA
========================================================= */

let applicationRewarded = JSON.parse(
    localStorage.getItem("triangleQuestApplicationRewards")
) || {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
};


/* =========================================================
   SAVE ALL PROGRESS
========================================================= */

function saveProgress() {

    localStorage.setItem(
        "triangleQuestPlayer",
        JSON.stringify(playerData)
    );

    localStorage.setItem(
        "TriangleQuestParts",
        JSON.stringify(partData)
    );

    localStorage.setItem(
        "triangleQuestApplicationRewards",
        JSON.stringify(applicationRewarded)
    );

}


/* =========================================================
   SAVE PLAYER DATA
========================================================= */

function savePlayerData() {

    localStorage.setItem(
        "triangleQuestPlayer",
        JSON.stringify(playerData)
    );

}


/* =========================================================
   SAVE PART DATA
========================================================= */

function savePartData() {

    localStorage.setItem(
        "TriangleQuestParts",
        JSON.stringify(partData)
    );

}


/* =========================================================
   SAVE APPLICATION REWARDS
========================================================= */

function saveApplicationRewards() {

    localStorage.setItem(
        "triangleQuestApplicationRewards",
        JSON.stringify(applicationRewarded)
    );

}


/* =========================================================
   SIDEBAR OBJECTIVES
========================================================= */

const sidebarObjectives = {

    1: [
        "State and explain the Side-Side-Side (SSS) Similarity Theorem.",
        "Identify and calculate the ratios of corresponding side lengths to establish proportionality between two triangles.",
        "Use SSS Similarity Theorem to prove that two triangles are similar and solve for the ratios of triangles."
    ],

    2: [
        "State and explain the Side-Angle-Side (AA) Similarity Theorem.",
        "Identify congruent corresponding angles to establish that two triangles are similar.",
        "Solve for missing side lengths and angle measures in similar triangles using the AA criteria."
    ],

    3: [
        "State and explain the Side-Angle-Side (SAS) Similarity Theorem.",
        "Identify proportional sides and congruent included angles to prove two triangles are similar.",
        "Solve for missing side lengths and angles in similar triangles using the SAS criteria."
    ],

    4: [
        "State and explain the Right Triangle Similarity Theorem.",
        "Identify the relationships among the sides and angles of similar right triangles and prove the Right Triangle Similarity Theorems.",
        "Apply the theorems to solve problems involving right triangles, including finding missing sides and segments."
    ],

    5: [
        "Identify when a triangle is a 45°-45°-90° or 30°-60°-90° triangle.",
        "Use a special right triangle relationship to solve problems.",
        "Apply the SRT Theorem to solve triangle problems."
    ]

};


/* =========================================================
   PRACTICE QUESTIONS
========================================================= */

const practiceQuestions = {

    1: [
        {
            question: "What is the value of each fraction? in this order: DE/AB, EF/BC, and DF/AC",
            answer: "18/5, 9/7, 14/9"
        },

        {
            question: "Using SSS Similarity Theorem, are two triangles similar? Yes or No?",
            answer: "No"
        }
    ],

    2: [
        {
            question: "Using AA Similarity Theorem, are two triangles similar? Yes or No?",
            answer: "No"
        },

        {
            question: "What is the sum of ∠C and ∠F?",
            answer: "98"
        }
    ],

    3: [
        {
            question: "Are the triangles similar? Yes or No?",
            answer: "Yes"
        },

        {
            question: "If QR = 25, what is the length of side TU?",
            answer: "10"
        }
    ],

    4: [
        {
            question: "What is the length of the hypotenuse AC?",
            answer: "16"
        },

        {
            question: "What is the length of the longer leg? (do not use decimal)",
            answer: "8√3"
        }
    ],

    5: [
        {
            question: "What is the value of x?",
            answer: "10√2"
        },

        {
            question: "What is the longer length?",
            answer: "10"
        }
    ]

};


/* =========================================================
   APPLICATION ANSWERS
========================================================= */

const applicationAnswers = {

    1: "A",
    2: "B",
    3: "C",
    4: "B",
    5: "B"

};


/* =========================================================
   UPDATE PLAYER STATS
========================================================= */

function updatePlayerStats() {

    const coins =
        document.getElementById("coins");

    const xp =
        document.getElementById("xp");

    const cp =
        document.getElementById("cp");


    if (coins) {
        coins.textContent =
            playerData.coins;
    }


    if (xp) {
        xp.textContent =
            playerData.xp;
    }


    if (cp) {
        cp.textContent =
            playerData.cp;
    }

}


/* =========================================================
   ADD COINS
========================================================= */

function addCoins(amount) {

    playerData.coins += amount;

    savePlayerData();

    updatePlayerStats();

}


/* =========================================================
   ADD XP
========================================================= */

function addXP(amount) {

    playerData.xp += amount;

    savePlayerData();

    updatePlayerStats();

}


/* =========================================================
   ADD CP
========================================================= */

function addCP(amount) {

    playerData.cp += amount;

    savePlayerData();

    updatePlayerStats();

}


/* =========================================================
   UPDATE SIDEBAR OBJECTIVES
========================================================= */

function updateSidebarObjectives(partNumber) {

    const objectives =
        sidebarObjectives[partNumber];


    if (!objectives) {
        return;
    }


    const objective1 =
        document.getElementById("sidebarObjective1");

    const objective2 =
        document.getElementById("sidebarObjective2");

    const objective3 =
        document.getElementById("sidebarObjective3");


    if (objective1) {
        objective1.textContent =
            objectives[0];
    }


    if (objective2) {
        objective2.textContent =
            objectives[1];
    }


    if (objective3) {
        objective3.textContent =
            objectives[2];
    }

}


/* =========================================================
   DISPLAY OBJECTIVES
========================================================= */

function displayObjectives(partNumber) {

    const objectives =
        sidebarObjectives[partNumber];


    if (!objectives) {
        return;
    }


    const objective1 =
        document.getElementById("objective1");

    const objective2 =
        document.getElementById("objective2");

    const objective3 =
        document.getElementById("objective3");


    if (objective1) {
        objective1.textContent =
            objectives[0];
    }


    if (objective2) {
        objective2.textContent =
            objectives[1];
    }


    if (objective3) {
        objective3.textContent =
            objectives[2];
    }

}


/* =========================================================
   OPEN PART
========================================================= */

function openPart(partNumber) {

    if (!partData[partNumber]) {
        return;
    }


    /* Check if part is unlocked */

    if (!partData[partNumber].unlocked) {

        alert(
            "🔒 Complete the previous part first!"
        );

        return;
    }


    /* Hide every part */

    document.querySelectorAll(".part-page").forEach(
        function(part) {

            part.classList.remove(
                "active-part"
            );

        }
    );


    /* Show selected part */

    const selectedPart =
        document.getElementById(
            "part" + partNumber
        );


    if (selectedPart) {

        selectedPart.classList.add(
            "active-part"
        );

    }


    /* Remove active navigation */

    document.querySelectorAll(".part-item").forEach(
        function(item) {

            item.classList.remove(
                "active"
            );

        }
    );


    /* Activate selected navigation */

    const selectedNav =
        document.getElementById(
            "partNav" + partNumber
        );


    if (selectedNav) {

        selectedNav.classList.add(
            "active"
        );

    }


    /* Update objectives */

    displayObjectives(partNumber);

    updateSidebarObjectives(partNumber);


    /* Open saved stage */

    goToStage(
        partNumber,
        partData[partNumber].stage
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   GO TO SPECIFIC STAGE
========================================================= */

function goToStage(partNumber, stageNumber) {

    const part =
        partData[partNumber];


    if (!part) {
        return;
    }


    /* Make sure stage is between 1 and 4 */

    if (stageNumber < 1) {
        stageNumber = 1;
    }


    if (stageNumber > 4) {
        stageNumber = 4;
    }


    /* Application requires both practices */

    if (stageNumber === 4) {

        const completedPractices =
            part.practices.filter(Boolean).length;


        if (completedPractices < 2) {

            alert(
                " Complete both practice questions first!"
            );


            /* Return to practice */

            stageNumber = 3;

        }

    }


    /* Save current stage */

    part.stage =
        stageNumber;


    savePartData();


    /* Hide all stages in this part */

    document.querySelectorAll(
        "#part" + partNumber + " .stage"
    ).forEach(
        function(stage) {

            stage.classList.remove(
                "active-stage"
            );

        }
    );


    /* Show selected stage */

    const selectedStage =
        document.getElementById(
            "p" +
            partNumber +
            "stage" +
            stageNumber
        );


    if (selectedStage) {

        selectedStage.classList.add(
            "active-stage"
        );

    }


    /* Update stage tabs */

    document.querySelectorAll(
        "#part" + partNumber + " .stage-tab"
    ).forEach(
        function(tab) {

            tab.classList.remove(
                "active"
            );

        }
    );


    const selectedTab =
        document.getElementById(
            "p" +
            partNumber +
            "stageTab" +
            stageNumber
        );


    if (selectedTab) {

        selectedTab.classList.add(
            "active"
        );

    }


    /* Update practice display */

    updatePracticeDisplay(partNumber);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   NEXT STAGE BUTTON
========================================================= */

function nextStage(partNumber) {

    if (!partData[partNumber]) {
        return;
    }


    const currentStage =
        partData[partNumber].stage;


    /* Already at Application */

    if (currentStage >= 4) {

        return;

    }


    const nextStageNumber =
        currentStage + 1;


    /* Going to Application */

    if (nextStageNumber === 4) {

        const completedPractices =
            partData[partNumber]
                .practices
                .filter(Boolean)
                .length;


        if (completedPractices < 2) {

            alert(
                "🎮 Complete both practice questions before proceeding to the Application!"
            );

            goToStage(
                partNumber,
                3
            );

            return;

        }

    }


    goToStage(
        partNumber,
        nextStageNumber
    );

}


/* =========================================================
   PREVIOUS STAGE BUTTON
========================================================= */

function previousStage(partNumber) {

    if (!partData[partNumber]) {
        return;
    }


    const currentStage =
        partData[partNumber].stage;


    if (currentStage <= 1) {
        return;
    }


    goToStage(
        partNumber,
        currentStage - 1
    );

}


/* =========================================================
   CREATE PRACTICE CARDS
========================================================= */

function createPracticeCards(partNumber) {

    const container =
        document.getElementById(
            "practiceCards" + partNumber
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    practiceQuestions[partNumber].forEach(
        function(item, index) {

            const card =
                document.createElement("div");


            card.className =
                "practice-card";


            const alreadyCompleted =
                partData[partNumber]
                    .practices[index] === true;


            card.innerHTML = `
                <div class="practice-number">
                    ${index + 1}
                </div>

                <div class="practice-question">
                    ${item.question || ""}
                </div>

                <input
                    type="text"
                    class="practice-answer"
                    id="practiceAnswer${partNumber}_${index}"
                    placeholder="Enter your answer..."
                    ${alreadyCompleted ? "disabled" : ""}
                >

                <button
                    class="practice-button"
                    onclick="checkPractice(${partNumber}, ${index})"
                    ${alreadyCompleted ? "disabled" : ""}
                >
                    ${alreadyCompleted ? "✓ COMPLETED" : "CHECK ANSWER"}
                </button>

                <div
                    class="practice-feedback"
                    id="practiceFeedback${partNumber}_${index}"
                >
                    ${alreadyCompleted
                        ? "🎉 Correct! Question completed."
                        : ""}
                </div>
            `;


            container.appendChild(card);

        }
    );


    updatePracticeDisplay(partNumber);

}


/* =========================================================
   CHECK PRACTICE ANSWER
========================================================= */

function checkPractice(
    partNumber,
    questionNumber
) {

    const question =
        practiceQuestions[partNumber][questionNumber];


    if (
        question.question === "" ||
        question.answer === ""
    ) {

        alert(
            "📝 Add the practice question and correct answer first."
        );

        return;
    }


    /* Prevent duplicate rewards */

    if (
        partData[partNumber]
            .practices[questionNumber] === true
    ) {

        return;

    }


    const input =
        document.getElementById(
            "practiceAnswer" +
            partNumber +
            "_" +
            questionNumber
        );


    const feedback =
        document.getElementById(
            "practiceFeedback" +
            partNumber +
            "_" +
            questionNumber
        );


    if (!input || !feedback) {
        return;
    }


    const userAnswer =
        input.value.trim().toLowerCase();


    const correctAnswer =
        question.answer.trim().toLowerCase();


    /* Correct answer */

    if (userAnswer === correctAnswer) {

        partData[partNumber]
            .practices[questionNumber] = true;


        savePartData();


        /* Rewards */

        addCoins(10);

        addXP(5);


        feedback.textContent =
            "Correct! +10 🪙 +5 XP";


        input.disabled =
            true;


        const button =
            input.parentElement.querySelector(
                ".practice-button"
            );


        if (button) {

            button.disabled =
                true;

            button.textContent =
                "✓ COMPLETED";

        }


        updatePracticeDisplay(
            partNumber
        );

    }


    /* Wrong answer */

    else {

        feedback.textContent =
            "❌ Incorrect. Try again!";

    }

}


/* =========================================================
   UPDATE PRACTICE DISPLAY
========================================================= */

function updatePracticeDisplay(partNumber) {

    const part =
        partData[partNumber];


    if (!part) {
        return;
    }


    const completed =
        part.practices
            .filter(Boolean)
            .length;


    const completeBox =
        document.getElementById(
            "practiceComplete" + partNumber
        );


    const applicationButton =
        document.getElementById(
            "applicationButton" + partNumber
        );


    /* Both practices complete */

    if (completed >= 2) {

        if (completeBox) {

            completeBox.style.display =
                "block";

        }


        if (applicationButton) {

            applicationButton.disabled =
                false;

        }

    }


    /* Practices are not complete */

    else {

        if (completeBox) {

            completeBox.style.display =
                "none";

        }


        if (applicationButton) {

            applicationButton.disabled =
                true;

        }

    }

}


/* =========================================================
   COMPLETE APPLICATION / PART
========================================================= */

function completePart(partNumber) {

    const input =
        document.getElementById(
            "applicationAnswer" + partNumber
        );


    const feedback =
        document.getElementById(
            "applicationFeedback" + partNumber
        );


    const correctAnswer =
        applicationAnswers[partNumber];


    if (
        correctAnswer === undefined ||
        correctAnswer === ""
    ) {

        alert(
            "📝 Add the application question and correct answer first."
        );

        return;
    }


    if (!input || !feedback) {
        return;
    }


    const userAnswer =
        input.value.trim().toLowerCase();


    /* Correct answer */

    if (
        userAnswer ===
        correctAnswer.trim().toLowerCase()
    ) {

        feedback.textContent =
            "🎉 Correct! Quest completed!";


        /* Give reward only once */

        if (!applicationRewarded[partNumber]) {

            applicationRewarded[partNumber] =
                true;


            saveApplicationRewards();


            addCoins(20);

            addXP(20);

            addCP(10);

        }


        /* Complete current part */

        partData[partNumber]
            .completed = true;


        savePartData();


        /* Show completion box */

        const completeBox =
            document.getElementById(
                "partComplete" + partNumber
            );


        if (completeBox) {

            completeBox.style.display =
                "block";

        }


        /* Unlock next part */

        if (partNumber < 5) {

            partData[partNumber + 1]
                .unlocked = true;


            savePartData();

        }


        updatePartNavigation();

        updateProgress();


        /*
           Automatically prepare the next part.
           The player can use the button in the completion
           screen to move to the next part.
        */

        if (partNumber < 5) {

            const nextButton =
                document.getElementById(
                    "nextPartButton" + partNumber
                );


            if (nextButton) {

                nextButton.disabled =
                    false;

            }

        }


        /* Level 1 completed */

        if (partNumber === 5) {

            setTimeout(
                function() {

                    finishLevel1();

                },
                500
            );

        }

    }


    /* Wrong answer */

    else {

        feedback.textContent =
            "❌ Incorrect. Try again!";

    }

}


/* =========================================================
   GO TO NEXT PART
========================================================= */

function nextPart(partNumber) {

    if (partNumber >= 5) {

        finishLevel1();

        return;

    }


    const nextPartNumber =
        partNumber + 1;


    if (
        !partData[nextPartNumber].unlocked
    ) {

        alert(
            "🔒 Complete the previous part first!"
        );

        return;

    }


    openPart(
        nextPartNumber
    );

}


/* =========================================================
   UPDATE PART NAVIGATION
========================================================= */

function updatePartNavigation() {

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const button =
            document.getElementById(
                "partNav" + i
            );


        const status =
            document.getElementById(
                "partStatus" + i
            );


        if (!button || !status) {
            continue;
        }


        if (partData[i].completed) {

            button.classList.remove(
                "locked"
            );


            status.textContent =
                "✓ Completed";

        }


        else if (partData[i].unlocked) {

            button.classList.remove(
                "locked"
            );


            status.textContent =
                "Current Quest";

        }


        else {

            button.classList.add(
                "locked"
            );


            status.textContent =
                "🔒 Locked";

        }

    }

}


/* =========================================================
   UPDATE LEVEL PROGRESS
========================================================= */

function updateProgress() {

    let completedParts = 0;


    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        if (partData[i].completed) {

            completedParts++;

        }

    }


    const percentage =
        completedParts * 20;


    const progressText =
        document.getElementById(
            "progressText"
        );


    const progressBar =
        document.getElementById(
            "levelProgress"
        );


    if (progressText) {

        progressText.textContent =
            percentage + "%";

    }


    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }

}


/* =========================================================
   FINISH LEVEL 1
========================================================= */

function finishLevel1() {

    if (!partData[5].completed) {

        alert(
            "🏆 Complete the SRT quest first!"
        );

        return;

    }


    /* Hide all parts */

    document.querySelectorAll(".part-page")
        .forEach(
            function(part) {

                part.classList.remove(
                    "active-part"
                );

            }
        );


    /* Show finished screen */

    const finishedScreen =
        document.getElementById(
            "levelFinished"
        );


    if (finishedScreen) {

        finishedScreen.style.display =
            "block";

    }


    /* Give Level 1 reward only once */

    const levelRewarded =
        localStorage.getItem(
            "triangleQuestLevel1Reward"
        );


    if (!levelRewarded) {

        addCoins(50);

        addXP(50);

        addCP(50);


        localStorage.setItem(
            "triangleQuestLevel1Reward",
            "true"
        );

    }


    /* =========================================
       UNLOCK LEVEL 2
    ========================================= */

    playerData.level = 2;


    /* Save the new level */

    savePlayerData();


    /* Update the player display */

    updatePlayerStats();

}


/* =========================================================
   INITIALIZE PAGE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Load saved stats */

        updatePlayerStats();


        /* Load saved navigation */

        updatePartNavigation();


        /* Load saved progress */

        updateProgress();


        /* Create practice cards */

        for (
            let i = 1;
            i <= 5;
            i++
        ) {

            createPracticeCards(i);

        }


        /* Find the last unlocked part */

        let lastUnlockedPart = 1;


        for (
            let i = 1;
            i <= 5;
            i++
        ) {

            if (
                partData[i].unlocked
            ) {

                lastUnlockedPart =
                    i;

            }

        }


        /* If Level 1 is complete */

        if (
            partData[5].completed
        ) {

            document.querySelectorAll(
                ".part-page"
            ).forEach(
                function(part) {

                    part.classList.remove(
                        "active-part"
                    );

                }
            );


            const finishedScreen =
                document.getElementById(
                    "levelFinished"
                );


            if (finishedScreen) {

                finishedScreen.style.display =
                    "block";

            }

        }


        else {

            /*
               Open the saved stage of the
               last unlocked part.
            */

            openPart(
                lastUnlockedPart
            );

        }

    }
);


/* =========================================================
   TEXT-TO-SPEECH / READ ALOUD
   Adds a speaker button to educational text on the page.
========================================================= */

(function initTextToSpeech() {

    /*
       Check if the browser supports
       the Web Speech API.
    */

    if (
        !("speechSynthesis" in window) ||
        !("SpeechSynthesisUtterance" in window)
    ) {

        console.warn(
            "Text-to-speech is not supported by this browser."
        );

        return;

    }


    /* =====================================================
       TTS BUTTON STYLE
       CSS is created automatically by JavaScript.
    ===================================================== */

    const style =
        document.createElement("style");


    style.textContent = `

        .tts-speak-button {

            display: inline-flex;

            align-items: center;

            justify-content: center;

            margin-left: 8px;

            padding: 4px 8px;

            border: 0;

            border-radius: 8px;

            background: rgba(255,255,255,.12);

            color: inherit;

            cursor: pointer;

            font-size: .85em;

            line-height: 1;

            vertical-align: middle;

        }


        .tts-speak-button:hover {

            background: rgba(255,255,255,.22);

        }


        .tts-speak-button.tts-speaking {

            background: rgba(255,193,7,.25);

        }

    `;


    document.head.appendChild(style);


    /* =====================================================
       CURRENT SPEAKER BUTTON
    ===================================================== */

    let activeButton = null;


    /* =====================================================
       CLEAN TEXT BEFORE SPEAKING
    ===================================================== */

    function cleanSpeechText(text) {

        return text
            .trim()

            .replace(
                /∠/g,
                " angle "
            )

            .replace(
                /△/g,
                " triangle "
            )

            .replace(
                /〜|∼|⩭/g,
                " is similar to "
            )

            .replace(
                /≅/g,
                " is congruent to "
            )

            .replace(
                /→/g,
                " leads to "
            )

            .replace(
                /×/g,
                " times "
            )

            .replace(
                /÷/g,
                " divided by "
            )

            .replace(
                /=/g,
                " equals "
            )

            .replace(
                /\//g,
                " over "
            )

            .replace(
                /\s+/g,
                " "
            );

    }


    /* =====================================================
       STOP CURRENT SPEECH
    ===================================================== */

    function stopSpeaking() {

        speechSynthesis.cancel();


        if (activeButton) {

            activeButton.classList.remove(
                "tts-speaking"
            );


            activeButton.textContent =
                "🔊";


            activeButton = null;

        }

    }


    /* =====================================================
       SPEAK ONE ELEMENT
    ===================================================== */

    function speakElement(
        element,
        button
    ) {

        const text =
            cleanSpeechText(
                element.innerText ||
                element.textContent ||
                ""
            );


        if (!text) {
            return;
        }


        /* Clicking the active button stops speech */

        if (activeButton === button) {

            stopSpeaking();

            return;

        }


        /* Stop another speech first */

        stopSpeaking();


        const utterance =
            new SpeechSynthesisUtterance(
                text
            );


        /*
           English voice.
           The browser chooses the available
           English voice installed on the device.
        */

        utterance.lang =
            "en-US";


        /*
           Slightly slower speed so the
           educational content is easier to follow.
        */

        utterance.rate =
            0.95;


        utterance.pitch =
            1;


        utterance.volume =
            1;


        /* Mark this button as active */

        activeButton =
            button;


        button.classList.add(
            "tts-speaking"
        );


        button.textContent =
            "⏹";


        /* Speech finished */

        utterance.onend =
            function() {

                if (
                    activeButton === button
                ) {

                    button.classList.remove(
                        "tts-speaking"
                    );


                    button.textContent =
                        "🔊";


                    activeButton =
                        null;

                }

            };


        /* Speech error */

        utterance.onerror =
            function() {

                if (
                    activeButton === button
                ) {

                    button.classList.remove(
                        "tts-speaking"
                    );


                    button.textContent =
                        "🔊";


                    activeButton =
                        null;

                }

            };


        /* Start speaking */

        speechSynthesis.speak(
            utterance
        );

    }


    /* =====================================================
       TEXT ELEMENTS THAT SHOULD GET SPEAKER BUTTONS
    ===================================================== */

    const textSelectors = [

        ".learning-sidebar h2",

        ".learning-sidebar h3",

        ".learning-sidebar p",

        ".part-banner span",

        ".part-banner h1",

        ".part-banner p",

        ".stage-badge",

        ".stage h2",

        ".stage-introduction",

        ".lesson-type",

        ".lesson-header h3",

        ".definition-box h3",

        ".definition-box p",

        ".notes-box h3",

        ".notes-box p",

        ".worked-example h3",

        ".worked-example p",

        ".question-box h2",

        ".practice-question",

        ".practice-feedback",

        ".application-card h3",

        ".application-card p",

        ".feedback",

        ".practice-complete",

        ".part-complete h2",

        ".part-complete p",

        ".rewards span",

        ".level-finished .final-label",

        ".level-finished h1",

        ".level-finished p",

        ".final-rewards div"

    ];


    /* =====================================================
       ADD SPEAKER BUTTONS
    ===================================================== */

    function addSpeechButtons(root) {

        const elements =
            root.querySelectorAll
                ? root.querySelectorAll(
                    textSelectors.join(",")
                )
                : [];


        elements.forEach(
            function(element) {

                /*
                   Prevent duplicate buttons.
                */

                if (
                    element.dataset.ttsReady === "true"
                ) {

                    return;

                }


                /*
                   Don't put a speaker button
                   inside another interactive element.
                */

                if (
                    element.closest(
                        "button, a, input, textarea, select"
                    )
                ) {

                    return;

                }


                const text = (

                    element.innerText ||

                    element.textContent ||

                    ""

                ).trim();


                if (!text) {
                    return;
                }


                /* Create speaker button */

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "tts-speak-button";


                button.textContent =
                    "🎶";


                button.title =
                    "Read this text aloud";


                button.setAttribute(
                    "aria-label",
                    "Read this text aloud"
                );


                /* Button click */

                button.addEventListener(
                    "click",
                    function(event) {

                        event.preventDefault();

                        event.stopPropagation();


                        speakElement(
                            element,
                            button
                        );

                    }
                );


                /* Add button */

                element.appendChild(
                    button
                );


                /*
                   Mark element as processed.
                */

                element.dataset.ttsReady =
                    "true";

            }
        );

    }


    /* =====================================================
       INITIAL TEXT
    ===================================================== */

    addSpeechButtons(
        document
    );


    /* =====================================================
       WATCH FOR DYNAMIC CONTENT
       
       Practice questions and feedback are
       generated dynamically by JavaScript,
       so MutationObserver detects them.
    ===================================================== */

    const observer =
        new MutationObserver(
            function(mutations) {

                mutations.forEach(
                    function(mutation) {

                        mutation.addedNodes.forEach(
                            function(node) {

                                if (
                                    node.nodeType ===
                                    Node.ELEMENT_NODE
                                ) {

                                    addSpeechButtons(
                                        node
                                    );

                                }

                            }
                        );

                    }
                );

            }
        );


    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );


    /* =====================================================
       STOP SPEECH WHEN PAGE IS CLOSED
    ===================================================== */

    window.addEventListener(
        "beforeunload",
        stopSpeaking
    );

})();
