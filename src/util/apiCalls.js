export const getLonLat = async (cityName) => {

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=347a9a3a94cba1f28b40a02f9da0c6c3`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(!response.ok) {
    throw Error('There was an error calculating your coordinates. Please try again.')
  }
  console.log(response)
  const data = await response.text()
  console.log(data)
  const coordinates = {...data.coordinates}
  return coordinates
}

export const getWeatherForCity = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units=imperial&appid=347a9a3a94cba1f28b40a02f9da0c6c3`)
  if(!response.ok) {
    throw Error('There was an error retreiving your weather data. Please try again')
  }
  const weatherData = await response.json()
  return weatherData;
}