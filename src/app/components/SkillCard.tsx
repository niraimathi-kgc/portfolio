'use client';

interface SkillCardProps {
  category: string;
  items: string[];
}

export default function SkillCard({ category, items }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
} 