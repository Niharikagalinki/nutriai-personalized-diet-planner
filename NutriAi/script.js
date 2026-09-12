// ========================================
// NUTRIAI - SMART PERSONALIZED DIET PLANNER
// ========================================

// Get the form
const dietForm = document.getElementById("dietForm");


// ========================================
// MEAL DATABASE
// ========================================

const mealDatabase = {

    vegetarian: {

        breakfast: [
            {
                name: "Oatmeal with banana, almonds and yogurt",
                time: "8:00 AM",
                calories: 400,
                protein: 15,
                ingredients: "Oats, banana, almonds, yogurt"
            },
            {
                name: "Vegetable upma with fresh fruit",
                time: "8:00 AM",
                calories: 350,
                protein: 10,
                ingredients: "Semolina, vegetables, spices, seasonal fruit"
            },
            {
                name: "Idli with sambar and coconut chutney",
                time: "8:00 AM",
                calories: 380,
                protein: 12,
                ingredients: "Idli, lentils, vegetables, coconut"
            },
            {
                name: "Poha with vegetables and peanuts",
                time: "8:00 AM",
                calories: 360,
                protein: 9,
                ingredients: "Flattened rice, vegetables, peanuts, spices"
            },
            {
                name: "Dosa with sambar and fresh fruit",
                time: "8:00 AM",
                calories: 400,
                protein: 11,
                ingredients: "Dosa, lentils, vegetables, seasonal fruit"
            }
        ],

        lunch: [
            {
                name: "Brown rice, dal, mixed vegetables and salad",
                time: "1:00 PM",
                calories: 550,
                protein: 18,
                ingredients: "Brown rice, lentils, vegetables, cucumber, tomato"
            },
            {
                name: "Chapati, paneer curry, vegetables and salad",
                time: "1:00 PM",
                calories: 520,
                protein: 22,
                ingredients: "Whole-wheat chapati, paneer, vegetables, salad"
            },
            {
                name: "Rice, rajma, mixed vegetables and cucumber salad",
                time: "1:00 PM",
                calories: 540,
                protein: 19,
                ingredients: "Rice, kidney beans, vegetables, cucumber"
            },
            {
                name: "Vegetable pulao with curd and salad",
                time: "1:00 PM",
                calories: 500,
                protein: 14,
                ingredients: "Rice, vegetables, curd, salad"
            },
            {
                name: "Chapati, dal, vegetable curry and curd",
                time: "1:00 PM",
                calories: 510,
                protein: 20,
                ingredients: "Whole-wheat chapati, dal, vegetables, curd"
            }
        ],

        snack: [
            {
                name: "Fresh fruit with a handful of almonds",
                time: "4:30 PM",
                calories: 220,
                protein: 6,
                ingredients: "Seasonal fruit, almonds"
            },
            {
                name: "Apple with unsweetened yogurt",
                time: "4:30 PM",
                calories: 180,
                protein: 8,
                ingredients: "Apple, plain yogurt"
            },
            {
                name: "Banana with a small handful of nuts",
                time: "4:30 PM",
                calories: 230,
                protein: 6,
                ingredients: "Banana, mixed nuts"
            },
            {
                name: "Mixed fruit bowl",
                time: "4:30 PM",
                calories: 170,
                protein: 3,
                ingredients: "Apple, banana, orange, seasonal fruits"
            },
            {
                name: "Roasted chickpeas with fresh fruit",
                time: "4:30 PM",
                calories: 210,
                protein: 9,
                ingredients: "Roasted chickpeas, seasonal fruit"
            }
        ],

        dinner: [
            {
                name: "Chapati, paneer/tofu and mixed vegetables",
                time: "8:00 PM",
                calories: 480,
                protein: 22,
                ingredients: "Chapati, paneer/tofu, mixed vegetables"
            },
            {
                name: "Vegetable soup with chapati and paneer",
                time: "8:00 PM",
                calories: 420,
                protein: 19,
                ingredients: "Mixed vegetables, soup, chapati, paneer"
            },
            {
                name: "Brown rice, dal and mixed vegetables",
                time: "8:00 PM",
                calories: 450,
                protein: 17,
                ingredients: "Brown rice, dal, mixed vegetables"
            },
            {
                name: "Chapati with vegetable curry and curd",
                time: "8:00 PM",
                calories: 430,
                protein: 15,
                ingredients: "Chapati, vegetables, curd"
            },
            {
                name: "Vegetable khichdi with salad and yogurt",
                time: "8:00 PM",
                calories: 440,
                protein: 16,
                ingredients: "Rice, lentils, vegetables, salad, yogurt"
            }
        ]
    },


    "non-vegetarian": {

        breakfast: [
            {
                name: "Oatmeal with banana and boiled eggs",
                time: "8:00 AM",
                calories: 420,
                protein: 21,
                ingredients: "Oats, banana, eggs"
            },
            {
                name: "Vegetable omelette with whole-grain toast",
                time: "8:00 AM",
                calories: 390,
                protein: 20,
                ingredients: "Eggs, vegetables, whole-grain bread"
            },
            {
                name: "Boiled eggs with fruit and oatmeal",
                time: "8:00 AM",
                calories: 410,
                protein: 22,
                ingredients: "Eggs, oats, banana, seasonal fruit"
            },
            {
                name: "Egg sandwich with fresh fruit",
                time: "8:00 AM",
                calories: 400,
                protein: 20,
                ingredients: "Eggs, whole-grain bread, vegetables, fruit"
            },
            {
                name: "Omelette with vegetables and whole-grain toast",
                time: "8:00 AM",
                calories: 380,
                protein: 21,
                ingredients: "Eggs, vegetables, whole-grain toast"
            }
        ],

        lunch: [
            {
                name: "Rice, grilled chicken, vegetables and salad",
                time: "1:00 PM",
                calories: 570,
                protein: 35,
                ingredients: "Rice, grilled chicken, vegetables, salad"
            },
            {
                name: "Chapati, chicken curry and mixed vegetables",
                time: "1:00 PM",
                calories: 550,
                protein: 32,
                ingredients: "Chapati, chicken, vegetables, spices"
            },
            {
                name: "Brown rice, grilled fish and vegetable salad",
                time: "1:00 PM",
                calories: 520,
                protein: 34,
                ingredients: "Brown rice, fish, vegetables, salad"
            },
            {
                name: "Rice, chicken and dal with cucumber salad",
                time: "1:00 PM",
                calories: 560,
                protein: 35,
                ingredients: "Rice, chicken, dal, cucumber"
            },
            {
                name: "Chapati, grilled chicken and vegetable curry",
                time: "1:00 PM",
                calories: 530,
                protein: 33,
                ingredients: "Chapati, chicken, vegetables"
            }
        ],

        snack: [
            {
                name: "Fresh fruit with yogurt",
                time: "4:30 PM",
                calories: 180,
                protein: 8,
                ingredients: "Seasonal fruit, plain yogurt"
            },
            {
                name: "Apple with a handful of almonds",
                time: "4:30 PM",
                calories: 220,
                protein: 6,
                ingredients: "Apple, almonds"
            },
            {
                name: "Banana with unsweetened yogurt",
                time: "4:30 PM",
                calories: 190,
                protein: 7,
                ingredients: "Banana, plain yogurt"
            },
            {
                name: "Mixed fruit bowl with nuts",
                time: "4:30 PM",
                calories: 230,
                protein: 6,
                ingredients: "Seasonal fruits, mixed nuts"
            },
            {
                name: "Roasted chickpeas with fresh fruit",
                time: "4:30 PM",
                calories: 210,
                protein: 9,
                ingredients: "Roasted chickpeas, seasonal fruit"
            }
        ],

        dinner: [
            {
                name: "Chapati, grilled chicken and mixed vegetables",
                time: "8:00 PM",
                calories: 480,
                protein: 32,
                ingredients: "Chapati, grilled chicken, vegetables"
            },
            {
                name: "Grilled fish with brown rice and vegetables",
                time: "8:00 PM",
                calories: 500,
                protein: 35,
                ingredients: "Fish, brown rice, mixed vegetables"
            },
            {
                name: "Chicken soup with chapati and salad",
                time: "8:00 PM",
                calories: 430,
                protein: 30,
                ingredients: "Chicken, vegetables, soup, chapati, salad"
            },
            {
                name: "Chapati, chicken curry and vegetables",
                time: "8:00 PM",
                calories: 470,
                protein: 31,
                ingredients: "Chapati, chicken, vegetables"
            },
            {
                name: "Brown rice, grilled chicken and salad",
                time: "8:00 PM",
                calories: 490,
                protein: 34,
                ingredients: "Brown rice, grilled chicken, salad"
            }
        ]
    }
};


