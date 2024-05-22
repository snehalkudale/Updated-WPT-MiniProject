const mongoose = require('mongoose');
//const URI = "mongodb://127.0.0.1:27017/truthlense_admin"

const URI = process.env.MONGODB_URI;


const connectDb = async () => {

    try {
        await mongoose.connect(URI);
        console.log("Database connection successful");
        //process.exit(1);
        
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;