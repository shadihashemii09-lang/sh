import type { Metadata } from "next";
import { config } from "@/lib/config";
import ClientSigninForm from "@/features/auth/components/client-signin-form";

export const metadata: Metadata = {
  title: "ورود | بوکلی",
  description: "ورود به حساب کاربری بوکلی",
};

export default function SigninPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">خوش آمدید</h1>
          <p className="text-muted-foreground">
            وارد حساب کاربری خود شوید
          </p>
        </div>
        <ClientSigninForm />
      </div>
    </main>
  );
}