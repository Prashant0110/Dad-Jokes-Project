const jokeEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");


const apiKey = "PwpoYjV1VlpKbjZVMzRlGQ==MCmvjLmW9VbLASFT";

const methods = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey,
    }
};

const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';




async function getjokes() {
    try {
        btnEl.disabled = true;
        jokeEl.innerText = 'updataing....!'
        btnEl.innerText = 'Loading...'

        const response = await fetch(apiUrl, methods);
        const data = await response.json();


        btnEl.disabled = false;
        btnEl.innerText = 'Next Joke';

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = 'Error occurred';
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        console.log(error);
    }

}
btnEl.addEventListener("click", getjokes);