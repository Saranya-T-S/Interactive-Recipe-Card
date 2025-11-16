function toggleIngredients() {
  document.getElementById("ingredients").classList.toggle("hidden");
}

function toggleSteps() {
  document.getElementById("steps").classList.toggle("hidden");
}

let currentStep = 0;
const steps = document.querySelectorAll("#steps li");
const progressBar = document.getElementById("progress-bar");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

startBtn.addEventListener("click", () => {
  currentStep = 0;
  steps.forEach(step => step.style.background = "");
  steps[currentStep].style.background = "#c7f9cc";
  startBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  progressBar.style.width = "20%";
});

nextBtn.addEventListener("click", () => {
  steps[currentStep].style.background = "";
  currentStep++;
  if (currentStep < steps.length) {
    steps[currentStep].style.background = "#c7f9cc";
    progressBar.style.width = `${((currentStep+1)/steps.length)*100}%`;
  } else {
    alert("🎉 Recipe Complete!");
    nextBtn.classList.add("hidden");
    startBtn.classList.remove("hidden");
    progressBar.style.width = "100%";
  }
});
