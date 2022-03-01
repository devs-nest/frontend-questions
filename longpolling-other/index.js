import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import formData from "express-form-data";
import path from "path";

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res) => {
  console.log(req.query, req.params, req.body);
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.json({ message: "Login Successfull", user: user, success: true });
        // res.location("/dashboard.html");
        // res.render("dashboard.html");
      } else {
        res.json({ message: "Password didn't match" });
      }
    } else {
      res.json({ message: "User not registered" });
    }
  });
});

app.get("/login", (req, res) => {
  console.log(req.query, req.params, req.body);
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.json({ message: "Login Successfull", user: user, success: true });
        // res.location("/dashboard.html");
        // res.render("dashboard.html");
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

const LIMIT = 20;
const DELAY = 1000;

let connections = [];

app.get("/date", (req, res, next) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Transfer-Encoding", "chunked");

  connections.push(res);
});

let tick = 0;

setTimeout(function run() {
  if (++tick > LIMIT) {
    connections.map((res) => {
      res.status(200).write("END\n");
      res.end();
    });
    connections = [];
    tick = 0;
  }
  connections.map((res, i) => {
    res.write(`Hello ${i}! Tick: ${tick} \n`);
  });
  setTimeout(run, DELAY);
}, DELAY);

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.json({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.json(err);
        } else {
          res.json({
            message: "Successfully Registered, Please login now.",
            success: true,
          });
        }
      });
    }
  });
});

// sending blob data to client
app.get("/blob", (req, res) => {
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("Content-Disposition", "attachment; filename=blob.txt");
  res.setHeader("Content-Length", "11");
  res.write("Hello World");
  res.end();
});

// sending image via post request
app.post("/image", (req, res) => {
  res.setHeader("Content-Type", "image/jpg");
  res.sendFile(path.join(__dirname, "/static/image.jpg"));
});

app.listen(process.env.PORT || 9002, () => {
  console.log(`BE started at ${process.env.PORT || 9002}`);
});
