"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Category } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CategoriesSectionProps {
  categories?: Category[];
}

const defaultCategories = [
  {
    slug: "beauty-salon",
    name: "سالون زیبایی",
    icon: "💄",
    description: "رزرو نوبت برای سرویس‌های سالون و زیبایی",
    image: "/images/categories/beauty.jpg",
  },
  {
    slug: "doctor-clinic",
    name: "پزشک و مطب",
    icon: "🩺",
    description: "رزرو نوبت برای ویزیت پزشکی و کلینیک",
    image: "/images/categories/doctor.jpg",
  },
];

export function CategoriesSection({
  categories,
}: CategoriesSectionProps) {
  const items = categories || defaultCategories;

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
            دسته‌بندی‌ها
          </h2>
          <p className="text-muted-foreground text-lg">
            انتخاب دسته‌بندی مورد نظر و یافتن بهترین ارائه‌دهنده
            خدمات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[16/10] relative bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                {category.icon}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <Button
                  variant="outline"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a href={`/category/${category.slug}`}>
                    مشاهده خدمات
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}