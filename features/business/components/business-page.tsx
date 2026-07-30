import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, Star, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { BusinessData } from "@/types";
import { cn } from "@/lib/utils";

interface BusinessPageProps {
  params: { slug: string };
  business: BusinessData;
}

export function BusinessPage({ params, business }: BusinessPageProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        {business.banner && (
          <img
            src={business.banner}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {business.name}
            </h1>
            <p className="text-white/80 max-w-lg">
              {business.description}
            </p>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href={`/booking/${business.slug}`}>
              <Calendar className="w-4 h-4 ml-2" />
              رزرو نوبت
            </Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card>
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">درباره ما</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {business.description}
                </p>
              </Card>
            </Card>

            {/* Services */}
            <Card>
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">خدمات</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">سرویس تست</h3>
                      <span className="text-primary font-bold">۵۰۰,۰۰۰ تومان</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      توضیح سرویس با مدت زمان ۶۰ دقیقه
                    </p>
                    <Badge variant="secondary">۶۰ دقیقه</Badge>
                  </Card>
                </div>
              </Card>
            </Card>

            {/* Employees */}
            <Card>
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">تیم کاری</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">کارمند تست</h3>
                      <p className="text-sm text-muted-foreground">
                        <Phone className="w-3 h-3 inline ml-1" />
                        ۰۹۱۲۱۲۳۴۵۶۷
                      </p>
                    </div>
                  </Card>
                </div>
              </Card>
            </Card>

            {/* Reviews */}
            <Card>
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">نظرات مشتریان</h2>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-muted-foreground mr-2">۴.۹ (۱۲۸ نظر)</span>
                </div>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                        م
                      </div>
                      <span className="font-medium">مریم کریمی</span>
                      <Badge variant="outline" className="text-xs">
                        مشتری تأیید شده
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      خدمات عالی و در حد انتظار بود. حتماً دوباره استفاده می‌کنم.
                    </p>
                  </Card>
                </div>
              </Card>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Working Hours */}
            <Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  ساعات کاری
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>شنبه</span>
                    <span className="text-muted-foreground">۹:۰۰ - ۲۱:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>یکشنبه</span>
                    <span className="text-muted-foreground">۹:۰۰ - ۲۱:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>دوشنبه</span>
                    <span className="text-muted-foreground">۹:۰۰ - ۲۱:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>سه‌شنبه</span>
                    <span className="text-muted-foreground">۹:۰۰ - ۲۱:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>چهارشنبه</span>
                    <span className="text-muted-foreground">۹:۰۰ - ۲۱:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>پنجشنبه</span>
                    <span className="text-muted-foreground">۹:۰۰ - ۲۱:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>جمعه</span>
                    <span className="text-muted-foreground">تعطیل</span>
                  </div>
                </div>
              </Card>
            </Card>

            {/* Location */}
            <Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  آدرس
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {business.address}، {business.city}، {business.province}
                </p>
                {business.website && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={business.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 ml-2" />
                      وب‌سایت
                    </a>
                  </Button>
                )}
              </Card>
            </Card>

            {/* Contact */}
            <Card>
              <Card className="p-6">
                <h3 className="font-semibold mb-4">تماس</h3>
                <div className="space-y-2 text-sm">
                  {business.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href={`tel:${business.phone}`} className="hover:underline">
                        {business.phone}
                      </a>
                    </div>
                  )}
                  {business.instagram && (
                    <div className="flex items-center gap-2">
                      <Instagram className="w-4 h-4" />
                      <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {business.instagram}
                      </a>
                    </div>
                  )}
                  {business.telegram && (
                    <div className="flex items-center gap-2">
                      <span>📱</span>
                      <a href={business.telegram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {business.telegram}
                      </a>
                    </div>
                  )}
                </div>
              </Card>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}