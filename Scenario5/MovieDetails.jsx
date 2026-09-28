import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MovieDetails(){
    const {id} = useParams()
    
    const movies=[
        { id: 1, year: 1990, title: "Titanic", Genre: "Romantic", Duration: 115 },
        { id: 2, year: 2010, title: "Captain America", Genre: "Science fiction", Duration: 145 },
        { id: 3, year: 2024, title: "Scream", Genre: "Scary", Duration: 105 },
        { id: 4, year: 2012, title: "Deo", Genre: "Mafia", Duration: 186 },
        { id: 5, year: 2002, title: "Love and Beast", Genre: "Romantic", Duration: 155 },
    ];

    const movie = movies.find((movie) => movie.id === Number(id));
            return (
        <div className="movie-details-page">
            <div className="movie-details-card">
                <h1>{movie.title}</h1>

                <p>Genre: {movie.Genre}</p>
                <p>Year: {movie.year}</p>
                <p>Duration: {movie.Duration} minutes</p>

                <Link to="/movies">Back to Movies</Link>
            </div>
        </div>
    );
}
