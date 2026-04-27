import express from 'express'
import { config } from 'dotenv';
import { connectDB, disconecctDB } from './config/db.js';

// Import Routes
import movieRoutes from './routes/movieRoutes.js';


config();
connectDB();


config();

const app = express();



// API Routes (where we apply them)
app.use("/movies", movieRoutes);



app.get('/hello', (req, res) => {
    res.json({message: "Hello World"})
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
});


//Handle unhandled promise rejections (e.g. database connection errors)
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection: ", err);
    Server.close(async () => {
        await disconecctDB();
        process.exit(1);
    });
});


//Handle uncaught exceptions 
process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception: ", err);
    await disconecctDB();
    process.exit(1);
});


//Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    Server.close(async () => {
        await disconecctDB();
        process.exit(0);
    });
});