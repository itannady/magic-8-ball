//1. Must enter a question or alerts an error
//2. If question is entered - ball stops floating and shakes
//3. Star and answer appears
//4. Answer disappears and ball resumes floating
//5. Power button turns screen on or off

let question = document.getElementById("question");
let button = document.getElementById("submit-btn");
let answer = document.getElementById("answer");
let ball = document.getElementById("ball");

// let input = document.getElementById('question');

// document.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13 ) {
//         event.preventDefault();
//         button.click();
//     }
// }

function checkQuestion() {
  if (!question.value.includes("?")) {
    alert("Please enter a question");
    console.log(question);
  } else {
    // ball.style.animation = 'none';
    document.getElementById("ball").id = "shake";
    // document.getElementById("shadow").style.animation = "none";
    // ball.className = "shake";

    let star = document.getElementById("star_wrapper");
    star.style.display = "flex";

    question.addEventListener("click", reset);
    function reset() {
        let element = document.getElementById("shake").id = "ball";
        // document.getElementById("shadow").style.animation = "shadow";
        star.style.display = "none";
        question.value = "" ;
        console.log(element) 
    }
  }
}

// Add on or off function to power button 
    // function power() {
    //     let screen = document.getElementById('screen');
    //     if (screen.style.display = "flex") { 
    //      screen.style.display = "none";
    //      document.getElementById('screen_off').classList.remove ("hide"); 
        
    //     }

    //     if (screen.style.display = "none") {
    //         document.getElementById('screen_off').classList.add ("hide");
    //         screen.style.display = "flex";
          
    //     }
        
       
    // }

    function power() {
        let screen = document.getElementById('screen');
        if (showScreen === true) {
            screen.style.display = "flex"
            document.getElementById('screen_off').classList.add ("hide"); 
        }
        else {
            document.getElementById('screen_off').classList.remove ("hide"); 
            screen.style.display = "none";
            
        }
    }

let showScreen = false;


// Add click event to the button
button.addEventListener("click", function getFortune() {
  let randomNumber = Math.floor(Math.random() * 8);

  let response = " ";

  switch (randomNumber) {
    case 0:
      response = "It is certain";
      break;
    case 1:
      response = "It is decidely so";
      break;
    case 2:
      response = "Reply hazy, try again";
      break;
    case 3:
      response = "Cannot predict right now";
      break;
    case 4:
      response = "Do not count on it";
      break;
    case 5:
      response = "It is certain";
      break;
    case 6:
      response = "My sources say no";
      break;
    case 7:
      response = "Outlook not so good";
      break;
    case 8:
      response = "Signs point to yes";
      break;
  }

  answer.innerHTML = response;
});
