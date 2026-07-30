"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "۱۵۰٪",
    label: "رشد رزروها",
    description: "افزایش متوسط نوبت‌ها در کسب‌وکارها",
  },
  {
    icon: Users,
    value: "۴۵٪",
    label: "رکود کمتر",
    description: "کاهش پیگیری‌های تلفنی و رکود",
  },
  {
    icon: Clock,
    value: "۳۰ دقیقه",
    label: "زمان ذخیره شده",
    description: "میانگین زمان صرف شده برای رزرو",
  },
  {
    icon: CheckCircle,
    value: "۹۹.۹٪",
    label: "دقت زمان‌بندی",
    description: "دقت بالا در تخصیص نوبت‌ها",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border bg-card/50 backdrop-blur-sm"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}