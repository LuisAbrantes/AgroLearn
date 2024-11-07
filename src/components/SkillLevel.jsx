import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const SkillLevel = () => {
  const skillLevel = 'Intermediário';

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4">
          <Star className="h-8 w-8 text-purple-500" />
          <div>
            <p className="text-sm font-medium">Nível</p>
            <p className="text-2xl font-bold">{skillLevel}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillLevel;
