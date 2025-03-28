import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { confirmReset } from "./action";

export default async function ForgotPassword({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();
  const id = await searchParams;
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Восстановление пароля</CardTitle>
          <CardDescription>
            Введите свой адрес электронной почты, чтобы получить ссылку для
            сброса пароля
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form className="grid gap-4">
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
            {id?.message && (
              <div className="text-sm font-medium text-destructive">
                {id?.message === "success"
                  ? "Письмо отправлено! Проверьте вашу почту"
                  : "Ошибка отправки письма"}
              </div>
            )}
            <Button formAction={confirmReset} className="w-full">
              Отправить ссылку
            </Button>
          </form>
          <div className="text-center text-sm">
            Вернуться к{" "}
            <a href="/login" className="underline">
              входу
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
