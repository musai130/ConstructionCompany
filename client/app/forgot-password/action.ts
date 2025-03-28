"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function confirmReset(formData: FormData) {
  const origin = (await headers()).get("origin");
  const email = formData.get("email") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/reset-password`,
  });

  if (error) {
    console.log("error", error);
    return redirect("/forgot-password?message=Could not authenticate user");
  }

  return redirect(
    "/confirm?message=Password Reset link has been sent to your email address"
  );
}
