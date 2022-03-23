import './App.css';
import Nav from './component/Nav';
import Poster from './component/Poster';
import { useState, useEffect} from 'react'
import axios from 'axios'
import Row from './component/Row';
import Search from './component/Search';

function App() {
  const[animatedMovies, setAnimatedMovies] = useState([]);
  const[actionMovies, setActionMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        'http://www.omdbapi.com/?apikey=9aa6a131&type=movie&s=animation'
      );
      const secondResult = await axios.get(
        'http://www.omdbapi.com/?apikey=9aa6a131&type=movie&s=action'
      );
      
      console.log(secondResult.data)
      // console.log(result.data)
      // console.log(result.data.Search)
      setAnimatedMovies(result.data.Search);
      setActionMovies(secondResult.data.Search);
    };

    fetchItems();
  }, []);
  useEffect(() => {
    const search = async () => {
      if(query.length >= 3) {
      const searchresult = await axios.get(
        `http://www.omdbapi.com/?apikey=9aa6a131&type=movie&s=${query}`

          
      );
           setSearch(searchresult)
      }

      
    }
    search();
  },[query])

  return (
    <div className="App">
      <Nav/>
      <Poster/>
      <Search getQuery={(q) => setQuery(q)}/>
      <Row movies={animatedMovies} title='Animation'/>
      <Row movies={actionMovies} title='Action'/>
    </div>
  );
}

export default App;
