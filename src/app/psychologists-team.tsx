"use client";

import { Typography, Button } from "@material-tailwind/react";
import PsychologistCard from "@/components/psychologist-card";

// تعریف props های مشترک
const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

const PSYCHOLOGISTS = [
  {
    image: "/image/psychologists/dr-ahmadi.jpg",
    name: "دکتر احمدی",
    specialty: "روانشناس بالینی",
    experience: "15",
    description: "متخصص در درمان اختلالات اضطرابی و افسردگی با رویکرد CBT",
    availableFor: ["مشاوره فردی", "زوج درمانی", "خانواده درمانی"],
    sessionPrice: "450,000"
  },
  // ... سایر روانشناسان
];

export function PsychologistsTeam() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto mb-12 text-center">
        <Typography 
          variant="h2" 
          className="mb-3 text-3xl font-bold text-gray-900"
          {...sharedProps}
        >
          تیم متخصصین ما
        </Typography>
        <Typography 
          className="mx-auto max-w-2xl text-gray-600"
          {...sharedProps}
        >
          با کادری مجرب از روانشناسان و روانپزشکان با تجربه در خدمت شما هستیم
        </Typography>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PSYCHOLOGISTS.map((psychologist, index) => (
          <PsychologistCard
            key={`${psychologist.name}-${index}`}
            {...psychologist}
          />
        ))}
      </div>

      <div className="container mx-auto mt-12 text-center">
        <Button 
          variant="outlined" 
          color="purple" 
          size="lg"
          {...sharedProps}
        >
          مشاهده تمام متخصصین
        </Button>
      </div>
    </section>
  );
}

export default PsychologistsTeam;