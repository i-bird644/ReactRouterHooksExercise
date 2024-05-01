import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [films, setFilms] = useState([]);
  
  useEffect(() => {

    fetch('https://studioghibliapi-d6fc8.web.app/films')
    .then((response) => {
      
      return response.json();
    })
    .then((data) => {
      
      setFilms(data);
    })
    .catch((err) => {
      
      console.error(err);
    })
  }, [])

  return (
    <>
      
      <h1>Studio Ghibli Films</h1>
      <p>Created By: David Michael</p>
      <ul>

        {films.map((film) => {
            
          return (
            <li key={film.id}>
              <div className="movie-left">
                <h2>{film.title}</h2>
                <img src={film.image} alt={`${film.title} banner`} />
              </div>

              <div className="movie-right">
                <p>{film.description}</p>
                <p>{film.running_time}m - Rotten Tomatoes: {film.rt_score}%</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default App
