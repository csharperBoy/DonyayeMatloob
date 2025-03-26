"use client";

import React from "react";
import CategoryCard from "@/components/category-card";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Fiction Books",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "School Books",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Non-fiction Books",
    desc: "up to 40% OFF",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "SF & Fantasy Books",
    desc: "up to 40% OFF",
  },
];

export function TopBookCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography
          as="h2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="my-3 text-3xl font-bold text-blue-gray-900"
        >
          Top Book Categories
        </Typography>
        <Typography
          as="p"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="text-lg text-gray-500 lg:w-6/12"
        >
          Explore our diverse range of categories and embark on a reading
          journey that suits your mood, passion, or curiosity.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody
            className="relative w-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Typography
              as="span"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="text-xs font-bold text-white opacity-50"
            >
              up to 40% OFF
            </Typography>
            <Typography
              as="h4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="mt-9 text-2xl font-bold text-white"
            >
              Bestselling Books
            </Typography>
            <Typography
              as="p"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="mt-4 mb-14 font-normal text-white opacity-50"
            >
              Explore our extensive collection of textbooks, workbooks, novels,
              and more. From preschool to post-grad, we have books for every age
              and academic level.
            </Typography>
            <Button
              size="sm"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Read More
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;