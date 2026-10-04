export type ServiceId = 'private-training' | 'business-workshop' | 'reiki-session' | 'teacher-mentoring';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  duration: string;
  price: string;
  priceNote?: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  image: string;
  idealFor: string;
}

export interface LocationItem {
  city: string;
  region: string;
  country: string;
  tag: string;
  description: string;
  timezone: string;
  phone?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceId: ServiceId;
  location: string;
  preferredTime: string;
  goals: string;
  message: string;
}
