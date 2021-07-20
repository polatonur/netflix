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
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
          <a href="https://github.com/polatonur">Onur</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
