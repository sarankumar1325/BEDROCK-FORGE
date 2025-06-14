
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Brain, Rocket } from "lucide-react";

export const DocumentationHeader = () => {
  return (
    <div className="border-t border-white/10 bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Foundation Models Deep Dive
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            AWS Bedrock AI Foundation Models
          </h1>
          <p className="text-xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed">
            Explore the complete ecosystem of generative AI through Amazon Bedrock's cutting-edge foundation models. 
            Master real-world implementation with hands-on labs and production-ready examples.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Brain className="h-10 w-10 text-blue-400 mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-xl font-bold text-white mb-1">Claude 3</div>
              <div className="text-sm text-blue-100/70">Advanced Reasoning</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Zap className="h-10 w-10 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl font-bold text-white mb-1">Titan</div>
              <div className="text-sm text-blue-100/70">Text & Image Gen</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Rocket className="h-10 w-10 text-purple-400 mx-auto mb-3 group-hover:-translate-y-1 transition-transform duration-300" />
              <div className="text-xl font-bold text-white mb-1">Llama 2</div>
              <div className="text-sm text-blue-100/70">Open Source Power</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-10 w-10 text-orange-400 mx-auto mb-3 group-hover:animate-pulse transition-all duration-300" />
              <div className="text-xl font-bold text-white mb-1">DALL-E 3</div>
              <div className="text-sm text-blue-100/70">Creative Vision</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
