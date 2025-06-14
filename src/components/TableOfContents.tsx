
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";

export const TableOfContents = () => {
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

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 sticky top-8">
      <CardHeader>
        <CardTitle className="text-lg text-white flex items-center gap-2">
          <Circle className="h-4 w-4 text-blue-400" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section) => (
          <div key={section.number} className="space-y-2">
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-300 transition-colors group">
              {section.completed ? (
                <CheckCircle className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" />
              ) : (
                <Circle className="h-4 w-4 text-blue-100/50" />
              )}
              <span className="font-medium text-white group-hover:text-blue-300 transition-colors">
                {section.number}. {section.title}
              </span>
              <Badge variant="outline" className="ml-auto text-xs bg-white/10 border-white/20 text-white">
                {section.subsections.length}
              </Badge>
            </div>
            <div className="ml-7 space-y-1">
              {section.subsections.map((subsection, index) => (
                <div 
                  key={index} 
                  className="text-sm text-blue-100/70 hover:text-blue-300 cursor-pointer transition-colors pl-2 border-l border-white/10 hover:border-blue-400/50"
                >
                  {subsection}
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
