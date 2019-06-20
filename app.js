const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const parientRoutes = require('./routes/patient.route');

const PORT = process.env.PORT || 3000;

const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.use('/api/patient',parientRoutes);


app.listen(PORT,() =>
{
    console.log(`Now listening on port ${PORT}`);
});