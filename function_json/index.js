const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body.name);
  res.end();
});
app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log("Server listening on PORT", PORT);
});
// Now make a POST request to http://localhost:3000/ with header set to ‘content-type: application/json’ and body {“name”:”Andrei”}
// curl -X POST http://localhost:3000/ -H 'Content-type: application/json' -d '{"name": "Andrei"}'
// output with middleware json() is Andrei

// curl -X POST http://localhost:3000/ -H 'Content-type: application/json' -d '{"name": "Andrei"}'
// Without the middleware then We will see the following output on your console: TypeError: Cannot read property 'name' of undefined
