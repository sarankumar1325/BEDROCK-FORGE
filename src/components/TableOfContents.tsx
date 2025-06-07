
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
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sections.map((section) => (
          <div key={section.number} className="space-y-2">
            <div className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
              {section.completed ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="font-medium">
                {section.number}. {section.title}
              </span>
              <Badge variant="outline" className="ml-auto text-xs">
                {section.subsections.length}
              </Badge>
            </div>
            <div className="ml-7 space-y-1">
              {section.subsections.map((subsection, index) => (
                <div 
                  key={index} 
                  className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors"
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
