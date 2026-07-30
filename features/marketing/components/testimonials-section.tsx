"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارا احمدی",
    role: "مدیر سالون زیبایی",
    content:
      "بوکلی باعث شد نوبت‌های ما سازمان‌دهی شوند و مشتریان راضی‌تری داشته باشیم. توصیه می‌کنم!",
    rating: 5,
  },
  {
    name: "دکتر مهدی رضایی",
    role: "متخصص پزشکی",
    content:
      "سادگی استفاده و مدیریت عالی نوبت‌ها. بوکلی بهترین انتخاب برای مطب من است.",
    rating: 5,
  },
  {
    name: "مریم کریمی",
    role: "مشتری وفادار",
    content:
      "از رزرو آنلاین نوبت که همیشه لذت می‌برم. بوکلی این کار را آسان کرده است.",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
            نظرات مشتریان
          </h2>
          <p className="text-muted-foreground text-lg">
            چه چیزی مشتریان درباره بوکلی می‌گویند
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}