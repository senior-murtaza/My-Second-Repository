import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

createRoot(document.getElementById("root")).render(<StrictMode>
    <BrowserRouter>
    <Navigation/>    
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign" element={<Sign/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
</StrictMode>);
