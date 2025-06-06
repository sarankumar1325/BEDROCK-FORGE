
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Award, Code, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10" />
      
      {/* Background image - using your uploaded screenshot */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
          alt="AWS Bedrock Console Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm">
          <BookOpen className="h-4 w-4 mr-2" />
          Beginner's Guide to AWS Bedrock
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          Learn AWS Bedrock
          <span className="block text-4xl md:text-5xl mt-2">Step by Step</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          A complete beginner's journey through Amazon Bedrock's AI capabilities. 
          Follow along as we explore foundation models, interactive playgrounds, and AI generation 
          in an easy-to-understand, step-by-step format.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Terminal className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lab SPL-CX-100</h3>
              <p className="text-sm text-muted-foreground">60-minute hands-on tutorial</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beginner Friendly</h3>
              <p className="text-sm text-muted-foreground">No prior AI experience needed</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-indigo-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Practical Learning</h3>
              <p className="text-sm text-muted-foreground">Real AWS console experience</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
