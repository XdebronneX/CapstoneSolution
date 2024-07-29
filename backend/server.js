const app = require('./app');
const csDB = require('./config/database');
const path = require('path')
require('dotenv').config({ path: './config/.env' });
const cloudinary = require("cloudinary");

//setup cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
//connect to database
csDB();

//start the express server
app.listen(process.env.PORT, () => {
    console.log(`server started in ${process.env.NODE_ENV} mode `);
});