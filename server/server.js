const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.json());
app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (user) {
    res.json({
      success: true,
      user,
    });
  } else {
    res.json({
      success: false,
      message: "Invalid Credentials",
    });
  }

});
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Aarchi",
      department: "IT",
    },
    {
      id: 2,
      name: "Rahul",
      department: "Computer",
    },
  ]);
});

const users = [];

app.post("/register", (req, res) => {
  console.log(req.body);

  users.push(req.body);

  res.json({
    message: "Registration Successful",
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});