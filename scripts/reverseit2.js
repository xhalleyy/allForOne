let sequenceinput = document.getElementById('sequenceinput');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const numberReverseApi = async (sequence) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/ReverseIt2/Numeric/${sequence}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async() => {
    output.textContent = await numberReverseApi(sequenceinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});