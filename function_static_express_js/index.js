// import the package express
const express = require("express");
// creating instance of object
const app = express();
// import the package path for create new directory
const path = require("path");
// number port
const PORT = 3000;

// Static Middleware
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("home.ejs");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
console.log(app.use(express.static(path.join(__dirname, "public"))));