// ========================================
// SELECT A RANDOM MEAL
// ========================================

function getRandomMeal(meals, blockedFoods, preferences) {

    let safeMeals = meals.filter(function (meal) {

        const mealText =
            (
                meal.name +
                " " +
                meal.ingredients
            ).toLowerCase();

        return !blockedFoods.some(function (food) {

            return food &&
                mealText.includes(food);

        });

    });


    // If all meals are filtered,
    // keep the original list
    if (safeMeals.length === 0) {

        safeMeals = meals;

    }


    // Try food preference matching
    if (preferences.length > 0) {

        const preferredMeals =
            safeMeals.filter(function (meal) {

                const mealText =
                    (
                        meal.name +
                        " " +
                        meal.ingredients
                    ).toLowerCase();

                return preferences.some(function (preference) {

                    return mealText.includes(preference);

                });

            });


        if (preferredMeals.length > 0) {

            safeMeals = preferredMeals;

        }

    }


    const randomIndex =
        Math.floor(
            Math.random() * safeMeals.length
        );


    return safeMeals[randomIndex];
}


// ========================================
// GENERATE MEAL PLAN
// ========================================

function generateMealPlan(diet, goal, foodPreferences, allergies) {

    const meals = mealDatabase[diet];

    const blockedFoods = allergies
        .toLowerCase()
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    const preferences = foodPreferences
        .toLowerCase()
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");


    function selectMeal(mealList) {

        // Remove meals containing allergic foods
        let availableMeals = mealList.filter(meal => {

            const mealText =
                (meal.name + " " + meal.ingredients).toLowerCase();

            return !blockedFoods.some(food => {

    if (food === "") {
        return false;
    }

    const normalizedFood = food.toLowerCase().trim();

    return mealText.includes(normalizedFood);
});

        });


        // Prefer meals matching user's food preferences
        if (preferences.length > 0) {

            const preferredMeals = availableMeals.filter(meal => {

                const mealText =
                    (meal.name + " " + meal.ingredients).toLowerCase();

                return preferences.some(food =>
                    food !== "" && mealText.includes(food)
                );

            });

            if (preferredMeals.length > 0) {
                availableMeals = preferredMeals;
            }
        }


        // If everything was filtered out, use original meals
        if (availableMeals.length === 0) {
            availableMeals = mealList;
        }


        // Goal-based meal selection
if (goal === "weight-loss") {

    // Prefer lower-calorie meals
    availableMeals.sort((a, b) => a.calories - b.calories);

} else if (goal === "weight-gain") {

    // Prefer higher-calorie meals
    availableMeals.sort((a, b) => b.calories - a.calories);

} else {

    // Prefer moderate-calorie meals
    const averageCalories =
        availableMeals.reduce((sum, meal) => sum + meal.calories, 0)
        / availableMeals.length;

    availableMeals.sort((a, b) =>
        Math.abs(a.calories - averageCalories) -
        Math.abs(b.calories - averageCalories)
    );
}


// Select from the best 3 matching meals
const topMeals = availableMeals.slice(0, 3);

return topMeals[Math.floor(Math.random() * topMeals.length)];
    }


    let breakfast;
    let lunch;
    let snack;
    let dinner;

}
    /* ========================================
   BMI + GOAL BASED CALORIE ADJUSTMENT
======================================== */

