import React from 'react';
import Achievements from './components/Achievements';
import TrainingHours from './components/TrainingHours';
import SkillLevel from './components/SkillLevel';
import Performance from './components/Performance';
import MainButtons from './components/MainButtons';
import ModuleProgress from './components/ModuleProgress';
import NavigationButtons from './components/NavigationButtons';
import Header from './components/Header';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-4 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UserCard />
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-2xl font-bold text-neutral dark:text-white mb-6">AgroLearn 360° Dashboard</h1>
          <div className="dashboard-info">
            <Achievements />
            <TrainingHours />
            <SkillLevel />
            <Performance />
          </div>
        </div>
      </div>
      <MainButtons />
      <ModuleProgress />
      <NavigationButtons />
    </div>
  );
}

export default App;
