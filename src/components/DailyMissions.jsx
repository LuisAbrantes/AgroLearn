
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Target, CheckCircle } from 'lucide-react';

const DailyMissions = () => {
  const missions = [
    {
      id: 1,
      title: 'Complete um treinamento',
      reward: '50 XP',
      completed: true,
    },
    {
      id: 2,
      title: 'Realize uma simulação',
      reward: '100 XP',
      completed: false,
    },
    {
      id: 3,
      title: 'Estude por 30 minutos',
      reward: '75 XP',
      completed: false,
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-[#2B5E2E]" />
            Missões Diárias
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {missions.map((mission) => (
            <div 
              key={mission.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <CheckCircle 
                  className={`h-5 w-5 ${
                    mission.completed ? 'text-green-500' : 'text-gray-300'
                  }`}
                />
                <span className={mission.completed ? 'line-through text-gray-500' : ''}>
                  {mission.title}
                </span>
              </div>
              <span className="text-sm font-medium text-[#2B5E2E]">
                {mission.reward}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyMissions;