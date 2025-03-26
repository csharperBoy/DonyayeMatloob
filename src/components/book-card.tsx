import React from 'react';
import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";

interface BookCardProps {
  img: string;
  title: string;
  desc: string;
  category: string;
  price: string;
  offPrice?: string;
}

export function BookCard({
  img,
  category,
  title,
  desc,
  price,
  offPrice,
}: BookCardProps) {
  return (
    <Card 
      color="transparent" 
      shadow={false}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader 
        color="gray" 
        floated={false} 
        className="mx-0 mt-0 mb-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full scale-[1.1] object-cover object-center"
        />
      </CardHeader>
      <CardBody 
        className="p-0"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          as="span"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="mb-2 text-xs font-semibold text-blue-500"
        >
          {category}
        </Typography>
        <a href="#">
          <Typography
            as="h5"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="mb-3 font-bold normal-case text-blue-gray-900 xl:w-64"
          >
            {title}
          </Typography>
        </a>
        <Typography
          as="p"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="mb-4 font-normal text-gray-500"
        >
          {desc}
        </Typography>
        <div className="flex gap-2">
          <Typography
            as="h5"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className={`text-blue-gray-900 ${offPrice ? "line-through" : ""}`}
          >
            {price}
          </Typography>
          {offPrice && (
            <Typography
              as="h5"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="text-red-500"
            >
              {offPrice}
            </Typography>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default BookCard;