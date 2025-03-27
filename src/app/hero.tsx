"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { 
  ChatBubbleLeftRightIcon,
  UserGroupIcon 
} from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

function Hero() {
  return (
    <header className="bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-12 md:py-24">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:pr-10">
          <Typography
            as="h1"
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
            {...sharedProps}
          >
            <span className="block leading-tight">سلامت روان شما</span>
            <span className="block mt-4 text-purple-600 leading-tight">اولویت ماست</span>
          </Typography>
          
          <Typography
            as="p"
            className="mb-10 text-lg text-gray-600 md:pr-10 md:text-xl leading-relaxed"
            {...sharedProps}
          >
            با تیمی از متخصصان مجرب روانشناسی همراه شوید 
            <br />
            تا در مسیر رشد فردی و بهبود کیفیت زندگی به شما کمک کنیم.
          </Typography>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              color="purple"
              className="flex items-center gap-2 px-8 py-3 text-lg transition-all duration-300 hover:bg-purple-800 hover:shadow-lg"
              {...sharedProps}
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              رزرو مشاوره
            </Button>
            
            <Button
              size="lg"
              variant="outlined"
              color="purple"
              className="px-8 py-3 text-lg transition-all duration-300 border-2 border-purple-600 hover:bg-purple-500/20 hover:border-purple-700"
              {...sharedProps}
            >
              مشاهده خدمات
            </Button>
          </div>
        </div>
        
        <div className="relative w-full max-w-xl">
          <Image
            width={800}
            height={600}
            src="/image/hero/2.jpg"
            className="rounded-lg shadow-xl"
            alt="مشاوره روانشناسی"
            priority
          />
          
          <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-white p-4 shadow-lg md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <UserGroupIcon className="h-6 w-6" />
              </div>
              <div>
                <Typography variant="h6" className="text-purple-900" {...sharedProps}>
                  +۵۰۰ مراجع
                </Typography>
                <Typography variant="small" className="text-gray-600" {...sharedProps}>
                  رضایت‌مند از خدمات
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;