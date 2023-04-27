const express = require("express");

const app = express();
const PORT = 3000;
// without this middleware the terminal prints undefined
app.use(express.urlencoded({ extended: false }));
app.post("/", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => {
  console.log("Server listening on PORT", PORT);
});
// Now make a POST request to http://localhost:3000/ with header set to ‘content-type: application/x-www-form-urlencoded’ and body {“name”:”Andrei”}
// split terminal e enter command Now make a POST request to http://localhost:3000/ with header set to ‘content-type: application/x-www-form-urlencoded’ and body {“name”:”Andrei”},
