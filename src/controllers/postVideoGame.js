const { Videogame, Genre } = require('../db');

async function createVideogame(req, res) {
    try {
        const { name, image, description, platforms, released, rating, genres } = req.body;

        // Asegúrate de que platforms y genres sean arrays
        if (!Array.isArray(platforms)) {
            return res.status(400).send('Platforms must be an array');
        }

        if (!Array.isArray(genres)) {
            return res.status(400).send('Genres must be an array');
        }

        const newVideogame = await Videogame.create({
            name,
            image,
            description,
            platforms, // platforms debe ser un array
            released,
            rating,
        });

        // Asociar los géneros
        const genreInstances = await Genre.findAll({
            where: { name: genres } // Aquí asumimos que genres es un array de nombres de géneros
        });
        await newVideogame.setGenres(genreInstances);

        res.status(201).send(newVideogame);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

module.exports =  createVideogame;
