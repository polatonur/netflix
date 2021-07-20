import "./App.css";
import MovieGenre from "./components/MovieGenre";
import netflixLogo from "./assets/img/netflix.svg";
import movies from "./movies.json";

function App() {
  return (
    <div className="App">
      <header className="logo container">
        <img src={netflixLogo} alt="netflix logo" />
      </header>
      {movies.map((listItem, index) => {
        console.log(listItem);
        return (
          <MovieGenre
            key={index}
            category={listItem.category}
            images={listItem.images}
          />
        );
      })}
      <footer>
        <p>Made with React at Le Reacteur By Nono</p>
      </footer>
    </div>
  );
}

export default App;
