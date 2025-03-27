"use client";
import React from 'react';
import { Typography, Button } from "@material-tailwind/react";
import PsychologistCard from "@/components/psychologist-card";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

const PSYCHOLOGISTS = [
  {
    image: "/image/psychologists/1.jpg",
    name: "دکتر نگار احمدی",
    specialty: "روانشناس بالینی",
    experience: "15",
    description: "دکترای روانشناسی بالینی از دانشگاه تهران، متخصص در درمان اختلالات اضطرابی و افسردگی با رویکرد CBT و طرحواره درمانی",
    availableFor: ["اضطراب", "افسردگی", "وسواس", "اختلالات خواب", "مدیریت استرس"],
    sessionPrice: "550,000",
    isOnline: true
  },
  {
    image: "/image/psychologists/2.jpg",
    name: "دکتر رضا محمدی",
    specialty: "روانپزشک",
    experience: "12",
    description: "فوق تخصص روانپزشکی از دانشگاه علوم پزشکی ایران، تخصص در درمان دارویی و رواندرمانی اختلالات خلقی و شخصیت",
    availableFor: ["اختلال دوقطبی", "اسکیزوفرنی", "اختلالات شخصیت", "اعتیاد"],
    sessionPrice: "650,000",
    isOnline: false
  },
  {
    image: "/image/psychologists/3.png",
    name: "دکتر مریم سلیمانی",
    specialty: "مشاور خانواده",
    experience: "8",
    description: "کارشناسی ارشد مشاوره خانواده از دانشگاه شهید بهشتی، متخصص در زوج درمانی و مشاوره پیش از ازدواج",
    availableFor: ["مشکلات زناشویی", "طلاق", "فرزندپروری", "سوگ"],
    sessionPrice: "450,000",
    isOnline: true
  }
  // ,
  // {
  //   image: "/image/psychologists/dr-karimi.jpg",
  //   name: "دکتر علی کریمی",
  //   specialty: "روانشناس کودک",
  //   experience: "10",
  //   description: "دکترای روانشناسی رشد از دانشگاه علامه طباطبایی، متخصص در بازی درمانی و درمان اختلالات یادگیری",
  //   availableFor: ["اوتیسم", "ADHD", "ناتوانی یادگیری", "لکنت زبان"],
  //   sessionPrice: "500,000",
  //   isOnline: true
  // },
  // {
  //   image: "/image/psychologists/dr-ebadi.jpg",
  //   name: "دکتر سارا عبادی",
  //   specialty: "رواندرمانگر تحلیلی",
  //   experience: "9",
  //   description: "عضو انجمن روانکاوی ایران، تخصص در رواندرمانی عمیق و بلندمدت با رویکرد روانپویشی",
  //   availableFor: ["اختلالات شخصیت", "تروما", "مشکلات هویتی", "کمال گرایی"],
  //   sessionPrice: "600,000",
  //   isOnline: false
  // },
  // {
  //   image: "/image/psychologists/dr-naseri.jpg",
  //   name: "دکتر محسن ناصری",
  //   specialty: "روانشناس سلامت",
  //   experience: "7",
  //   description: "پژوهشگر ارشد در حوزه روانشناسی سلامت، متخصص در درمان بیماران مبتلا به بیماری‌های مزمن",
  //   availableFor: ["کنترل درد", "بیماری‌های مزمن", "اضطراب سلامت", "ترک سیگار"],
  //   sessionPrice: "480,000",
  //   isOnline: true
  // }
];

export function PsychologistsTeam() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
        <Typography 
          variant="h2" 
          className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          {...sharedProps}
        >
          تیم متخصصین ما
        </Typography>
        <Typography 
          className="mx-auto max-w-2xl text-gray-600 text-lg"
          {...sharedProps}
        >
          با کادری مجرب از روانشناسان و روانپزشکان با تجربه در خدمت شما هستیم
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {PSYCHOLOGISTS.map((psychologist, index) => (
          <PsychologistCard
            key={`psychologist-${index}`}
            {...psychologist}
          />
        ))}
      </div>

      <div className="container mx-auto mt-16 text-center">
        <Button 
          variant="outlined" 
          color="purple" 
          size="lg"
          className="border-2"
          {...sharedProps}
        >
          مشاهده تمام متخصصین
        </Button>
      </div>
    </section>
  );
}

export default PsychologistsTeam;