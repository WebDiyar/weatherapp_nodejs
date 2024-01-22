import currencyapi from "@everapi/currencyapi-js";
import express from "express";
import axios from "axios";

const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const money = req.query.money;
  const moneyHistory = req.query.moneyHistory;

  let base;
  let historical;
  let weather;
  let error = null;
  const currencyApiKey = "cur_live_ZBbhBB2Z8iayiYpu9IPGxFQqLz5tApxa6VROY1bS "; //1
  const weatherApiKey = "42774f2f6606fac42a36af212e6b5d13";


  //cur_live_Ug5qofSimVWU1lW0o1bdSmwKd0CVuMGjlX45qFCO - 2
  //cur_live_ZBbhBB2Z8iayiYpu9IPGxFQqLz5tApxa6VROY1bS - 1

  try {
    const currencyClient = new currencyapi(currencyApiKey);
    const currencyResponse = await currencyClient.latest({
      base_currency: `${money}`,
      currencies: ["EUR", "KZT", "RUB"],
    });

    base = currencyResponse;

    const historicalResponse = await axios.get(
      `https://api.currencyapi.com/v3/historical?apikey=cur_live_Ug5qofSimVWU1lW0o1bdSmwKd0CVuMGjlX45qFCO&currencies=EUR%2CKZT%2CRUB&date=${moneyHistory}`
    );
    historical = historicalResponse.data;

    // const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherApiKey}&units=metric`;
    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`
    const weatherResponse = await axios.get(weatherAPIUrl);
    weather = weatherResponse.data;

  } catch (err) {
    base = null;
    historical = null;
    weather = null;
    error = "Error fetching data, please try again";
  }

  res.render("index", { weather, base, historical, error });
});


app.get('/map', (req, res) => {
  const { lat, lng } = req.query;

  res.render('map', { apiKey: 'AIzaSyAycQCTMjhQO9jqkQYomT6pcqEp-bMnrI0', lat, lng });
});


app.get("/getWeather", async (req, res) => {
  try {
    const { city, day } = req.query;
    const apiKey = 'd39c8502078d460094b83523242101'; 

   const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${day}&aqi=no&alerts=no`;
    const response = await axios.get(apiUrl);

    const weatherData = response.data;
    res.render('weather', { apiKey, city, day, weatherData });
    console.log(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Error fetching weather data');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
