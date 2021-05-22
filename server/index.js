const express = require("express");
const app = express();
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 8000;

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Listening on http://localhost:8000/");
});
