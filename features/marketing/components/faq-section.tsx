"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { QuestionMark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "نوبت من چگونه رزرو شود؟",
    answer:
      "با انتخاب کسب‌وکار مورد نظر، سرویس مطلب، تاریخ و ساعت مناسب، و ثبت اطلاعات شخصی، نوبت شما رزرو می‌شود.",
  },
  {
    question: "آیا امکان لغو نوبت وجود دارد؟",
    answer:
      "بله، شما می‌توانید نوبت خود را از پنل کاربری خود لغو کنید. با توجه به سیاست هر کسب‌وکار، ممکن است جریمه‌ای اعمال شود.",
  },
  {
    question: "چگونه می‌توانم رزرو خود را تغییر دهم؟",
    answer:
      "از بخش نوبت‌های من در پنل کاربری، می‌توانید تاریخ یا ساعت نوبت خود را تغییر دهید.",
  },
  {
    question: "آیا رزرو آنلاین امن است؟",
    answer:
      "بله، بوکلی از استانداردهای امنیتی پیشرفته برای حفاظت از اطلاعات کاربران استفاده می‌کند.",
  },
  {
    question: "چگونه می‌تهم برای کسب‌وکار خود ثبت‌نام کنم؟",
    answer:
      "کافی است در صفحه ثبت‌نام، نوع حساب کسب‌وکار را انتخاب و فرم ثبت‌نام را تکمیل کنید.",
  },
  {
    question: "پشتیبانی از چه زبانی است؟",
    answer:
      "تمام رابط کاربری بوکلی به صورت کامل فارسی و راست‌به‌چپ است.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            سوالات متداول
          </h2>
          <p className="text-muted-foreground text-lg">
            پاسخ سؤالات متداول شما
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <details className="group">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors list-none">
                      <span className="font-medium pr-8">
                        {faq.question}
                      </span>
                      <QuestionMark className="w-5 h-5 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-4 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}