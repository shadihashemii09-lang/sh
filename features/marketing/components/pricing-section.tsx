"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "رایگان",
    slug: "free",
    price: 0,
    period: "ماهانه",
    description: "مناسب برای شروع کسب‌وکار",
    features: [
      "پرونده کسب‌وکار یک",
      "۵ نوبت در ماه",
      "مدیریت سرویس‌ها",
      "پنل کاربری پایه",
      "پشتیبانی ایمیلی",
    ],
    cta: "شروع رایگان",
    popular: false,
  },
  {
    name: "پایه",
    slug: "basic",
    price: 99000,
    period: "ماهانه",
    description: "مناسب برای کسب‌وکارهای کوچک",
    features: [
      "پرونده‌های نامحدود",
      "نوبت نامحدود",
      "مدیریت کامل سرویس‌ها",
      "پنل تحلیل و گزارش",
      "یادآوری نوبت",
      "پشتیبانی آنلاین",
    ],
    cta: "شروع پایه",
    popular: false,
  },
  {
    name: "حرفه‌ای",
    slug: "professional",
    price: 299000,
    period: "ماهانه",
    description: "مناسب برای کسب‌وکارهای در حال رشد",
    features: [
      "همه مزایای پایه",
      "مدیریت کارکنان",
      "سایر سرویس‌ها",
      "صفحه عمومی سفارشی",
      "داشبورد پیشرفته",
      "پشتیبانی اولویتی",
      "اندازه‌گیری پیشرفت",
    ],
    cta: "شروع حرفه‌ای",
    popular: true,
  },
  {
    name: "VIP",
    slug: "vip",
    price: 899000,
    period: "ماهانه",
    description: "مناسب برای کسب‌وکارهای بزرگ",
    features: [
      "همه مزایای حرفه‌ای",
      "مدیریت پیشرفته",
      "تیرهنده اختصاصی",
      "قیمت سفارشی",
      "ادغام API",
      "پشتیبانی ۲۴/۷",
      "دسترسی آزمایشی",
    ],
    cta: "تماس با ما",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            قیمت‌گذاری ساده و شفاف
          </h2>
          <p className="text-muted-foreground text-lg">
            برنامه‌ای مناسب برای هر مرحله رشد کسب‌وکارتان
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${plan.popular ? "ring-2 ring-primary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    پرفروش
                  </span>
                </div>
              )}
              <Card className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">
                      {plan.price === 0
                        ? "رایگان"
                        : plan.price.toLocaleString("fa-IR")}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-muted-foreground text-sm">
                        تومان / {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="flex-1 space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <a href="#">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}