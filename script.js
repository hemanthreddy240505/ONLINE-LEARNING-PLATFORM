const CORRECT_ANSWER = "Paris";
function submitQuiz() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  const resultElement = document.getElementById("quiz-result");

  if (selectedAnswer && resultElement) {
    const answer = selectedAnswer.value;
    if (answer === CORRECT_ANSWER) {
      resultElement.textContent = "Correct!";
    } else {
      resultElement.textContent = "Incorrect. Try again!";
    }
  } else {
    resultElement.textContent = "Please select an answer.";
  }
}


const video = document.getElementById("lesson-video");
const progressElement = document.getElementById("progress");

video.addEventListener("timeupdate", () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressElement.textContent = `${Math.round(progress)}%`;
});