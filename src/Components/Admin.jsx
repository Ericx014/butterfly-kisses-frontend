import { useState } from "react";
import Login from "./Login";
import Table from "./Table";

const Admin = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			{
				isLoggedIn
				? <Table setIsLoggedIn={setIsLoggedIn} />
				: <Login setIsLoggedIn={setIsLoggedIn} />
			}
		</>
	)
}

export default Admin;