const apikey = "1dd516ab946b0bcbe03ddfacb832d03f"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkweather(city) {

	const response = await fetch(apiurl + city + `&appid=${apikey}`);

	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}else {
		let data = await response.json();

		console.log(data);





		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


		if (data.weather[0].main == "Clouds") {
			weatherIcon.src = "image/images/clouds.png";
		}

		else if (data.weather[0].main == "Clear") {
			weatherIcon.src = "image/images/clear.png";
		}
		else if (data.weather[0].main == "Rain") {
			weatherIcon.src = "image/images/rain.png";
		}

		else if (data.weather[0].main == "Drizzle") {
			weatherIcon.src = "image/images/drizzle.png";
		}
		else if (data.weather[0].main == "Mist") {
			weatherIcon.src = "image/images/mist.png";
		}
		else if (data.weather[0].main == "Snow") {
			weatherIcon.src = "image/images/snow.png";
		}




		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";
	}



}


searchBtn.addEventListener("click", () => {

	checkweather(searchBox.value);
})

