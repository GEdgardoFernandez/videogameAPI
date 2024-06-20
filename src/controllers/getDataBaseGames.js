const { Videogame, Genre } = require('../db');

const getDataBaseGames = async (req, res) => {
  try {
    const videoGames = await Videogame.findAll({
      include: [
        {
          model: Genre,
          attributes: ['name'], // Especifica los atributos que quieres incluir
          through: {
            attributes: [], // Esto evita que los atributos de la tabla intermedia se incluyan
          },
        },
      ],
    });
    const data = videoGames.map(vgames => ({
      name: vgames.name,
      id: vgames.id,
      image: vgames.image,
      description: vgames.description,
      released: vgames.released,
      rating: vgames.rating,
      platforms: vgames.platforms,
      genres: vgames.genre,
      create: vgames.create,
    }));

    return data;
  } catch (error) {
    console.error('Error al obtener datos de la base de datos:', error.message);
    throw error;
  }
}

module.exports = getDataBaseGames;