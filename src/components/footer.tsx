"use client";

import { Typography, Button, Input } from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-20 px-4 pt-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* بخش درباره موسسه */}
          <div className="text-right">
            <Typography
              as="h4"
              className="mb-6 text-xl font-bold text-gray-900"
              {...sharedProps}
            >
              موسسه روانشناسی دنیای مطلوب
            </Typography>
            <Typography
              as="p"
              className="mb-4 text-gray-600"
              {...sharedProps}
            >
              ارائه خدمات تخصصی روانشناسی با کادری مجرب و متعهد
            </Typography>
            <div className="flex items-center gap-2 justify-end">
              <PhoneIcon className="h-5 w-5 text-purple-600" />
              <Typography
                as="a"
                href="tel:+983155415485"
                className="text-gray-700"
                {...sharedProps}
              >
                031-55415485
              </Typography>
            </div>
          </div>

          {/* لینک های سریع */}
          <div className="text-right">
            <Typography
              as="h4"
              className="mb-6 text-xl font-bold text-gray-900"
              {...sharedProps}
            >
              دسترسی سریع
            </Typography>
            <ul className="space-y-2">
              {['خدمات ما', 'روانشناسان', 'دوره های آموزشی', 'مقالات', 'تماس با ما'].map((item) => (
                <li key={item}>
                  <Typography
                    as="a"
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                    {...sharedProps}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div className="text-right">
            <Typography
              as="h4"
              className="mb-6 text-xl font-bold text-gray-900"
              {...sharedProps}
            >
              ارتباط با ما
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-2 justify-end">
                <MapPinIcon className="h-5 w-5 text-purple-600" />
                <Typography
                  as="p"
                  className="text-gray-600"
                  {...sharedProps}
                >
                  کاشان، بلوار نارنجستان، شمشاد ده، بابونه سوم
                </Typography>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <EnvelopeIcon className="h-5 w-5 text-purple-600" />
                <Typography
                  as="a"
                  href="mailto:info@donyayemotloob.ir"
                  className="text-gray-600"
                  {...sharedProps}
                >
                  info@donyayemotloob.ir
                </Typography>
              </div>
            </div>
          </div>

          {/* خبرنامه */}
          <div className="text-right">
            <Typography
              as="h4"
              className="mb-6 text-xl font-bold text-gray-900"
              {...sharedProps}
            >
              خبرنامه
            </Typography>
            <Typography
              as="p"
              className="mb-4 text-gray-600"
              {...sharedProps}
            >
              برای دریافت جدیدترین مقالات و دوره ها ایمیل خود را وارد کنید
            </Typography>
            <div className="flex flex-col gap-2">
              <Input 
                label="آدرس ایمیل" 
                color="purple"
                {...sharedProps}
                crossOrigin={undefined}
              />
              <Button 
                color="purple"
                className="mt-2"
                {...sharedProps}
              >
                عضویت در خبرنامه
              </Button>
            </div>
          </div>
        </div>

        {/* بخش کپی رایت */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Typography
              as="p"
              className="text-center text-gray-600"
              {...sharedProps}
            >
              &copy; {CURRENT_YEAR} تمامی حقوق برای موسسه روانشناسی دنیای مطلوب محفوظ است
            </Typography>
            
            <div className="flex items-center gap-4">
              <Typography
                as="a"
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                {...sharedProps}
              >
                شرایط استفاده
              </Typography>
              <Typography
                as="a"
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                {...sharedProps}
              >
                حریم خصوصی
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;