// src/types/therapy-types.ts
export type TherapyServiceType = 
  | 'مشاوره آنلاین' 
  | 'مشاوره حضوری'
  | 'دوره آنلاین'
  | 'دوره آفلاین'
  | 'کارگاه آموزشی';

export interface TherapyCardProps {
  img: string;
  title: string;
  desc: string;
  serviceType: TherapyServiceType;
  category: string;
  duration: string;
  price?: string;
  sessions?: number;
  hasCertificate?: boolean;
}