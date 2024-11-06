import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Play, BookOpen, Award, Settings } from 'lucide-react';

const MainButtons = () => {
  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>Main Menu</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="h-32 flex flex-col items-center justify-center space-y-2 bg-[#2B5E2E] hover:bg-[#234B25] text-white rounded-lg transition-colors">
          <Play className="h-8 w-8" />
          <span>Start Simulation</span>
        </button>

        <button className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
          <BookOpen className="h-8 w-8" />
          <span>Educational Materials</span>
        </button>

        <button className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
          <Award className="h-8 w-8" />
          <span>Certificates</span>
        </button>

        <button className="h-32 flex flex-col items-center justify-center space-y-2 border-2 border-[#2B5E2E] text-[#2B5E2E] rounded-lg hover:bg-[#2B5E2E] hover:text-white transition-colors">
          <Settings className="h-8 w-8" />
          <span>Settings</span>
        </button>
      </CardContent>
    </Card>
  );
};

export default MainButtons;
