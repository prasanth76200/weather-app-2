

//https://weather.visualcrossing.comVisualCrossingWebServices/rest/services/timeline/London?key=ZDY4365XAWNM8VGN8W2BALG8U;

const apiKey="6716d9497f4290485c4415ea1a39134f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector('.search-result input');
const searchBtn = document.querySelector('.search-btn');

 let  weatherIcon = document.querySelector('.weather-icon');

//https://api.openweathermap.org/data/2.5/weather?q={london}&appid={6716d9497f4290485c4415ea1a39134f}
async function weatherService (city){
  const response= await fetch(apiUrl + city +`&appid=${apiKey}` );
  var data =await response.json();
   console.log(data);

   document.querySelector('.degree').innerHTML = Math.round(data.main.temp)  +"&deg C";
   document.querySelector('.city').innerHTML = data.name;
   document.querySelector('.hum-per').innerHTML = data.main.humidity +"%";
   document.querySelector('.wind-speed').innerHTML = data.wind.speed + "Km/hr";

   if (response.status === 404) {
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather-reports").style.display="none";

   }else {
    if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "images/clouds.png";
  
     }else if (data.weather[0].main === "Clear"){
      weatherIcon.src = "images/clear.png";
  
     }
     else if (data.weather[0].main === "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
  
     }
     else if (data.weather[0].main === "Mist"){
      weatherIcon.src = "images/mist.png";
  
     }
     else if (data.weather[0].main === "Rain"){
      weatherIcon.src = "images/rain.png";
  
     }
     else if (data.weather[0].main === "Snow"){
      weatherIcon.src = "images/snow.png";
  
     }
     document.querySelector(".weather-reports").style.display="block";
  
  }

   }

   

searchBtn.addEventListener("click",()=>{
  weatherService (searchBox.value);
});


