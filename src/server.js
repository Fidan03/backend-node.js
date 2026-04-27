import express from 'express'

// Import Routes
import movieRoutes from './routes/movieRoutes.js';

const app = express();



// API Routes (where we apply them)
app.use("/movies", movieRoutes);



app.get('/hello', (req, res) => {
    res.json({message: "Hello World"})
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
    
})
