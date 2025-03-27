"use client";
import React from 'react';
import { Button } from "@material-tailwind/react";
import { PhoneIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const sharedProps = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined
};

// تغییر اینجا: اضافه کردن export default
export default function ContactFloatButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      <Button
        color="green"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        {...sharedProps}
        onClick={() => window.open('tel:+983155415485')}
      >
        <PhoneIcon className="h-5 w-5" />
        تماس فوری
      </Button>

      <Button
        color="purple"
        size="lg"
        className="rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        {...sharedProps}
        onClick={() => window.open('https://wa.me/989137852413')}
      >
        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
        مشاوره آنلاین
      </Button>
    </div>
  );
}