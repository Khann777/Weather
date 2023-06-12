const API = "http://api.openweathermap.org/data/2.5/weather?q=";
const appID = "&appid=b067377a72c98ae6963cdae2e35408d9";
const input = document.querySelector("#search");
const weatherCards = document.querySelector(".weatherCards");
const time = new Date();

const getWeatherByCity = async (city) => {
  const response = await fetch(API + `${input.value}` + appID);
  const weather = await response.json();
  console.log("weather: ", weather);

  loadCards(weather);
};

const loadCards = (weather) => {
  loadWeather(weather);
};

const loadWeather = (weather) => {
  const card = document.createElement("div");
  card.classList.add("card");
  weatherCards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("cardHeader");
  cardHeader.innerHTML = `${input.value} as of ${time}`;

  const temp = Math.floor(weather.main.temp - 273.15);
  console.log("temp: ", temp);

  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  const tempBlock = document.createElement("div");
  tempBlock.classList.add("tempBlock");

  const tempSpan = document.createElement("span");
  tempSpan.classList.add("tempSpan");
  tempSpan.innerHTML = `${temp}°`;

  const weatherSpan = document.createElement("span");
  weatherSpan.classList.add("weatherSpan");
  weatherSpan.innerHTML = `${weather.weather[0].description}`;

  const dayAndNight = document.createElement("span");
  dayAndNight.classList.add("dayAndNight");
  dayAndNight.innerHTML = `Day ${temp + 5} • Night ${temp - 10}`;

  const tempImgBlock = document.createElement("div");
  tempImgBlock.classList.add("tempImgBlock");

  const tempImg = document.createElement("img");
  tempImg.classList.add("tempImg");
  tempImg.src = "../images/sun.png";
  tempImg.width = 170;
  tempImg.height = 120;

  cardBody.appendChild(tempBlock);
  cardBody.appendChild(tempImgBlock);
  tempImgBlock.appendChild(tempImg);
  tempBlock.appendChild(tempSpan);
  tempBlock.appendChild(weatherSpan);
  tempBlock.appendChild(dayAndNight);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
};
