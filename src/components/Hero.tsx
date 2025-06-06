
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Award, Code } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm">
          AWS Hands-On Lab Completion
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Amazon Bedrock
          <span className="block text-4xl md:text-5xl mt-2">Console Mastery</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          A comprehensive showcase of hands-on experience with Amazon Bedrock's foundation models, 
          interactive playgrounds, and AI generation capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Terminal className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">SPL-CX-100-AIDV01</h3>
              <p className="text-sm text-muted-foreground">Lab Version 1.0.0</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">60 Minutes</h3>
              <p className="text-sm text-muted-foreground">Lab Duration</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-indigo-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Foundation Models</h3>
              <p className="text-sm text-muted-foreground">AI & LLM Expertise</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
