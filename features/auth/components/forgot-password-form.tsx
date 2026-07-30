import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { forgotPasswordSchema } from "@/schemas";

const resetSchema = z.object({
  token: z.string(),
  password: z.string().min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
  confirmPassword: z.string().min(8, "تأیید رمز عبور نامعتبر است"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور و تأیید رمز عبور یکسان نیستند",
  path: ["confirmPassword"],
});

export function ForgotPasswordForm() {
  const [step, setStep] = React.useState<"request" | "reset">("request");
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  async function onRequest(data: { email: string }) {
    setIsLoading(true);
    await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setStep("reset");
    setIsLoading(false);
  }

  async function onReset(data: { token: string; password: string }) {
    setIsLoading(true);
    await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setIsLoading(false);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        بازیابی رمز عبور
      </h1>
      {step === "request" ? (
        <form onSubmit={handleSubmit(onRequest)} className="space-y-4">
          <div className="space-y-2">
            <label>ایمیل</label>
            <Input type="email" dir="ltr" {...register("email")} />
          </div>
          <Button className="w-full">ارسال لینک بازیابی</Button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onReset)} className="space-y-4">
          <div className="space-y-2">
            <label>توکن بازیابی</label>
            <Input {...register("token")} />
          </div>
          <div className="space-y-2">
            <label>رمز عبور جدید</label>
            <Input type="password" dir="ltr" {...register("password")} />
            {errors.password && (
              <span className="text-sm text-destructive">{errors.password.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <label>تأیید رمز عبور</label>
            <Input type="password" dir="ltr" {...register("confirmPassword")} />
            {errors.confirmPassword && (
              <span className="text-sm text-destructive">{errors.confirmPassword.message}</span>
            )}
          </div>
          <Button className="w-full">تغییر رمز عبور</Button>
        </form>
      )}
      <div className="mt-4 text-center text-sm">
        <Link href="/auth/signin" className="text-primary hover:underline">
          بازگشت به صفحه ورود
        </Link>
      </div>
    </div>
  );
}