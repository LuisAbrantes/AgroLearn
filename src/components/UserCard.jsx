
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

function UserCard() {
  return (
    <Card className="w-full md:w-80">
      <CardHeader>
        <CardTitle>Perfil do Usuário</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://github.com/identicons/luisabrantes.png"
              alt="Luis Abrantes"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Luis Abrantes</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Técnico Agrícola</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Nível</span>
              <span className="font-medium">Intermediário</span>
            </div>
            <div className="flex justify-between">
              <span>Módulos Completados</span>
              <span className="font-medium">7/12</span>
            </div>
            <div className="flex justify-between">
              <span>Certificações</span>
              <span className="font-medium">3</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserCard