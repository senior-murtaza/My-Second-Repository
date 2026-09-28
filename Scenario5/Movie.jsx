import { Link } from "react-router-dom";

export default function Movie(){
    const movies = [
        {id:1, year:1990, title:"Titanic", Genre:"Romantic", Duration:115 },
        {id:2, year:2010, title:"Captain America", Genre:"Scince fiction", Duration:145 },
        {id:3, year:2024, title:"Scream", Genre:"Scary", Duration:105 },
        {id:4, year:2012, title:"Deo", Genre:"Mafia", Duration:186 },
        {id:5, year:2002, title:"Love and Beast", Genre:"Romantic", Duration:155 },
        {id:6, year:2012, title:"Thor", Genre:"Scince fiction", Duration:116 }
        ]
   return (
        <div className="movies-page">
            <h1>Our Movies</h1>

            <div className="movies-container">
                {movies.map((movie) => (
                    <div className="movie-card" key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Genre: {movie.Genre}</p>
                        <p>Year: {movie.year}</p>
                        <p>Duration: {movie.Duration} minutes</p>

                        <Link to={`/movies/${movie.id}`}>
                            View Detail
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}