import React from 'react';
import { Table } from 'react-bootstrap';

const WeatherDisplay = props => {

  if (props.weatherData.cod !== 200) {
    return(
      <div>
        Oops, some error!
        {props.weatherData.cod}
        {props.weatherData.message}
      </div>
    )
  }

  const timeConvert = (time, type = 'date') => {
    time = new Date(time * 1000);
    if (type === 'date') {
      return time.toDateString();
    } else if (type === 'sun'){
      return (time.getHours() + ':' + time.getMinutes())
    }
  }

  const { temp, feels_like, pressure, humidity} = props.weatherData.main;
  const { lat, lon } = props.weatherData.coord;
  const { main, description, icon } = props.weatherData.weather[0];
  const { speed } = props.weatherData.wind;
  const { dt, name } = props.weatherData;
  const { country, sunrise, sunset } = props.weatherData.sys;

  return(
    <>
    <div className="mainWeather">
      <div className="mainWeather__header">
        <h2>Weather in {name}, {country}</h2>
        <b>{timeConvert(dt)}</b>
      </div>
      <div className="mainWeather__short">
        {temp + '°C'} <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon' /> {main}
      </div>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td>Feels like</td>
            <td>{feels_like} °C</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>{speed} M/s</td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>{timeConvert(sunrise, 'sun')}</td>
          </tr>
          <tr>
            <td>Sunset</td>
            <td>{timeConvert(sunset, 'sun')}</td>
          </tr>
          <tr>
            <td>Cloudiness</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{pressure} hpa</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity} %</td>
          </tr>
          <tr>
            <td>Geo coords</td>
            <td><a href={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${lat}&lon=${lon}&zoom=10`}>[{lat}, {lon}]</a></td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  )
}

export default WeatherDisplay;
