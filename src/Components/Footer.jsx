import testing from "../img/testing.png";
import fccilogo from "../img/fccilogo.png";
import tarumtlogo from "../img/tarumt-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img className="tarumt-logo" src={tarumtlogo} alt="TAR UMT Logo" />
        <img className="fcci-logo" src={fccilogo} alt="FCCI Logo" />
      </div>
    </footer>
  );
};

export default Footer;
