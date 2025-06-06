
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Code, Image, Activity } from "lucide-react";

export const TechnicalHighlights = () => {
  const highlights = [
    {
      icon: Terminal,
      title: "Model Parameter Mastery",
      description: "Deep understanding of Temperature and Top P parameter effects on model behavior",
      technologies: ["Temperature Control", "Top P Sampling", "Response Length"],
      color: "blue",
      image: "/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png"
    },
    {
      icon: Code,
      title: "Multi-Model Comparison",
      description: "Comparative analysis between Amazon Titan and Meta Llama foundation models",
      technologies: ["Titan Text G1", "Llama 3 8B", "Metrics Analysis"],
      color: "purple",
      image: "/lovable-uploads/a752a7a5-3697-438e-860a-01ddb59ce9fb.png"
    },
    {
      icon: Image,
      title: "AI Image Generation",
      description: "Advanced image creation, variation, and modification using AI models",
      technologies: ["Titan Image Gen", "Object Removal", "Variations"],
      color: "green",
      image: "/lovable-uploads/84d081b4-8920-4aae-9b86-3c582b71ddc4.png"
    },
    {
      icon: Activity,
      title: "Playground Proficiency",
      description: "Expert-level usage of text, chat, and image playground environments",
      technologies: ["Text Playground", "Chat Mode", "Compare Mode"],
      color: "indigo",
      image: "/lovable-uploads/d7cd7f7a-d2f5-4ef0-991f-f6eda4d626e6.png"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 border-blue-200 bg-blue-50",
      purple: "text-purple-600 border-purple-200 bg-purple-50",
      green: "text-green-600 border-green-200 bg-green-50",
      indigo: "text-indigo-600 border-indigo-200 bg-indigo-50"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 px-6 bg-white/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Technical Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key technical competencies developed through hands-on Amazon Bedrock experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 left-4 p-3 rounded-lg ${getColorClasses(highlight.color)}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {highlight.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
