import { signOut } from "@/app/login/action";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between space-x-4 px-4">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-4" href="/">
            <p className="font-bold">техно</p>
            <p className="font-bold">|</p>
            <p>строй</p>
          </Link>
          <nav className="pl-6 flex space-x-4">
            <Link href="/about">О нас</Link>
            <Link href="/contacts">Контакты</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          {user ? (
            <form action={signOut} className="flex items-center gap-2">
              <p>{user.email}</p>
              <Button>Выйти</Button>
            </form>
          ) : (
            <Button asChild>
              <Link href="/login">Войти</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
