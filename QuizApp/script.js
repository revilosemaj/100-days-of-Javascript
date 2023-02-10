const progress = document.querySelector("#progress"),
  countdown = document.querySelector("#count-down"),
  question = document.querySelector("#question"),
  buttons = document.querySelector(".buttons"),
  quizBox = document.querySelector(".quiz-box"),
  quiz = document.querySelector("#quiz"),
  questions = [
    {
      question: "Hyper Text Markup Language Stands For?",
      choices: ["JQuery", "XHTML", "CSS", "HTML"],
      answer: "HTML",
    },
    {
      question: "Cascading Style sheet stands for?",
      choices: ["HTML", "JQuery", "CSS", "XML"],
      answer: "CSS",
    },
    {
      question: "Which is a JavaScript Framework?",
      choices: ["React", "Laravel", "Django", "Sass"],
      answer: "React",
    },
    {
      question: "Which is a backend language?",
      choices: ["PHP", "HTML", "React", "All"],
      answer: "PHP",
    },
    {
      question: "Which is best for Artificial intelligence?",
      choices: ["React", "Laravel", "Python", "Sass"],
      answer: "Python",
    },
  ];

let scores = 0,
  answers = [],
  counter = 0,
  interval,
  questionsCount = questions.length;

const startTimer = (duration, display) => {
  if (!!interval) {
    let timer = duration,
      minutes,
      seconds;
    interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
        resetTimer();
      }

      if (counter === questionsCount) {
        resetTimer();
      }
    }, 1000);
  }
};

const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  countdown.textContent = "00:00";
};

const setQuestion = (counter, questionsCount) => {
  progress.textContent = `Question ${counter + 1} of ${questionsCount}`;
  question.textContent = questions[counter].question;

  for (let i = 0; i < buttons.childElementCount; i++) {
    document.querySelector(`#choice${i}`).textContent =
      questions[counter].choices[i];

    document.querySelector(`#btn${i}`).addEventListener("click", (e) => {
      e.stopImmediatePropagation();

      if (e.target.children[0].textContent === questions[counter].answer) {
        answers.push(e.target.children[0].textContent);
        scores++;
      }

      counter++;

      if (counter === questionsCount) {
        counter = 0;
        resetTimer();
        setStartingPage();
        return;
      } else {
        setQuestion(counter, questionsCount);
      }
    });
  }
};

function setStartingPage(start = false) {
  const quizRepeat = document.createElement("div");
  const scoreParagraph = document.createElement("p");
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const link = document.createElement("a");

  quizRepeat.setAttribute("class", "quiz-repeat");
  h1.textContent = start ? "Quiz" : "Quiz Completed";
  scoreParagraph.setAttribute("id", "score");
  scoreParagraph.textContent = start
    ? "You have 5 mins to answer 5 questions. Goodluck!"
    : `Your scored: ${scores} out of ${questionsCount}`;
  div.setAttribute("class", "quiz-repeat");
  link.textContent = start ? "Take Quiz" : "Take Quiz again";
  quiz.style.display = "none";

  link.addEventListener("click", () => {
    const startingPage = document.querySelector(".quiz-repeat");
    const fiveMinutes = 60 * 5;

    counter = 0;
    answers = [];
    scores = 0;

    quiz.style.display = "block";
    interval = true;

    quizBox.removeChild(startingPage);
    startTimer(fiveMinutes, countdown);
    setQuestion(counter, questionsCount);
  });

  div.appendChild(link);
  quizRepeat.appendChild(h1);
  quizRepeat.appendChild(scoreParagraph);
  quizRepeat.appendChild(div);
  quizBox.appendChild(quizRepeat);
}

window.addEventListener("load", () => setStartingPage(true));
