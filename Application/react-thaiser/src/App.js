import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ClassifyPage from "./pages/classify";
import EditProfilePage from "./pages/editprofile";
import HistoryPage from "./pages/history";
import ResultPage from "./pages/result";
import httpClient from "./utils/httpClient";
import { UserContext } from "./contexts/UserContext";

function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      httpClient
        .post(`/validateToken/?token=${token}`)
        .then((res) => {

          setUser(res.data);
        })
        .catch((err) => {
          localStorage.removeItem("token");
          console.log(err);
        });
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<SignInPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/classify" element={<ClassifyPage/>} />
          <Route path="/editprofile" element={<EditProfilePage/>} />
          <Route path="/result" element={<ResultPage/>} />
          <Route path="/history" element={<HistoryPage/>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
