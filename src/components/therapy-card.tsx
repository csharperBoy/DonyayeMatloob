import React from 'react';
import Image from "next/image";
import { 
  Typography, 
  Card, 
  CardBody, 
  CardHeader,
  Button
} from "@material-tailwind/react";
import { 
  ClockIcon, 
  CalendarIcon, 
  CheckBadgeIcon 
} from "@heroicons/react/24/outline";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

type ServiceType = 'مشاوره' | 'دوره آنلاین' | 'کارگاه' | 'دوره آفلاین';

interface TherapyCardProps {
  img: string;
  title: string;
  desc: string;
  serviceType: ServiceType;
  category: string;
  duration: string;
  price?: string;
  sessions?: number;
  hasCertificate?: boolean;
}

export function TherapyCard({
  img,
  title,
  desc,
  serviceType,
  category,
  duration,
  price,
  sessions,
  hasCertificate = false
}: TherapyCardProps) {
  
  const typeColors = {
    'مشاوره': 'bg-blue-100 text-blue-800',
    'دوره آنلاین': 'bg-purple-100 text-purple-800',
    'کارگاه': 'bg-green-100 text-green-800',
    'دوره آفلاین': 'bg-orange-100 text-orange-800'
  };

  return (
    <Card className="h-full flex flex-col border border-gray-200 shadow-sm" {...sharedProps}>
      <CardHeader floated={false} className="relative h-64 w-full m-0" {...sharedProps}>
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </CardHeader>
      
      <CardBody className="flex-grow p-4" {...sharedProps}>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs px-2 py-1 rounded-full ${typeColors[serviceType]}`}>
            {serviceType}
          </span>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
            {category}
          </span>
        </div>

        <Typography 
          as="h3"
          className="mb-2 text-lg font-bold text-gray-900"
          {...sharedProps}
        >
          {title}
        </Typography>
        
        <Typography 
          as="p" 
          className="mb-4 text-gray-600 text-sm"
          {...sharedProps}
        >
          {desc}
        </Typography>

        <div className="mt-auto space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-gray-500"/>
            <span>مدت: {duration}</span>
          </div>
          
          {sessions && (
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-gray-500"/>
              <span>{sessions} جلسه</span>
            </div>
          )}

          {hasCertificate && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckBadgeIcon className="w-4 h-4"/>
              <span>مدرک معتبر</span>
            </div>
          )}
        </div>
      </CardBody>

      {price && (
        <div className="p-4 pt-0">
          <Button 
            size="sm"
            color="purple"
            fullWidth
            {...sharedProps}
          >
            ثبت نام ({price} تومان)
          </Button>
        </div>
      )}
    </Card>
  );
}

export default TherapyCard;