const express = require('express');
const { errorHandler } = require('./middleware/errorHandler');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const user = require('./routes/userRoutes');

app.use('/api/v1', user);

// middle ware
app.use(errorHandler);

module.exports = app;
