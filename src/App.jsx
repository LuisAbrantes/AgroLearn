import Achievements from './components/Achievements';
import TrainingHours from './components/TrainingHours';
import SkillLevel from './components/SkillLevel';
import Performance from './components/Performance';
import ModuleProgress from './components/ModuleProgress';
import NavigationButtons from './components/NavigationButtons';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <h1>AgroLearn 360° Dashboard</h1>
      <div className="dashboard-info">
        <Achievements />
        <TrainingHours />
        <SkillLevel />
        <Performance />
        <ModuleProgress />
      </div>
      <NavigationButtons />
    </div>
  );
}

export default App;
