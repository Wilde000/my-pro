import React, { useState } from 'react';


const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=' mt-8 flex justify-center gap-y-2 bg-transparent'>
        <input type="checkbox" 
        onChange={() => setShowModal(true)}></input>
        <label className='ml-2 font-medium text-base' htmlFor="remember">Подтвердить данные</label>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
            <div className="flex justify-center items-center h-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-8 mx-auto max-w-5xl">
                <div className="border-0 rounded-lg shadow-lg p-6 z-20 md:shadow-lg relative flex flex-col w-full bg-white">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font-bold">Будьте внимательны!</h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <p className="block text-black text-xl font-medium mb-1">
                        Пароль небезопасен. Смените пароль при следующем входе в систему.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;