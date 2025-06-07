
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Brain, Rocket } from "lucide-react";

export const DocumentationHeader = () => {
  return (
    <div className="border-b bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8 animate-fade-in">
          <Badge variant="outline" className="mb-4 hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-3 w-3 mr-1" />
            AI Innovation Project
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AWS Bedrock AI Foundation Models
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the power of generative AI through Amazon Bedrock's cutting-edge foundation models. 
            Experience hands-on implementation and real-world applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-4">
              <Brain className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-2xl font-bold">Claude</div>
              <div className="text-sm text-muted-foreground">Advanced AI</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-4">
              <Zap className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold">Titan</div>
              <div className="text-sm text-muted-foreground">Text & Image</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-4">
              <Rocket className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:-translate-y-1 transition-transform duration-300" />
              <div className="text-2xl font-bold">Llama</div>
              <div className="text-sm text-muted-foreground">Open Source</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-4">
              <Sparkles className="h-8 w-8 text-orange-600 mx-auto mb-2 group-hover:animate-pulse transition-all duration-300" />
              <div className="text-2xl font-bold">DALL-E</div>
              <div className="text-sm text-muted-foreground">Creative AI</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
