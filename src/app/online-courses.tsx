"use client";
import React from 'react';
import { Button, Tabs, TabsHeader, Tab, Typography } from "@material-tailwind/react";
import TherapyCard from "@/components/therapy-card";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

type Course = {
  img: string;
  title: string;
  desc: string;
  serviceType: 'دوره آنلاین' | 'کارگاه' | 'دوره آفلاین';
  category: string;
  duration: string;
  sessions?: number;
  price: string;
  hasCertificate: boolean;
};

const COURSES: Course[] = [
  {
    img: "/image/courses/1.jpg",
    serviceType: "دوره آنلاین",
    category: "مدیریت استرس",
    title: "کنترل استرس پیشرفته",
    desc: "آموزش تکنیک‌های CBT و ذهن‌آگاهی برای مدیریت استرس روزمره - مناسب برای افراد پراسترس و مدیران",
    duration: "8 ساعت",
    sessions: 4,
    price: "490,000",
    hasCertificate: true
  },
  {
    img: "/image/courses/2.jpg",
    serviceType: "کارگاه",
    category: "تربیت کودک",
    title: "پرورش فرزند شاد",
    desc: "آموزش روش‌های تربیتی مبتنی بر روانشناسی مثبت‌نگر برای والدین کودکان 3 تا 12 سال", 
    duration: "12 ساعت",
    sessions: 2,
    price: "650,000",
    hasCertificate: true
  },
  {
    img: "/image/courses/3.jpg",
    serviceType: "دوره آنلاین",
    category: "روابط زناشویی",
    title: "زندگی عاشقانه",
    desc: "آموزش مهارت‌های ارتباطی و حل تعارض در روابط زناشویی - همراه با تمرینات عملی",
    duration: "10 ساعت",
    sessions: 5,
    price: "580,000",
    hasCertificate: true
   }
   //,
  // {
  //   img: "/image/courses/communication-skills.jpg",
  //   serviceType: "دوره آفلاین",
  //   category: "مهارت‌های ارتباطی",
  //   title: "هنر ارتباط مؤثر",
  //   desc: "تقویت مهارت‌های کلامی و غیرکلامی در روابط اجتماعی و کاری - شامل ویدیوهای آموزشی و تمرینات",
  //   duration: "6 ساعت",
  //   price: "390,000",
  //   hasCertificate: false
  // },
  // {
  //   img: "/image/courses/anxiety-workshop.jpg",
  //   serviceType: "کارگاه",
  //   category: "مدیریت استرس",
  //   title: "غلبه بر اضطراب",
  //   desc: "کارگاه عملی تکنیک‌های سریع کاهش اضطراب در موقعیت‌های مختلف زندگی",
  //   duration: "4 ساعت",
  //   sessions: 1,
  //   price: "320,000",
  //   hasCertificate: true
  // },
  // {
  //   img: "/image/courses/parenting.jpg",
  //   serviceType: "دوره آنلاین",
  //   category: "تربیت کودک",
  //   title: "نوجوان امروز",
  //   desc: "راهکارهای عملی برای ارتباط مؤثر با نوجوانان و حل چالش‌های دوره بلوغ",
  //   duration: "9 ساعت",
  //   sessions: 3,
  //   price: "520,000",
  //   hasCertificate: true
  // }
];

const COURSE_CATEGORIES = [
  "همه دوره‌ها",
  "مدیریت استرس",
  "روابط زناشویی",
  "تربیت کودک",
  "مهارت‌های ارتباطی"
];

export function OnlineCourses() {
  const [activeTab, setActiveTab] = React.useState(COURSE_CATEGORIES[0]);

  const filteredCourses = activeTab === "همه دوره‌ها" 
    ? COURSES 
    : COURSES.filter(course => course.category === activeTab);

  return (
    <section className="px-4 py-20 bg-white">
      <div className="container mx-auto mb-16 text-center">
        <Typography
          variant="small"
          color="purple"
          className="mb-3 font-bold uppercase"
          {...sharedProps}
        >
          تا ۴۰٪ تخفیف ویژه
        </Typography>

        <Typography
          variant="h2"
          className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
          {...sharedProps}
        >
          دوره‌های تخصصی روانشناسی
        </Typography>

        <Typography
          className="mx-auto max-w-2xl text-gray-600 text-lg"
          {...sharedProps}
        >
          ارائه جامع‌ترین دوره‌های آموزشی آنلاین با مدرک معتبر از موسسه دنیای مطلوب
        </Typography>

        <div className="mt-16">
          <Tabs value={activeTab} className="w-full mx-auto max-w-3xl">
            <TabsHeader
              className="h-12 bg-gray-100"
              indicatorProps={{
                className: "!bg-purple-500 rounded-lg",
              }}
              {...sharedProps}
            >
              {COURSE_CATEGORIES.map((category) => (
                <Tab
                  key={category}
                  value={category}
                  className={`font-medium text-sm md:text-base ${
                    activeTab === category ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab(category)}
                  {...sharedProps}
                >
                  {category}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {filteredCourses.map((course, index) => (
          <TherapyCard
            key={`course-${index}`}
            {...course}
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
          مشاهده همه دوره‌ها
        </Button>
      </div>
    </section>
  );
}

export default OnlineCourses;