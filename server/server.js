const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const User = require("./models/User");
// const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://talaarchi2007_db_user:studentportal1@cluster0.oip9eoc.mongodb.net/studentportal?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        message: "Email Already Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = new User({
      ...req.body,
      password: hashedPassword,
    });

    await user.save();

    res.json({
      message: "Registration Successful",
    });

  } catch (error) {
    res.status(500).json(error);
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

const isMatch = await bcrypt.compare(
  password,
  user.password
);

if (!isMatch) {
        return res.status(401).json({
        message: "Wrong Password",
      });
    }

    res.json({
      message: "Login Successful",
      user,
    });

  } catch (error) {
    res.status(500).json(error);
  }
});
app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});