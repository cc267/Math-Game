// Define the questions and answers
const questions = [
  { question: "6 - 2 =", answer: 4 },
  { question: "10 - 3 =", answer: 7 },
  { question: "8 - 5 =", answer: 3 },
  { question: "15 - 7 =", answer: 8 },
  { question: "9 - 4 =", answer: 5 },
  { question: "12 - 6 =", answer: 6 },
  { question: "20 - 9 =", answer: 11 },
  { question: "14 - 8 =", answer: 6 },
  { question: "16 - 11 =", answer: 5 },
  { question: "13 - 2 =", answer: 11 }
];

// Generate the question elements
const questionsContainer = document.getElementById("questionsContainer");
questions.forEach((q, index) => {
  const label = document.createElement("label");
  label.textContent = q.question;

  const input = document.createElement("input");
  input.type = "number";
  input.name = "answer" + index;

  label.appendChild(input);
  questionsContainer.appendChild(label);
});

// Check the answers on form submission
function checkAnswers(event) {
  event.preventDefault();

  const form = document.getElementById("quizForm");
  const resultContainer = document.getElementById("resultContainer");

  let score = 0;

  questions.forEach((q, index) => {
    const userAnswer = parseInt(form["answer" + index].value, 10);

    if (userAnswer === q.answer) {
      score++;
    }
  });

  resultContainer.textContent = "Your score: " + score + " out of " + questions.length;
}