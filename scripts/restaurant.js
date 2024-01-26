let foodinput = document.getElementById('foodinput');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

const restaurantApi = async (input) => {
    const promise = await fetch(`https://phamhallforone.azurewebsites.net/RestaurantPicker/FoodCategory/${input}`);
    const data = await promise.text();
    return data;
}

submitBtn.addEventListener('click', async () => {
    output.textContent = await restaurantApi(foodinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});