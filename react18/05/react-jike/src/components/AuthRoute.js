// 有token 正常跳转

import { getToken } from "@/utils/token";
import { Navigate } from "react-router-dom";

function AuthRoute({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
}

export default AuthRoute