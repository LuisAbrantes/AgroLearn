import React from 'react';

const TrainingHours = () => {
  const completedHours = 22;
  const totalHours = 48;

  return (
    <div className="training-hours bg-orange-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Training Hours</h2>
      <p>{`${completedHours}/${totalHours} hours`}</p>
    </div>
  );
};

export default TrainingHours;
