const dotenv = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
        process(1);
    }
}

module.exports = connectDB;
