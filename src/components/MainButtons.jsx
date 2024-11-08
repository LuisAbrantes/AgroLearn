import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Play, BookOpen, Award, Settings, Users, Medal } from 'lucide-react';
import UserRanking from './UserRanking';
import DailyMissions from './DailyMissions';
import { VirtualSimulator } from './simulator/VirtualSimulator';
import { MaintenanceChecklist } from './maintenance/MaintenanceChecklist';

const MainButtons = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case 'simulation':
        return (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Simulador Virtual</h3>
            <VirtualSimulator />
          </div>
        );

      case 'maintenance':
        return (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Checklist de Manutenção</h3>
            <MaintenanceChecklist />
          </div>
        );

      case 'education':
        return (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Educational Materials</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Tractor Model X Operations</h4>
                <ul className="list-disc ml-6 mt-2">
                  <li>Basic Controls and Safety Procedures</li>
                  <li>Advanced Maneuvering Techniques</li>
                  <li>Maintenance Guidelines</li>
                  <li>Emergency Protocols</li>
                </ul>
              </div>
              {/* Add more educational content sections */}
            </div>
          </div>
        );

      case 'certificates':
        return (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Your Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Basic Tractor Operations</h4>
                <p className="text-sm text-gray-600">Completed: Jan 2024</p>
                <div className="mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm inline-block">
                  Certified
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Advanced Safety Procedures</h4>
                <p className="text-sm text-gray-600">Completed: Feb 2024</p>
                <div className="mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm inline-block">
                  Certified
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Equipment Maintenance Specialist</h4>
                <p className="text-sm text-gray-600">Completed: Mar 2024</p>
                <div className="mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-sm inline-block">
                  Certified
                </div>
              </div>
            </div>
          </div>
        );

      case 'teammates':
        return (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Your Teammates</h3>
            <div className="space-y-4">
              {['Luis Abrantes', 'Amanda Massarioli', 'Gabriel Baroni'].map((name) => (
                <div key={name} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-gray-600">3 Certificates • Level 5</p>
                  </div>
                  <div className="text-green-600 font-semibold">
                    Progress: 80%
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="text-xl font-bold mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Profile Settings</h4>
                <p className="text-sm text-gray-600">Update your personal information</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Notification Preferences</h4>
                <p className="text-sm text-gray-600">Manage your notification settings</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Language & Region</h4>
                <p className="text-sm text-gray-600">Change language and regional settings</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold">Simulation Settings</h4>
                <p className="text-sm text-gray-600">Adjust simulation difficulty and controls</p>
              </div>
            </div>
          </div>
        );

      case 'ranking':
        return (
          <div className="mt-6 space-y-6">
            <UserRanking />
            <DailyMissions />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle>Main Menu</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <button
            onClick={() => setActiveSection('simulation')}
            className="h-32 flex flex-col items-center justify-center space-y-2 bg-[#2B5E2E] hover:bg-[#234B25] text-white rounded-lg transition-colors">
            <Play className="h-8 w-8" />
            <span>Start Simulation</span>
          </button>

          <button
            onClick={() => setActiveSection('education')}
            className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
            <BookOpen className="h-8 w-8" />
            <span>Educational Materials</span>
          </button>

          <button
            onClick={() => setActiveSection('certificates')}
            className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
            <Award className="h-8 w-8" />
            <span>Certificates</span>
          </button>

          <button
            onClick={() => setActiveSection('teammates')}
            className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
            <Users className="h-8 w-8" />
            <span>Your Teammates</span>
          </button>

          <button
            onClick={() => setActiveSection('settings')}
            className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
            <Settings className="h-8 w-8" />
            <span>Settings</span>
          </button>

          <button
            onClick={() => setActiveSection('ranking')}
            className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
            <Medal className="h-8 w-8" />
            <span>Ranking</span>
          </button>
        </CardContent>
      </Card>
      {renderContent()}
    </>
  );
};

export default MainButtons;
