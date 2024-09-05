/* import React, { useState } from 'react';

const HomeTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    { id: 3, name: 'Item 3', value: 'Value 3' },
  ]);
  
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    setData(data.filter(item => !selectedIds.includes(item.id)));
    setSelectedIds([]);
  };

  const handleCopy = () => {
    const copiedData = data.filter(item => selectedIds.includes(item.id));
    console.log('Copied Data:', copiedData);
    // Здесь можно добавить логику для дальнейшего использования скопированных данных
  };

  return (
    <div>
      <h1>Таблица с чекбоксами</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>
                <input 
                  type="checkbox" 
                  checked={selectedIds.includes(item.id)} 
                  onChange={() => handleSelect(item.id)} 
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDelete}>Удалить выбранные</button>
      <button onClick={handleCopy}>Копировать выбранные</button>
    </div>
  );
};

export default HomeTable;
 */