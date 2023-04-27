const express = require("express");
const PORT = 3000;
const app = express();
// multiple routing
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();
const router4 = express.Router();

app.get("/user", (req, res) => {
  console.log("User Router working");
  res.end();
});

app.get("/student", (req, res) => {
  console.log("Student Router working");
  res.end();
});

app.get("/admin", (req, res) => {
  console.log("Admin Router working");
  res.end();
});

app.get("/moderator", (req, res) => {
  console.log("Moderator Router working");
  res.end();
});

app.use(router1);
app.use(router2);
app.use(router3);
app.use(router4);

app.listen(PORT, (error) => {
  console.log("Server listening on PORT", PORT);
});
/*
1) you must split the terminal on VSCODE and enter the following cURL command:
    curl -X GET http://localhost:3000/user http://localhost:3000/student http://localhost:3000/admin http://localhost:3000/moderator
2) You will see the following output on your screen:

    Server listening on PORT 3000
    User Router working
    Student Router working
    Admin Router working
    Moderator Router working
*/
