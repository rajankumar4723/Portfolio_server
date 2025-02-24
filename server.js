import app from "./App.js";  // ✅ Correct Default Import
import connectDB from "./database/db.js"; // ✅ Use Default Import
import dotenv from "dotenv";

// ✅ Load environment variables
dotenv.config({ path: "./database/config.env" });

// ✅ Connect to Database and Start Server
connectDB().then(() => {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port: ${PORT}`);
    });
}).catch((error) => {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
});
