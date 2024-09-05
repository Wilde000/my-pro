import { useState } from "react";
import AuthSecond from "../../components/AuthForms/AuthSecond";
import AuthThird from "../../components/AuthForms/AuthThird";
import AuthFirst from "../../components/AuthForms/AuthFirst";

const AuthPage = () => {
  const [authStep, setAuthStep] = useState(1);
  return (
    <div>
      {authStep === 1 && <AuthFirst setAuthStep={setAuthStep} />}
      {authStep === 2 && <AuthSecond setAuthStep={setAuthStep} />}
      {authStep === 3 && <AuthThird setAuthStep={setAuthStep} />}
    </div>
  );
};

export default AuthPage;
