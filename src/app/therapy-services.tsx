"use client";

import React from "react";
import CategoryCard from "@/components/category-card";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  UserGroupIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

const THERAPY_CATEGORIES = [
  {
    img: "/image/therapy/2.jpg",
    icon: UserGroupIcon,
    title: "مشاوره فردی",
    desc: "حل چالش‌های شخصی و رشد فردی",
  },
  {
    img: "/image/therapy/1.jpg",
    icon: HeartIcon,
    title: "مشاوره زوج‌ها",
    desc: "تقویت رابطه و حل تعارضات",
  },
  {
    img: "/image/therapy/3.jpg",
    icon: UserGroupIcon,
    title: "خانواده درمانی",
    desc: "بهبود روابط خانوادگی",
  },
  {
    img: "/image/therapy/4.png",
    icon: AcademicCapIcon,
    title: "کودک و نوجوان",
    desc: "راهکارهای تربیتی و آموزشی",
  },
];

export function TherapyServices() {
  return (
    <section className="container mx-auto px-4 py-20 bg-gray-50">
      <div className="mb-16 text-center">
        <Typography
          as="h2"
          className="mb-3 text-3xl font-bold text-gray-900"
          {...sharedProps}
        >
          خدمات تخصصی ما
        </Typography>
        <Typography
          as="p"
          className="mx-auto text-gray-600 text-lg max-w-2xl"
          {...sharedProps}
        >
          با بهره‌گیری از متدهای روز روانشناسی، همراه شما در مسیر سلامت روان هستیم
        </Typography>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          className="relative h-full overflow-hidden text-center bg-purple-600"
          {...sharedProps}
        >
          <div className="absolute inset-0 bg-purple-900/50" />
          <CardBody 
            className="relative flex flex-col h-full justify-center"
            {...sharedProps}
          >
            <Typography
              as="span"
              className="text-sm font-bold text-purple-100"
              {...sharedProps}
            >
              خدمات ویژه
            </Typography>
            <Typography
              as="h4"
              className="mt-4 text-2xl font-bold text-white"
              {...sharedProps}
            >
              مشاوره آنلاین تلفنی
            </Typography>
            <Typography
              as="p"
              className="mt-4 mb-6 text-purple-50"
              {...sharedProps}
            >
              دریافت مشاوره فوری از بهترین متخصصین بدون نیاز به مراجعه حضوری
            </Typography>
            <div className="mt-auto">
            <Button
  size="md"
  color="white"
  variant="outlined"
  className="text-purple-50 font-bold border-2 border-white hover:bg-white hover:text-purple-800 hover:shadow-md transition-all"
  {...sharedProps}
>
  اطلاعات بیشتر
</Button>
            </div>
          </CardBody>
        </Card>

        <div className="col-span-1 flex flex-col gap-6">
          {THERAPY_CATEGORIES.slice(0, 2).map((props, idx) => (
            <CategoryCard key={`cat-${idx}`} {...props} />
          ))}
        </div>
        
        <div className="col-span-1 flex flex-col gap-6">
          {THERAPY_CATEGORIES.slice(2, 4).map((props, idx) => (
            <CategoryCard key={`cat-${idx+2}`} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TherapyServices;