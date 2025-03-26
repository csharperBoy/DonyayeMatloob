import React from 'react';
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

interface PsychologistCardProps {
  image: string;
  name: string;
  specialty: string;
  experience: string;
  description: string;
  availableFor: string[];
  sessionPrice: string;
}

export function PsychologistCard({
  image,
  name,
  specialty,
  experience,
  description,
  availableFor,
  sessionPrice
}: PsychologistCardProps) {
  // تعریف props های مشترک برای Material Tailwind
  const sharedProps = {
    placeholder: undefined,
    onPointerEnterCapture: undefined,
    onPointerLeaveCapture: undefined
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6">
        <Typography 
          variant="h5" 
          className="mb-2 text-gray-900 font-bold"
          {...sharedProps}
        >
          {name}
        </Typography>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
            {specialty}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            {experience} سال سابقه
          </span>
        </div>

        <Typography 
          className="mb-4 text-gray-600 text-sm"
          {...sharedProps}
        >
          {description}
        </Typography>

        <div className="mb-5 space-y-2">
          {availableFor.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <Typography 
                className="text-gray-700 text-sm"
                {...sharedProps}
              >
                {item}
              </Typography>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Typography 
            className="font-bold text-purple-600"
            {...sharedProps}
          >
            جلسه: {sessionPrice} تومان
          </Typography>
          <Button 
            size="sm"
            color="purple"
            className="font-medium"
            {...sharedProps}
          >
            رزرو نوبت
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PsychologistCard;