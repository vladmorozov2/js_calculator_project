const colorChangeParagraphsGrey = document.querySelectorAll(".grey");
const colorChangeParagraphsOrange = document.querySelectorAll(".white-text");
let screenNumber = document.querySelector(".calculator__screen");
let previousNumber = screenNumber.innerHTML;
const buttons = document.querySelectorAll(".calculator__button");
const clearSign = document
  .querySelector(".first")
  .addEventListener("click", function () {
    screenNumber.innerHTML = 0;
    isEqualSignUsed=true

  });
const clearArrow = document
  .querySelector(".second")
  .addEventListener("click", function () {
    screenNumber.innerHTML = Number.parseInt(
      Math.floor(screenNumber.innerHTML / 10)
    );
  });
const numberButtons = [];
const signsButton = [];
let sign = undefined;
isEqualSignUsed = true;

colorChangeParagraphsGrey.forEach((el) =>
  el.addEventListener("click", function () {
    this.classList.toggle("clicked");
    setTimeout(() => this.classList.remove("clicked"), 300);
  })
);
colorChangeParagraphsOrange.forEach((el) =>
  el.addEventListener("click", function () {
    this.classList.toggle("clicked-orange");
    setTimeout(() => this.classList.remove("clicked-orange"), 300);
  })
);
buttons.forEach((el) => {
  if ("123456789".includes(el.innerHTML)) {
    numberButtons.push(el);
  } else if ("+-*/=".includes(el.innerHTML)) {
    signsButton.push(el);
  }
});

signsButton.forEach((el) => {
  el.addEventListener("click", function () {
    if (this.innerHTML === "+") {
      sign = "+";
      previousNumber = screenNumber.textContent;
      screenNumber.innerHTML = 0
      isEqualSignUsed = true;
    } else if (this.innerHTML === "-") {
      sign = "-";
      previousNumber = screenNumber.textContent;
      screenNumber.innerHTML = 0
      isEqualSignUsed = true;
    } else if (this.innerHTML === "*") {
      sign = "*";
      previousNumber = screenNumber.textContent;
      screenNumber.innerHTML = 0
      isEqualSignUsed = true;
    } else if (this.innerHTML === "/") {
      sign = "/";
      previousNumber = screenNumber.textContent;
      screenNumber.innerHTML = 0
      isEqualSignUsed = true;
    } else if (this.innerHTML === "=") {
      if (sign === "+") {
        number_ =
          Number.parseInt(screenNumber.innerHTML) +
          Number.parseInt(previousNumber);
        screenNumber.innerHTML = number_;
      } else if (sign === "-") {
        screenNumber.innerHTML =
          Number.parseInt(previousNumber) -
          Number.parseInt(screenNumber.innerHTML);
      } else if (sign === "*") {
        screenNumber.innerHTML =
          Number.parseInt(previousNumber) *
          Number.parseInt(screenNumber.innerHTML);
      } else if (sign === "/") {
        screenNumber.innerHTML =
          Number.parseInt(previousNumber) /
          Number.parseInt(screenNumber.innerHTML);
      }
      previousNumber = screenNumber.textContent;
      isEqualSignUsed = true;
    }
  });
});

numberButtons.forEach((el) => {
  el.addEventListener("click", function () {
    if (isEqualSignUsed) {
      screenNumber.innerHTML = this.innerHTML;
      isEqualSignUsed = false;
    } else {
      screenNumber.innerHTML += this.innerHTML;
    }
  });
});
