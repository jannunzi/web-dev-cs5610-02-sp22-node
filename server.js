const mongoose = require('mongoose');
const tuitsDao = require('./database/tuits-dao');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb://localhost:27017/cs5610-sp22');
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'SECRETO',
  cookie: {secure: false}
}));





// const promise = tuitsModel.find();
// promise.then((tuits) => {
//   console.log(tuits);
// })


// const examples = require("./examples-controller")
// examples(app);
require("./controllers/examples-controller")(app);
require("./controllers/users-controller")(app);
require("./controllers/session-controller")(app);
require("./controllers/tuits-controller/index")(app);

// app.get('/hello', (request, response) => {
//   response.send("Hello World");
// });

app.listen(4000);