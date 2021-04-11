const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userAuth');
const adminRoutes = require('./routes/admin/adminAuth');
const categoryRoute = require('./routes/category');

const env = require('dotenv');
env.config();

const app = express();

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})


app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoute);

app.listen(process.env.PORT, () => {
    console.log('server is running ...');
})