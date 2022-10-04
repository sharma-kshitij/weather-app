import React from 'react'
import weather from './weather.json'

const WeatherDetails = ({ viewDetails }) => {

    const windSpeed = weather.query.results.channel.wind.speed
    const humidity = weather.query.results.channel.atmosphere.humidity
    const pressure = weather.query.results.channel.atmosphere.pressure
    const sunrise = weather.query.results.channel.astronomy.sunrise
    const sunset = weather.query.results.channel.astronomy.sunset

    if (viewDetails) {
        return (
            <div className='weather_details'>
                <div>
                    Wind Speed : {windSpeed}m/s
                    <br />
                    Humidity : {humidity}%
                    <br />
                    Pressure : {pressure}mb
                    <br />
                </div>
                <div className='sunDetails'>
                    {/* graphical representation of sunrise and sunrise times */}
                    <div className="sun"></div>
                    <h4 className='sunrise'>{sunrise}</h4>
                    <h4 className='sunset'>{sunset}</h4>
                </div>
            </div>
        )
    }

}

export default WeatherDetails