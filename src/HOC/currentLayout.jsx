import { useLocation } from "react-router";
import { routes } from "../configs/routes";
import AuthLayout from "../layouts/auth";
import DefaultLayout from "../layouts/default";

export function withLayout(WrappedComponent) {
  return (props) => {
    const location = useLocation();

    return location.pathname !== routes.auth ? (
      <DefaultLayout>
        <WrappedComponent {...props} />
      </DefaultLayout>
    ) : (
      <AuthLayout>
        <WrappedComponent {...props} />
      </AuthLayout>
    );
  };
}
