let numberinput1 = document.getElementById('numberinput1');
let numberinput2 = document.getElementById('numberinput2');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const summationApi = async (firstNum, secondNum) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net//AddNumbers/Summation/${firstNum}/${secondNum}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    output.textContent = await summationApi(numberinput1.value, numberinput2.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});