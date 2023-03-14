console.log("running.....");

function addnumbers() {

    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);

    const result = number1 + number2;

    const resultbox = document.createElement("div");
    resultbox.textContent = `the result is ${result}`;


    resultbox.style.padding = '8px';
    resultbox.style.backgroundColor = 'rgb(247, 247, 247)';
    resultbox.style.border = '2px solid black';
    resultbox.style.width = '100%';
    resultbox.style.borderRadius = '8px';
    resultbox.style.boxShadow = '3px 5px black';
    resultbox.style.opacity = '0.4';
    resultbox.style.outline = 'none';


    document.getElementById('result-box').appendChild(resultbox);
}