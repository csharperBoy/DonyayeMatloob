"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  CalendarIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

const SERVICES = [
  {
    icon: CalendarIcon,
    title: "نوبت‌دهی آنلاین",
    description:
      "امکان رزرو آنلاین نوبت مشاوره در هر زمان و هر مکان با انتخاب روانشناس مورد نظر شما",
  },
  {
    icon: PhoneIcon,
    title: "مشاوره تلفنی و آنلاین",
    description:
      "دسترسی به بهترین متخصصین روانشناسی از طریق تماس تصویری، تلفنی و چت آنلاین",
  },
  {
    icon: ShieldCheckIcon,
    title: "محیطی امن و محرمانه",
    description:
      "کلیه جلسات با رعایت کامل اصول محرمانگی و امنیت اطلاعات شما برگزار می‌شود",
  },
];

export function AppointmentRequest() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="container mx-auto mb-16 text-center">
        <Typography
          as="h2"
          className="mb-4 text-3xl font-bold text-gray-900"
          {...sharedProps}
        >
          درخواست مشاوره
        </Typography>
        <Typography
          as="p"
          className="mx-auto text-lg text-gray-600 max-w-2xl"
          {...sharedProps}
        >
          با استفاده از خدمات متنوع ما، اولین گام را به سوی زندگی بهتر بردارید
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon, title, description }) => (
          <FeatureCard 
            key={title} 
            icon={icon} 
            title={title}
            {...sharedProps}
          >
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default AppointmentRequest;