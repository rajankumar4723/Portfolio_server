const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(express.json());
app.use(cors());        

// Routes
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
    res.send("Mahadev");
});
app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
