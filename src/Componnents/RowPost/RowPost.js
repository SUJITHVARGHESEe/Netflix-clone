import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setHoveredMovieId(response.data.results[0].key);
        } else {
          console.log('video not available');
        }
      });
  };

  return (
    <div className='row'>
      <h2 className='poster_title'>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`image-container ${
              hoveredMovieId === movie.id ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleMovie(movie.id)}
            onMouseLeave={() => setHoveredMovieId(null)}
          >
            <img
              className={`poster ${props.isSmall ? 'small_poster' : ''}`}
              src={`${imageUrl}${movie.backdrop_path}`}
              alt='poster'
            />
            {hoveredMovieId === movie.id && (
              <iframe
                className='video'
                src={`https://www.youtube.com/embed/${hoveredMovieId}`}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
