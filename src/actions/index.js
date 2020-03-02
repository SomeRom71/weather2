export const setWeather = weather => ({
  type: "SET_WEATHER",
  payload: weather
})

export const addCity = cityList => ({
  type: "ADD_CITY",
  payload: cityList
})
