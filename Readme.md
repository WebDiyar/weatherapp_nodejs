# Weather Forecast Application - README.md

## Introduction

Welcome to the Weather Forecast Application, a robust and interactive tool designed to provide real-time weather forecasts. Utilizing the power of three different APIs, this application delivers accurate weather information in a user-friendly format. The application is built with a focus on clean and efficient code practices, ensuring a seamless user experience.

## Features

- Real-time weather forecasting.
- Integration with three distinct APIs for comprehensive data.
- Easy-to-use interface with required input fields.
- Runs on a local server (Port 3000).

## Installation

### Prerequisites

- Node.js installed on your system.

### Setup Instructions

#### Clone the Repository

1) Open the cmd:
2) `git clone https://github.com/WebDiyar/weatherapp_nodejs.git`
3) `cd weatherapp_nodejs`
4) `npm install`
5) `npm start`



#### Configuration

- Ensure you have the following API keys:
  - Currency API: `cur_live_ZBbhBB2Z8iayiYpu9IPGxFQqLz5tApxa6VROY1bS` [CurrencyAPI](https://app.currencyapi.com/dashboard)
  - Weather API: `30cf23e4108bbec1a6fc67d3b05b31c6` [OpenWeatherMap](https://openweathermap.org/)
  - Google Maps API: `AIzaSyAycQCTMjhQO9jqkQYomT6pcqEp-bMnrI0` [Google Maps](https://www.google.com/maps)

#### Project Structure

- The project contains two main folders and four essential files.
- The core file is `app.js`, which includes an Express server configured to run on port 3000.

#### Starting the Application

- In the project root directory, execute `npm start` in your terminal to start the server.
- Access the application through [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

- **Input Requirements**: You must fill all three input fields in the application interface to receive weather forecasts.
- **API Integration**: The application seamlessly integrates the three mentioned APIs to fetch and display weather data and currency.

## Design Decisions

- **Separation of Concerns**: The core logic of the application is encapsulated within the `app.js` file. HTML files are used solely for presentation, ensuring a clear separation between logic and presentation layers.
- **API Utilization**: The choice of APIs provides a comprehensive set of data, enhancing the accuracy and reliability of weather forecasts and currency.
- **Server Configuration**: Running on a local server (Port 3000) allows for easy setup and testing, making it convenient for users to deploy and use the application locally.
