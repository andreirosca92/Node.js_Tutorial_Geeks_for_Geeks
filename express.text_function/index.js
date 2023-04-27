// The express.text() function is a built-in middleware function in Express.
//It parses the incoming request payloads into a string and is based on body-parser.
// it returns an Object

const express = require("express");
const PORT = 3000;
const app = express();

// with Middleware, but without the Middleware returns undefined
app.use(express.text());

app.post("/", (req, res) => {
  console.log(req.body);
  res.end();
});
app.listen(PORT, (error) => {
  console.log("Server listening on PORT", PORT);
});

// You will see the following output on your screen:
//Server listening on PORT 3000
//{"titolo": "Ciao Server"}
