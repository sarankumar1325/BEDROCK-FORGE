
import { DocumentationHeader } from "@/components/DocumentationHeader";
import { TableOfContents } from "@/components/TableOfContents";
import { StepSection } from "@/components/StepSection";
import { Hero } from "@/components/Hero";
import { ProjectHighlights } from "@/components/ProjectHighlights";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <Hero />
      
      {/* Project Highlights */}
      <ProjectHighlights />
      
      {/* Documentation Header */}
      <DocumentationHeader />
      
      {/* Main Documentation Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </div>
          
          {/* Main Documentation Content */}
          <div className="lg:col-span-3 space-y-12">
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
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
