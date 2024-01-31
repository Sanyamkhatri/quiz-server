const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require('./config/db'); 
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT || 3100;
dotenv.config();

const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const quizQuestions = require("./routes/quizQuestions");
const quiz = require("./routes/quiz");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(cookieParser())

app.use(
  cors({
    origin: `http://localhost:3004`,
    credentials: true,
  })
);

//Routes
app.use("/api", authRoutes);
app.use("/api", analyticsRoutes);
app.use("/quiz", quizQuestions);
app.use("/api", quiz);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server running`);
});