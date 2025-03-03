import React from 'react';
import { Gamepad, Palette, GraduationCap, Headphones, Zap, Star } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Dla Graczy",
    description: "Wydajne komputery z najnowszymi kartami graficznymi",
    icon: <Gamepad className="h-10 w-10 text-blue-600" />,
    color: "bg-blue-100 hover:bg-blue-200",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Dla Grafików",
    description: "Stacje robocze do profesjonalnej pracy kreatywnej",
    icon: <Palette className="h-10 w-10 text-purple-600" />,
    color: "bg-purple-100 hover:bg-purple-200",
    textColor: "text-purple-600",
  },
  {
    id: 3,
    name: "Dla Uczniów",
    description: "Niezawodne komputery w przystępnej cenie",
    icon: <GraduationCap className="h-10 w-10 text-green-600" />,
    color: "bg-green-100 hover:bg-green-200",
    textColor: "text-green-600",
  },
  {
    id: 4,
    name: "Akcesoria",
    description: "Peryferia i dodatki do Twojego komputera",
    icon: <Headphones className="h-10 w-10 text-red-600" />,
    color: "bg-red-100 hover:bg-red-200",
    textColor: "text-red-600",
  },
  {
    id: 5,
    name: "Promocje",
    description: "Najlepsze oferty i rabaty na wybrane produkty",
    icon: <Zap className="h-10 w-10 text-amber-600" />,
    color: "bg-amber-100 hover:bg-amber-200",
    textColor: "text-amber-600",
  },
  {
    id: 6,
    name: "Nowości",
    description: "Najnowsze produkty w naszym asortymencie",
    icon: <Star className="h-10 w-10 text-teal-600" />,
    color: "bg-teal-100 hover:bg-teal-200",
    textColor: "text-teal-600",
  },
];

const ProductCategory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kategorie produktów</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${category.color} cursor-pointer`}
            >
              <div className="flex items-start">
                <div className="mr-4">{category.icon}</div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${category.textColor}`}>{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;