import { BrowserRouter } from "react-router-dom";
import All_routes from "./All_routes";
import Navbar from "./components/Navbar/Navbar";
import { setCurrentUser } from "./actions/currentUser";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <All_routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
