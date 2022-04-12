const mongoose = require('mongoose');
const tuitsDao = require('./database/tuits/tuits-dao');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://giuseppi:supersecretpassword@cluster0.m8jeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/cs5610-sp22');
app.use(cors());
app.use(session({
  secret: 'SECRETO',
  cookie: {secure: false}
}));
app.use(express.json());

require("./controllers/examples-controller")(app);
require("./controllers/users-controller")(app);
require("./controllers/session-controller")(app);
require("./controllers/tuits-controller/index")(app);
require("./movies/movies-controller")(app);

app.get('/', (request, response) => {
  response.send("Welcome to WebDev");
});

app.listen(process.env.PORT || 4000);