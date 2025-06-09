import { ReactNode } from "react";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import QueryProvider from "@/components/providers/QueryProvider";
import { CookiesProvider } from "next-client-cookies/server";
import LoadingProvider from "@/components/providers/LoadingProvider";

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <QueryProvider>
            <CookiesProvider>
                <div className="w-full min-h-screen bg-bg">
                    <LoadingProvider />
                    <Header />
                    <div className="w-full flex justify-center gap-5 pt-25">
                        <Sidebar />
                        {children}
                    </div>
                </div>
            </CookiesProvider>
        </QueryProvider>
    );
}
