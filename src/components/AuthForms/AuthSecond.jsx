import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../utils/apiServices/authService";
import { setCookie } from "../../utils/functions/cookie";
import { JWT_TOKEN } from "../../utils/constants";

const AuthSecond = (props) => {
  const { setAuthStep } = props;

  const [userName, setUser] = useState("");
  const [password, setPass] = useState("");
  const [data, setData] = useState({ userName: "", userEmail: "" });
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const authService = new AuthService();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: userName,
      password,
    };

    try {
      await authService.userLogin(payload);
    } catch (error) {
      console.log("error - fetch - user - login :", error);
    }

    setCookie(JWT_TOKEN, "test_token");
    setAuthStep(3);
  };
  return (
    <div className="bg-white mt-36 px-10 py-10 rounded-3xl border-2 border-gray-100 flex justify-center flex-col items-center flex-wrap">
      <h1 className="text-5xl font-bold">Добро пожаловать!</h1>
      <p className="2xl:font-medium sm:font-normal text-lg text-gray-500 mt-4">
        Пожалуйста, пройдите регистрацию.
      </p>
      <div className="mt-8">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-lg font-medium" htmlFor="userName">
              Ваше имя
            </label>
            <input
              id="userName"
              type="text"
              name="userName"
              value={data.name}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-red-500 invalid:text-red-600
                            focus:invalid:border-red-500 focus:invalid:ring-red-500"
              onChange={(e) => {
                handleUser(e);
              }}
              placeholder="Введите имя"
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium" htmlFor="password">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={data.password}
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                 invalid:border-red-500 invalid:text-red-600
                                 focus:invalid:border-red-500 focus:invalid:ring-red-500"
              onChange={(e) => handlePass(e)}
              autoComplete="current-password"
              placeholder="Введите пароль"
              required
            />
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] esay-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
              //onClick={handleSubmit()}
              disabled={userName.length < 1 || password.length < 1}
            >
              Войти
            </button>
          </div>
        </form>
        {/* {error && <p className="text-red-500">{error}</p>} */}
        {response && (
          <p>
            Данные успешно отправлены: {response.userName} ({response.password})
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthSecond;
