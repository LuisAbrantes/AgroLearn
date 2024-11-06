import React from 'react';

const Achievements = () => {
  const achievements = [
    'Completed Basic Tractor Operation',
    'Completed Preventive Maintenance',
    'Completed Advanced Operations',
  ];

  return (
    <div className="achievements bg-green-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index} className="mb-1">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
