import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronLeft, ChevronRight, MapPin, Phone, User, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { bookingSchema } from "@/schemas";
import type { BusinessData, ServiceData } from "@/types";

interface BookingPageProps {
  params: { slug: string };
}

export function BookingPage({ params }: BookingPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = React.useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      businessId: params.slug,
      serviceId: "",
      date: "",
      startTime: "",
      endTime: "",
      customerName: "",
      customerPhone: "",
      customerEmail: "",
      notes: "",
    },
  });

  const [step, setStep] = React.useState(0);
  const [selectedService, setSelectedService] = React.useState<ServiceData | null>(null);
  const [selectedEmployee, setSelectedEmployee] = React.useState<string | null>(null);
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [selectedTime, setSelectedTime] = React.useState<string>("");

  const steps = [
    "انتخاب سرویس",
    "انتخاب تاریخ و ساعت",
    "اطلاعات مشتری",
    "تأیید",
    "موفق",
  ];

  const businessData: BusinessData = {
    id: "test",
    ownerId: "owner1",
    name: "سالون تست",
    slug: params.slug,
    description: "سالون زیبایی حرفه‌ای",
    phone: "۰۹۱۲۱۲۳۴۵۶۷",
    address: "تهران، خیابان تخت",
    worki‌ngHours: [
      { dayOfWeek: 6, openTime: "09:00", closeTime: "21:00" },
      { dayOfWeek: 0, openTime: "09:00", closeTime: "21:00" },
    ],
    schedule: [],
  };

  const services: ServiceData[] = [
    {
      id: "1",
      businessId: "test",
      name: "کات و مدلینگ",
      duration: 60,
      price: 500000,
    },
    {
      id: "2",
      businessId: "test",
      name: "رنگ مو",
      duration: 120,
      price: 300000,
    },
    {
      id: "3",
      businessId: "test",
      name: "میکاپ عروس",
      duration: 180,
      price: 2000000,
    },
  ];

  const timeSlots = [
    "۰۹:۰۰", "۰۹:۳۰", "۱۰:۰۰", "۱۰:۳۰", "۱۱:۰۰", "۱۱:۳۰",
    "۱۲:۰۰", "۱۲:۳۰", "۱۳:۰۰", "۱۳:۳۰", "۱۴:۰۰", "۱۴:۳۰",
    "۱۵:۰۰", "۱۵:۳۰", "۱۶:۰۰", "۱۶:۳۰", "۱۷:۰۰", "۱۷:۳۰",
    "۱۸:۰۰", "۱۸:۳۰", "۱۹:۰۰", "۱۹:۳۰", "۲۰:۰۰", "۲۰:۳۰",
  ];

  async function onSubmit(data: any) {
    console.log("Booking submitted:", data);
    window.location.href = `/booking/success`;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center w-full max-w-md">
          {steps.map((label, i) => (
            <React.Fragment key={i}>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
                i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={cn(
                  "flex-1 h-1 mx-2 rounded",
                  i < step ? "bg-primary" : "bg-muted"
                )} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {step === 0 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">انتخاب سرویس</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={cn(
                      "p-4 cursor-pointer transition-all hover:shadow-md",
                      selectedService?.id === service.id && "ring-2 ring-primary"
                    )}
                    onClick={() => {
                      setSelectedService(service);
                      register("serviceId").onChange({ target: { value: service.id } });
                    }}
                  >
                    <h3 className="font-semibold mb-1">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      مدت زمان: {service.duration} دقیقه
                    </p>
                    <span className="text-primary font-bold">
                      {service.price.toLocaleString("fa-IR")} تومان
                    </span>
                  </Card>
                ))}
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" disabled>مرحله قبل</Button>
                <Button onClick={() => setStep(1)} disabled={!selectedService}>
                  مرحله بعد
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 1 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">انتخاب تاریخ و ساعت</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Label>تاریخ</Label>
                  <Input
                    type="date"
                    {...register("date")}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <span className="text-sm text-destructive">{errors.date?.message as string}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>ساعت</Label>
                  <Select onValueChange={(v) => setSelectedTime(v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب ساعت" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => setStep(0)}>مرحله قبل</Button>
                <Button onClick={() => setStep(2)} disabled={!selectedTime}>مرحله بعد</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">اطلاعات مشتری</h2>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <Label>نام و نام خانوادگی</Label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input className="pr-10" {...register("customerName")} />
                  </div>
                  {errors.customerName && (
                    <span className="text-sm text-destructive">{errors.customerName?.message as string}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>شماره موبایل</Label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input className="pr-10 dir-ltr" dir="ltr" {...register("customerPhone")} />
                  </div>
                  {errors.customerPhone && (
                    <span className="text-sm text-destructive">{errors.customerPhone?.message as string}</span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label>ایمیل (اختیاری)</Label>
                  <Input type="email" dir="ltr" {...register("customerEmail")} />
                </div>
                <div className="space-y-2">
                  <Label>یادداشت (اختیاری)</Label>
                  <Textarea rows={3} {...register("notes")} />
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="outline" type="button" onClick={() => setStep(1)}>مرحله قبل</Button>
                  <Button type="submit">تأیید رزرو</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardContent className="p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
              >
                <CalendarIcon className="w-10 h-10 text-green-600" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">رزرو با موفقیت انجام شد!</h2>
              <p className="text-muted-foreground mb-6">
                نوبت شما با موفقیت ثبت شد. اطلاعات تأیید به ایمیل شما ارسال گردید.
              </p>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/dashboard/customer/bookings">مشاهده نوبت‌ها</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">بازگشت به صفحه اصلی</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </main>
  );
}