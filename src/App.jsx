import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Makeup from "./Components/Makeup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/makeup" element={<Makeup />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
