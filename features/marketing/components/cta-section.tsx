"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          آماده شروع هستید؟
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          همین امروز نوبت خود را رزرو کنید یا برای کسب‌وکارتان
          بوکلی را شروع کنید
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto px-8" asChild>
            <a href="#">شروع رزرو</a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
            <ArrowLeftRight className="w-4 h-4 ml-2" />
            برای کسب‌وکار
          </Button>
        </div>
      </motion.div>
    </section>
  );
}