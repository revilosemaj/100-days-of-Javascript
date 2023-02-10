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
  questionsCount = questions.length;

const startTimer = (duration, display) => {
  let timer = duration,
    minutes,
    seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};

window.addEventListener("load", () => setStartingPage());

const setStartingPage = () => {
  quiz.style.display = "none";
  const quizRepeat = document.createElement("div");
  const scoreParagraph = document.createElement("p");
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const link = document.createElement("a");

  quizRepeat.setAttribute("class", "quiz-repeat");
  h1.textContent = "Quiz Completed";
  scoreParagraph.setAttribute("id", "score");
  scoreParagraph.textContent = `Your scored: ${scores} of ${questionsCount}`;
  div.setAttribute("class", "quiz-repeat");
  link.textContent = "Take Quiz again";
  link.addEventListener("click", () => {
    let fiveMinutes = 60 * 5,
      display = countdown;
    startTimer(fiveMinutes, display);
    quiz.style.display = "block";
    quizBox.removeChild(document.querySelector(".quiz-repeat"));
    scores = 0;
    counter = 0;
    answers = [];
    console.log(counter);
  });

  div.appendChild(link);
  quizRepeat.appendChild(h1);
  quizRepeat.appendChild(scoreParagraph);
  quizRepeat.appendChild(div);
  quizBox.appendChild(quizRepeat);
};

const setQuestion = (counter, questionsCount) => {
  if (counter === questionsCount) {
    setStartingPage();
    return;
  } else {
    progress.innerHTML = `Question ${counter + 1} of ${questionsCount}`;
    question.innerHTML = questions[counter].question;
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
        setQuestion(counter, questionsCount);
      });
    }
  }
};

setQuestion(counter, questionsCount);
