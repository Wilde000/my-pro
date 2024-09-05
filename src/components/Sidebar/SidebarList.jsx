import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const SidebarList = () => {
    const [isDirectoriesOpen, setDirectoriesOpen] = useState(false);
    const directoriesList = [
        "Детали",
        "Инструмент режущий",
        "Сборки",
        "Позиция сборки",
        "Заказы",
        "Позиция заказа",
        "Подразделения",
        "Контрагенты",
        "Время справочников",
        "Сотрудники",
        "Инструмент мерительный",
        "Перемещения мерителя",
        "Сортамент материала",
        "Наименование материала",
        "Единицы измерения",
        "Статус заказа справочник"
    ];

    return (

        <nav className="bg-[#2C517E] h-screen border-[#7B95DA] z-50 relative -mt-2 outline-4 p-4 w-[200px] text-white hover:bg-[#2C517E] focus:ring-4 focus:ring-[#2C517E] font-medium text-sm px-5 py-2.5 dark:bg-[#2C517E] dark:hover:bg-[#2C517E] focus:outline-none dark:focus:ring-[#2C517E]  left-0 h-[calc(100%-4rem)] border-r">
            <ul className="flex flex-col gap-14 list-none p-2">
                {/* <div
                        className=" block cursor-pointer hover:bg-gray-200 hover:text-black p-2"
                        onClick={() => setIsOpen(!prev)}
                    >Главное меню</div> */}
                <li>
                    <div
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        onClick={() => setDirectoriesOpen(!isDirectoriesOpen)}

                    >Справочники</div>
                    {isDirectoriesOpen && (
                        <ul className="pl-2 pb-4 pt-4 bg-gray-200 -mt-8 flex flex-col gap-2">
                            {directoriesList.map((item) => (
                                <li key={item}>
                                    <Link
                                        className="cursor-pointer  p-2 text-[#2C517E] hover:text-black"
                                        to="/directories/subdirectory1">{item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                <li>
                    <Link
                        className="cursor-pointer hover:bg-gray-200 hover:text-black p-2"
                        to="/directories"
                    >Склад ТМЦ</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        to="/transfers"
                    >Перемещения</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        to="/technologies"
                    >Технология</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-1"
                        to="/directories"
                    >Склад инструмента и оснастки</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        to="/directories"
                    >Заявки</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        to="/directories"
                    >Проверка</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        to="/directories"
                    >Запросы</Link>
                </li>
                <li>
                    <Link
                        className="cursor-pointer  hover:bg-gray-200 hover:text-black p-2"
                        to="/directories"
                    >Настройки</Link>
                </li>
            </ul>
        </nav>

    )
}

export default SidebarList;