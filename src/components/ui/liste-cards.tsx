import React from "react";

type SectionItem = {
  icon: React.ReactNode; // tu peux mettre un composant lucide-react ou un <img />
  title: string;
  items: string[];
};

type Props = {
  data: SectionItem[];
};

export default function InfoCards({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-10 px-4">
      {data.map((section, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow min-w-[300px] p-6 flex flex-col"
        >
          {/* Icône */}
          <div className="mb-3 w-20 h-20 text-teal-500">{section.icon}</div>

          {/* Titre */}
          <h3 className="text-lg font-bold text-teal-600 mb-3">
            {section.title}
          </h3>

          {/* Liste */}
          <ul className="space-y-2 text-gray-600 list-none">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
