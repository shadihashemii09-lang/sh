"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  CreditCard,
  Bell,
  Smartphone,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Clock,
    title: "رزرو آنلاین سریع",
    description:
      "رزرو نوبت در کمترین زمان ممکن با رابط کاربری ساده و کارآمد",
    color: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "امنیت حرفه‌ای",
    description:
      "حفاظت از اطلاعات کاربران با استانداردهای امنیتی پیشرفته",
    color: "text-green-500",
  },
  {
    icon: CreditCard,
    title: "پرداخت آسان",
    description:
      "امکان پرداخت آنلاین با پشتیبانی از درگاه‌های معتبر ایرانی",
    color: "text-purple-500",
  },
  {
    icon: Bell,
    title: "اعلان‌های هوشمند",
    description:
      "یادآوری‌های خودکار برای نوبت‌ها و اعلان‌های فوری",
    color: "text-orange-500",
  },
  {
    icon: Smartphone,
    title: "همکاری با موبایل",
    description:
      "سازگاری کامل با دستگاه‌های موبایل برای تجربه‌ای بهتر",
    color: "text-blue-500",
  },
  {
    icon: BarChart3,
    title: "گزارش‌گیری دقیق",
    description:
      "نمایش آمار و گزارش‌های کامل از فعالیت‌های کسب‌وکار",
    color: "text-red-500",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            چرا بوکلی را انتخاب کنید؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            با بوکلی، کسب‌وکار خود را به سطح بعدی برسانید و تجربه‌ای
            متفاوت برای مشتریانتان فراهم کنید
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                )}
              >
                <feature.icon className={cn("w-6 h-6", feature.color)} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>جزئیات بیشتر</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}