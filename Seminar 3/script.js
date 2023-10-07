function HW_3(){
    let num1 = parseInt(prompt("Введите раз: ","И ты в белом платье"));
    let num2 = parseInt(prompt("Два: ","В моих объятьях"));
    let symbol = prompt("Выбери свой путь: ","(*, -, +, /)")
//     if(symbol=="+"){
//         alert(`${num1}+${num2}=${num1+num2}`);
//     }
//     else if(symbol=="*"){
//         alert(`${num1}*${num2}=${num1*num2}`)
//     }
//     else if(symbol=="-"){
//         alert(`${num1}-${num2}=${num1-num2}`)
//     }
//     else if(symbol=="/"){
//         alert(`${num1}/${num2}=${num1/num2}`)
//     }
//     else{
//     alert('You lose');
// }
switch(symbol){
    case "+":
        alert(`${num1}+${num2}=${num1+num2}`);
        break;
    case "*":
        alert(`${num1}*${num2}=${num1*num2}`);
        break;
    case "-":
        alert(`${num1}-${num2}=${num1-num2}`);
        break;
    case "/":
        alert(`${num1}/${num2}=${num1/num2}`);
        break;   
    default:
        alert('You lose');
        break;   
    }
}