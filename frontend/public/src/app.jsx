import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎬 Netflix Clone</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>📺 {movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
