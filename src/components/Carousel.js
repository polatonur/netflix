const Carousel = (props) => {
  return (
    <div className="Carousel-item">
      <img src={props.movieUrl} alt="netflix movie" />
    </div>
  );
};
export default Carousel;
