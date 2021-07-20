import Carousel from "./Carousel";

const MovieGenre = (props) => {
  return (
    <div className="MovieGenre container">
      <h1>{props.category}</h1>
      <div className="carousel">
        {props.images.map((url, index) => {
          return <Carousel key={index} movieUrl={url} />;
        })}
      </div>
    </div>
  );
};
export default MovieGenre;
