let numberinput = document.getElementById('numberinput');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const oddOrEvenApi = async (num) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/OddOrEven/DivisibleBy2/${num}`);
    const data = promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    output.textContent = await oddOrEvenApi(numberinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});
