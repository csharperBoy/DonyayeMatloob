"use client";
import React from 'react';
import Image from "next/image";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

function CategoryCard({ img, title, desc, icon: Icon }: CategoryCardProps) {
  return (
    <Card       
      className="relative grid min-h-[12rem] w-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
      {...sharedProps}
    >
      <Image
        width={768}
        height={768}
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
        priority
      />
      <div 
      className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/70 to-black/50" 
      //className="absolute inset-0 h-full w-full bg-black/70" 
      />
      <CardBody className="relative flex flex-col justify-between" {...sharedProps}>
        <div className="flex justify-between items-start">
          <Icon className="h-8 w-8 text-white" />
          <button className="text-xs font-medium text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-all">
            مشاهده خدمات
          </button>
          
        </div>
        <div>
          <Typography
            as="h5"
            className="mb-2 text-xl font-bold text-white"
            {...sharedProps}
          >
            {title}
          </Typography>
          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {desc}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;


