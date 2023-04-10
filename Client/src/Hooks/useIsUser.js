import { Link } from "react-router-dom";
import { user } from "../utils/get";

const data = await user();

export const validatorUser = (username, password) => {
  let isUser = false;

  if (data.length > 0) {
    console.log(data);
  }
  const foundUser = data.find(
    (user) => user.Username === username && user.Password === password
  );
  if (foundUser) {
    isUser = true;
    console.log("Usuario válido:", foundUser);
  } else {
    console.log("Usuario inválido");
  }
  return isUser;
};
