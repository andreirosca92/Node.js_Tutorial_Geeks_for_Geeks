const express = require("express");

const app = express();
const PORT = 3000;

const router = express.Router();
app.get("/", (req, res) => {
  console.log("Router working");
  res.end();
});
app.use(router);

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log("Server listening on PORTO", PORT);
});
// curl -X GET http://localhost:3000 then you will see the following output on your screen:
// Server listening on PORT 3000
// Router Working
