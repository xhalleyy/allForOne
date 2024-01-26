let nameinput1 = document.getElementById('nameinput1');
let nameinput2 = document.getElementById('nameinput2');
let creatureinput = document.getElementById('creatureinput');
let placeinput = document.getElementById('placeinput');
let iteminput = document.getElementById('iteminput');
let nouninput = document.getElementById('nouninput');
let verbinput1 = document.getElementById('verbinput1');
let verbinput2 = document.getElementById('verbinput2');
let verbinput3 = document.getElementById('verbinput3');
let adjinput = document.getElementById('adjinput');
let adverbinput = document.getElementById('adverbinput');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const madLibApi = async(creature, name1, name2, place, item, noun, adjective, adverb, ingVerb1, ingVerb2, pastVerb1) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/MadLib/Story/${creature}/${name1}/${name2}/${place}/${item}/${noun}/${adjective}/${adverb}/${ingVerb1}/${ingVerb2}/${pastVerb1}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async() => {
    output.textContent = await madLibApi(creatureinput.value, nameinput1.value, nameinput2.value, placeinput.value, iteminput.value, nouninput.value, adjinput.value, adverbinput.value, verbinput1.value, verbinput2.value, verbinput3.value);
    output.className = 'font-nova text-center px-3 py-6 text-white';
});