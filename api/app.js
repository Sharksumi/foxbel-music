const express = require("express");
const axios = require("axios");
const app = express();
const cors = require('cors')
const port = 4000;

app.use(cors());

app.get("/artist", (req, res) => {
  axios
    .get("https://api.deezer.com/artist/27")
    .then((response) => res.send(response.data));
});

app.get("/album", (req,res) => {
  axios
    .get("https://api.deezer.com/album/302127")
    .then((response) => res.send(response.data));
})

app.get("/search", (req,res) => {
  const search = req.query.search
  axios
    .get(`https://api.deezer.com/search?q=${search}`)
    .then((response) => res.send(response.data))
})

app.listen(port, () => {
  console.log('Example app listening on port 4000}');
});
