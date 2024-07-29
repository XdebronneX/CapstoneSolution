const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middlewares/errors")
const users = require("./routes/user")
const products = require("./routes/product")

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Routes
app.use('/api/v1', users);
app.use('/api/v1', products);

// Error Middleware
app.use(errorMiddleware);
module.exports = app