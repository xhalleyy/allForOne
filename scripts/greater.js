let numberinput1 = document.getElementById('numberinput1');
let numberinput2 = document.getElementById('numberinput2');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const greaterApi = async (firstNum, secondNum) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/GreaterOrLess/CompareNumbers/${firstNum}/${secondNum}`);
    const data = promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    output.textContent = await greaterApi(numberinput1.value, numberinput2.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});