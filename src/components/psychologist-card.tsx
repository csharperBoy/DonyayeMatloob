import React from 'react';
import Image from "next/image";
import { 
  Typography, 
  Card, 
  CardBody, 
  CardHeader,
  Button,
  Badge
} from "@material-tailwind/react";
import { 
  CheckBadgeIcon,
  AcademicCapIcon,
  ClockIcon
} from "@heroicons/react/24/outline";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

interface PsychologistCardProps {
  image: string;
  name: string;
  specialty: string;
  experience: string;
  description: string;
  availableFor: string[];
  sessionPrice: string;
  isOnline?: boolean;
}

export function PsychologistCard({
  image,
  name,
  specialty,
  experience,
  description,
  availableFor,
  sessionPrice,
  isOnline = false
}: PsychologistCardProps) {
  return (
    <Card className="h-full flex flex-col border border-gray-200 shadow-sm" {...sharedProps}>
      <CardHeader floated={false} className="relative h-64 w-full m-0" {...sharedProps}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {isOnline && (
          <Badge
            color="green"
            className="absolute top-2 right-2"
            {...sharedProps}
          >
            آنلاین
          </Badge>
        )}
      </CardHeader>
      
      <CardBody className="flex-grow p-4" {...sharedProps}>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
            {specialty}
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            {experience} سال تجربه
          </span>
        </div>

        <Typography 
          as="h3"
          className="mb-2 text-lg font-bold text-gray-900"
          {...sharedProps}
        >
          {name}
        </Typography>
        
        <Typography 
          as="p" 
          className="mb-4 text-gray-600 text-sm"
          {...sharedProps}
        >
          {description}
        </Typography>

        <div className="mt-auto space-y-3">
          <div className="flex items-start gap-2">
            <AcademicCapIcon className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0"/>
            <div className="flex flex-wrap gap-1">
              {availableFor.map(item => (
                <span 
                  key={item}
                  className="inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <ClockIcon className="w-4 h-4 text-gray-500"/>
            <span>مدت جلسه: ۴۵ دقیقه</span>
          </div>
        </div>
      </CardBody>

      <div className="p-4 pt-0 flex items-center justify-between">
        <Typography 
          as="span"
          className="font-bold text-purple-600 text-sm"
          {...sharedProps}
        >
          {sessionPrice} تومان
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
    </Card>
  );
}

export default PsychologistCard;