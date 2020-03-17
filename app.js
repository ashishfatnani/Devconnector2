const express = require("express");
const connectDb = require("./config/db");
const app = express();
connectDb();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is the Homepage!");
});

app.use("/api/users", require("./routes/api/users"));

app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/profile", require("./routes/api/profile"));

app.use("/api/posts", require("./routes/api/posts"));

app.listen(3000, () => {
  console.log("Listening to the port number 3000!");
});
