const express = require("express");
const cors = require("cors");
const port = 8000;

// mongoose.config could be changed to export a function that lets us pass in a db_name like we pass app into the function that our routes file exports
// const db_name = "my_db";
// require("./config/mongoose.config")(db_name);

require("./config/mongoose.config")

const app = express();

// req.body undefined without this!
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })
); // This is new

module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}

require('./routes/user.routes')(app);
app.listen(port, () =>
    console.log(`Listening on port ${port} for Requests to Respond to.`)
);