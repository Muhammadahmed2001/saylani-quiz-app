var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");

function signIn() {
  if (signInEmail.value === "smit" && signInPassword.value === "1234") {
    location.href = "quiz.html";
  } else {
    alert("invalid password or email");
  }
}

var html = [
  {
    question: "What does HTML stand for?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hypertext Markup Language",
    option3: "Home Tool Markup Language",
    correctOption: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    option1: "Google",
    option2: "The World Wide Web Consortium",
    option3: "Microsoft",
    correctOption: "The World Wide Web Consortium",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    correctOption: "<h1>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    option1: "<linebreak>",
    option2: "<br>",
    option3: "<break>",
    correctOption: "<br>",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    option1: '<body bg="yellow">',
    option2: "<background>yellow</background>",
    option3: '<body style="background-color:yellow;">',
    correctOption: '<body style="background-color:yellow;">',
  },
];

var quiz = document.getElementById("quiz");

index = 0;
function nextQuestion() {
  quiz.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${html[index].question}</h5>
    <div>
      <label>
        <input type="radio" name="answer" id="" />
        <span>${html[index].option1}</span>
      </label>
    </div>
    <div>
      <label>
        <input type="radio" name="answer" id="" />
        <span>${html[index].option2}</span>
        </label>
        </div>
        <div>
        <label>
        <input type="radio" name="answer" id="" />
        <span>${html[index].option3}</span>
        </label>
        </div>
        <div>
              <button onclick="nextQuestion()" class="btn">Next</button>
            </div>
        </div>
        `;

  index++;
  console.log(index);
}
// nextQuestion()
