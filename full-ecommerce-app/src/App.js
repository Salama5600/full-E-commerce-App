import "./App.css";
import Header from "./components/Header";

import "./style/header.css";
import "./style/main.css";
import "./style/todays.css";
import "./style/categories.css";
import "./style/offerImg.css";
import "./style/allProducts.css";
import "./style/footer.css";
import "./style/signUp.css";
import "./style/login.css";
import "./style/home-logged-in.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/sign-up" element={[<Header />, <SignUp />]} />
        <Route path="/log-in" element={[<Header />, <LogIn />]} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
