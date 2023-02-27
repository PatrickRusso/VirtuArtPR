import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./PaintingsDetails";

export default function Paintings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [paintings, setPaintings] = useState([]);

  const handleSearch = async () => {
    const url = `${BASE_URL}/artworks/search?q=${searchTerm}`;
    const response = await axios.get(url);
    setPaintings(response.data.data);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search!</button>

      <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>{painting.title}
          <div className="images">
          <img src={painting} alt={painting.thumbnail.alt_text} />
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
