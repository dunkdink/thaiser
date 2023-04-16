import { useContext } from "react";
import httpClient from "../utils/httpClient";
import { UserContext } from "../contexts/UserContext";
import { useSnackbar } from "notistack";

function useEditProfile() {
  const { setUser, user } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  async function onChangeProfile(name, email, age, gender) {
    try {
      const res = await httpClient.put("/user/profile", null, {
        params: {
          username: user?.username,
          name: name,
          email: email,
          age: age,
          gender: gender,
        },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.data) {
        setUser({
          username: user?.username,
          name: name,
          email: email,
          age: age,
          gender: gender,
        });
        enqueueSnackbar("Change Profile successful!", { variant: "success" });
      }
      return res;
    } catch (error) {
      const { detail } = error.response.data;
      enqueueSnackbar(detail, { variant: "error" });
    }
  }
  return { onChangeProfile };
}

export default useEditProfile;
