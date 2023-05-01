const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const SERVER_PORT = 4000;

const { getCompliment, getFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.post("/api/compliment", );
app.put("/api/compliment:id", );


app.listen(4000, () => console.log("Server running on 4000"));
