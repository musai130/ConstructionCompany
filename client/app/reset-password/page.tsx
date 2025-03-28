import { createClient } from "@/utils/supabase/server";
import { EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: {
    message: string;
    type: EmailOtpType | null;
    token_hash: string | null;
  };
}) {
  const { type, token_hash, message } = searchParams;
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  const resetPassword = async (formData: FormData) => {
    "use server";

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const supabase = await createClient();

    if (password !== confirmPassword) {
      return redirect("/reset-password?message=Passwords do not match");
    }

    if (type && token_hash) {
      const { error } = await supabase.auth.verifyOtp({
        type,
        token_hash,
      });

      if (error) {
        return redirect(
          `/reset-password?message=Unable to reset password. Link expired!`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      return redirect(
        `/reset-password?message=Unable to reset password. Please try again!`
      );
    }

    redirect(
      `/login?message=Password has been reset successfully. Please sign in.`
    );
  };

  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Сброс пароля</CardTitle>
          <CardDescription>
            Введите новый пароль для вашей учетной записи
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4" action={resetPassword}>
            <div className="grid gap-2">
              <Label htmlFor="password">Новый пароль</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            {message && (
              <div className="text-sm font-medium text-destructive">
                {message}
              </div>
            )}

            <Button type="submit" className="w-full">
              Сбросить пароль
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Вернуться на{" "}
            <Link href="/" className="underline">
              главную страницу
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
