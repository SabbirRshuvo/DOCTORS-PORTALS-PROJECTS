import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import { Navbar } from "./Pages/Sheared/Navbar";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
    return (
        <div className="App max-w-7xl mx-auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/appointment" element={<Appointment />}></Route>
            </Routes>
        </div>
    );
}

export default App;
