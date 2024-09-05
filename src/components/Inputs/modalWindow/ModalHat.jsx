import React, { useState, useEffect } from 'react';
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Basis from '../modalWindow/ModalHat';
const ModalHat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  /* const openModal = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
  };

  const handleUpdate = (updatedItem) => {
    setData((prevData) => prevData.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    ));
    closeModal();
  }; */
  const [name, setName] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
    }
  }, [item]);

  const onSubmit = () => {
    handleUpdate({ ...item, name });
  };

  /*  if (!isOpen) return null;
  */
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <li className="row-span-1 col-span-1 2xl:float-left flex gap-1">
          <PencilSquareIcon className="w-4 h-4 text-white stroke-white stroke-1" />
          Редактировать
        </li>
      </button>
      {showModal ? (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="flex justify-center items-center h-full overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-8 mx-auto max-w-5xl">
              <div className="modal-content border-0 rounded-lg shadow-lg p-6 z-20 md:shadow-lg relative flex flex-col w-full bg-white">
                <label className='ml-2 text-black font-medium text-base'>
                  Название:
                  <input className="text-xs text-gray-700  dark:bg-gray-700 dark:text-gray-400 bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    name="name"
                    type="text"
                    placeholder="Название"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <button onClick={onSubmit} className="text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button">Сохранить</button>
                <button onClick={() => setShowModal(false)} className="text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalHat;