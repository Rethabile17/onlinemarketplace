const { collection, addDoc, deleteDoc, doc, getDocs, setDoc } = require("firebase/firestore");
const { db } = require("../config/firebase");

const addMovie = async (req, res) => {
  console.log("Request body:", req.body); 

  const { movieName, director, price, genre, description, image} = req.body;

  
  const missingFields = [];
  if (!movieName) missingFields.push("movieName");
  if (!director) missingFields.push("director");
  if (!price) missingFields.push("price");
  if (!genre) missingFields.push("genre");
  if (!image) missingFields.push("image");
  if (!description) missingFields.push("description");

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `The following fields are required: ${missingFields.join(", ")}`,
    });
  }

  try {
    const docRef = await addDoc(collection(db, "movies"), {
      movieName: movieName,
      director: director,
      price: price,
      genre: genre,
      description: description,
      image: image
    });

    res.json({
      message: "Added successfully",
    });
  } catch (error) {
    console.log("Error adding movie:", error);
    res.status(500).json({
      message: "Error adding movie",
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting movie with id:", id);
    const movieDocRef = doc(db, "movies", id);
    await deleteDoc(movieDocRef);
    res.json({
      message: "movie successfully deleted",
    });
  } catch (error) {
    console.log("Error in deleting movie", error);
    res.status(500).json({ error: "Failed to delete movie" });
  }
};

const getMovies = async (req, res ) => {
  try {
    const querySnapshot = await getDocs(collection(db, "movies"));
    const data = querySnapshot.docs.map((doc) => ({
      id:doc.id,
      ...doc.data(),
    }));
    res.json({
      data: data,
    
    });
  } catch(error) {
    console.log("Error in getting movie", error);
    res.status(500).json({ message: "Error in getting movies", error });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { movieName, director, price, genre, description, image} = req.body;

  
    if (!movieName || !director ||  !price || !genre || !description || !image  )  {
      return res.status(400).json({ message: "All fields are required" });
    }

    const movieDocRef = doc(db, "movies", id);

  
    await setDoc(movieDocRef, { movieName, director, price, genre, description, image}, { merge: true });

    res.json({
      message: "Movie updated successfully",
    });
  } catch (error) {
    console.error("Error updating movie", error);
    res.status(500).json({ message: "Failed to update movie" });
  }
};


module.exports = {
  addMovie,
  deleteMovie,
  getMovies,
  updateMovie
};
