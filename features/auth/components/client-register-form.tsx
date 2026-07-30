"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { registerSchema } from "@/schemas";

type RegisterFormData = z.infer<typeof registerSchema>;

export function ClientRegisterForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "CUSTOMER",
      phone: "",
      agreeToTerms: false,
    },
  });

  async function onSubmit(data: RegisterFormData) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.href = "/auth/verify";
      } else {
        const err = await response.json();
        setError(err.message || "خطا در ثبت‌نام");
      }
    } catch {
      setError("خطا در اتصال به سرور");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">ثبت‌نام</CardTitle>
        <CardDescription>
          ایجاد حساب کاربری جدید
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">نام و نام خانوادگی</Label>
            <Input id="name" {...register("name")} className={cn(errors.name && "border-destructive")} />
            {errors.name && <span className="text-sm text-destructive">{errors.name.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input id="email" type="email" dir="ltr" {...register("email")} className={cn(errors.email && "border-destructive")} />
            {errors.email && <span className="text-sm text-destructive">{errors.email.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">شماره موبایل</Label>
            <Input id="phone" dir="ltr" {...register("phone")} className={cn(errors.phone && "border-destructive")} />
            {errors.phone && <span className="text-sm text-destructive">{errors.phone.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>
            <Input id="password" type="password" dir="ltr" {...register("password")} className={cn(errors.password && "border-destructive")} />
            {errors.password && <span className="text-sm text-destructive">{errors.password.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">تأیید رمز عبور</Label>
            <Input id="confirmPassword" type="password" dir="ltr" {...register("confirmPassword")} className={cn(errors.confirmPassword && "border-destructive")} />
            {errors.confirmPassword && <span className="text-sm text-destructive">{errors.confirmPassword.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">نوع حساب</Label>
            <select id="role" {...register("role")} className="w-full p-2 rounded-md border bg-background">
              <option value="CUSTOMER">مشتری</option>
              <option value="BUSINESS_OWNER">صاحب کسب‌وکار</option>
              <option value="EMPLOYEE">کارمند</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input id="agreeToTerms" type="checkbox" {...register("agreeToTerms")} />
            <Label htmlFor="agreeToTerms" className="text-sm">
              با <Link href="/terms" className="text-primary hover:underline">شرایط استفاده</Link> موافقت دارم
            </Label>
          </div>
          {errors.agreeToTerms && (
            <span className="text-sm text-destructive">{errors.agreeToTerms.message}</span>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link href="/auth/signin" className="text-primary hover:underline">
            ورود
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}