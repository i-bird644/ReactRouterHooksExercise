import { useState, useEffect } from "react";
import "./films.page.css";
import { filterFilmsByDirector, getFilmsStats, getListOf } from "../helpers/film.helpers.js";
import { Link } from "react-router-dom";


function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [searchDir, setSearchDir] = useState("");

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilms(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredFilms = filterFilmsByDirector(films, searchDir);

  const allDirs = getListOf(films, "director");
  const key = 2345;

  const {total, avg_score, acc_score, latest} = getFilmsStats(filteredFilms)

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <p>Created By: David Michael</p>
      <form>
        <div>
          <label htmlFor="">Select Movie Director</label>
          <select
            name="dirSelect"
            id="dirSelect"
            value={searchDir}
            onChange={(event) => {
              setSearchDir(event.target.value);
            }}
          >
            <option key={key} value="">
              All
            </option>
            {/*<option value="Hayao Miyazaki">Hayao Miyazaki</option>*/}

            {allDirs.map((dir) => {
              return (
                <option key={dir.id} value={dir}>
                  {dir}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div>
        <div>
          <span># Of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avg_score.toFixed(0)}%</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filteredFilms.map((film) => {
          return (
            <li key={film.id}>
              <div className="movie-left">
                <Link to={`/film/${film.id}`}>
                  <h2>{film.title}</h2>
                </Link>
                <img src={film.image} alt={`${film.title} banner`} />
              </div>

              <div className="movie-right">
                <p>{film.description}</p>
                <p>
                  {film.running_time}m - Rotten Tomatoes: {film.rt_score}%
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilmsPage;
