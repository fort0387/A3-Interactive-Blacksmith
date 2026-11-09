
const forge = document.querySelector("#forge");
const heatValue = document.querySelector("#heat-value");
const swordCount = document.querySelector("#sword-count");
const forgeStatus = document.querySelector("#forge-status");
const forgeImage = document.querySelector("#forge-image");
const actionMessage = document.querySelector("#action-message");

const heatForm = document.querySelector("#heat-form");
const heatInput = document.querySelector("#heat-input");
const makeSwordButton = document.querySelector("#make-sword");
const resetForgeButton = document.querySelector("#reset-forge");


let forgeHeat = 20;
let swordsMade = 0;

// 3. Get the forge status
function getForgeStatus(heat) {
  if (heat < 30) {
    return "Too cold";
  } else if (heat < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

function updateForge() {
  heatValue.textContent = forgeHeat;
  swordCount.textContent = swordsMade;

  const status = getForgeStatus(forgeHeat);
  forgeStatus.textContent = status;

  
  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (forgeHeat < 30) {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (forgeHeat < 70) {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";
  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}


function heatForge(amount) {
  forgeHeat += amount;

  if (forgeHeat > 100) {
    forgeHeat = 100;
    actionMessage.textContent =
      "Added " + amount + " heat. The forge is at its maximum of 100.";
  } else {
    actionMessage.textContent = "Added " + amount + " heat.";
  }

  updateForge();
}


function makeSword() {
  if (forgeHeat < 30) {
    actionMessage.textContent =
      "The forge is too cold. You need at least 30 heat to make a sword.";
    return;
  }

  forgeHeat -= 30;
  swordsMade++;

  actionMessage.textContent = "A sword has been successfully forged.";

  updateForge();
}


function resetForge() {
  forgeHeat = 20;
  swordsMade = 0;

  heatInput.value = "";
  actionMessage.textContent = "";

  updateForge();
}


heatForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const inputValue = heatInput.value.trim();
  const amount = Number(inputValue);

  if (
    inputValue === "" ||
    !Number.isFinite(amount) ||
    !Number.isInteger(amount) ||
    amount <= 0
  ) {
    actionMessage.textContent =
      "Invalid input. Enter a positive whole number (1 or more).";
    return; // heat and swords stay unchanged
  }

  heatForge(amount);
  heatInput.value = "";
});

makeSwordButton.addEventListener("click", function () {
  makeSword();
});


resetForgeButton.addEventListener("click", function () {
  resetForge();
});


resetForge();