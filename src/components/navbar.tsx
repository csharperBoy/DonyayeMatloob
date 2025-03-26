import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  UserGroupIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  BookOpenIcon,
  PhoneIcon,
  XMarkIcon,
  Bars3Icon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";

const SERVICES_MENU = [
  {
    name: "مشاوره آنلاین",
    icon: VideoCameraIcon,
    href: "/online-consultation",
  },
  {
    name: "مشاوره حضوری", // آیتم جدید
    icon: BuildingStorefrontIcon,
    href: "/in-person-consultation",
  },
  {
    name: "دوره‌های آنلاین",
    icon: ComputerDesktopIcon,
    href: "/online-courses",
  },
  {
    name: "کارگاه‌های حضوری",
    icon: UserGroupIcon,
    href: "/workshops",
  },
  {
    name: "دوره‌های آفلاین",
    icon: AcademicCapIcon,
    href: "/courses",
  },
];

const MAIN_MENU = [
  {
    name: "صفحه اصلی",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "مقالات روانشناسی",
    icon: BookOpenIcon,
    href: "/articles",
  },
  {
    name: "تماس با ما",
    icon: PhoneIcon,
    href: "/contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        className="flex items-center gap-3 font-medium text-gray-800 hover:text-purple-600 text-[15px] lg:text-[16px] py-2 px-3 font-vazir"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar 
      shadow={false} 
      fullWidth 
      className="border-0 sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      dir="rtl"
    >
      <div className="container mx-auto flex items-center justify-between">
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="inline-block lg:hidden ml-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </IconButton>

        <Typography
          as="a"
          href="/"
          className="text-xl lg:text-2xl font-bold text-purple-700 flex items-center gap-2 font-yekan"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <span className="hidden sm:inline-block">موسسه روانشناسی</span>
          <span className="text-purple-900">دنیای مطلوب</span>
        </Typography>

        <ul className="hidden items-center gap-1 lg:flex mr-auto">
          {MAIN_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-6 w-6" />
              <span>{name}</span>
            </NavItem>
          ))}
          
          <li className="relative group">
            <button className="flex items-center gap-3 font-medium text-gray-800 hover:text-purple-600 text-[15px] lg:text-[16px] py-2 px-3 font-vazir">
              <UserGroupIcon className="h-6 w-6" />
              <span>خدمات ما</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-3 w-72 right-0 font-vazir">
              {SERVICES_MENU.map(({ name, icon: Icon, href }) => (
                <a 
                  key={name} 
                  href={href}
                  className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg text-[15px]"
                >
                  <Icon className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700">{name}</span>
                </a>
              ))}
            </div>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button 
            variant="text"
            color="gray"
            className="px-5 py-2 text-gray-700 hover:text-purple-600 text-[15px] font-vazir"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            ورود مشاوران
          </Button>
          <Button 
            variant="filled"
            color="purple"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-[15px] font-iransans"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            نوبت‌دهی
          </Button>
        </div>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-4 pt-4 font-vazir">
          <ul className="flex flex-col gap-3">
            {MAIN_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6" />
                  <span className="text-[16px]">{name}</span>
                </div>
              </NavItem>
            ))}
            
            <li className="border-t border-gray-100 pt-3">
              <Typography className="font-medium text-gray-500 mb-3 px-2 text-[15px] font-vazir"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                خدمات ما:
              </Typography>
              <div className="flex flex-col gap-2">
                {SERVICES_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6" />
                      <span className="text-[16px]">{name}</span>
                    </div>
                  </NavItem>
                ))}
              </div>
            </li>
          </ul>
          <div className="mt-6 mb-4 flex flex-col gap-3">
            <Button 
              variant="filled"
              color="purple"
              fullWidth
              className="py-3 bg-purple-600 hover:bg-purple-700 text-[16px] font-iransans"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              درخواست مشاوره
            </Button>
            <Button 
              variant="outlined"
              color="purple"
              fullWidth
              className="py-3 text-[16px] font-vazir"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              ورود مشاوران
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;