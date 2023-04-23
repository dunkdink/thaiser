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
import DocumentPage from "./pages/document";
import HowToPage from "./pages/howto";
import ToolsPage from "./pages/tools";
import httpClient from "./utils/httpClient";
import { UserContext } from "./contexts/UserContext";
import { SummaryContext } from "./contexts/SummaryContext";
import { SnackbarProvider } from "notistack";
import ScrollToTop from "./component/ScrollToTop";
function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [summary, setSummary] = useState(null);

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
    <SnackbarProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <SummaryContext.Provider value={{ summary, setSummary }}>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/classify" element={<ClassifyPage />} />
              <Route path="/editprofile" element={<EditProfilePage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/document" element={<DocumentPage />} />
              <Route path="/howto" element={<HowToPage />} />
              <Route path="/tools" element={<ToolsPage />} />
            </Routes>
          </Router>
        </SummaryContext.Provider>
      </UserContext.Provider>
    </SnackbarProvider>
  );
}

export default App;
