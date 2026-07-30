import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const metadata = {
  title: "ثبت‌نام | بوکلی",
  description: "ایجاد حساب کاربری جدید در بوکلی",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">ثبت‌نام در بوکلی</h1>
          <p className="text-muted-foreground">
            برای شروع رزرو نوبت ثبت‌نام کنید
          </p>
        </div>
        <Card className="border-0 shadow-xl">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">نام و نام خانوادگی</Label>
                <Input id="name" type="text" placeholder="نام و نام خانوادگی" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input id="email" type="email" dir="ltr" placeholder="example@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">شماره موبایل</Label>
                <Input id="phone" dir="ltr" placeholder="۰۹۱۲۱۲۳۴۵۶۷" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">رمز عبور</Label>
                <Input id="password" type="password" dir="ltr" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأیید رمز عبور</Label>
                <Input id="confirmPassword" type="password" dir="ltr" />
              </div>
              <Button className="w-full">ثبت‌نام</Button>
            </form>
            <div className="mt-4 text-center text-sm">
              قبلاً ثبت‌نام کرده‌اید؟{" "}
              <Link href="/auth/signin" className="text-primary hover:underline">
                ورود
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}