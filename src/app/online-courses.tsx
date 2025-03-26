"use client";

import React from "react";
import { Button, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import TherapyCard from "@/components/therapy-card"; // توجه: import به صورت default

// تعریف نوع دوره‌ها
type Course = {
  img: string;
  serviceType: 'دوره آنلاین' | 'کارگاه';
  category: string;
  title: string;
  desc: string;
  duration: string;
  sessions: number;
  price: string;
  hasCertificate: boolean;
};

const COURSES: Course[] = [
  {
    img: "/image/courses/stress-management.jpg",
    serviceType: "دوره آنلاین",
    category: "مدیریت استرس",
    title: "کنترل استرس پیشرفته",
    desc: "آموزش تکنیک‌های CBT برای مدیریت استرس روزمره",
    duration: "8 ساعت",
    sessions: 4,
    price: "490,000",
    hasCertificate: true
  },
  {
    img: "/image/courses/child-psychology.jpg",
    serviceType: "کارگاه",
    category: "روانشناسی کودک",
    title: "پرورش فرزند شاد",
    desc: "آموزش روش‌های تربیتی مبتنی بر روانشناسی مثبت‌نگر", 
    duration: "12 ساعت",
    sessions: 2,
    price: "650,000",
    hasCertificate: true
  }
];

const COURSE_CATEGORIES = [
  "مدیریت استرس",
  "روابط زناشویی",
  "تربیت کودک",
  "مهارت‌های ارتباطی"
];

export function OnlineCourses() {
  const [activeTab, setActiveTab] = React.useState(COURSE_CATEGORIES[0]);

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <p className="mb-3 font-bold uppercase text-purple-500">
          تا ۴۰٪ تخفیف ویژه
        </p>

        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          دوره‌های تخصصی روانشناسی
        </h1>

        <p className="mx-auto w-full px-4 text-lg text-gray-600 lg:w-9/12">
          ارائه جامع‌ترین دوره‌های آموزشی آنلاین با مدرک معتبر از موسسه دنیای مطلوب
        </p>

        <div className="mt-20 flex items-center justify-center">
          <Tabs value={activeTab} className="w-full lg:w-8/12">
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-purple-500 rounded-lg",
              }}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {COURSE_CATEGORIES.map((category) => (
                <Tab
                  key={category}
                  value={category}
                  className={`!font-medium transition-all duration-300
                    ${activeTab === category ? "text-white" : "text-gray-700"}
                  `}
                  onClick={() => setActiveTab(category)}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {category}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {COURSES.map((course) => (
          <TherapyCard
            key={`${course.title}-${course.category}`}
            {...course}
          />
        ))}
      </div>

      <div className="grid place-items-center">
        <Button
          variant="outlined"
          color="purple"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="mt-32 font-iransans"
        >
          مشاهده همه دوره‌ها
        </Button>
      </div>
    </section>
  );
}

export default OnlineCourses;