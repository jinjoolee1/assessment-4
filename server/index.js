const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const SERVER_PORT = 4000;

const { getCompliment, getFortune, getHappyfact, getGoodnews, getCodingrocks } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/happyfact", getHappyfact);
app.get("/api/goodnews", getGoodnews);
app.get("/api/codingrocks", getCodingrocks);

app.listen(4000, () => console.log("Server running on 4000"));
