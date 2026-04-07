import React, { useState } from 'react';

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Atualiza o estado para true/false
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {isChecked ? "Marcado" : "Desmarcado"}
      </label>
      <p>O checkbox está: {isChecked ? 'Ativo' : 'Inativo'}</p>
    </div>
  );
}

export default CheckboxComponent;
