"use client";

import Image from "next/image";
import { Typography, Carousel } from "@material-tailwind/react";
import { 
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  UserGroupIcon 
} from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

export function TherapyCarousel() {
  const slides = [
    {
      title: "مشاوره تخصصی با روانشناسان مجرب",
      description: "جلسات مشاوره فردی، زوجی و خانوادگی با متخصصان دارای پروانه رسمی از سازمان نظام روانشناسی",
      icon: <UserGroupIcon className="h-8 w-8 text-white" />,
      image: "/image/carousel/1.jpg",
      licenses: [
        "پروانه رسمی روانشناسی",
        "مدارک معتبر دانشگاهی",
        "گواهینامه‌های تخصصی"
      ]
    },
    {
      title: "مجوزهای رسمی موسسه",
      description: "موسسه دنیای مطلوب دارای کلیه مجوزهای رسمی از مراجع ذیصلاح کشور",
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
      image: "/image/carousel/2.jpg",
      licenses: [
        "مجوز رسمی از سازمان نظام روانشناسی",
        "پروانه فعالیت از وزارت بهداشت",
        "عضویت در انجمن روانشناسی ایران"
      ]
    },
    {
      title: "همکاری با مراکز معتبر",
      description: "همکاری با دانشگاه‌ها و مراکز علمی معتبر کشور در زمینه آموزش و پژوهش",
      icon: <BuildingLibraryIcon className="h-8 w-8 text-white" />,
      image: "/image/carousel/3.jpg",
      licenses: [
        "همکار دانشگاه تهران",
        "همکار دانشگاه علوم پزشکی",
        "مرکز تحقیقات روانشناسی بالینی"
      ]
    }
  ];

  return (
    <div className="px-4 py-20 md:py-28 bg-gray-50">
      <section className="container mx-auto rounded-xl bg-gradient-to-r from-purple-600 to-indigo-700 bg-center py-10 lg:px-16 shadow-xl">
        <Carousel
          transition={{ duration: 1 }}
          autoplay={true}
          autoplayDelay={5000}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-1/2 bottom-4 z-50 flex h-5 w-20 -translate-x-1/2 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          {...sharedProps}
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="flex flex-col-reverse items-center gap-8 px-6 py-10 md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-10 md:py-16"
            >
              <div className="flex flex-col items-start text-right">
                <div className="mb-6 flex items-center gap-3">
                  {item.icon}
                  <Typography
                    as="h3"
                    className="text-2xl font-bold text-white md:text-3xl"
                    {...sharedProps}
                  >
                    {item.title}
                  </Typography>
                </div>
                <Typography
                  as="p"
                  className="mb-6 text-lg text-white/90 md:text-xl"
                  {...sharedProps}
                >
                  {item.description}
                </Typography>
                
                <div className="mb-8 space-y-3">
                  {item.licenses.map((license, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <AcademicCapIcon className="h-5 w-5 text-purple-200" />
                      <Typography
                        as="span"
                        className="text-white"
                        {...sharedProps}
                      >
                        {license}
                      </Typography>
                    </div>
                  ))}
                </div>

                <button className="rounded-lg bg-white/20 px-6 py-3 text-white transition-all hover:bg-white/30 hover:shadow-md">
                  جزئیات بیشتر
                </button>
              </div>
              
              <div className="w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  width={600}
                  height={400}
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default TherapyCarousel;