import { useContext } from "react";
import httpClient from "../utils/httpClient";
import { UserContext } from "../contexts/UserContext";
import { useSnackbar } from "notistack";

function useEditPassword() {
  const { setUser, user } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  async function onChangePassword(
    old_password,
    new_password,
    confirm_password
  ) {
    try {
      const res = await httpClient.put("/user/password", null, {
        params: {
          username: user?.username,
          old_password: old_password,
          new_password: new_password,
          confirm_password: confirm_password,
        },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.data) {
        enqueueSnackbar("Change Password successful!", { variant: "success" });
      }
      return res;
    } catch (error) {
      const { detail } = error.response.data;
      enqueueSnackbar(detail, { variant: "error" });
    }
  }
  return { onChangePassword };
}

export default useEditPassword;
