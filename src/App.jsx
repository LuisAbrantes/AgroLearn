import React from 'react';
import Achievements from './components/Achievements';
import TrainingHours from './components/TrainingHours';
import SkillLevel from './components/SkillLevel';
import Performance from './components/Performance';
import MainButtons from './components/MainButtons';
import ModuleProgress from './components/ModuleProgress';
import NavigationButtons from './components/NavigationButtons';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1>AgroLearn 360° Dashboard</h1>
      <div className="dashboard-info">
        <Achievements />
        <TrainingHours />
        <SkillLevel />
        <Performance />
      </div>
      <MainButtons />
      <ModuleProgress />
      <NavigationButtons />
    </div>
  );
}

export default App;
