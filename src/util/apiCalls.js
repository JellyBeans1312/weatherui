export const getWeatherForCity = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&units={imperial}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  if(!response.ok) {
    throw Error('There was an error retreiving your weather data. Please try again')
  }
  const weatherData = await response.json()
  return weatherData;
}