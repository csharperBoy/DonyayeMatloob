import React from 'react';
import Image from "next/image";
import { 
  Typography, 
  Card, 
  CardBody, 
  CardHeader 
} from "@material-tailwind/react";
import { 
  ClockIcon, 
  CalendarIcon, 
  CheckBadgeIcon 
} from "@heroicons/react/24/outline";

// تعریف props های مشترک
const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

// تعریف نوع‌ها
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
  
  // رنگ‌بندی خودکار بر اساس نوع خدمت
  const typeColors = {
    'مشاوره': 'bg-blue-100 text-blue-800',
    'دوره آنلاین': 'bg-purple-100 text-purple-800',
    'کارگاه': 'bg-green-100 text-green-800',
    'دوره آفلاین': 'bg-orange-100 text-orange-800'
  };

  return (
    <Card color="transparent" shadow={false} {...sharedProps}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6" {...sharedProps}>
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-[1.1] object-cover object-center"
          priority
        />
      </CardHeader>
      
      <CardBody className="p-0" {...sharedProps}>
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
          className="mb-2 text-xl font-bold text-gray-900"
          {...sharedProps}
        >
          {title}
        </Typography>
        
        <Typography 
          as="p" 
          className="mb-4 text-gray-600"
          {...sharedProps}
        >
          {desc}
        </Typography>

        <div className="space-y-2 text-sm">
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

          {price && (
            <div className="pt-3">
              <Typography 
                as="span"
                className="text-lg font-bold text-purple-600"
                {...sharedProps}
              >
                {price} تومان
              </Typography>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default TherapyCard;