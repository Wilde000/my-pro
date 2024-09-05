import { JWT_TOKEN } from "../utils/constants";
import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/functions/cookie";

const WithAuthRedirect = (Component) => {
  const displayName = (Component.displayName ?? Component.name) || "Component";

  const ComponentWithAuthRedirect = (props) => {
    const token = getCookie(JWT_TOKEN);
    if (!token) {
      return <Navigate replace to="/auth" />;
    }
    return <Component {...props} />;
  };
  ComponentWithAuthRedirect.displayName = `WithAuthRedirect(${displayName})`;
  return ComponentWithAuthRedirect;
};

export default WithAuthRedirect;
