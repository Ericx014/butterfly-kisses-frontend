import image from "../img/transparent-logo.png";

const Card = () => {
  return (
    <div className="card-container">
      <div className="logo-container">
        <img className="logo" src={image} alt="Logo" />
      </div>
      <p className="heading">Butterfly kisses</p>
      <p className="sub-heading">Goodbye without regret</p>
			<p className="sub-heading-2">Meditation session</p>
      <p>7th-9th May 2024</p>
      <p>10:00a.m - 5:00p.m</p>
      <p>Concourse</p>
      <p>TAR UMT, KL Main Campus</p>
    </div>
  );
};

export default Card;
