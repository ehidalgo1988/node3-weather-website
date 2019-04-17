const request = require('request')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (lat, lon, callback) => {
  const url = `https://api.darksky.net/forecast/2183f334ab58bb07a60aee38d19a75fc/${lat},${lon}`

  request({
    url,
    json: true
  }, (err, {body}) => {
    if (err) {
      callback('unable to connect to weather services', undefined)
    } else if (body.error) {
      callback('unable to find location. try another search', undefined)
    } else {
      callback(undefined, `It is currently ${body.daily.data[0].summary} degrees out. there is a  ${body.currently.precipProbability} of rain, thank you for using our weather app`)
    }
  })
}

module.exports = forecast