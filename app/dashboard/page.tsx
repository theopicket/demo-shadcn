import { AppSidebar } from "~/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "~/components/ui/sidebar";

export default async function Page() {
  const { cookies } = await import("next/headers");
  const defaultOpen = cookies().get("sidebar:state")?.value === "true";
  return (
    <SidebarLayout defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-1 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed">
          <SidebarTrigger />
        </div>
      </main>
    </SidebarLayout>
  );
}
