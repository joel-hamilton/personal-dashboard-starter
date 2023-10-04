async function fetchCurrentTemp() {
  // fetch API is the browser's way of letting your website make http calls:
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  const res = await window.fetch("http://localhost:3001/weather");
  const weather = await res.json();
  console.log(weather); // this will print to your console, hit f12 in your browser to open devtools
  return convertKelvinToCelsius(weather.main.feels_like);
}

function convertKelvinToCelsius(tempKelvin) {
  const tempCelsius = tempKelvin - 273.15; // not 100% sure this is right, but you get the idea!
  return Math.round(tempCelsius);
}

async function updateTemperature() {
  const currentTemp = await fetchCurrentTemp();

  /**
   * Here we'll update the page. Directly using document.querySelector is a bit old-school,
   * often people will use a framework/library like Vue/React/Angular to keep the view in
   * sync with the data. Before that jQuery was really big (this like in jQuery would
   * just be $(".weather").text("The current...")). The browser built-in document.querySelector
   * is totally fine, the others are overkill for now.
   */
  document.querySelector(
    ".weather"
  ).innerHTML = `The current temperature is ${currentTemp}`;
}

// fetch weather and update page every 15 mins
setInterval(updateTemperature, 15 * 60 * 1000);
updateTemperature(); // call it once right now
