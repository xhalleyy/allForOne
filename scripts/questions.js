let nameinput = document.getElementById('nameinput');
let timeinput = document.getElementById('timeinput');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const questionsApi = async (name, wakeUpTime) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/AskingQuestions/NameAndTime/${name}/${wakeUpTime}`);
    const data = promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    output.textContent = await questionsApi(nameinput.value, timeinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});