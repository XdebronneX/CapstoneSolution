const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middlewares/errors")
const users = require("./routes/user");

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Routes
app.use('/api/v1', users);

// Error Middleware
app.use(errorMiddleware);
module.exports = app