import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { emailLogin, signup } from "./action";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();
  const id = await searchParams;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Вход</CardTitle>
          <CardDescription>
            Введите свой адрес электронной почты ниже, чтобы войти в свою
            учетную запись
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form id="login-form" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Адрес почты</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Пароль</Label>
              </div>
              <Input
                minLength={6}
                name="password"
                id="password"
                type="password"
                required
              />
            </div>
            {id.message && (
              <div className="text-sm font-medium text-destructive">
                {id.message}
              </div>
            )}
            <Button formAction={emailLogin} className="w-full">
              Войти
            </Button>
          </form>
          <div className="text-center text-sm">
            Нет аккаунта?{" "}
            <button formAction={signup} form="login-form" className="underline">
              Регистрация
            </button>
          </div>
          <div className="text-center text-sm">
            <a href="/forgot-password" className="underline">
              Забыли пароль?
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
