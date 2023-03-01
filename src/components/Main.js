import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Paintings from "./Paintings"
import Nav from "./Nav";

export default function Main () {
    return (
        <div>
          
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/paintings" element={<Paintings/>}/>



            </Routes>

        </div>
    )
}