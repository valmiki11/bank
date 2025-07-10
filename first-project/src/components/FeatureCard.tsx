import React from "react";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
