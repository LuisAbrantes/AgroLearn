import React from 'react';
import { Card, CardContent } from './ui/card';
import { Activity } from 'lucide-react';

const Performance = () => {
  const performance = 85;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Activity className="h-8 w-8 text-green-500" />
          <div>
            <p className="text-sm font-medium">Desempenho</p>
            <p className="text-2xl font-bold">{`${performance}%`}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Performance;
