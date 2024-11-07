import React from 'react';
import { Card, CardContent } from './ui/card';
import { Timer } from 'lucide-react';

const TrainingHours = () => {
  const completedHours = 22;
  const totalHours = 48;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Timer className="h-8 w-8 text-blue-500" />
          <div>
            <p className="text-sm font-medium">Horas Treinamento</p>
            <p className="text-2xl font-bold">{`${completedHours}/${totalHours}`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingHours;
