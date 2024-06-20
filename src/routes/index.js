const { Router } = require('express');
// Importar todos los routers;
const { getGameById } = require('../controllers/getGameById');
const getAllGenres = require('../controllers/genreController');
const getAllVideogames = require('../controllers/getAllVideoGames');
const postVideoGame = require('../controllers/postVideoGame');
const getAllPlatforms = require('../controllers/getPlatforms');

const router = Router();

// Configurar los routers
router.get('/videogames', getAllVideogames); // Combina obtener todos los videojuegos y búsqueda por nombre
router.get('/videogames/:id', getGameById);
router.get('/genres', getAllGenres);
router.get('/platforms', getAllPlatforms);
router.post('/videogames', postVideoGame);

module.exports = router;