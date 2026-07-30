"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Telegram, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                ب
              </div>
              <span className="font-bold text-lg">بوکلی</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              پلتفرم حرفه‌ای رزرو آنلاین نوبت برای
              امکانات تجاری، سلامت، زیبایی و خدمات مختلف
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">محصول</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  قیمت‌گذاری
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">دسته‌بندی‌ها</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/category/beauty-salon" className="hover:text-primary transition-colors">
                  سالون زیبایی
                </Link>
              </li>
              <li>
                <Link href="/category/doctor-clinic" className="hover:text-primary transition-colors">
                  پزشک و مطب
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">تماس با ما</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@bookly.ir" className="hover:text-primary transition-colors">
                  info@bookly.ir
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+982112345678" className="hover:text-primary transition-colors">
                  ۰۲۱-۱۲۳۴۵۶۷۸
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>تهران، ایران</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} بوکلی. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">
              شرایط استفاده
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              حریم خصوصی
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}