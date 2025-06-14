
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StepSection } from "@/components/StepSection";
import { Hero } from "@/components/Hero";
import { ProjectHighlights } from "@/components/ProjectHighlights";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <AppSidebar />
        <SidebarInset className="flex-1 flex flex-col min-h-screen">
          {/* Hero Section */}
          <Hero />

          {/* Project Highlights */}
          <ProjectHighlights />

          {/* Documentation Header with Sidebar Toggle */}
          <div className="border-t border-white/10 bg-black/10 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-12 md:py-16">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                <div className="md:order-1 w-full md:w-auto">
                  <SidebarTrigger className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 border rounded-sm p-2 md:hidden block">
                    <Menu className="h-4 w-4" />
                  </SidebarTrigger>
                </div>
                <div className="text-center flex-1">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    BedrockForge Documentation
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed">
                    Master the complete ecosystem of generative AI through Amazon Bedrock's cutting-edge foundation models. 
                    Build production-ready AI applications with hands-on tutorials and real-world examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Documentation Content */}
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-6 md:py-8">
            <div className="space-y-12">
              <StepSection 
                stepNumber="1" 
                title="Getting Started with AWS Bedrock"
                description="Learn the basics and set up your environment"
              />
              
              <Separator className="my-8" />
              
              <StepSection 
                stepNumber="2" 
                title="Exploring Foundation Models"
                description="Discover available AI models and their capabilities"
              />
              
              <Separator className="my-8" />
              
              <StepSection 
                stepNumber="3" 
                title="Text Generation Playground"
                description="Create your first AI-generated content"
              />
              
              <Separator className="my-8" />
              
              <StepSection 
                stepNumber="4" 
                title="Advanced Model Comparison"
                description="Compare different AI models side by side"
              />
              
              <Separator className="my-8" />
              
              <StepSection 
                stepNumber="5" 
                title="AI Image Generation"
                description="Create stunning images with artificial intelligence"
              />
              
              <Separator className="my-8" />
              
              <StepSection 
                stepNumber="6" 
                title="Prompt Engineering Mastery"
                description="Master different prompting techniques for better AI responses"
              />
              
              <Separator className="my-8" />
              
              <StepSection 
                stepNumber="7" 
                title="AI Safety and Guardrails"
                description="Implement responsible AI practices with content filtering and safety measures"
              />
            </div>
          </div>
          
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
