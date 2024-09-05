import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Modal from "../Inputs/modalWindow/Modal";

const AuthThird = () => {
  const navigate = useNavigate();
  const [yourName, setUser] = useState("");
  const [yourEmail, setEmail] = useState("");
  const [yourRole, setRole] = useState("");
  const [yourPass, setPass] = useState("");

  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registr = {
      yourName: yourName,
      yourEmail: yourEmail,
      yourRole: yourRole,
      yourPass: yourPass,
    };
    navigate("/");
    console.log(registr);
  };

  //navigate('/auth');

  return (
    <div className="bg-white mt-36 px-10 py-10 rounded-3xl border-2 border-gray-100 flex justify-center items-center flex-col flex-wrap ">
      <h1 className="text-5xl font-bold">Предрегистрация</h1>

      <div className="mt-8">
        <div>
          <label className="text-lg font-medium" htmlFor="yourName">
            Ваше имя
          </label>
          <input
            id="yourName"
            type="text"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent invalid:border-red-500"
            placeholder="Введите имя"
            required
            onChange={(e) => {
              handleUser(e);
            }}
            value={yourName}
          />
        </div>
        <div>
          <label className="text-lg font-medium" htmlFor="yourEmail">
            Ваш email
          </label>
          <input
            id="yourEmail"
            type="email"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                         invalid:border-red-500 invalid:text-red-600
                         focus:invalid:border-red-500 focus:invalid:ring-red-500"
            onChange={(e) => handleEmail(e)}
            value={yourEmail}
            placeholder="Введите email"
            required
          />
        </div>
        <div>
          <label className="text-lg font-medium" htmlFor="yourRole">
            Должность
          </label>
          <input
            id="yourRole"
            type="text"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                         invalid:border-red-500 invalid:text-red-600
                         focus:invalid:border-red-500 focus:invalid:ring-red-500"
            onChange={(e) => handleRole(e)}
            value={yourRole}
            placeholder="Введите должность"
            required
          />
        </div>
        <div>
          <label className="text-lg font-medium" htmlFor="yourPass">
            Пароль
          </label>
          <input
            id="yourPass"
            type="password"
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                         invalid:border-red-500 invalid:text-red-600
                         focus:invalid:border-red-500 focus:invalid:ring-red-500"
            onChange={(e) => handlePass(e)}
            value={yourPass}
            autoComplete="current-password"
            placeholder="Введите пароль"
            required
          />
        </div>
        <Modal>
          <div className="mt-8 flex justify-center items-center">
            <div>
              <input type="checkbox" id="remember" name="password" />
              <label className="ml-2 font-medium text-base" htmlFor="remember">
                Подтвердить данные
              </label>
            </div>
          </div>
        </Modal>

        <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="button"
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] esay-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold"
            onClick={handleSubmit}
            disabled={
              yourName.length < 1 ||
              yourEmail.length < 1 ||
              yourRole.length < 1 ||
              yourPass.length < 1
            }
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthThird;
