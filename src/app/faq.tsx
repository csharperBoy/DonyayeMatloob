"use client";
import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

const FAQS = [
  {
    title: "چگونه می‌توانم نوبت مشاوره بگیرم؟",
    desc: "شما می‌توانید از طریق صفحه رزرو آنلاین در وبسایت ما یا تماس با شماره تلفن موسسه نوبت خود را ثبت کنید. همچنین امکان رزرو از طریق پیام در واتساپ نیز وجود دارد."
  },
  {
    title: "هزینه جلسات مشاوره چقدر است؟",
    desc: "هزینه جلسات بسته به نوع خدمت (مشاوره فردی، زوج درمانی، خانواده درمانی) و تخصص درمانگر متفاوت است. برای اطلاع از تعرفه دقیق می‌توانید به بخش هزینه‌ها مراجعه کنید."
  },
  {
    title: "آیا مشاوره آنلاین هم دارید؟",
    desc: "بله، ما خدمات مشاوره آنلاین از طریق تماس تصویری و تلفنی برای کسانی که امکان مراجعه حضوری ندارند ارائه می‌دهیم. کیفیت این جلسات همانند جلسات حضوری است."
  },
  {
    title: "مدت زمان هر جلسه چقدر است؟",
    desc: "مدت زمان استاندارد هر جلسه ۴۵ تا ۶۰ دقیقه است. در موارد خاص و با توافق قبلی می‌توان این زمان را تنظیم کرد."
  },
  {
    title: "آیا خدمات شما محرمانه است؟",
    desc: "بله، تمامی جلسات مشاوره با رعایت کامل اصول اخلاقی و محرمانگی اطلاعات انجام می‌شود. اطلاعات شما نزد ما کاملاً ایمن خواهد بود."
  },
  {
    title: "چند جلسه مشاوره نیاز دارم؟",
    desc: "تعداد جلسات بستگی به نوع مسئله و پیشرفت شما دارد. معمولاً پس از جلسه اول، درمانگر می‌تواند تخمین بهتری از تعداد جلسات مورد نیاز ارائه دهد."
  }
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography
            as="h1"
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            {...sharedProps}
          >
            سوالات متداول
          </Typography>
          <Typography
            as="p"
            className="mx-auto text-lg text-gray-600 max-w-2xl"
            {...sharedProps}
          >
            پاسخ به پرسش‌های رایج درباره خدمات مشاوره و روانشناسی در موسسه دنیای مطلوب
          </Typography>
        </div>
        
        <div className="mx-auto lg:max-w-screen-lg">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              {...sharedProps}
            >
              <AccordionHeader 
                className={`text-right py-4 px-6 text-lg font-medium ${open === key + 1 ? 'text-purple-600 bg-purple-50' : 'text-gray-800 bg-white'}`}
                {...sharedProps}
              >
                {title}
              </AccordionHeader>
              <AccordionBody className="px-6 py-4 bg-gray-50">
                <Typography
                  as="p"
                  className="font-normal text-gray-700 leading-relaxed"
                  {...sharedProps}
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;