const minimumNumber = document.querySelector(".min");
const maximumNumber = document.querySelector(".max");
const inputNumber = document.querySelector("#guess-number");
const guessBnt = document.querySelector(".guess-btn");
const message = document.querySelector(".message");
const main = document.querySelector(".main");

main.addEventListener("mousedown", function (e) {
  if (e.target.classList.contains("try-again")) {
    window.location.reload();
  }
});

let minNumber = 1,
  maxNumber = 10,
  correctNumber = 2,
  guessLeft = 3;

minimumNumber.textContent = minNumber;
maximumNumber.textContent = maxNumber;
document.querySelector("form").addEventListener("submit", function (e) {
  const guess = parseInt(inputNumber.value);
  if (isNaN(guess) || guess > 10 || guess < 0) {
    setMessage(
      `Please Enter a Number Between ${minNumber} to ${maxNumber}`,
      "red"
    );
    inputNumber.value = "";
    inputNumber.focus();
  } else {
    if (guess === correctNumber) {
      inputNumber.disabled = true;
      inputNumber.style.borderColor = "green";
      setMessage(`Hurry You Win`, "green");
      guessBnt.value = "Try Again";
      guessBnt.className += " try-again ";
    } else {
      guessLeft -= 1;

      if (guessLeft === 0) {
        inputNumber.disabled = true;
        inputNumber.style.borderColor = "red";

        setMessage(`You Lost Your Chance TRY AGAIN`, "red");
        guessBnt.value = "Try Again";
        guessBnt.className += " try-again ";
      } else {
        inputNumber.value = "";
        setMessage(`Incorrect guess, You have only ${guessLeft} chance`, "red");
      }
    }
  }

  e.preventDefault();
});
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
