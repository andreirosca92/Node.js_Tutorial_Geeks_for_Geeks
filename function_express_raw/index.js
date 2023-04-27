const express = require("express");

const app = express();
const PORT = 3000;
// with Middleware
app.use(express.raw());

app.post("/", (req, res) => {
  console.log(req.body);
  res.end();
});
app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log("Server listening on PORT", PORT);
});
//Now make a POST request to http://localhost:3000/ with header set to ‘content-type’ – ‘application/octet-stream’ and body { “name”:”Andrei” }
// You will see the following output on your screen:
// <Buffer 7b 22 6e 61 6d 65 22 3a 22 41 6e 64 72 65 69 22 7d>