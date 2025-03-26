import React from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface FeatureCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card 
      color="transparent" 
      shadow={false}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody 
        className="grid justify-center text-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-lg bg-gray-900 p-2.5 text-white shadow">
          <Icon className="h-5 w-5" />
        </div>
        <Typography
          as="h5"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="mb-2 text-xl font-bold text-blue-gray-900"
        >
          {title}
        </Typography>
        <Typography
          as="p"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="px-8 font-normal text-gray-500"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;