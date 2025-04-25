const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const globalErrorHandler = require("./middleware/errorHandler");


const dataRouter = require('./routes/dataRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());  // Parse incoming JSON

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
  app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    next();
  });
  
app.use('/api/v1/data', dataRouter); 

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;