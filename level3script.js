/* =========================================================
   TRIANGLE QUEST - LEVEL 3
   TWO-COLUMN PROOF
========================================================= */


/* =========================================================
   PLAYER DATA
========================================================= */

let playerData = JSON.parse(
    localStorage.getItem("triangleQuestPlayer")
) || {
    level: 1,
    coins: 100,
    xp: 0,
    cp: 0
};


/* =========================================================
   LEVEL 3 DATA
========================================================= */

let level3Data = JSON.parse(
    localStorage.getItem("TriangleQuestLevel3")
) || {
    currentStage: 1,
    completedStages: [false, false, false, false, false],
    rewardedStages: [false, false, false, false, false],
    levelRewarded: false,
    specialRewardsGranted: false
};


/* =========================================================
   CHECK IF LEVEL 3 IS UNLOCKED
========================================================= */

if (playerData.level < 3) {
    alert(
        "🔒 Level 3 is locked!\n\n" +
        "Complete Level 2 first."
    );

    window.location.href = "index.html";
}


/* =========================================================
   SAVE PLAYER
========================================================= */

function savePlayerData() {
    localStorage.setItem(
        "triangleQuestPlayer",
        JSON.stringify(playerData)
    );
}


/* =========================================================
   SAVE LEVEL 3
========================================================= */

function saveLevel3Data() {
    localStorage.setItem(
        "TriangleQuestLevel3",
        JSON.stringify(level3Data)
    );
}


/* =========================================================
   UPDATE PLAYER STATS
========================================================= */

function updatePlayerStats() {
    document.getElementById("coins").textContent =
        playerData.coins;

    document.getElementById("xp").textContent =
        playerData.xp;

    document.getElementById("cp").textContent =
        playerData.cp;
}


/* =========================================================
   REWARD FUNCTIONS
========================================================= */

function addCoins(amount) {
    playerData.coins += amount;
    savePlayerData();
    updatePlayerStats();
}


function addXP(amount) {
    playerData.xp += amount;
    savePlayerData();
    updatePlayerStats();
}


function addCP(amount) {
    playerData.cp += amount;

    if (playerData.cp > 100) {
        playerData.cp = 100;
    }

    savePlayerData();
    updatePlayerStats();
}


/* =========================================================
   STAGE INFORMATION
========================================================= */

