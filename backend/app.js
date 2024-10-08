const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')
const cors = require('cors')
const errorMiddleware = require("./middlewares/errors")
const users = require("./routes/user")
const products = require("./routes/product")

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Routes
app.use('/api/v1', users);
app.use('/api/v1', products);

// Error Middleware
app.use(errorMiddleware);
module.exports = app