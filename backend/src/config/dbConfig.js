import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

function dbConfig() {
    mongoose
    .connect(`${process.env.URI}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

export default dbConfig;