import express from "express";
import userRouter from "./routes/contactRoutes.js";
import { config } from "dotenv";
import cors from "cors";

// Initialize Express
  const app = express();

// ✅ Load environment variables
config({ path: "./database/config.env" });

// ✅ Middleware
app.use(express.json());    
app.use(cors({ origin: "*" })); // ✅ Allow Frontend Requests


// ✅ Routes
app.use('/api/contact', userRouter);

app.get("/", (req, res) => {
    res.send("Server is working!");
});

// ✅ Export the Express app
export default app;