const stages = {

    1: {
        title: "SSS Similarity",
        subtitle: "Side-Side-Side Similarity",
        image: "sss-proof.png",

        recap: `<strong>SSS Similarity</strong> means that the three pairs of corresponding sides of two triangles are proportional.<br><br>If AB / DE = BC / EF = AC / DF, then △ABC ~ △DEF.`,

        notes: [
            "SSS means Side-Side-Side.",
            "Compare all three pairs of corresponding sides.",
            "The ratios must be equal.",
            "Keep corresponding sides in the same order.",
            "The final reason is the SSS Similarity Theorem."
        ],

        steps: [
            "Identify the corresponding sides.",
            "Write the first pair of corresponding sides as a ratio.",
            "Write the second pair of corresponding sides as a ratio.",
            "Write the third pair of corresponding sides as a ratio.",
            "Show that all three ratios are equal.",
            "Conclude that the triangles are similar by SSS."
        ],

        given: "AB = 4, BC = 6, AC = 8 DE = 8, EF = 12, DF = 16",
        prove: "△ABC ~ △DEF",

        example: [
            ["AB = 4, BC = 6, AC = 8 DE = 8, EF = 12, DF = 16", "Given"],
            ["AB/DE = 4/8 = 1/2", "Substitution"],
            ["BC/EF = 6/12 = 1/2", "Substitution"],
            ["AC/DF = 8/16 = 1/2", "Substitution"],
            ["AB/DE = BC/EF = AC/DF", "Transitive Property of Substitution"],
            ["△ABC ~ △DEF", "SSS Similarity Theorem"]
        ],

        

        activity: [
            {
                statement: "AB = 4, BC = 6, AC = 8 DE = 8, EF = 12, DF = 16",
                reason: "Given"
            },

            {
                statement: "AB/DE = 4/8 = 1/2",
                reason: "1, Substitution and Simplification"
            },

            {
                statement: " BC/EF = 6/12 = 1/2",
                reason: "1, Substitution and Simplification"
            },

            {
                statement: "AC/DF = 8/16 = 1/2",
                reason: "1, Substitution and Simplification"
            },

            {
                statement: "AB/DE = BC/EF = AC/DF",
                reason: "2, 3, 4, Transitive Property of Equality"
            },

            {
                statement: "△ABC ∼ △DEF",
                reason: "5, SSS, Similarity Theorem"
            }
        ]
    },


    2: {
        title: "AA Similarity",
        subtitle: "Angle-Angle Similarity",
        image: "aa-proof.png",

        recap: `<strong>AA Similarity</strong> says that if two pairs of corresponding angles are congruent, the triangles are similar.<br><br>Only two pairs of matching angles are needed.`,

        notes: [
            "AA means Angle-Angle.",
            "Only two pairs of corresponding angles are needed.",
            "The third angle pair follows from the triangle angle sum.",
            "Keep the angle order consistent.",
            "The final reason is the AA Similarity Postulate."
        ],

        steps: [
            "Identify the first pair of corresponding angles.",
            "Write the second pair of corresponding angles.",
            "Convert angle congruence into equal angle measures.",
            "Conclude that the triangles are similar by AA."
        ],

        given: "m∠A = 60°, m∠D = 60°, m∠B = 80°, m∠E = 80°",
        prove: "△ABC ~ △DEF",

        example: [
            ["m∠A = 60°, m∠D = 60°, m∠B = 80°, m∠E = 80", "Given"],
            ["m∠A = m∠D and m∠B = m∠E", "Transitive Property of Equality"],
            ["∠A  ≅ ∠D and ∠B ≅ ∠E", "Definition of Congruent Angles"],
            ["△ABC ~ △DEF", "AA Similarity Postulate"]
        ],

        activity: [
            {
                statement: "m∠A = 60°, m∠D = 60°, m∠B = 80°, m∠E = 80°",
                reason: "Given"
            },

            {
                statement: "m∠A = m∠D and m∠B = m∠E",
                reason: "1, Transitive Property of Equality"
            },

            {
                statement: "∠A  ≅ ∠D and ∠B ≅ ∠E",
                reason: "2, Definition of Congruent Angles"
            },

            {
                statement: "△ABC ~ △DEF",
                reason: "3, AA Similarity Theorem"
            }
        ]
    },


    3: {
        title: "SAS Similarity",
        subtitle: "Side-Angle-Side Similarity",
        image: "sas-proof.png",

        recap: `<strong>SAS Similarity</strong> is used when two pairs of corresponding sides are proportional and the included angles are congruent.<br><br>The angle must be between the two compared sides.`,

        notes: [
            "SAS means Side-Angle-Side.",
            "Two corresponding side ratios must be equal.",
            "The included angles must be congruent.",
            "The angle must be between the two compared sides.",
            "The final reason is the SAS Similarity Postulate."
        ],

        steps: [
            "Identify the first pair of proportional sides.",
            "Write the first side ratio.",
            "Identify the second pair of proportional sides.",
            "Show that the two side ratios are equal.",
            "Identify the included congruent angles.",
            "Conclude that the triangles are similar by SAS."
        ],

        given: "AB = 6, AC = 8, DE = 12, DF = 16    ",
        prove: "△ABC ~ △DEF",

        example: [
            ["AB = 6, AC = 8, DE = 12, DF = 16", "Given"],
            ["AB/DE = 6/12 = 1/2", "Substitution and simplification"],
            ["AC/DF = 8/16 = 1/2", "Substitution and simplification"],
            ["∠A ≅ ∠D", "Given"],
            ["△ABC ~ △DEF", "SAS Similarity Postulate"]
        ],

        activity: [
            {
                statement: "AB = 6, AC = 8, DE = 12, DF = 16",
                reason: "Given"
            },

            {
                statement: "AB/DE = 6/12 = 1/2",
                reason: "1, Substitution and Simplification"
            },

            {
                statement: "AC/DF = 8/16 = 1/2",
                reason: "1, Substitution and Simplification"
            },

            {
                statement: "∠A ≅ ∠D",
                reason: "Given"
            },

            {
                statement: "AB/DE =  AC/DF",
                reason: "2, 3, Transitive Property of Equality"
            },

            {
                statement: "△ABC ~ △DEF",
                reason: "SAS Similarity Theorem"
            }
        ]
    },


    4: {
        title: "Right Triangle Similarity",
        subtitle: "Similarity from an Altitude",
        image: "rts-proof.png",

        recap: `When an altitude is drawn from the right angle of a right triangle to its hypotenuse, it creates smaller right triangles.<br><br>The triangles are similar because they contain matching right angles and a common acute angle.`,

        notes: [
            "The altitude is perpendicular to the hypotenuse.",
            "Perpendicular lines create right angles.",
            "All right angles are congruent.",
            "A shared angle can be used as a common angle.",
            "AA Similarity can prove the triangles are similar."
        ],

        steps: [
            "Identify the perpendicular altitude.",
            "Recognize the right angles created by the perpendicular lines.",
            "State that the right angles are congruent.",
            "Identify the common acute angle.",
            "Use the two angle relationships to establish AA.",
            "Conclude that the triangles are similar by AA."
        ],

        given: "∠A = 90°, AD ⊥ BC, D lies on BC.",
        prove: "△ABC ∼ △ABD ",

        example: [
            ["CD ⟂ AB", "Given"],
            ["∠ADC and ∠ACB are right angles", "Perpendicular lines form right angles"],
            ["∠ADC ≅ ∠ACB", "All right angles are congruent"],
            ["∠CAD ≅ ∠CAB", "Common Angle"],
            ["△ACD ~ △ACB", "AA Similarity"]
        ],

        activity: [
            {
                statement: "∠A = 90°, AD ⊥ BC, D lies on BC.",
                reason: "Given"
            },

            {
                statement: "∠BAC is a right angle",
                reason: "1, Definition of Right Angles"
            },

            {
                statement: "∠ADB is a right angle",
                reason: "1, Definition of Perpendicular Lines"
            },

            {
                statement: "∠BAC ≅ ∠ADB",
                reason: "2, 3, Right Angle Congruence Theorem"
            },

            {
                statement: "∠B ≅ ∠B",
                reason: "Reflexive Property of Congruence"
            },

            {
                statement: "△ABC ∼ △ABD ",
                reason: "4,5 AA Similarity"
            }
        ]
    },


    5: {
        title: "Special Right Triangle",
        subtitle: "45°-45°-90° Similarity",
        image: "srt-proof.png",

        recap: `A 45°-45°-90° triangle is a special right triangle.<br><br>Its angles are <strong>45°, 45°, and 90°</strong>, and its side ratio is <strong>1 : 1 : √2</strong>.`,

        notes: [
            "A 45°-45°-90° triangle has two equal legs.",
            "The two acute angles are both 45°.",
            "The hypotenuse is √2 times a leg.",
            "All 45°-45°-90° triangles have the same shape.",
            "Therefore, any two 45°-45°-90° triangles are similar."
        ],

        steps: [
            "Identify the first 45° angle.",
            "Identify the second 45° angle.",
            "Match the first pair of corresponding angles.",
            "Match the second pair of corresponding angles.",
            "Use the two congruent angle pairs to establish AA.",
            "Conclude that the triangles are similar by AA."
        ],

        given: "△ABC and △DEF are both 45°-45°-90° triangles.",
        prove: "△ABC ~ △DEF",

        example: [
            ["∠A = 45°", "Given"],
            ["∠D = 45°", "Given"],
            ["∠A ≅ ∠D", "Definition of Congruent Angles"],
            ["∠B ≅ ∠E", "Both are 45° angles"],
            ["△ABC ~ △DEF", "AA Similarity"]
        ],

        activity: [
            {
                statement: "∠A = 45°",
                reason: "Given"
            },

            {
                statement: "∠D = 45°",
                reason: "Given"
            },

            {
                statement: "∠A ≅ ∠D",
                reason: "Definition of Congruent Angles"
            },

            {
                statement: "∠B ≅ ∠E",
                reason: "Both are 45° angles"
            },

            {
                statement: "∠A ≅ ∠D and ∠B ≅ ∠E",
                reason: "Two pairs of corresponding angles are congruent"
            },

            {
                statement: "△ABC ~ △DEF",
                reason: "AA Similarity"
            }
        ]
    }
};


