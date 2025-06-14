
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Award, Code, BookOpen, Github, ExternalLink, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-indigo-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Animated Badge */}
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-medium bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <BookOpen className="h-4 w-4 mr-2" />
            AWS Bedrock Learning Lab • SPL-CX-100
          </Badge>
        </div>
        
        {/* Main Headline */}
        <div className="animate-fade-in delay-200">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Master
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              AWS Bedrock
            </span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="animate-fade-in delay-400">
          <p className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            A comprehensive, hands-on journey through Amazon Bedrock's AI foundation models. 
            From text generation to image creation, learn production-ready AI implementation 
            with real AWS console experience.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="animate-fade-in delay-600 flex flex-wrap gap-4 justify-center mb-16">
          <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
            <Play className="h-5 w-5 mr-2" />
            Start Learning
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent backdrop-blur-md border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
            <Github className="h-5 w-5 mr-2" />
            View Source
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent backdrop-blur-md border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg">
            <ExternalLink className="h-5 w-5 mr-2" />
            AWS Console
          </Button>
        </div>
        
        {/* Feature Cards */}
        <div className="animate-fade-in delay-800 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <Terminal className="h-12 w-12 text-blue-300 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-white">Interactive Labs</h3>
              <p className="text-blue-100/80 mb-4">60-minute hands-on tutorials with real AWS console access</p>
              <Badge variant="outline" className="bg-blue-500/20 border-blue-300/30 text-blue-200">
                Lab SPL-CX-100
              </Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-purple-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-white">Beginner Friendly</h3>
              <p className="text-blue-100/80 mb-4">No prior AI experience required - start from the basics</p>
              <Badge variant="outline" className="bg-purple-500/20 border-purple-300/30 text-purple-200">
                Zero Prerequisites
              </Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <Code className="h-12 w-12 text-indigo-300 mx-auto mb-4 group-hover:-translate-y-1 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-white">Production Ready</h3>
              <p className="text-blue-100/80 mb-4">Learn real-world AI implementation patterns and best practices</p>
              <Badge variant="outline" className="bg-indigo-500/20 border-indigo-300/30 text-indigo-200">
                Enterprise Grade
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
