import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import WeatherDisplay from '../components/WeatherDisplay';
import getWeatherData from '../services/weather.service';
import { setWeather, addCity } from '../actions';

class App extends Component{

  componentDidMount(){
    const storageCityList = localStorage.getItem('cityList').split(',');
    this.props.addCityAction(storageCityList);
  }

  addCityToStore = (cityName) => {
    const cityNameLower = cityName.toLowerCase();
    const currentList = this.props.cityList;
    if (currentList.indexOf(cityNameLower) === -1) {
      currentList.push(cityNameLower)
      this.props.addCityAction(currentList)
      localStorage.setItem('cityList', currentList)
    }
  }

  getWeatherData = (cityName) => {
    getWeatherData(cityName)
      .then(response => {
        this.props.setWeatherAction(response)
      })
    this.addCityToStore(cityName)
  }

  render() {
    return (
      <div className="container">
        <SearchForm setWeather={this.getWeatherData} cityList={this.props.cityList} />
        {this.props.weather.cod && <WeatherDisplay weatherData={this.props.weather} />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    weather: state.weather,
    cityList: state.cityList,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addCityAction: cityList => dispatch(addCity(cityList)),
    setWeatherAction: response => dispatch(setWeather(response))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
