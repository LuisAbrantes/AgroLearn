import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Activity } from 'lucide-react';

const Performance = () => {
  const performance = {
    percentage: 85,
    level: 'Intermediário',
    weeklyProgress: 12,
    totalActivities: 15
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Activity className="h-8 w-8 text-green-500" />
          <div>
            <p className="text-sm font-medium">Desempenho</p>
            <p className="text-2xl font-bold">{performance.percentage}%</p>
            <p className="text-sm text-gray-500">
              {performance.weeklyProgress}/{performance.totalActivities} atividades concluídas
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Performance;
