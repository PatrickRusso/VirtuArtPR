import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Paintings from "./Paintings"

export default function Main () {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/paintings" element={<Paintings/>}/>



            </Routes>

        </div>
    )
}