import { ReactNode } from "react";
import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import ProgressProvider from "@/components/providers/ProgressProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import { CookiesProvider } from "next-client-cookies/server";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider>
      <QueryProvider>
        <CookiesProvider>
          <div className="w-full min-h-screen bg-bg">
            <Header />
            <div className="w-full flex justify-center gap-5 pt-25">
              <Sidebar />
              {children}
            </div>
          </div>
        </CookiesProvider>
      </QueryProvider>
    </ProgressProvider>
  );
}
