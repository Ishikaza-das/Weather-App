# Weather App 🌦️

## Overview

The Weather App is a simple web application that allows users to view the current weather and forecast for any city. It fetches real-time weather data from the Weatherbit API and displays temperature, humidity, wind speed, and other weather conditions.

## Features 🚀

🌍 Search weather for any city

☀️ Displays current weather conditions

📅 Shows 7-day weather forecast

🌡️ Temperature, humidity, wind speed, and more

🎨 Responsive and user-friendly UI

## Tech Stack 🛠️

Frontend: React, Axios, Tailwind CSS

API: Weatherbit API

# Installation & Setup 🏗️

## Prerequisites

Weatherbit API Key (Get one from Weatherbit)

Steps to Run Locally

Clone the repository:

git clone https://github.com/Ishikaza-das/Weather-App.git
cd weather-app

# Install dependencies:

npm install

Create a floder name source & api file and add your Weatherbit API Key:

GEO_API_URL = your_api_key_here
WEARTHER_API = your_api_key_here
WEARTHER_API_KEY = your_api_key_here

Start the development server:

npm start

Open http://localhost:3000/ in your browser.

API Usage 🌐

Fetch current weather:

GET https://api.weatherbit.io/v2.0/current?city=London&key=YOUR_API_KEY

Fetch 5-day forecast:

GET https://api.weatherbit.io/v2.0/forecast/daily?city=London&key=YOUR_API_KEY

Screenshots 📸
![Weather App Screenshot](src/assets/Weather-App.png)


🌟 Enjoy checking the weather effortlessly! 🌦️

