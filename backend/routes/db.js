const express =  require ("express");
const router = express.Router();
const {addMovie, deleteMovie, getMovies, updateMovie  }  =  require('../controllers/db')

router.post('/addMovie' , addMovie ,addMovie )

router.delete('/deleteMovie/:id' , deleteMovie)

router.get('/getMovies/', getMovies)

router.put('/updateMovie/:id', updateMovie);


module.exports =  router ;
