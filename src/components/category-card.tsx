import React from 'react';
import Image from "next/image";
import { Card, CardBody, Typography } from "@material-tailwind/react";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

function CategoryCard({ img, title, desc, icon: Icon }: CategoryCardProps) {
  return (
    <Card 
      className="relative grid min-h-[12rem] w-full overflow-hidden"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Image
        width={768}
        height={768}
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-full bg-black/70" />
      <CardBody 
        className="relative flex flex-col justify-between"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Icon className="h-8 w-8 text-white" />
        <div>
          <Typography
            as="h5"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="mb-1 text-xl font-bold text-white"
          >
            {title}
          </Typography>
          <Typography
            as="span"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="text-xs font-bold text-white opacity-50"
          >
            {desc}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;