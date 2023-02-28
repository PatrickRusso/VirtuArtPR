import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./PaintingsDetails";
import { Link } from "react-router-dom";

export default function Paintings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [paintings, setPaintings] = useState([]);

  const handleSearch = async () => {
    const url = `${BASE_URL}/artworks/search?q=${searchTerm}`;
    const response = await axios.get(url);
    setPaintings(response.data.data);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        className="searchBar"
        placeholder="Search for any painting we have!"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className="searchButton" onClick={handleSearch}>
        Find!
      </button>

      <ul className="searchresults">
        {paintings.map((painting) => (
          <li key={painting.id}>
            <div>
              <h3>{painting.title}</h3>
              <p>{painting.thumbnail.alt_text}</p>
              <p>{painting.dimensions}</p>
            </div>

            <div className="images">
              {/* <img
                src={painting.thumbnail.lqip}
                alt={painting.thumbnail.alt_text}
              /> */}
            </div>
          </li>
        ))}
      </ul>

      <div className="backHomeContainer">
        <Link to="/">
          <button className="homeButton">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
