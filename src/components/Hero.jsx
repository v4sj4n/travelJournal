import locationIcon from "../assets/location-icon.png";

function Hero(props) {
  function Hrel(){
    return(<hr className="hr--hero" />)
  }
  let isLastProp = false;
  if (props.item.id != 2){
    isLastProp = true
  } 
  return (
    <div className="container">
      <section>
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
      </section>
     {isLastProp && <Hrel />} 
    </div>
  );
}

export default Hero;
