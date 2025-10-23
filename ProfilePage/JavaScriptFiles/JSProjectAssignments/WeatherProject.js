//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c42bfed6b117803c71404df773a9a4ed

const apikey ="c42bfed6b117803c71404df773a9a4ed";
document.getElementById("btnSearch").addEventListener("click",()=>{
    const city = document.getElementById("cityInput").value.trim();
    if(city){
        getWeather(city);
    }
    else{
        alert("Please Enter City Name");
    }
});

async function getWeather(city){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    try{
        const res = await fetch (url);
        if(!res.ok) throw new Error ("City Not Found");
        const data = await res.json();
        showWeather(data);
    }
    catch (error){
        document.getElementById("output").innerHTML = `<p style="color:red;">${error.message}</p>`;
        }
}
function showWeather(data){
    const weatherInfo = document.getElementById("output");
    weatherInfo.innerHTML =`<h3>${data.name}, ${data.sys.counrty}</h3>
    <h4>lat: ${data.coord.lat}</h4>
    <h4>Sunrise ${data.sys.sunrise}</h4>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather Icon" />
    <div class = "temp">Description: ${Math.round(data.main.temp)}F</div>
    <div class ="desc">Description:  ${data.weather[0].description}</div>

    `
}