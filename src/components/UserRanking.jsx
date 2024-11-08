
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Medal, Trophy, Award } from 'lucide-react';

const UserRanking = () => {
  const rankings = [
    {
      position: 1,
      name: 'Amanda Massarioli',
      points: 2500,
      level: 8
    },
    {
      position: 2,
      name: 'Gabriel Baroni',
      points: 2350,
      level: 7
    },
    {
      position: 3,
      name: 'Luis Abrantes',
      points: 2200,
      level: 7
    },
    {
      position: 4,
      name: 'João Silva',
      points: 2100,
      level: 6
    },
    {
      position: 5,
      name: 'Maria Santos',
      points: 2000,
      level: 6
    }
  ];

  const getPositionIcon = (position) => {
    switch (position) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="w-5 text-center">{position}</span>;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Ranking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rankings.map((user) => (
            <div 
              key={user.position}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {getPositionIcon(user.position)}
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">Nível {user.level}</p>
                </div>
              </div>
              <span className="font-medium text-[#2B5E2E]">
                {user.points} XP
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserRanking;