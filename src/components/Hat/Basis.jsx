import React, { useState } from "react";

import { PlusIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { PowerIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Square2StackIcon } from "@heroicons/react/24/solid";
import ModalHat from "../Inputs/modalWindow/ModalHat";
const Basis = (props) => {
  const { onAddRecord, onDeleteSelected } = props;
  const { isModalOpen } = props
  const { list } = props;
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState('');



  const deleteRecord = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
  };
  return (
    <header className="flex ml-14 max-h-52 md:flex-col md:float-left">
      <section className="border-l-orange-50 border-solid border-2 w-[500px] h-[120px] mr-5 px-2 rounded-md ">
        <div className="text-white flex justify-center pb-4">
          <h2 className="order-1 text-lg font-semibold">Основные действия</h2>
        </div>

        <div className="flex flex-wrap white">

          <ul className="flex flex-wrap flex-column columns-2 order-2 md:float-left text-sm gap-4 justify-between text-white cursor-pointer">
            <button onClick={onAddRecord}>
              <li className="row-span-1 col-span-1 2xl:float-left flex gap-1">
                <PlusIcon className="w-4 h-4 text-white stroke-white stroke-2" />
                Добавить запись
              </li>
            </button>
            <li className=" row-span-1 col-span-1 2xl:float-left flex gap-1">
              <Square2StackIcon className="w-4 h-4 text-white stroke-white stroke-1" />
              Копировать
            </li>
            
              <button onClick={isModalOpen}>
                <li className="row-span-1 col-span-1 2xl:float-left flex gap-1">
                  <PencilSquareIcon className="w-4 h-4 text-white stroke-white stroke-1" />
                  Редактировать
                </li>
              </button>
            
            <li className="row-span-1 col-span-1 2xl:float-left flex gap-1">
              <PowerIcon className="w-4 h-4 text-white stroke-white stroke-1" />
              Активировать
            </li>
            <li className="row-span-1 col-span-1 2xl:float-left flex gap-1 ">
              <XCircleIcon className="w-4 h-4 text-white stroke-white stroke-0" />
              Деактивировать
            </li>
            <button onClick={onDeleteSelected}>
              <li className="row-span-1 col-span-1 2xl:float-left flex gap-1">
                <TrashIcon className="w-4 h-4 text-white stroke-white stroke-1" />
                Удалить
              </li>
            </button>
          </ul>
        </div>
      </section>
    </header>
  );
};

export default Basis;
