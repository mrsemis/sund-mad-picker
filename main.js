const buttons = document.querySelectorAll("#buttons button");
const mealContainer = document.getElementById("mealContainer");
const clickSound = document.getElementById("clickSound");

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

function showMeals(type) {
  mealContainer.innerHTML = "";
  const meals = mealsData[type];
  if (!meals) return;

  playSound();

  meals.forEach((meal, i) => {
    const card = document.createElement("div");
    card.className = "meal-card";

    const title = document.createElement("h2");
    title.textContent = meal.name;

    const ingTitle = document.createElement("h3");
    ingTitle.textContent = "Ingredienser:";

    const ingList = document.createElement("ul");
    meal.ingredients.forEach(i => {
      const li = document.createElement("li");
      li.textContent = i;
      ingList.appendChild(li);
    });

    const stepTitle = document.createElement("h3");
    stepTitle.textContent = "Steps:";

    const stepList = document.createElement("ol");
    meal.steps.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      stepList.appendChild(li);
    });

    card.appendChild(title);
    card.appendChild(ingTitle);
    card.appendChild(ingList);
    card.appendChild(stepTitle);
    card.appendChild(stepList);

    card.style.animationDelay = `${i * 0.1}s`;

    mealContainer.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    showMeals(btn.getAttribute("data-type"));
  });
});

function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  const options = {
    timeZone: "Europe/Copenhagen",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat([], options);
  clock.textContent = formatter.format(new Date());
}

setInterval(updateClock, 1000);
updateClock();
