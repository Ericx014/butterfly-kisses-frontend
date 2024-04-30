import image from "../img/transparent-logo.png";

const Card = ({activity, days, time, location}) => {
  return (
    <div className="card-container">
      <div className="logo-container">
        <img className="logo" src={image} alt="Logo" />
      </div>
      <p className="heading">Butterfly kisses</p>
      <p className="sub-heading">Goodbye without regret</p>
      <p className="sub-heading-2">{activity}</p>
      <p>{days}</p>
      {time && <p>{time}</p>}
      <p>{location}</p>
      <p>TAR UMT, KL Main Campus</p>
    </div>
  );
};

export default Card;
