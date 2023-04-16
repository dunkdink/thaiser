import { useContext, useState } from "react";
import httpClient from "../utils/httpClient";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
const useAuth = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();

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
    enqueueSnackbar("You have been logged out.", { variant: "success" });
  }

  async function onSignIn(username, password) {
    setLoading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    try {
      const res = await httpClient.post("/signin", formData);
      if (res.data) {
        localStorage.setItem("token", res.data.access_token);
        setUser(res.data.user);
        navigate("/");
        enqueueSnackbar("Login successful!", { variant: "success" });
      }
      return res.data;
    } catch (error) {
      const { detail } = error.response.data;
      enqueueSnackbar(detail, { variant: "error" });
    } finally {
      setLoading(false);
    }
  }

  async function onSignUp({ username, email, password, name, age, gender }) {
    setLoading(true);
    try {
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
        enqueueSnackbar("Signup successful!", { variant: "success" });
      }
      return res;
    } catch (error) {
      const { detail } = error.response.data;
      enqueueSnackbar(detail, { variant: "error" });
    } finally {
      setLoading(false);
    }
  }

  return { onLogout, message, loading, onSignIn, onSignUp };
};

export default useAuth;
