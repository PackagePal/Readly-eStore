import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select id="dropdown" className="border border-gray-300 px-3 py-2 rounded" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
    </div>
  );
};

export default Dropdown;
