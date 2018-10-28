import React from "react";


const WeatherDetails = props => {
  console.log(props);

  const locationData = props.cityData.location;
  const currentData = props.cityData.current;
  const forecastData = props.cityData.forecast.forecastday;

  const loctime = new Date (locationData.localtime);
  const hours = loctime.getHours();
  const min = loctime.getMinutes();
  
  const dayForecast1 = new Date (forecastData[1].date);
  const day1 = dayForecast1.getDate();
  const monthForecast1 = new Date (forecastData[1].date);
  const month1 = monthForecast1.getMonth()+1;

  const dayForecast2 = new Date (forecastData[2].date);
  const day2 = dayForecast2.getDate();
  const monthForecast2 = new Date (forecastData[2].date);
  const month2 = monthForecast2.getMonth()+1;

  const dayForecast3 = new Date (forecastData[3].date);
  const day3 = dayForecast3.getDate();
  const monthForecast3 = new Date (forecastData[3].date);
  const month3 = monthForecast3.getMonth()+1;

  const dayForecast4 = new Date (forecastData[4].date);
  const day4 = dayForecast4.getDate();
  const monthForecast4 = new Date (forecastData[4].date);
  const month4 = monthForecast4.getMonth()+1;

  const dayForecast5 = new Date (forecastData[5].date);
  const day5 = dayForecast5.getDate();
  const monthForecast5 = new Date (forecastData[5].date);
  const month5 = monthForecast5.getMonth()+1;

  const dayForecast6 = new Date (forecastData[6].date);
  const day6 = dayForecast6.getDate();
  const monthForecast6 = new Date (forecastData[6].date);
  const month6 = monthForecast6.getMonth()+1;
  

  return (
    <div>
      <div className="weather">
        <h1 style={{color: props.colorX}}>{locationData.name}</h1>
        <p className="time"  style={{color: props.colorX}}>Time: {hours}:{min}</p>
        <div className="current-data">
          <p className="temp" style={{color: props.colorX}} >
            {`${parseInt(props.cityData.current.temp_c)}`}
              &#8451;
          </p>
        <img className="weather-img" src={currentData.condition.icon} alt="icon" />
        </div>
        <div className="description" >
          <p className="text" style={{color: props.colorX}} >{currentData.condition.text}</p>
          <p className="feels-like" style={{color: props.colorX}} >
          RealFeel {`${parseInt(currentData.feelslike_c)}`}
          &#8451;
          </p>
        </div>
      </div>
      <div className="forecast">
        <div className="seven-days-forecast" style={{color: props.colorX}}>
          <img className="weather-img" src={forecastData[1].day.condition.icon} alt="icon" />
          <p className="maxtemp">{`${parseInt(forecastData[1].day.maxtemp_c)}`}&#8451;</p>
          <p>{day1}/{month1}</p>
          <p>{forecastData[1].day.condition.text}</p>
        </div>
        <div className="seven-days-forecast" style={{color: props.colorX}}>
          <img className="weather-img" src={forecastData[2].day.condition.icon} alt="icon" />
          <p className="maxtemp">{`${parseInt(forecastData[2].day.maxtemp_c)}`}&#8451;</p>
          <p>{day2}/{month2}</p>
          <p>{forecastData[2].day.condition.text}</p>
        </div>
        <div className="seven-days-forecast" style={{color: props.colorX}}>
          <img className="weather-img" src={forecastData[3].day.condition.icon} alt="icon" />
          <p className="maxtemp">{`${parseInt(forecastData[3].day.maxtemp_c)}`}&#8451;</p>
          <p>{day3}/{month3}</p>
          <p>{forecastData[3].day.condition.text}</p>
        </div>
        <div className="seven-days-forecast" style={{color: props.colorX}}>
          <img className="weather-img" src={forecastData[4].day.condition.icon} alt="icon" />
          <p className="maxtemp">{`${parseInt(forecastData[4].day.maxtemp_c)}`}&#8451;</p>
          <p>{day4}/{month4}</p>
          <p>{forecastData[4].day.condition.text}</p>
        </div>
        <div className="seven-days-forecast" style={{color: props.colorX}}>
          <img className="weather-img" src={forecastData[5].day.condition.icon} alt="icon" />
          <p className="maxtemp">{`${parseInt(forecastData[5].day.maxtemp_c)}`}&#8451;</p>
          <p>{day5}/{month5}</p>
          <p>{forecastData[5].day.condition.text}</p>
        </div>
        <div className="seven-days-forecast" style={{color: props.colorX}}>
          <img className="weather-img" src={forecastData[6].day.condition.icon} alt="icon" />
          <p className="maxtemp">{`${parseInt(forecastData[6].day.maxtemp_c)}`}&#8451;</p>
          <p>{day6}/{month6}</p>
          <p>{forecastData[6].day.condition.text}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
