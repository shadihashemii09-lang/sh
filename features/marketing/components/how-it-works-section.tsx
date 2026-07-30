"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "۱",
    title: "انتخاب کسب‌وکار",
    description: "از لیست کسب‌وکارهای فعال، مورد نظرتان را انتخاب کنید",
    icon: Shield,
  },
  {
    number: "۲",
    title: "انتخاب سرویس",
    description: "سرویس مورد نظر را از لیخدمات موجود انتخاب کنید",
    icon: Zap,
  },
  {
    number: "۳",
    title: "انتخاب تاریخ و ساعت",
    description: "تاریخ و ساعت مناسب با زمان‌بندی هوشمند انتخاب کنید",
    icon: Headphones,
  },
  {
    number: "۴",
    title: "تأیید و رزرو",
    description: "اطلاعات خود را تأیید نمایید و نوبت را رزرو کنید",
    icon: Play,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            نحوه کار بوکلی
          </h2>
          <p className="text-muted-foreground text-lg">
            چهار مرحله ساده برای رزرو نوبت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-l from-primary/30 to-transparent" />
              )}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <step.icon className="w-10 h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}