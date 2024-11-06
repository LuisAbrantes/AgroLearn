import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { BookOpen } from 'lucide-react';

const ModuleProgress = () => {
  const modules = [
    { name: 'Basic Tractor Operation', progress: 75 },
    { name: 'Preventive Maintenance', progress: 50 },
    { name: 'Advanced Operations', progress: 30 },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#2B5E2E]" />
            Module Progress
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {modules.map((module, index) => (
            <li key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{module.name}</span>
                <span className="text-sm font-medium">{module.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#2B5E2E] h-2 rounded-full transition-all"
                  style={{ width: `${module.progress}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ModuleProgress;
