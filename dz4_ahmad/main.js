
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num2 !== 0 ? num1 / num2 : " 'не делится на ноль' ";
//         default:
//             return "Неизвестный оператор";
//     }
// }

// console.log(calculator(1234, 123, "/"));



// function str() {
//     var input = prompt("Введите строку:");
//     console.log("Длина строки:", input.length);
// }

// str();


// function minNum(num1, num2) {
//     console.log("Минимальное число:", Math.min(num1, num2));
// }
// minNum(23434, 1232);

let count = 0;

    function updateCountDisplay() {
      const countElement = document.getElementById('count');
      countElement.textContent = count;
      countElement.className = count > 0 ? 'green' : 'red';
    }

    function increment() {
      count++;
      updateCountDisplay();
    }

    function decrement() {
      if (count > 0) {
        count--;
        updateCountDisplay();
      }
    }

  



const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action  = '+'





plusBtn.onclick = function () {
    action = '+'
}


minusBtn.onclick = function () {
    action = '-'
}


function printREsult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }  
    resultElement.textContent = result
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}


submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    printREsult(result)

}



