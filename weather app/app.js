
let cityname = document.querySelector(".search input")
let button = document.querySelector(".search button")
let icon = document.querySelector(".weather-icon")

async function data(city) {
   
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2804569053716ff62a151ce66d48829&units=metric`
        let res = await fetch(url)
        if (res.status == 404) {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        }
        else {
            let newdata = await res.json();
            console.log(newdata);

            document.querySelector('.city').innerHTML = newdata.name;
            document.querySelector('.temp').innerHTML = Math.round(newdata.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML = newdata.main.humidity + "%";
            document.querySelector('.wind').innerHTML = newdata.wind.speed + "km/h";

            if (newdata.weather[0].main == 'cloud') {
                icon.src = "./img/clouds.png"

            }
            else if (newdata.weather[0].main == 'rain') {
                icon.src = "./img/rain.png"
            }
            else if (newdata.weather[0].main == 'mist') {
                icon.src = "./img/mist.png"
            }
            else if (newdata.weather[0].main == 'snow') {
                icon.src = "./img/snow.png"
            }
            else if (newdata.weather[0].main == 'drizzle') {
                icon.src = "./img/drizzle.png"
            }

            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none"

        } 
    }
     
    

button.addEventListener("click", () => {
    let city = cityname.value;
    data(city);
})