
import React, { useState } from 'react';

export const MaintenanceChecklist = () => {
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, task: 'Verificar nível de óleo', completed: false },
    { id: 2, task: 'Checar pressão dos pneus', completed: false },
    { id: 3, task: 'Verificar sistema hidráulico', completed: false },
    { id: 4, task: 'Inspecionar correias', completed: false },
    { id: 5, task: 'Verificar nível de combustível', completed: false },
  ]);

  const toggleItem = (id) => {
    setChecklistItems(items =>
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {checklistItems.map(item => (
        <div key={item.id} className="flex items-center gap-3 p-3 border-b">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleItem(item.id)}
            className="w-5 h-5 accent-[#2B5E2E]"
          />
          <span className={`${item.completed ? 'line-through text-gray-500' : ''}`}>
            {item.task}
          </span>
        </div>
      ))}
    </div>
  );
};