const apiKeys = "1d400a11352e981dee8bc7abadd0669d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weater-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid=1d400a11352e981dee8bc7abadd0669d');

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + ' %';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.webp"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.webp"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.webp"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.webp"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.webp"
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.webp"
        }
        document.querySelector(".weather").style.display = 'block';
        document.querySelector(".error").style.display = "none";
        }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
// Enter Trigger Code using Button
$(document).ready(function(){
    $(".inputfeild").keydown(function (event) { 
     if (event.which == 13) { 
         event.preventDefault();
         $('#locationtrigger').click(); 
     } 
    });
});
// Enter Trigger Code using Button
// Null Value Validation
$('#locationtrigger').click(function(){
	if($('#inputfeild').val() == ''){
		document.querySelector(".nummerror").style.display = 'block';
	}
	else{
		document.querySelector(".nummerror").style.display = 'none';
	}
 });
 // Null Value Validation