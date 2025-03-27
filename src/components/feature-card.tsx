"use client";
import React from 'react';
import { Typography, Card, CardBody } from "@material-tailwind/react";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

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
      className="hover:bg-gray-50 transition-all duration-300 rounded-xl"
      {...sharedProps}
    >
      <CardBody className="grid justify-center text-center p-6" {...sharedProps}>
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-purple-100 p-3 text-purple-600 shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
        <Typography
          as="h5"
          className="mb-3 text-xl font-bold text-gray-900"
          {...sharedProps}
        >
          {title}
        </Typography>
        <Typography
          as="p"
          className="font-normal text-gray-600 leading-relaxed"
          {...sharedProps}
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;