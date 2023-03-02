export default function Home() {
  return (
    <div className="home">
      <h1> Welcome! </h1>
      <h3>
        This Web App allows anyone to search for paintings that have been held
        in the Art Institute of Chicago
      </h3>
      <h3>Navigate to the 'Find a Painting' page to start! </h3>
      <h4>///EXAMPLE///</h4>
      <h4>User searches for 'Water' related images:</h4>{" "}
      <div
        className="images"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="wavy"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Tsunami_by_hokusai_19th_century.jpg"
          alt="React Image"
        />
        <h4 className="left">
          Under the Wave off Kanagawa Right: A Sunday Afternoon on the
          Island of La Grande Jatte
        </h4>

        <img
          className="wavy"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1200px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg"
        ></img>
        <h4 className="right">
          A Sunday on La Grande Jatte — 1884 Large painting of people in a
          crowded park, brushstrokes are dots.
        </h4>
      </div>
    </div>
  );
}
