
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export const ObjectivesSection = () => {
  const objectives = [
    {
      title: "Foundation Model Documentation",
      description: "Access and explore Amazon Bedrock documentation regarding foundation model providers",
      status: "Completed",
      category: "Research"
    },
    {
      title: "LLM Access Management",
      description: "Enable access to Large Language Models in Amazon Bedrock console",
      status: "Completed",
      category: "Configuration"
    },
    {
      title: "Interactive Playgrounds",
      description: "Access text and chat playgrounds, experiment with response generation using basic prompts",
      status: "Completed",
      category: "Experimentation"
    },
    {
      title: "Parameter Optimization",
      description: "Experiment with changing model parameters to observe effects on model output",
      status: "Completed",
      category: "Fine-tuning"
    },
    {
      title: "AI Image Generation",
      description: "Access image playground to create and modify AI generated images",
      status: "Completed",
      category: "Creative AI"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Learning Objectives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill development across Amazon Bedrock's core capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {objective.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium text-green-600">{objective.status}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {objective.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
