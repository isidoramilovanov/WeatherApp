import React, { Component } from "react";
import "./App.css";
import getWeather from "./Api";
import WeatherDetails from "./WeatherDetails";
import Search from "./Search";
import Background from './googleweather.gif';
import BgDay from './dayBg.png';
import BgNight from './nightBg.jpg';

class App extends Component {
  state = {
    city: {},
    searchCity: "",
    bgImage: `url(${Background})`
  }


  handleChange = event => {
    this.setState({
      searchCity: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    getWeather(this.state.searchCity).then(city => {
      this.setState({
        city
      });
    }).then(() => {
      if(this.state.city.current.is_day === 1){
        this.setState ({bgImage: `url(${BgDay})`, colorText: 'black'})
      } 
      if (this.state.city.current.is_day === 0){
        this.setState({bgImage: `url(${BgNight})`, colorText: 'white'})
      }
    })
  };
  
 
  render() {
    let currentCity = this.state.city;
    let img = this.state.bgImage;
    let color = this.state.colorText;

    return (
      <div className="card" style={{background: img}}>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.currentCity}
          colorX={color}
        />
        {currentCity.location && <WeatherDetails cityData={currentCity} colorX={color} />}
      </div>
    );
  }
}

export default App;
