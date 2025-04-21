import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { Home, Star, Rocket, Settings, Github } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Star,
  },
  {
    title: "Features",
    url: "#features",
    icon: Rocket,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// Separate "GitHub Sync" for emphasis
const githubItem = {
  title: "GitHub Sync",
  url: "#",
  icon: Github,
};

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold tracking-wide bg-gradient-to-r from-[#b1abd4] via-[#f2fce2]/60 to-[#d3e4fd]/70 px-4 py-2 rounded-md mb-2 shadow">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* Use Link for internal navigation */}
                    {item.url.startsWith("/") ? (
                      <Link to={item.url} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-primary/10 transition-colors font-inter">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </Link>
                    ) : (
                      <a href={item.url} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-primary/10 transition-colors font-inter">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {/* Add the highlighted GitHub Sync item */}
              <SidebarMenuItem key={githubItem.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={githubItem.url}
                    className="flex items-center gap-3 py-2 px-3 rounded bg-gradient-to-r from-[#23272f] to-[#474d57] text-white hover:bg-gradient-to-tr hover:from-[#333745] hover:to-[#6e59a5] shadow-lg transition-all border border-[#23272f]/40 font-inter"
                  >
                    <githubItem.icon className="w-5 h-5" />
                    <span className="font-semibold">GitHub Sync</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
