import { useAuthContext } from "../hooks/useAuthContext";
import jwt_decode from "jwt-decode";

export const jwtDecode = () => {
  const { user } = useAuthContext();
  if (user) {
    const decode = jwt_decode(user);
    return decode;
  }
};
