import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Movie from "./Movie";
import Home from "./Home";
import Navigation from "./Navigation";
import NotFound from "./NotFound";
import MovieDetails from "./MovieDetails"

createRoot(document.getElementById("root")).render(<StrictMode>
    <BrowserRouter>
    <Navigation/>
    <hr />
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movies" element={<Movie/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="movies/:id" element={<MovieDetails/>}></Route>
    </Routes>
    </BrowserRouter>
</StrictMode>);
