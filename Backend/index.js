import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import enquiryRoutes from './routes/userRoutes.js'; // Import the correct routes

dotenv.config(); 

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json()); // For parsing JSON bodies
app.use('/api/enquiry', enquiryRoutes); // Use the enquiry routes

const dbURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
