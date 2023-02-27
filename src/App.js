import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>

      <div className="main-container">
        <Main />
      </div>
      <h1></h1>
    </div>
  );
}

export default App;
