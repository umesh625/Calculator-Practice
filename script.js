/**
 * operations
 */
const userInput = document.getElementById("input-number");
const delBtn = document.getElementById("btn-delete");
const resetBtn = document.getElementById("btn-reset");
const percentageBtn = document.getElementById("btn-percentage");
const divideBtn = document.getElementById("btn-divide");
const multiplyBtn = document.getElementById("btn-multiply");
const subtractBtn = document.getElementById("btn-subtract");
const addBtn = document.getElementById("btn-add");
const dotBtn = document.getElementById("btn-dot");
const equalBtn = document.getElementById("btn-equal");
let currentResult = document.getElementById("current-result");

/**
 * numbers
 */
const input0 = document.getElementById("num-0");
const input1 = document.getElementById("num-1");
const input2 = document.getElementById("num-2");
const input3 = document.getElementById("num-3");
const input4 = document.getElementById("num-4");
const input5 = document.getElementById("num-5");
const input6 = document.getElementById("num-6");
const input7 = document.getElementById("num-7");
const input8 = document.getElementById("num-8");
const input9 = document.getElementById("num-9");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");
// function outputResult(result, text) {
//   currentResultOutput.textContent = result;
//   currentCalculationOutput.textContent = text;
// }
/**
 * key events
 */
document.addEventListener("keydown", (event) => {
  if (event.key == "0") {
    console.log("0");
    insertTextContent("0");
  } else if (event.key == "1") {
    insertTextContent("1");
    console.log("1");
  } else if (event.key == "2") {
    insertTextContent("2");
    console.log("2");
  } else if (event.key == "3") {
    insertTextContent("3");
    console.log("3");
  } else if (event.key == "4") {
    insertTextContent("4");
    console.log("4");
  } else if (event.key == "5") {
    insertTextContent("5");
    console.log("5");
  } else if (event.key == "6") {
    insertTextContent("6");
    console.log("6");
  } else if (event.key == "7") {
    insertTextContent("7");
    console.log("7");
  } else if (event.key == "8") {
    insertTextContent("8");
    console.log("8");
  } else if (event.key == "9") {
    insertTextContent("9");
    console.log("9");
  } else if (event.key == "*") {
    insertTextContent("*");
    console.log("*");
  } else if (event.key == "+") {
    insertTextContent("+");
    console.log("+");
  } else if (event.key == "-") {
    insertTextContent("-");
    console.log("-");
  } else if (event.key == "/") {
    insertTextContent("/");
    console.log("/");
  } else if (event.key == "%") {
    insertTextContent("%");
    console.log("%");
  } else if (event.key === "Backspace") {
    userInput.textContent = userInput.textContent.slice(0, -1);
    event.preventDefault();
  } else if (event.key === "Enter") {
    currentResult.textContent = eval(userInput.textContent);
  } else if (event.key == "Escape") {
    userInput.textContent = "";
  } else if (event.key === ".dot") {
    insertTextContent(".");
    console.log(".");
  }
});

/**
 * click events
 */
function addClickEvents(element, callback) {
  element.addEventListener("click", callback);
}

function insertTextContent(element) {
  userInput.textContent = userInput.textContent + element;
}

addClickEvents(input0, () => {
  console.log("0");
  insertTextContent(input0.innerText);
  // userInput.textContent = input0.innerText;
  // insertTextContent(input0.textContent);
  // insertTextContent(input0.innerText);
});

addClickEvents(input1, () => {
  // insertTextContent(input1.textContent);
  insertTextContent(input1.innerText);
  console.log("1");
});

addClickEvents(input2, () => {
  console.log("2");
  insertTextContent(input2.innerText);
});

addClickEvents(input3, () => {
  console.log("3");
  insertTextContent(input3.innerText);
});

addClickEvents(input4, () => {
  console.log("4");
  insertTextContent(input4.innerText);
});

addClickEvents(input5, () => {
  console.log("5");
  insertTextContent(input5.innerText);
});
addClickEvents(input6, () => {
  console.log("6");
  insertTextContent(input6.innerText);
});

addClickEvents(input7, () => {
  console.log("7");
  insertTextContent(input7.innerText);
});

addClickEvents(input8, () => {
  console.log("8");
  insertTextContent(input8.innerText);
});

addClickEvents(input9, () => {
  console.log("9");
  insertTextContent(input9.innerText);
});

addClickEvents(addBtn, () => {
  console.log("+");
  insertTextContent(addBtn.innerText);
});

addClickEvents(subtractBtn, () => {
  console.log("-");
  insertTextContent(subtractBtn.innerText);
});

addClickEvents(multiplyBtn, () => {
  console.log("*");
  insertTextContent(multiplyBtn.innerText);
});

addClickEvents(divideBtn, () => {
  console.log("/");
  insertTextContent(divideBtn.innerText);
});

addClickEvents(percentageBtn, () => {
  console.log("%");
  insertTextContent(percentageBtn.innerText);
});
addClickEvents(resetBtn, () => {
  userInput.textContent = " ";
});

addClickEvents(dotBtn, () => {
  console.log(".");
  insertTextContent(dotBtn.innerText);
});

// addClickEvents(equalBtn, () => {
//   currentResult.textContent = eval(userInput.textContent);
// });

/*
 * backspcae section
 */
delBtn.addEventListener("click", () => {
  userInput.textContent = userInput.textContent.slice(0, -1);
});
