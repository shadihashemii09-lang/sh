import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد").max(100),
  email: z.string().email("ایمیل نامعتبر است"),
  password: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .max(100),
  confirmPassword: z.string().min(8, "تأیید رمز عبور نامعتبر است"),
  role: z.enum(["CUSTOMER", "BUSINESS_OWNER", "EMPLOYEE", "ADMIN"]),
  phone: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "باید با شرایط استفاده موافقت کنید",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور و تأیید رمز عبور یکسان نیستند",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
  password: z.string().min(1, "رمز عبور الزامی است"),
  rememberMe: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
});

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
  confirmPassword: z.string().min(8, "تأیید رمز عبور نامعتبر است"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور و تأیید رمز عبور یکسان نیستند",
  path: ["confirmPassword"],
});

export const businessRegistrationSchema = z.object({
  name: z.string().min(2, "نام کسب‌وکار الزامی است").max(200),
  slug: z.string().min(3, "اسلاگ باید حداقل ۳ کاراکتر باشد").max(100),
  categoryId: z.string().min(1, "دسته‌بندی الزامی است"),
  description: z.string().min(10, "توضیحات باید حداقل ۱۰ کاراکتر باشد").max(2000),
  province: z.string().min(1, "استان الزامی است"),
  city: z.string().min(1, "شهر الزامی است"),
  address: z.string().min(5, "آدرس الزامی است").max(500),
  phone: z.string().regex(/^09[0-9]{9}$/, "شماره تلفن نامعتبر است"),
  email: z.string().email("ایمیل نامعتبر است").optional(),
  instagram: z.string().optional(),
  telegram: z.string().optional(),
  website: z.string().url("آدرس وب‌سایت نامعتبر است").optional(),
  workingHours: z.array(z.object({
    dayOfWeek: z.number().min(0).max(6),
    openTime: z.string(),
    closeTime: z.string(),
    breakStart: z.string().optional(),
    breakEnd: z.string().optional(),
    maxBooking: z.number().min(1).max(100),
    bufferTime: z.number().min(0).max(60),
  })).optional(),
});

export const serviceSchema = z.object({
  name: z.string().min(2, "نام سرویس الزامی است").max(200),
  slug: z.string().min(3, "اسلاگ باید حداقل ۳ کاراکتر باشد").max(100),
  description: z.string().min(5, "توضیحات سرویس الزامی است").max(2000),
  duration: z.number().min(5, "مدت زمان حداقل ۵ دقیقه").max(480),
  price: z.number().min(0, "قیمت نمی‌تواند منفی باشد").max(1000000000),
  color: z.string().optional(),
  image: z.string().optional(),
  employeeIds: z.array(z.string()).optional(),
});

export const bookingSchema = z.object({
  businessId: z.string().min(1, "انتخاب کسب‌وکار الزامی است"),
  serviceId: z.string().min(1, "انتخاب سرویس الزامی است"),
  employeeId: z.string().optional(),
  date: z.string().min(1, "انتخاب تاریخ الزامی است"),
  startTime: z.string().min(1, "انتخاب ساعت الزامی است"),
  endTime: z.string().min(1, "انتخاب ساعت پایان الزامی است"),
  customerName: z.string().min(2, "نام الزامی است").max(100),
  customerPhone: z.string().regex(/^09[0-9]{9}$/, "شماره تلفن نامعتبر است"),
  customerEmail: z.string().email("ایمیل نامعتبر است").optional(),
  notes: z.string().max(1000).optional(),
});

export const reviewSchema = z.object({
  businessId: z.string().min(1),
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, "نظر شما باید حداقل ۱۰ کاراکتر باشد").max(2000),
});

export const bookingSearchSchema = z.object({
  query: z.string().optional(),
  category: z.string().optional(),
  location: z.string().optional(),
  service: z.string().optional(),
  sortBy: z.enum(["relevance", "rating", "distance", "price"]).optional(),
  page: z.number().min(1).default(1),
  pageSize: z.number().min(1).max(50).default(20),
});