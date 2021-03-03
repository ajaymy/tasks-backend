const mongoose = require('mongoose');
require('dotenv/config');
//connect to DB
//console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to DB for testing");
    });