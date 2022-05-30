import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Market from "./components/Market/Market";
import ArtsInfo from "./components/ArtsInfo/ArtsInfo";
import Auth from "./components/Auth/Auth";
import Reg from "./components/Auth/Reg";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import "./styles/style.css";
import "./App.css";

export default function App() {
    return (
        <div className="container">
            <Navbar />

            <div className="wrap-container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="/artsinfo" element={<ArtsInfo />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/reg" element={<Reg />} />
                    <Route path="/error" element={<Error />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}
