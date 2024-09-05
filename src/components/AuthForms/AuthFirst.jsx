const AuthFirst = (props) => {
  const { setAuthStep } = props;

  return (
    <div className="mt-80">
      <div className="flex justify-center items-center flex-col">
        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
          Войти в систему
        </h2>
        <p className="text-center text-sm text-gray-600 mt-2">
          Заполните свои данные.
        </p>
        <div
          className="cursor-pointer font-medium mt-2 text-blue-600 hover:text-blue-700 active:scale-y-75"
          onClick={() => setAuthStep(2)}
        >
          Войти
        </div>
      </div>
    </div>
  );
};

export default AuthFirst;
