import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home-page">
            <h2>Welcome to our Home Page</h2>
            <p>Explore our products.</p>

            <Link to="/products">View Products</Link>
        </div>
    )
}

export default Home;