if (goal === "weight-loss") {

    if (bmi >= 30) {
        calories -= 400;
    } else if (bmi >= 25) {
        calories -= 300;
    } else {
        calories -= 200;
    }

} else if (goal === "weight-gain") {

    if (bmi < 18.5) {
        calories += 400;
    } else {
        calories += 300;
    }

} else {

    // Maintenance
    calories = calories;
}

// ========================================
// DISPLAY MEAL CARD
// ========================================

function displayMealCard(id, meal) {

    const mealElement =
        document.getElementById(id);


    mealElement.innerHTML = `

        <div class="meal-title">
            ${meal.name}
        </div>

        <div class="meal-details">

            <span>⏰ ${meal.time}</span>

            <span>🔥 ${meal.calories} kcal</span>

            <span>🥩 ${meal.protein} g protein</span>

        </div>

        <p class="meal-ingredients">
            <strong>Ingredients:</strong>
            ${meal.ingredients}
        </p>

    `;
}


// ========================================
// FORM SUBMISSION
// ========================================

dietForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // ========================================
    // GET USER INPUT
    // ========================================

    const name =
        document.getElementById("name").value.trim();

    const age =
        Number(
            document.getElementById("age").value
        );

    const height =
        Number(
            document.getElementById("height").value
        );

    const weight =
        Number(
            document.getElementById("weight").value
        );

