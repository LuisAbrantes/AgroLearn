
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Book, Timer, Star, Activity } from 'lucide-react';

const AgroLearnDashboard = () => {
  const [activeModule] = useState("Operação Básica do Trator");
  
  const modules = [
    {
      name: "Operação Básica do Trator",
      progress: 75,
      hoursCompleted: 12,
      totalHours: 16,
      achievements: 3
    },
    {
      name: "Manutenção Preventiva",
      progress: 45,
      hoursCompleted: 6,
      totalHours: 12,
      achievements: 2
    },
    {
      name: "Operações Avançadas",
      progress: 20,
      hoursCompleted: 4,
      totalHours: 20,
      achievements: 1
    }
  ];

  return (
    <div className="w-full max-w-4xl p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm font-medium">Conquistas</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Timer className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm font-medium">Horas Treinamento</p>
                <p className="text-2xl font-bold">22/48</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Star className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm font-medium">Nível</p>
                <p className="text-2xl font-bold">Intermediário</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Activity className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm font-medium">Desempenho</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progresso dos Módulos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Book className="h-4 w-4" />
                    <span className="font-medium">{module.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {module.hoursCompleted}/{module.totalHours}h
                  </span>
                </div>
                <Progress value={module.progress} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgroLearnDashboard;