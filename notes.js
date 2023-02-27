// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL } from "./PaintingsDetails";

// export default function Paintings() {
 
//   const [searchTerm, setSearchTerm] = useState("")
//   const [paintings, setPaintings] = useState({});

//   useEffect(() => {
//     // const url = "https://api.artic.edu/api/v1/swagger";
//     // const url = "https://api.artic.edu/api/v1/artworks/search?q=wave"

//     const getPaintings = async () => {
//       // const response = await axios.get(`${BASE_URL}wave`);
//       const response = await axios.get(`${BASE_URL}`);

//       console.log(response.data);

//       setPaintings(response.data);
//     };
//     getPaintings();
//   }, []);

//   // console.log(Paintings);

//   if (!Paintings) {
//     return <h1>loading please wait</h1>;
//   } else {
//     return (
//       <div>
//         <h2>Search any word below and find a painting that fits your mood!</h2>
//       </div>
//     );
//   }
// }

