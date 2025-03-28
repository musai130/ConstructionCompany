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
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-1">
            <Link href="/">
              <div>
                <div className="font-bold">техно |</div>
              </div>
            </Link>
            <Link href="/">
              <div>
                <div>строй</div>
              </div>
            </Link>
            <Link href="/profile" className="ml-9">
              Профиль
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          {user ? (
            <form action={signOut} className="flex items-center gap-2">
              <p>{user.email}</p>
              <Button>Sign Out</Button>
            </form>
          ) : (
            <Button asChild>
              <Link href="/login">Регистрация</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
