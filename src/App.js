import { useState } from 'react';
import './App.css';
import weather from './weather.json'
import WeatherDetails from './WeatherDetails';

function App() {

  const city = weather.query.results.channel.location.city
  const region = weather.query.results.channel.location.region
  const country = weather.query.results.channel.location.country
  const currTemp = weather.query.results.channel.item.condition.temp
  const weatherDesc = weather.query.results.channel.item.condition.text
  const forecast = weather.query.results.channel.item.forecast

  const [viewDetails, setViewDetails] = useState(true)

  const toggleDetails = () => {
    setViewDetails(!viewDetails)
  }

  return (
    <div className="App">
      <div className="weather_card">
        <h3 className='weather_card_title'>Weather today in&nbsp;
          {city},&nbsp;
          {region},&nbsp;
          {country}
        </h3>
        <div className='weather_card_current'>
          <h1 className='weather_card_current_temp'>
            {currTemp}
            &deg;
          </h1>
          <h3 className='weather_card_current_desc'>
            {weatherDesc}
          </h3>
          <h3 className='weather_card_current_sun'>
            {forecast[0].high}&deg;
            &nbsp;- &nbsp;
            {forecast[0].low}&deg;
          </h3>
        </div>
        <div className='weather_details_toggle'>
          <h3>More Details</h3>
          <button onClick={toggleDetails} >X</button>
        </div>
      </div>

      <div>
        <WeatherDetails
          viewDetails={viewDetails}
        />
      </div>

    </div>
  );
}

export default App;
