"use client";
import { Typography } from "@material-tailwind/react";
import { FeatureCard } from "@/components/feature-card";
import {
  ShieldCheckIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
};

export function AdvantagesSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "متخصصان مجرب",
      description: "همه روانشناسان ما دارای گواهینامه‌های معتبر و حداقل ۱۰ سال سابقه هستند"
    },
    {
      icon: ClockIcon,
      title: "نوبت‌دهی فوری",
      description: "رزرو آنلاین نوبت در کمتر از ۲ دقیقه بدون نیاز به مراجعه حضوری"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "مشاوره ۲۴/۷",
      description: "پشتیبانی همه‌روزه حتی در روزهای تعطیل"
    },
    {
      icon: AcademicCapIcon,
      title: "روش‌های علمی",
      description: "استفاده از جدیدترین متدهای روانشناسی روز دنیا"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Typography
            as="h2"
            className="text-3xl font-bold text-gray-900 mb-3"
            {...sharedProps}
          >
            مزیت‌های انتخاب ما
          </Typography>
          <Typography
            as="p"
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            {...sharedProps}
          >
            با خیال راحت سلامت روان خود را به متخصصان ما بسپارید
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
            >
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}