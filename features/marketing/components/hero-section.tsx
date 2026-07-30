"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, Sparkles, Users, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.08),transparent_50%)]" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-5xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          پلتفرم هوشمند رزرو آنلاین نوبت
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          نوبت آنلاین
          <span className="block bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
            رزرو کنید
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          با بوکلی، رزرو نوبت برای سالون زیبایی، مطب پزشکی و خدمات مختلف به
          روش آسان و سریع انجام شود. تجربه‌ای مدرن و حرفه‌ای برای کسب‌وکار و
          مشتریان شما.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto px-8" asChild>
            <a href="#categories">شروع رزرو</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
            <ArrowLeftRight className="w-4 h-4 ml-2" />
            برای کسب‌وکار
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16"
        >
          {[
            { icon: Users, value: "۵۰۰۰+", label: "کسب‌وکار فعال" },
            { icon: CalendarCheck, value: "۱۰۰,۰۰۰+", label: "نوبت رزرو شده" },
            { icon: Sparkles, value: "۹۹%", label: "رضایت مشتریان" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold">{stat.value}</span>
              </div>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}