
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.2),transparent_50%)]" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-0" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Badge */}
        <Badge variant="outline" className="mb-8 bg-white/10 backdrop-blur-md border-white/20 text-white hover:scale-105 transition-transform duration-200 animate-fade-in">
          <Sparkles className="h-3 w-3 mr-1" />
          AWS Bedrock Foundation Models Guide
        </Badge>

        {/* Main heading with animated gradient and full visibility */}
        <h1
          className="
            text-5xl md:text-7xl font-bold mb-8 
            animate-gradient-blur bg-gradient-to-r from-white via-blue-400 to-purple-400
            bg-[length:200%_200%] bg-clip-text text-transparent relative
            overflow-visible whitespace-pre-line
            leading-tight md:leading-[1.125] lg:leading-[1.09] 
            pb-3 md:pb-4
          "
          style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          BedrockForge
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100/90 mb-4 animate-fade-in delay-400">
          Master AWS Bedrock Foundation Models
        </p>
        
        <p className="text-lg text-blue-200/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-600">
          Your comprehensive guide to implementing generative AI with Amazon Bedrock. 
          From text generation to image creation, safety guardrails to prompt engineering - 
          build production-ready AI applications with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-800">
          <Button size="lg" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/20 hover:scale-105 transition-all duration-300 group">
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md hover:scale-105 transition-all duration-300">
            View Documentation
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in delay-1000">
          <div className="glass glass-hover rounded-xl p-6 group">
            <Brain className="h-8 w-8 text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Foundation Models</h3>
            <p className="text-blue-100/70 text-sm">Explore Claude, Titan, Llama and more</p>
          </div>
          
          <div className="glass glass-hover rounded-xl p-6 group">
            <Zap className="h-8 w-8 text-purple-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Hands-on Tutorials</h3>
            <p className="text-blue-100/70 text-sm">Step-by-step practical guides</p>
          </div>
          
          <div className="glass glass-hover rounded-xl p-6 group">
            <Sparkles className="h-8 w-8 text-green-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Production Ready</h3>
            <p className="text-blue-100/70 text-sm">Safety, monitoring and best practices</p>
          </div>
        </div>
      </div>
    </section>
  );
};
