import { useState } from "react";
import Basis from "../../components/Hat/Basis";
const DirectoriesPage = () => {
  
  const [name, setName] = useState([
    {
      id: 1,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      named: "Установка на паллету MTS",
      height: 32.4,
      length: 52.1,
    },
    {
      id: 2,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      named: "Установка на паллету MTS",
      height: 32.4,
      length: 52.1,
    },
    {
      id: 3,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    },
    {
      id: 4,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    },
    {
      id: 5,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    },
    {
      id: 6,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    },
    {
      id: 7,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    },
    {
      id: 8,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    },
    {
      id: 9,
      name: "Патрон ф80",
      designation: "Установка на паллету MTS",
      height: 28.7,
      length: 54.0,
    }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    designation: '',
    named: '',
    height: '',
    length: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setName((prev) => [...prev, { ...newItem, id: Date.now() }]); // добавляем новый элемент
    setNewItem({ name: '', designation: '', named: '', height: '', length: '' }); // сбрасываем форму
  };

  const deleteSelectedRecords = () => {
    setName((prev) => prev.filter(item => !selectedIds.includes(item.id)));
    setSelectedIds([]); // Сброс выделенных
  };

  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* <Basis onAddRecord={handleSubmit} onDeleteSelected={deleteSelectedRecords} />  */}
      <div>
        <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         
          
          <input className="text-xs text-gray-700  dark:bg-gray-700 dark:text-gray-400 bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            name="name"
            placeholder="Название"
            value={newItem.name}
            onChange={handleChange}
          />
          <input className="text-xs text-gray-700  bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            name="designation"
            placeholder="Обозначение"
            value={newItem.designation}
            onChange={handleChange}
          />
          <input className="text-xs text-gray-700  bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            name="named"
            placeholder="Наименование"
            value={newItem.named}
            onChange={handleChange}
          />
          <input className="text-xs text-gray-700  bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            name="height"
            placeholder="Площадь поверхности"
            value={newItem.height}
            onChange={handleChange}
          />
          <input className="text-xs text-gray-700  bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            name="length"
            placeholder="Системный номер"
            value={newItem.length}
            onChange={handleChange}
          />
          <button className="bg-[#2C517E] active:scale-[.98] active:duration-75 hover:scale-[1.01] esay-in-out transition-all py-1  rounded-md text-white text-base px-1 font-light" onClick={handleSubmit}>Добавить запись</button>
          <button onClick={deleteSelectedRecords}>Удалить выделенные</button>
        </div>

        <table
          border="1"
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-4">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-6">Название</th>
              <th className="py-3 px-6">Обозначение</th>
              <th className="py-3 px-6">Наименование</th>
              <th className="py-3 px-6">Площадь поверхности</th>
              <th className="py-3 px-6">Системный номер</th>
            </tr>
          </thead>
          <tbody>
            {name.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={item.id} /* onClick={() => openModal(item)} */
              >
                <td className="w-4 p-4">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                </td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.designation}</td>
                <td className="px-6 py-4">{item.named}</td>
                <td className="px-6 py-4">{item.height}</td>
                <td className="px-6 py-4">{item.length}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  );
};

export default DirectoriesPage;

/*
  const handleDelete = () => {
    setData(data.filter((item) => !selectedIds.includes(item.id)));
    setSelectedIds([]);
  };

  const handleCopy = () => {
    const copiedData = data.filter((item) => selectedIds.includes(item.id));
    console.log("Copied Data:", copiedData);
    // Здесь можно добавить логику для дальнейшего использования скопированных данных
  }; */

{/* <table
        border="1"
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
                <label htmlFor="checkbox-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th className="py-3 px-6">Название</th>
            <th className="py-3 px-6">Обозначение</th>
            <th className="py-3 px-6">Наименование</th>
            <th className="py-3 px-6">Площадь поверхности</th>
            <th className="py-3 px-6">Системный номер</th>
            <th className="py-3 px-6">Примечание</th>
            <th className="py-3 px-6">Ссылка</th>
            <th className="py-3 px-6">Цена без НДС</th>
            <th className="py-3 px-6">НДС</th>
            <th className="py-3 px-6">Цена с НДС</th>
            <th className="py-3 px-6">Создал</th>
            <th className="py-3 px-6">Создано</th>
            <th className="py-3 px-6">В заказе</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              key={item.id}
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />
                </div>
              </td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.designation}</td>
              <td className="px-6 py-4">{item.named}</td>
              <td className="px-6 py-4">{item.height}</td>
              <td className="px-6 py-4">{item.length}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
{/* <button
        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        onClick={handleDelete}
      >
        Удалить выбранные
      </button>
      <button
        className="mx-4 font-medium text-blue-600 dark:text-blue-500 hover:underline"
        onClick={handleCopy}
      >
        Копировать выбранные
      </button> */}
