'use client';

import { Experience } from '../data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
          <p className="text-lg text-blue-600">{experience.company}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">{experience.duration}</p>
          <p className="text-gray-500">{experience.location}</p>
        </div>
      </div>
      
      <ul className="list-disc list-inside mb-4 space-y-2">
        {experience.description.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
} 