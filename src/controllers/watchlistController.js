import {prisma} from '../config/db.js'

const addToWatchlist = async (req, res) => {
    const {movieId, status, rating, notes } = req.body;

    //Verify movie exists
    const movie = await prisma.movie.findUnique({
        where: {id: movieId}
    });

    if (!movie) {
        return res.status(404).json({error: "Movie not found"});
    }

    //check if already added
    const existingInWatchlist = await prisma.watchlistItem.findUnique({
        where: {id: movieId},
    });
}