import cloudy from "./images/cloudy.png"
import cold from "./images/cold.png"
import partly_cloudy from './images/partly_cloudy.png'
import breezy from "./images/windy.png"
import rain from "./images/rain.png"
import sunny from "./images/sunny.png"

export const getImage = (text) => {
    switch (text) {
        case "Cloudy":
            return cloudy

        case "Partly Cloudy":
            return partly_cloudy

        case "Rain":
            return rain

        case "Breezy":
            return breezy

        case "Sunny":
            return sunny

        case "Cold":
            return cold
        default:
            break;
    }
}