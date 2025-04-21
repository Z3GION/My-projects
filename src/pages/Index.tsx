
// Stunning frontend with Hero, Sidebar, Features

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import { AppSidebar } from "@/components/app-sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex bg-gradient-to-tr from-white via-[#e5deff] to-[#d3e4fd]">
        <AppSidebar />
        <main className="flex-1 flex flex-col items-center w-full min-h-screen overflow-x-hidden">
          <SidebarTrigger />
          <HeroSection />
          <FeatureCards />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
