import logo from "../img/transparent-logo.png"
import adminService from "../Services/Admin"

const Navbar = ({setIsLoggedIn, setView, activityName}) => {
  const handleLogout = (e) => {
    e.preventDefault();
    adminService.setToken(null);
		localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-label">
        <div>
          <img className="navbar-logo" src={logo} alt="Logo" />
        </div>
        <h2>{activityName} Participants</h2>
      </div>
      <div className="navbar-btn-container">
        <button className="navbar-btn" onClick={(e) => setView("meditation")}>
          Meditation
        </button>
        <button className="navbar-btn" onClick={(e) => setView("makeup")}>
          Clean Body
        </button>
        <button className="navbar-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;