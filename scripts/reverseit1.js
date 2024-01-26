let sequenceinput = document.getElementById('sequenceinput');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const alphaReverseApi = async (sequence) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/ReverseIt1/Alphanumeric/${sequence}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async() => {
    output.textContent = await alphaReverseApi(sequenceinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});