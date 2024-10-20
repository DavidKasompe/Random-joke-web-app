const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "What do you get when you cross a snowman with a vampire? Frostbite.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What’s orange and sounds like a parrot? A carrot.",
];

app.get("/joke", (req, res) => {
  // Get a random index and use it to get a joke
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  
  // Send the random joke as a JSON response
  res.json({ joke: randomJoke });
});

app.listen(port, () => {
  console.log(`Joke API running at http://localhost:${port}`);
});