if (age < 10 || age > 100) {
    alert("Please enter an age between 10 and 100.");
    return;
}

if (height < 50 || height > 250) {
    alert("Please enter a valid height between 50 and 250 cm.");
    return;
}

if (weight < 20 || weight > 250) {
    alert("Please enter a valid weight between 20 and 250 kg.");
    return;
}

    const goal =
        document.getElementById("goal").value;

    const activity =
        document.getElementById("activity").value;

    const diet =
        document.getElementById("diet").value;

    const foodPreferences =
        document.getElementById("food").value.trim();

    const allergies =
        document.getElementById("allergies").value.trim();


    // ========================================
    // VALIDATION
    // ========================================

    if (
        !name ||
        !age ||
        !height ||
        !weight ||
        !goal ||
        !activity ||
        !diet
    ) {

        alert(
            "Please complete all required fields."
        );

        return;
    }


    // ========================================
    // BMI CALCULATION
    // ========================================

    const heightInMeters =
        height / 100;

    const bmi =
        weight /
        (
            heightInMeters *
            heightInMeters
        );
// ========================================
// BMI CATEGORY
// ========================================

let bmiCategory;

if (bmi < 18.5) {

    bmiCategory = "Underweight";

} else if (bmi < 25) {

    bmiCategory = "Normal Range";

} else if (bmi < 30) {

    bmiCategory = "Overweight";

} else {

    bmiCategory = "Obesity";
}   

// ========================================
// DISPLAY PLAN INSIGHTS
// ========================================

let displayGoal;

if (goal === "weight-loss") {

    displayGoal = "Weight Loss";

} else if (goal === "weight-gain") {

    displayGoal = "Weight Gain";

} else {

    displayGoal = "Maintain Weight";
}


let displayActivity;

if (activity === "low") {

    displayActivity = "Low";

} else if (activity === "moderate") {

    displayActivity = "Moderate";

} else {

    displayActivity = "High";
}


let displayDiet;

if (diet === "vegetarian") {

    displayDiet = "Vegetarian";

} else {

    displayDiet = "Non-Vegetarian";
}


document.getElementById("planGoal").textContent =
    displayGoal;

document.getElementById("planActivity").textContent =
    displayActivity;

document.getElementById("planDiet").textContent =
    displayDiet;

document.getElementById("planBmi").textContent =
    bmi.toFixed(1) + " — " + bmiCategory;

document.getElementById("planFood").textContent =
    foodPreferences.trim() !== ""
        ? foodPreferences
        : "No preference";

document.getElementById("planAllergies").textContent =
    allergies.trim() !== ""
        ? allergies
        : "None specified";


// ========================================
// PLAN EXPLANATION
// ========================================

