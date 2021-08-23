import axios from "axios";
import { MessageSuccess, MessageError } from "../../../utilities";
const API_URL = "http://localhost:3000/api";

const setLogin = (form) => (dispatch) => {
  axios
    .post(`${API_URL}/login`, form)
    .then((res) => {
      dispatch({
        type: "SET_ACCOUNT",
        value: {
          user: res.data.data.user,
          token: res.data.data.access_token,
        },
      });

      localStorage.setItem("account", res.data.data.user);
      localStorage.setItem("access_token", res.data.data.access_token);
      dispatch({ type: "SET_IS_LOGGED_IN", value: true });

      MessageSuccess("Login Success!", "You are successfully logged in");
    })
    .catch((err) => {
      let error = "";
      if (err.response.status === 403) {
        error = "Password is invalid!";
      } else if (err.response.status === 404) {
        error = "User not found!";
      } else {
        error = "Validation Error!";
      }

      MessageError("Login Failed!", error);
    });
};

const setLogout = () => (dispatch) => {
  dispatch({ type: "SET_IS_LOGGED_IN", value: false });
  localStorage.clear();
};

export { setLogin, setLogout };
