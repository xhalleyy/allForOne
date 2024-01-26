// const addTwoNumbersApi = async (firstNum, secondNum) => {
//     const promise = await fetch(`https://phamhallforone.azurewebsites.net/Summation/${firstNum}/${secondNum}`);
//     const data = await promise.text();
//     console.log(data);
// }

// addTwoNumbersApi();

const sayHelloApi = async (name) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/SayHello/AddName/${name}`);
    const data = await promise.text();
    return data;
}

if(location.pathname.includes("sayhello"))
{
    let nameinput = document.getElementById('nameinput');
    let submitBtn = document.getElementById('submitBtn');
    let output = document.getElementById('output');
    
    submitBtn.addEventListener('click', async () => {
        // sayHelloApi(nameinput.value);

        output.textContent = await sayHelloApi(nameinput.value);
        output.className = 'font-nova text-center px-3 py-10 text-white';
    });

}