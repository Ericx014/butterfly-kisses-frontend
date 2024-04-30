import adminService from "../Services/Admin";
import { useEffect, useState } from "react";

const Login = ({setIsLoggedIn}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	
	useEffect(() => {
		if (localStorage.token){
			setIsLoggedIn(true);
		}
	}, [])

	const handleLogin = (e) => {
    e.preventDefault();
    const loginObject = {
      username: username,
      password: password,
    };
    adminService.login(loginObject).then((response) => {
      console.log("Logged in success", loginObject.username);
      adminService.setToken(response.token);
      console.log(response.token);
      setUsername("");
      setPassword("");
      setIsLoggedIn(true);

      setTimeout(() => {
        adminService.setToken(null);
        setIsLoggedIn(false);
      }, 15 * 6000);
    })
		.catch((error) => {
			alert("Incorrect password or username. Please try again.");
			console.log(error);
		})
  };

  return (
    <section className="login-container">
      <form className="login-form">
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Alibinabu"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="login-btn" type="submit" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
