import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Tractor, Navigation, Wheat, Droplets } from 'lucide-react';

const equipmentData = {
  tractors: {
    icon: <Tractor className="w-6 h-6" />,
    title: "Tratores",
    items: [
      { 
        model: "Trator TT e TTF", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b571aebef244437f9973c6072a906a8b?v=6be3540e" 
      },
      { 
        model: "Trator T7 SWB", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/3eca672a42114253a32677c4331ca460?v=72d02c07" 
      },
      { 
        model: "Trator T8 PLM Intelligence", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d1674332347549f18f1a550e0c73cd47?v=28805dab" 
      },
      { 
        model: "Trator T9 PLM Intelligence", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/416e5233a00e4bdf94c41d07ddadcbd5?v=e265ed8d" 
      },
    ]
  },
  harvesters: {
    icon: <Wheat className="w-6 h-6" />,
    title: "Colheitadeiras",
    items: [
      { 
        model: "Colheitadeira TC", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/1f9c05f63de04cb78bbd40602bee4b90?v=4145ab68" 
      },
      { 
        model: "Colheitadeira TX", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5297e1eb8e9040909b60c30a418e5293?v=37ccd4d2" 
      },
      { 
        model: "Colheitadeira CR", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2114ee8948124b479afde462baf42100?v=57ee3610" 
      },
    ]
  },
  planters: {
    icon: <Navigation className="w-6 h-6" />,
    title: "Plantadeiras",
    items: [
      { 
        model: "Plantadeira PL4000", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/f958fc11c5db4c02a77bb479ee4a88ca?v=48aaca50" 
      },
      { 
        model: "Plantadeira PL6000", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ef3daa5443e14d919158eb3bd9cc0159?v=76b13bd8" 
      },
      { 
        model: "Plantadeira PL7000", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ef6490ca0cb242ca8e50c5d5a3e06c66?v=ebcbaec1" 
      },
    ]
  },
  pulverizadores: {
    icon: <Droplets className="w-6 h-6" />,
    title: "Pulverizadores",
    items: [
      { 
        model: "Pulverizador Agrícula Defensor 2500", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/72549490ad57443c86d669afa4e90537?v=f974e38e" 
      },
      { 
        model: "Pulverizador Agrícula Defensor 2500 Cana-de-açúcar", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d5b6fc10f2ad4afdaded3887a1ec57c9?v=2d1c4e51" 
      },
      { 
        model: "Pulverizador Agrícula Defensor 3500 HC", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/959f6c92b6744be2a4a97b834e1e1659?v=c2bda3c3" 
      },
      { 
        model: "Pulverizador Guardian SP310F", 
        brand: "New Holland", 
        image: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/4313961a07064f498e0cc320635874a3?v=ed8d6d78" 
      },
    ]
  }
};

const EducationalMaterials = () => {
  const [selectedCategory, setSelectedCategory] = useState('tractors');

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        {Object.entries(equipmentData).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === key
                ? 'bg-[#2B5E2E] text-white'
                : 'border-2 border-[#2B5E2E] text-[#2B5E2E] hover:bg-[#2B5E2E] hover:text-white'
            }`}
          >
            {category.icon}
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipmentData[selectedCategory].items.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-100">
              {/* Replace with actual image component for your project */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">Imagem não disponível</span>
                )}
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{item.model}</h3>
              <p className="text-gray-600">{item.brand}</p>
              <button className="mt-4 text-[#2B5E2E] hover:text-[#234B25] font-medium">
                Ver materiais de estudo →
              </button>
            </CardContent>
          </Card>
        ))}
      </div>    </div>  );};
export default EducationalMaterials;