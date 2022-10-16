import locationIcon from "../assets/location-icon.png";

function Hero(props) {
  return (
    <main>
      <img
        src={props.item.imageUrl}
        alt={props.item.location}
        className="hero--image"
      />
      <div className="hero">
        <div className="hero--locationDiv">
          <img src={locationIcon} alt="" />
          <h3>{props.item.location.toUpperCase()}</h3>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="hero--title">{props.item.title}</h1>
        <h3 className="hero--dates">
          {props.item.startDate} - {props.item.endDate}{" "}
        </h3>
        <p className="hero--paragraph">{props.item.description}</p>
      </div>
    </main>
  );
}

export default Hero;
