import React from 'react';
import { Card, CardContent } from './ui/card';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievementsCount = 6;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <div>
            <p className="text-sm font-medium">Conquistas</p>
            <p className="text-2xl font-bold">{achievementsCount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
