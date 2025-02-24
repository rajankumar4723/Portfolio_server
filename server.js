import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/db.js'; // Ensure this function connects to DB
import contactRoutes from './routes/contactRoutes.js';

dotenv.config({ path: "./database/.env" }); // Fixed dotenv config

// Connect to Database
const startServer = async () => {
    try {
        await connectDB(); // Ensure database connection is successful
        console.log("Database connected successfully");
        
        const app = express();
        app.use(express.json());
        app.use(cors());

        app.use('/api/contact', contactRoutes);

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

startServer();
