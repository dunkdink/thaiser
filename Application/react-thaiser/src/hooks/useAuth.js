import { useContext, useState } from "react";
import httpClient from "../utils/httpClient";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  function errorHandler(error) {
    let resMessage = "";
    if (error.response && error.response.data) {
      resMessage = error.response.data.message;
      setMessage(resMessage);
      setLoading(false);
    } else {
      setMessage("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองใหม่อีกครั้ง");
      setLoading(false);
    }
  }

  function onLogout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  async function onSignIn(username, password) {
    setLoading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const res = await httpClient.post("/signin", formData);
    if (res.data) {
      localStorage.setItem("token", res.data.access_token);
      setUser(res.data.user);
      navigate("/");
    }

    return res.data;
  }

  async function onSignUp({ username, email, password, name, age, gender }) {
    const res = await httpClient.post("/signup", null, {
      params: {
        username: username,
        email: email,
        password: password,
        name: name,
        age: age,
        gender: gender,
      },
    });
    if (res.status === 200) {
      navigate("/signin");
    }
    return res;
  }

  return { onLogout, message, loading, onSignIn, onSignUp };
};

export default useAuth;
