import React from 'react';

const ModuleProgress = () => {
  const modules = [
    { name: 'Basic Tractor Operation', progress: 75 },
    { name: 'Preventive Maintenance', progress: 50 },
    { name: 'Advanced Operations', progress: 30 },
  ];

  return (
    <div className="module-progress bg-neutral-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Module Progress</h2>
      <ul>
        {modules.map((module, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{module.name}</span>
              <span>{module.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleProgress;
