export type UserRole = "ADMIN" | "BUSINESS_OWNER" | "EMPLOYEE" | "CUSTOMER";

export interface AppUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  emailVerified: boolean;
}

export interface BusinessData {
  id: string;
  ownerId: string;
  name: string;
  slug: string;
  description?: string;
  categoryId?: string;
  logo?: string;
  banner?: string;
  province?: string;
  city?: string;
  address?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  telegram?: string;
  website?: string;
  lat?: number;
  lng?: number;
  workingHours: WorkingHour[];
  schedule: ScheduleSlot[];
  isActive: boolean;
  isVerified: boolean;
}

export interface WorkingHour {
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
  breakStart?: string;
  breakEnd?: string;
  maxBooking: number;
  bufferTime: number;
}

export interface ScheduleSlot {
  date: string;
  slots: string[];
}

export interface ServiceData {
  id: string;
  businessId: string;
  categoryId?: string;
  name: string;
  slug: string;
  description?: string;
  duration: number;
  price: number;
  color?: string;
  image?: string;
  employeeIds: string[];
  isActive: boolean;
}

export interface BookingData {
  id: string;
  businessId: string;
  customerId?: string;
  employeeId?: string;
  serviceId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED" | "NO_SHOW" | "RESCHEDULED";
  notes?: string;
}

export interface BookingFormData {
  businessId: string;
  serviceId: string;
  employeeId?: string;
  date: string;
  startTime: string;
  endTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  notes?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  slug: string;
  price: number;
  interval: "monthly" | "yearly";
  features: string[];
  limits: Record<string, number>;
  isActive: boolean;
}

export interface PaymentData {
  id: string;
  bookingId?: string;
  amount: number;
  currency: string;
  provider?: string;
  status: "pending" | "completed" | "failed" | "refunded";
}

export interface ReviewData {
  id: string;
  businessId: string;
  customerId?: string;
  rating: number;
  comment?: string;
  status: "pending" | "approved" | "rejected";
  verified: boolean;
}

export interface NotificationData {
  id: string;
  userId: string;
  title: string;
  body?: string;
  type: "info" | "success" | "warning" | "error";
  url?: string;
  read: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}