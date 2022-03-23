import './App.css';
import Nav from './component/Nav';
import Poster from './component/Poster';
import Searchbar from './component/Searchbar';
import { useState, useEffect} from 'react'
import axios from 'axios'
import Row from './component/Row';

function App() {
  const[movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        'http://www.omdbapi.com/?apikey=9aa6a131&type=movie&s=animation'
      );
      console.log(result.data)
      console.log(result.data.Search)
      setMovies(result.data.Search);
    };

    fetchItems();
  }, []);
  return (
    <div className="App">
      <Nav/>
      <Poster/>
      <Searchbar/>
      <Row movies={movies} title='Animation'/>
    </div>
  );
}

export default App;
