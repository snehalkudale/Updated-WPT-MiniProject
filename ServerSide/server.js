require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const router = require('./router/auth-router');
app.use(express.json());

const corsOptions = {
    origin: "http://localhost:3000",
    methods : "GET, POST , PUT, DELETE, PATCH, HEAD" ,
    credentials : true,
}
app.use(cors(corsOptions));


const connectDb = require('./utils/db');

app.use('/api/auth', router);


connectDb().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
 
});
})