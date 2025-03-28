// app/appointment.tsx
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-yekan text-purple-700">
              سیستم نوبت‌دهی آنلاین
            </h1>
            <p className="mt-2 text-gray-600 font-vazir">
              زمان مناسب را انتخاب کنید
            </p>
          </div>

          <div className="space-y-6">
            {/* بخش انتخاب نوع خدمت */}
            <div className="border-b pb-4">
              <label className="block text-sm font-vazir text-gray-700 mb-2">
                نوع خدمت
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 font-vazir">
                <option>مشاوره فردی</option>
                <option>مشاوره خانوادگی</option>
                <option>درمان اختلالات اضطرابی</option>
              </select>
            </div>

            {/* بخش انتخاب تاریخ */}
            <div className="border-b pb-4">
              <label className="block text-sm font-vazir text-gray-700 mb-2 flex items-center">
                <Calendar className="ml-2 h-4 w-4" />
                تاریخ مراجعه
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 font-vazir"
              />
            </div>

            {/* بخش انتخاب زمان */}
            <div className="border-b pb-4">
              <label className="block text-sm font-vazir text-gray-700 mb-2 flex items-center">
                <Clock className="ml-2 h-4 w-4" />
                ساعت مراجعه
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 font-vazir">
                <option>۸:۰۰ - ۹:۰۰</option>
                <option>۱۰:۰۰ - ۱۱:۰۰</option>
                <option>۱۴:۰۰ - ۱۵:۰۰</option>
              </select>
            </div>

            {/* دکمه ثبت نوبت */}
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-vazir py-2 px-4 rounded-md shadow-sm transition duration-200">
              ثبت نوبت
            </button>

            <Link 
              href="/" 
              className="block text-center text-purple-600 hover:text-purple-800 font-vazir text-sm mt-4"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}