import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Completed introduction to farming basics',
      date: '2024-03-15'
    },
    {
      id: 2, 
      title: 'Green Thumb',
      description: 'Successfully grew first crop',
      date: '2024-03-20'
    },
    {
      id: 3,
      title: 'Equipment Master',
      description: 'Learned to operate basic farm equipment',
      date: '2024-03-25'
    }
  ];

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <div>
            <p className="text-sm font-medium">Conquistas</p>
            <p className="text-2xl font-bold">{achievements.length}</p>
            <p className="text-sm text-gray-500">Conquistas desbloqueadas</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;