async function getData() {
  const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
  const result = await data.json()
  console.info(result.properties.periods[1].shortForecast)
}

getData()