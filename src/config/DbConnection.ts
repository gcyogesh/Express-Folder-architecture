import mongoose from 'mongoose';



const MONGO_URL: string = process.env.MONGO_URL || '';

const DbConnection = () => {

    mongoose.connect(MONGO_URL).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error("Error connecting to the database:", error);
    });
}

export default DbConnection;
