import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";


export default async function AppLayout({ children }: Readonly<{ children: React.ReactNode } >) {
    const supabase = await createClient();

    const {data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect("/login");
    }

  return (
    <main className="min-h-screen font-sans antialiased">
        <div className="sm:ml-14 p-4">
            {children}
        </div>
    </main>
  )
}