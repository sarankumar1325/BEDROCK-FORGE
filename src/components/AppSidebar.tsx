
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Code, Menu } from "lucide-react";
import React from "react";

export const AppSidebar = () => {
  const { state } = useSidebar();
  const sections = [
    { 
      number: "1", 
      title: "Getting Started", 
      completed: true,
      subsections: ["1.1 Prerequisites", "1.2 AWS Account Setup", "1.3 Bedrock Access"]
    },
    { 
      number: "2", 
      title: "Foundation Models", 
      completed: true,
      subsections: ["2.1 Model Catalog", "2.2 Provider Overview", "2.3 Access Requests"]
    },
    { 
      number: "3", 
      title: "Text Playground", 
      completed: true,
      subsections: ["3.1 Single Prompt Mode", "3.2 Parameter Tuning", "3.3 Response Analysis"]
    },
    { 
      number: "4", 
      title: "Model Comparison", 
      completed: true,
      subsections: ["4.1 Compare Mode", "4.2 Titan vs Llama", "4.3 Performance Metrics"]
    },
    { 
      number: "5", 
      title: "Image Generation", 
      completed: true,
      subsections: ["5.1 Text to Image", "5.2 Image Variations", "5.3 Object Removal"]
    },
    { 
      number: "6", 
      title: "Prompt Engineering", 
      completed: true,
      subsections: ["6.1 Zero Shot", "6.2 One Shot", "6.3 Few Shot", "6.4 Chain of Thought", "6.5 Context Learning", "6.6 Prompt Interrogation"]
    },
    { 
      number: "7", 
      title: "AI Safety & Guardrails", 
      completed: true,
      subsections: ["7.1 Custom Guardrails", "7.2 Content Filtering", "7.3 Testing & Validation", "7.4 PII Protection", "7.5 Monitoring Traces"]
    }
  ];

  // Add a clear, prominent toggle on top.
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20 group-data-[collapsible=icon]:hidden">
            <Code className="h-5 w-5 text-blue-300" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h3 className="text-lg font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              BedrockForge
            </h3>
            <p className="text-xs text-blue-100/60">Documentation</p>
          </div>
        </div>
        {/* Always visible toggle */}
        <SidebarTrigger className="ml-auto p-2 rounded bg-white/10 text-white hover:bg-white/20 border border-white/20 md:ml-0">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Table of Contents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => (
                <div key={section.number} className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton className="w-full text-white hover:bg-white/10">
                      <div className="flex items-center gap-3 w-full">
                        {section.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                        ) : (
                          <Circle className="h-4 w-4 text-blue-100/50 shrink-0" />
                        )}
                        <span className="flex-1 text-left group-data-[collapsible=icon]:hidden">
                          {section.number}. {section.title}
                        </span>
                        <Badge variant="outline" className="ml-auto text-xs bg-white/10 border-white/20 text-white group-data-[collapsible=icon]:hidden">
                          {section.subsections.length}
                        </Badge>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <div className="ml-7 space-y-1 group-data-[collapsible=icon]:hidden">
                    {section.subsections.map((subsection, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton size="sm" className="text-blue-100/70 hover:text-blue-300 pl-2 border-l border-white/10 hover:border-blue-400/50">
                          {subsection}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Remove SidebarFooter as per minimal requirements */}
    </Sidebar>
  );
};

