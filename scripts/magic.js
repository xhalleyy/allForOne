let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const magicApi = async () => {
    const promise = await fetch('https://phamhallforone.azurewebsites.net/Magic8Ball/TheAnswer');
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async() => {
    output.textContent = await magicApi();
    output.className = 'font-nova text-center px-3 py-10 text-white';
});