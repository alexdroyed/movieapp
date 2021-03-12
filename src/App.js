import React from 'react'
import Movie from './components/Movie'


export default function App() {
  return (
    <div>
      <Movie
        title="Raya and the Last Dragon"
        poster="https://image.tmdb.org/t/p/w500/qtX2Fg9MTmrbgN1UUvGoCsImTM8.jpg?api_key=1a09dcf42c6c621e5b547c2f53c489b3"
        usersScore={330}
      />
    </div>
  );
}

