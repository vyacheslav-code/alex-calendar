const weatherApiKey = "c312e9446d1ea15416f22da8a911192c";
export const weatherApiLink = (city: string) =>
  `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${weatherApiKey}&units=metric`;
export const scheduleApiLink = (group: string) => `http://api.rozklad.org.ua/v2/groups/${group}/timetable`
