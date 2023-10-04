const http = require("http");
/**
 * Your `index.html` file and the css/js that it loads are all loaded into the browser.
 * Because all that information is available to anyone visiting your site, you can't call
 * the weather API directly from your website (there's a secret key involved that you
 * don't want exposed). We'll start a server that listens at port 3000 and makes the
 * API call: this is hidden from the people visiting your website, your key is safe!
 */
const server = http.createServer(async (req, res) => {
  // this `() => {}` stuff is mostly a different way to declare a function
  if (req.url === "/weather" && req.method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "*"); // this header allows the server to be called from anywhere

    const weather = await fetchWeather();
    console.log(weather); // this will print in the terminal that's running the server
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(weather)); // Finally! Send the data back to the frontend
    /**
     * This is all a bit verbose and there are a lot of frameworks/libraries that help make writing a
     * server easier; this is the most popular one right now: https://expressjs.com/en/starter/hello-world.html.
     * If your app grows, you might want to look into replacing this with something like that. It makes your
     * code a lot simpler to read, but it adds complexity in that you need to install 3rd party dependencies.
     */
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3001);

async function fetchWeather() {
  const api_key = "TODO";
  const lat = 42.9849;
  const lon = -81.2453;

  // This looks like the window.fetch call that we're making from the browser in index.js,
  // but it's actually running in the server! They just copied the interface so you can use
  // it there too. Just make sur eyou're using node 18+ or this won't work, it's a new feature.
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
}
