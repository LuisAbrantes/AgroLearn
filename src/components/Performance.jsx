import React from 'react';

const Performance = () => {
  const performance = 85; // Example performance percentage

  return (
    <div className="performance bg-green-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Performance</h2>
      <p>{`${performance}%`}</p>
    </div>
  );
};

export default Performance;
