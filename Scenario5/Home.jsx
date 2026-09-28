import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-page">
            <h1>Movie Go</h1>
            <h2>Welcome to our Home Page</h2>
            <p>Explore our products.</p>

            <Link to="/movies">View Movies</Link>
        </div>
    )
}

export default Home;