/* =========================================================
   NORMALIZE ANSWERS
   Makes checking easier.
========================================================= */

function normalizeAnswer(text) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/°/g, "")
        .replace(/−/g, "-")
        .replace(/–/g, "-")
        .replace(/≅/g, "~")
        .replace(/△/g, "triangle")
        .replace(/∠/g, "angle")
        .replace(/√/g, "sqrt")
        .replace(/\./g, "");
}


/* =========================================================
   ACCEPTED ANSWERS
========================================================= */

function answerMatches(userAnswer, correctAnswer) {

    const user =
        normalizeAnswer(userAnswer);

    const correct =
        normalizeAnswer(correctAnswer);

    if (user === correct) {
        return true;
    }


    /* Common alternative wording */

    const alternatives = {

        "givensimplifytheratio": [
            "given",
            "givenandsimplify",
            "givenandsimplifytheratio"
        ],

        "transitivepropertyofequality": [
            "transitiveproperty",
            "transitivepropertyofequality"
        ],

        "definitionofcongruentangles": [
            "definitionofcongruentangles",
            "definitionofcongruentangle"
        ],

        "aasimilarity": [
            "aasimilarity",
            "aasimilaritypostulate",
            "aa"
        ],

        "aasimilaritypostulate": [
            "aasimilarity",
            "aasimilaritypostulate",
            "aa"
        ],

        "sassimilaritypostulate": [
            "sassimilarity",
            "sassimilaritypostulate",
            "sas"
        ],

        "ssssimilaritytheorem": [
            "ssssimilarity",
            "ssssimilaritytheorem",
            "sss"
        ],

        "commonangle": [
            "commonangle",
            "sharedangle"
        ]
    };


    for (const key in alternatives) {

        const normalizedKey =
            normalizeAnswer(key);

        if (correct === normalizedKey) {

            return alternatives[key]
                .some(function(item) {

                    return user ===
                        normalizeAnswer(item);

                });
        }
    }

    return false;
}


