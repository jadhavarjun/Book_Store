const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');

//create express app
const app = express();

//parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())
//get post method imported
require('./Routes/routes')(app);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
    require('./dbConfig/dbConfig');
});
module.exports = app;