document.getElementById("planExplanation").textContent =
    `NutriAI created this plan using your ${displayGoal.toLowerCase()} goal, ${displayActivity.toLowerCase()} activity level, ${displayDiet.toLowerCase()} preference and BMI of ${bmi.toFixed(1)}.`;


    // ========================================
    // ESTIMATE DAILY CALORIES
    // ========================================

    /*
        Simple demonstration formula
        for this student project.

        It is NOT medical or clinical advice.
    */

    let calories =
        10 * weight +
        6.25 * height -
        5 * age +
        5;


    // Activity multiplier
    if (activity === "low") {

        calories *= 1.2;

    } else if (activity === "moderate") {

        calories *= 1.55;

    } else if (activity === "high") {

        calories *= 1.725;

    }


    // Goal adjustment
    if (goal === "weight-loss") {

        calories -= 300;

    } else if (goal === "weight-gain") {

        calories += 300;

    }


    calories =
        Math.round(calories);


    // ========================================
    // NUTRITION CALCULATION
    // ========================================

    const protein =
        Math.round(weight * 1.2);


    const fats =
        Math.round(
            (calories * 0.25) / 9
        );


    const carbs =
        Math.round(
            (
                calories -
                protein * 4 -
                fats * 9
            ) / 4
        );


    // ========================================
    // UPDATE DASHBOARD
    // ========================================
    document.getElementById("bmiValue").textContent =
    bmi.toFixed(1);

    document.getElementById("bmiCategory").textContent =
    bmiCategory;

    document.getElementById("calories").textContent =
        calories + " kcal";


    document.getElementById("protein").textContent =
        protein + " g";


    document.getElementById("carbs").textContent =
        carbs + " g";


    document.getElementById("fats").textContent =
        fats + " g";


    // ========================================
    // WELCOME MESSAGE
    // ========================================

    document.getElementById("welcomeMessage").textContent =
        `${name}'s Personalized Nutrition Plan`;


    // ========================================
    // GENERATE MEAL PLAN
    // ========================================

    const mealPlan =
        generateMealPlan(
            diet,
            goal,
            foodPreferences,
            allergies
        );


    // ========================================
    // DISPLAY PROFESSIONAL MEAL CARDS
    // ========================================

    displayMealCard(
        "breakfast",
        mealPlan.breakfast
    );


    displayMealCard(
        "lunch",
        mealPlan.lunch
    );


    displayMealCard(
        "snack",
        mealPlan.snack
    );


    displayMealCard(
        "dinner",
        mealPlan.dinner
    );


    // ========================================
    // SAVE USER DATA
    // ========================================

    savedUserData = {

        diet: diet,

        goal: goal,

        foodPreferences: foodPreferences,

        allergies: allergies

    };


    // Show Generate Another Plan button
    anotherPlanButton.style.display =
        "block";


    // ========================================
    // SCROLL TO RESULTS
    // ========================================

    document.getElementById("results")
        .scrollIntoView({
            behavior: "smooth"
        });


    // ========================================
    // CONSOLE INFORMATION
    // ========================================

    console.log(
        "NutriAI User Profile:"
    );

    console.log(
        "Name:",
        name
    );

    console.log(
        "Age:",
        age
    );

    console.log(
        "Height:",
        height
    );

    console.log(
        "Weight:",
        weight
    );

    console.log(
        "BMI:",
        bmi.toFixed(2)
    );

    console.log(
        "Goal:",
        goal
    );

    console.log(
        "Activity:",
        activity
    );

    console.log(
        "Diet:",
        diet
    );

    console.log(
        "Food Preferences:",
        foodPreferences
    );

    console.log(
        "Allergies:",
        allergies
    );

});


// ========================================
// GENERATE ANOTHER PLAN
// ========================================

const anotherPlanButton =
    document.createElement("button");


anotherPlanButton.textContent =
    "Generate Another Plan 🔄";


anotherPlanButton.className =
    "generate-button";


anotherPlanButton.style.display =
    "none";


anotherPlanButton.style.margin =
    "25px auto 0";


anotherPlanButton.style.maxWidth =
    "300px";


const mealPlanSection =
    document.querySelector(".meal-plan");


mealPlanSection.appendChild(
    anotherPlanButton
);


// ========================================
// SAVED USER DATA
// ========================================

let savedUserData = null;


// ========================================
// GENERATE ANOTHER PLAN
// ========================================

anotherPlanButton.addEventListener(
    "click",
    function () {

        if (!savedUserData) {
            return;
        }


        const newMealPlan =
            generateMealPlan(
                savedUserData.diet,
                savedUserData.goal,
                savedUserData.foodPreferences,
                savedUserData.allergies
            );


        displayMealCard(
            "breakfast",
            newMealPlan.breakfast
        );


        displayMealCard(
            "lunch",
            newMealPlan.lunch
        );


        displayMealCard(
            "snack",
            newMealPlan.snack
        );


        displayMealCard(
            "dinner",
            newMealPlan.dinner
        );
        
        document.getElementById("regenerateMessage").textContent =
    "✨ A new personalized meal plan has been generated!";

        console.log(
            "Another personalized meal plan generated."
        );

    }
);