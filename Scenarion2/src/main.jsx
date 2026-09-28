import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Info from "./Info";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

createRoot(document.getElementById("root")).render(<StrictMode>
    <BrowserRouter>
    <Navigation/>
    <hr />
        <Routes>
            <Route path="*" element={<NotFound/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="contact" element={<Contact/>}></Route>
            <Route path="info" element={<Info/>}></Route>
        </Routes>
    </BrowserRouter>
</StrictMode>);