/* =========================================================
   OPEN STAGE
========================================================= */

function openStage(stageNumber) {

    const previousStage =
        stageNumber - 1;

    if (
        previousStage > 0 &&
        !level3Data.completedStages[previousStage - 1]
    ) {

        alert(
            "🔒 Complete the previous stage first!"
        );

        return;
    }


    level3Data.currentStage =
        stageNumber;

    saveLevel3Data();

    renderStage(stageNumber);
}


/* =========================================================
   RENDER STAGE
========================================================= */

function renderStage(stageNumber) {

    const stage =
        stages[stageNumber];

    const container =
        document.getElementById(
            "stageContainer"
        );

    const completed =
        level3Data.completedStages[
            stageNumber - 1
        ];


    /* =====================================================
       CREATE ANSWER BANK
    ===================================================== */

    const statementChoices = [
        ...new Set(
            stage.activity.map(function(row) {
                return row.statement;
            })
        )
    ];

    const reasonChoices = [
        ...new Set(
            stage.activity.map(function(row) {
                return row.reason;
            })
        )
    ];


    const answerBankStatements =
        statementChoices.map(function(answer) {

            return `
                <div class="answer-bank-item">
                    ${answer}
                </div>
            `;

        }).join("");


    const answerBankReasons =
        reasonChoices.map(function(answer) {

            return `
                <div class="answer-bank-item">
                    ${answer}
                </div>
            `;

        }).join("");


    /* =====================================================
       CREATE DROPDOWN OPTIONS
    ===================================================== */

    const statementOptions =
        statementChoices.map(function(answer) {

            return `
                <option value="${answer}">
                    ${answer}
                </option>
            `;

        }).join("");


    const reasonOptions =
        reasonChoices.map(function(answer) {

            return `
                <option value="${answer}">
                    ${answer}
                </option>
            `;

        }).join("");


    /* =====================================================
       BUILD PAGE
    ===================================================== */

    container.innerHTML = `

        <div class="stage-card">

            <div class="stage-title">

                <div class="stage-number">
                    ${stageNumber}
                </div>

                <div>
                    <h2>${stage.title}</h2>
                </div>

            </div>


            <p class="topic-description">
                ${stage.subtitle}
            </p>


            <!-- RECAP -->

            <div class="recap-box">

                <h3>Recap</h3>

                <p>
                    ${stage.recap}
                </p>

            </div>


            <!-- IMPORTANT NOTES -->

            <div class="note-box">

                <h3>
                    Important Notes
                </h3>

                <ul>

                    ${stage.notes.map(function(note) {

                        return `
                            <li>
                                ${note}
                            </li>
                        `;

                    }).join("")}

                </ul>

            </div>


            <!-- STEPS -->

            <div class="steps-box">

                <h3>
                    How to Make a Two-Column Proof
                </h3>


                ${stage.steps.map(function(step, index) {

                    return `

                        <div class="proof-step">

                            <div class="step-number">
                                ${index + 1}
                            </div>

                            <p>
                                ${step}
                            </p>

                        </div>

                    `;

                }).join("")}

            </div>


            <!-- EXAMPLE -->

            <div class="example-box">

                <h3>
                    👀 Completed Example
                </h3>


                <div class="example-given">

                    <strong>Given:</strong>
                    ${stage.given}

                    <br><br>

                    <strong>Prove:</strong>
                    ${stage.prove}

                </div>


                <table class="proof-table">

                    <thead>

                        <tr>

                            <th>
                                Statements
                            </th>

                            <th>
                                Reasons
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${stage.example.map(function(row) {

                            return `

                                <tr>

                                    <td>
                                        ${row[0]}
                                    </td>

                                    <td>
                                        ${row[1]}
                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>

            </div>


            <!-- ACTIVITY -->

            <div class="activity-box">

                <div class="activity-title">

                    <h3>
                        Two-Column Proof Challenge
                    </h3>

                    <span class="points">
                        +10 Coins
                    </span>

                </div>


                <p class="topic-description">

                    Choose the correct answer from the
                    dropdown boxes. Use the Answer Bank
                    below as a hint.

                </p>


                <!-- FIGURE -->

                <div class="figure-box">

                    ${
                        stage.image

                            ? `
                                <img
                                    src="${stage.image}"
                                    alt="${stage.title} triangle diagram"
                                    onerror="this.style.display='none';"
                                >
                            `

                            : `
                                <div class="blank-activity-image">
                                    IMAGE PLACEHOLDER
                                </div>
                            `
                    }


                    <p class="figure-caption">

                        Use the figure to help visualize
                        the proof.

                    </p>

                </div>


                <!-- GIVEN / PROVE -->

                <div class="given-prove">

                    <div class="given-card">

                        <strong>GIVEN</strong>

                        <p>
                            ${stage.given}
                        </p>

                    </div>


                    <div class="prove-card">

                        <strong>PROVE</strong>

                        <p>
                            ${stage.prove}
                        </p>

                    </div>

                </div>


                <!-- ANSWER BANK -->

                <div class="answer-bank">

                    <div class="answer-bank-title">
                        💡 ANSWER BANK
                    </div>


                    <p class="answer-bank-help">

                        These are the possible answers.
                        Choose the correct one from the
                        dropdown boxes below.

                    </p>


                    <div class="answer-bank-columns">


                        <!-- STATEMENTS -->

                        <div class="answer-bank-section">

                            <h4>
                                STATEMENTS
                            </h4>

                            <div class="answer-bank-list">

                                ${answerBankStatements}

                            </div>

                        </div>


                        <!-- REASONS -->

                        <div class="answer-bank-section">

                            <h4>
                                REASONS
                            </h4>

                            <div class="answer-bank-list">

                                ${answerBankReasons}

                            </div>

                        </div>

                    </div>

                </div>


                <!-- PROOF TABLE -->

                <table class="activity-table">

                    <thead>

                        <tr>

                            <th>
                                #
                            </th>

                            <th>
                                STATEMENTS
                            </th>

                            <th>
                                REASONS
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${stage.activity.map(function(row, index) {

                            const statementShown =
                                index % 2 === 1;


                            return `

                                <tr>

                                    <td>
                                        ${index + 1}
                                    </td>


                                    <td>

                                        ${
                                            statementShown

                                                ? `
                                                    <div class="shown-answer">
                                                        ${row.statement}
                                                    </div>
                                                `

                                                : `
                                                    <select
                                                        class="answer-select"
                                                        id="statement-${stageNumber}-${index}"
                                                    >

                                                        <option value="">
                                                            Choose statement...
                                                        </option>

                                                        ${statementOptions}

                                                    </select>
                                                `
                                        }

                                    </td>


                                    <td>

                                        ${
                                            statementShown

                                                ? `
                                                    <select
                                                        class="answer-select"
                                                        id="reason-${stageNumber}-${index}"
                                                    >

                                                        <option value="">
                                                            Choose reason...
                                                        </option>

                                                        ${reasonOptions}

                                                    </select>
                                                `

                                                : `
                                                    <div class="shown-answer">
                                                        ${row.reason}
                                                    </div>
                                                `
                                        }

                                    </td>

                                </tr>

                            `;

                        }).join("")}

                    </tbody>

                </table>


                <!-- FEEDBACK -->

                <div
                    id="feedback-${stageNumber}"
                    class="feedback"
                >
                </div>


                <!-- BUTTONS -->

                <div class="action-row">

                    <button
                        class="check-button"
                        id="checkButton-${stageNumber}"
                        onclick="checkProof(${stageNumber})"
                    >
                        CHECK PROOF
                    </button>


                    <button
                        class="next-button"
                        id="nextButton-${stageNumber}"
                        onclick="completeStage(${stageNumber})"
                    >
                        NEXT STAGE →
                    </button>

                </div>

            </div>

        </div>

    `;


    if (completed) {
        showCompletedStage(stageNumber);
    }


    updateStageButtons();

    updateProgress();
}


/* =========================================================
   CHECK PROOF
========================================================= */

function checkProof(stageNumber) {

    const stage =
        stages[stageNumber];

    let allCorrect = true;
    let correctCount = 0;


    stage.activity.forEach(function(row, index) {

        const statementInput =
            document.getElementById(
                `statement-${stageNumber}-${index}`
            );

        const reasonInput =
            document.getElementById(
                `reason-${stageNumber}-${index}`
            );


        const statementCorrect =
            statementInput
                ? answerMatches(
                    statementInput.value,
                    row.statement
                )
                : true;


        const reasonCorrect =
            reasonInput
                ? answerMatches(
                    reasonInput.value,
                    row.reason
                )
                : true;


        /* STATEMENT */

        if (statementInput) {

            statementInput.classList.remove(
                "correct",
                "wrong"
            );


            if (statementCorrect) {

                statementInput.classList.add(
                    "correct"
                );

            } else {

                statementInput.classList.add(
                    "wrong"
                );

                allCorrect = false;
            }
        }


        /* REASON */

        if (reasonInput) {

            reasonInput.classList.remove(
                "correct",
                "wrong"
            );


            if (reasonCorrect) {

                reasonInput.classList.add(
                    "correct"
                );

            } else {

                reasonInput.classList.add(
                    "wrong"
                );

                allCorrect = false;
            }
        }


        if (
            statementCorrect &&
            reasonCorrect
        ) {

            correctCount++;
        }

    });


    const feedback =
        document.getElementById(
            `feedback-${stageNumber}`
        );


    if (allCorrect) {

        feedback.className =
            "feedback success";

        feedback.textContent =
            "🎉 Excellent! Your entire two-column proof is correct!";


        document.getElementById(
            `nextButton-${stageNumber}`
        ).style.display =
            "block";


        if (
            !level3Data.completedStages[
                stageNumber - 1
            ]
        ) {

            level3Data.completedStages[
                stageNumber - 1
            ] = true;

            saveLevel3Data();
        }


    } else {

        feedback.className =
            "feedback error";


        feedback.textContent =
            `You got ${correctCount} out of ${stage.activity.length} steps correct. ` +
            "Check the red boxes and try again.";

    }
}


/* =========================================================
   COMPLETE STAGE
========================================================= */

function completeStage(stageNumber) {

    if (
        !level3Data.completedStages[
            stageNumber - 1
        ]
    ) {

        alert(
            "Complete the proof first!"
        );

        return;
    }


    /* Reward once */

    if (
        !level3Data.rewardedStages[
            stageNumber - 1
        ]
    ) {

        addCoins(10);
        addXP(10);


        level3Data.rewardedStages[
            stageNumber - 1
        ] = true;


        saveLevel3Data();
    }


    /* Last stage */

    if (stageNumber === 5) {

        finishLevel3();

        return;
    }


    const nextStage =
        stageNumber + 1;


    level3Data.currentStage =
        nextStage;


    saveLevel3Data();

    openStage(nextStage);
}


/* =========================================================
   SHOW COMPLETED STAGE
========================================================= */

function showCompletedStage(stageNumber) {

    const stage =
        stages[stageNumber];


    stage.activity.forEach(function(row, index) {

        const statementInput =
            document.getElementById(
                `statement-${stageNumber}-${index}`
            );

        const reasonInput =
            document.getElementById(
                `reason-${stageNumber}-${index}`
            );


        if (statementInput) {

            statementInput.value =
                row.statement;

            statementInput.classList.add(
                "correct"
            );
        }


        if (reasonInput) {

            reasonInput.value =
                row.reason;

            reasonInput.classList.add(
                "correct"
            );
        }

    });


    document.getElementById(
        `feedback-${stageNumber}`
    ).className =
        "feedback success";


    document.getElementById(
        `feedback-${stageNumber}`
    ).textContent =
        "✅ This stage is already completed!";


    document.getElementById(
        `nextButton-${stageNumber}`
    ).style.display =
        "block";
}


/* =========================================================
   UPDATE SIDEBAR
========================================================= */

function updateStageButtons() {

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        const button =
            document.getElementById(
                `stageButton${i}`
            );


        if (!button) {
            continue;
        }


        button.classList.remove(
            "active",
            "locked",
            "completed"
        );


        if (
            level3Data.completedStages[
                i - 1
            ]
        ) {

            button.classList.add(
                "completed"
            );
        }


        if (
            i === level3Data.currentStage
        ) {

            button.classList.add(
                "active"
            );
        }


        if (
            i > 1 &&
            !level3Data.completedStages[
                i - 2
            ]
        ) {

            button.classList.add(
                "locked"
            );
        }

    }
}


/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const completedCount =
        level3Data.completedStages
            .filter(Boolean)
            .length;


    const currentStage =
        level3Data.currentStage;


    document.getElementById(
        "progressText"
    ).textContent =
        `Stage ${currentStage} of 5`;


    const percentage =
        (completedCount / 5) * 100;


    document.getElementById(
        "progressFill"
    ).style.width =
        Math.max(
            20,
            percentage
        ) + "%";
}


/* =========================================================
   LEVEL 3 SPECIAL REWARDS
   Grants the new character icon + learning material
   only once, and sends both to the Items inventory.
========================================================= */

function grantLevel3SpecialRewards() {

    let purchasedItems =
        JSON.parse(
            localStorage.getItem("triangleQuestPurchasedItems")
        ) || [];

    const specialRewards = [
        "LEVEL3_NEW_CHARACTER",
        "LEVEL3_UNLIMITED_ED"
    ];

    specialRewards.forEach(function(itemId) {

        if (!purchasedItems.includes(itemId)) {
            purchasedItems.push(itemId);
        }

    });

    localStorage.setItem(
        "triangleQuestPurchasedItems",
        JSON.stringify(purchasedItems)
    );

    level3Data.specialRewardsGranted = true;

    saveLevel3Data();
}


/* =========================================================
   FINISH LEVEL 3
========================================================= */

function finishLevel3() {

    const allCompleted =
        level3Data.completedStages
            .every(Boolean);


    if (!allCompleted) {

        alert(
            "🏆 Complete all five proof stages first!"
        );

        return;
    }


    if (!level3Data.levelRewarded) {

        addCoins(50);
        addXP(50);
        addCP(50);

        level3Data.levelRewarded =
            true;

        saveLevel3Data();
    }

    /* Grant the special character + learning material once. */
    if (!level3Data.specialRewardsGranted) {
        grantLevel3SpecialRewards();
    }


    document.getElementById(
        "stageContainer"
    ).style.display =
        "none";


    document.getElementById(
        "levelFinished"
    ).style.display =
        "block";
}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    window.location.href =
        "index.html";
}


/* =========================================================
   OPEN REWARDS / ITEMS
========================================================= */

function goToRewards() {

    window.location.href =
        "items.html";
}


/* =========================================================
   TEXT TO SPEECH
========================================================= */

function speakText(text) {

    if (!window.speechSynthesis) {

        alert(
            "Text-to-speech is not supported by this browser."
        );

        return;
    }


    window.speechSynthesis.cancel();


    const cleanText =
        String(text)

            .replace(/<[^>]*>/g, " ")

            .replace(/&amp;/g, "&")

            .replace(/&lt;/g, "<")

            .replace(/&gt;/g, ">")

            .replace(/&nbsp;/g, " ")

            .replace(/\s+/g, " ")

            .trim();


    if (!cleanText) {
        return;
    }


    const utterance =
        new SpeechSynthesisUtterance(
            cleanText
        );


    utterance.rate = 0.9;
    utterance.pitch = 1;


    window.speechSynthesis.speak(
        utterance
    );
}


function addLevel3SpeechButton() {

    const area =
        document.querySelector(
            ".content-area"
        );


    if (
        !area ||
        document.getElementById(
            "level3SpeechButton"
        )
    ) {
        return;
    }


    const button =
        document.createElement(
            "button"
        );


    button.id =
        "level3SpeechButton";


    button.type =
        "button";


    button.textContent =
        "🔊 READ ALOUD";


    button.style.cssText =
        "margin: 0 0 18px 0; padding: 10px 16px; border: 0; border-radius: 10px; cursor: pointer; font-weight: 700;";


    button.onclick =
        function() {

            const container =
                document.getElementById(
                    "stageContainer"
                );


            speakText(
                container
                    ? container.innerText
                    : area.innerText
            );
        };


    area.insertBefore(
        button,
        area.firstElementChild
    );
}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updatePlayerStats();

        renderStage(
            level3Data.currentStage
        );

        addLevel3SpeechButton();

    }
);