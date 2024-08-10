# Wheather-Check



A React-based weather application that allows users to search for weather information, view forecasts, and manage favorite cities.

## Features

- Search for weather information by city name
- Display current weather and 5-day forecast
- Toggle between Celsius and Fahrenheit
- Save and manage favorite cities
- Remember last searched city

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have a basic understanding of React and JavaScript
- You have obtained an API key from OpenWeatherMap (instructions below)

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/weather-dashboard.git
Copy
2. Navigate to the project directory:
cd weather-dashboard
Copy
3. Install the dependencies:
npm install
Copy
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
Copy
5. Start the JSON server (for managing favorites):
npx json-server --watch db.json --port 3001
Copy
6. In a new terminal window, start the React application:
npm start
Copy
The application should now be running on [http://localhost:3000](http://localhost:3000).

## Obtaining an OpenWeatherMap API Key

To use this application, you need to obtain an API key from OpenWeatherMap. Here's how:

1. Go to [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account.
2. After signing in, go to your "API keys" tab.
3. You can use the default key created for you or generate a new one.
4. Copy this API key and paste it into your `.env` file as shown in the setup instructions above.

Note: Free API keys from OpenWeatherMap have usage limits. Check their documentation for more details.

## Usage

- Use the search bar to look up weather information for a city.
- Click on the temperature unit toggle to switch between Celsius and Fahrenheit.
- Add cities to your favorites list for quick access.
- Remove cities from your favorites by clicking the trash icon.

## Contributing

Contributions to the Weather Dashboard are welcome. Please feel free to submit a Pull Request.



## Acknowledgments

- OpenWeatherMap for providing the weather data API
- React Icons for the weather icons
- JSON Server for the mock backend
