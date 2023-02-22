console.log("My first git practice");
console.log("My name is Shalu");
const API_KEY = "b0fb1c7b67a95181fc1def30bdea5a35";
const city = "Karaikudi";
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
fetch(weatherAPI)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(`In ${city} the temperature is ${result.main.temp} C`);
  })
  .catch((error) => console.error(error));
