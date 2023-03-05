const express = require("express");

const app = express();

const PORT = 5000;


app.get('/', (req, res) => {
    console.log("Hello");
    res.send("HElo world");
})

app.listen(PORT, () => { console.log(`App is running on PORT: ${PORT}`) });

