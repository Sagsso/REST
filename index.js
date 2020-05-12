const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { port, db } = require('./conf');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/gods')(app, db);
require('./routes/beyblades')(app, db);
require('./routes/default')(app);

// Iniciamos la escucha de peticiones por el puerto 3000
app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});
