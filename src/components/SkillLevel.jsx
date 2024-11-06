import React from 'react';

const SkillLevel = () => {
  const skillLevel = 'Intermediate';

  return (
    <div className="skill-level bg-blue-500 text-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Skill Level</h2>
      <p>{skillLevel}</p>
    </div>
  );
};

export default SkillLevel;
