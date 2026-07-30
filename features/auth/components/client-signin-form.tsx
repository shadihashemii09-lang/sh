"use client";

import * as React from "react";
import { Link } from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/schemas";

type LoginFormData = z.infer<typeof loginSchema>;

export function ClientSigninForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function onSubmit(data: LoginFormData) {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/auth/callback/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.href = "/";
      } else {
        setError("ایمیل یا رمز عبور اشتباه است");
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
        <CardTitle className="text-2xl font-bold">ورود به حساب</CardTitle>
        <CardDescription>
          ایمیل و رمز عبور خود را وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              dir="ltr"
              {...register("email")}
              className={cn(errors.email && "border-destructive")}
            />
            {errors.email && (
              <span className="text-sm text-destructive">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">رمز عبور</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                dir="ltr"
                {...register("password")}
                className={cn(errors.password && "border-destructive")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "در حال ورود..." : "ورود"}
          </Button>
        </form>
        <Separator />
        <div className="flex items-center justify-between text-sm">
          <Link href="/auth/forgot-password" className="text-primary hover:underline">
            فراموشی رمز عبور
          </Link>
          <Link href="/auth/register" className="text-primary hover:underline">
            ثبت‌نام جدید
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}