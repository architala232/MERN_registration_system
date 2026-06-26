  const jwt = require("jsonwebtoken");
  const bcrypt = require("bcrypt");
  const express = require("express");
  const cors = require("cors");
  const User = require("./models/User");
  const auth = require("./middleware/auth");
  const Student = require("./models/Student");
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
  const JWT_SECRET = "studentportal_secret_key";
  app.get("/", (req, res) => {
    res.send("Backend Running");
  });
  app.get("/profile", auth, (req, res) => {
    res.json({
      message: "Protected Route Accessed",
      user: req.user,
    });
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

      const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login Successful",
    token,
    user,
  });

    } catch (error) {
      res.status(500).json(error);
    }
  });
app.post("/students", auth, async (req, res) => {    
    try {
      const student = new Student(req.body);

      await student.save();

      res.json({
        message: "Student Added",
        student,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });


  app.get("/students", auth, async (req, res) => {
    try {
      const students =
        await Student.find();

      res.json(students);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  app.put("/students/:id", auth, async (req, res) => {
      try {
          const { name, email, department } = req.body;

          const student = await Student.findByIdAndUpdate(
              req.params.id,
              {
                  name,
                  email,
                  department,
              },
              { new: true }
          );

          if (!student) {
              return res.status(404).json({
                  message: "Student not found",
              });
          }

          res.json({
              message: "Student updated successfully",
              student,
          });
      } catch (err) {
          res.status(500).json({
              message: err.message,
          });
      }
  });
  app.delete("/students/:id", auth, async (req, res) => {
      try {
          const student = await Student.findByIdAndDelete(req.params.id);

          if (!student) {
              return res.status(404).json({
                  message: "Student not found",
              });
          }

          res.json({
              message: "Student deleted successfully",
          });
      } catch (err) {
          res.status(500).json({
              message: err.message,
          });
      }
  });
  app.listen(5000, () => {
    console.log("Server Running on Port 5000");
  });