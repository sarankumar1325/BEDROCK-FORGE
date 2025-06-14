
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Shield, Target, Users, Rocket } from "lucide-react";

export const ProjectHighlights = () => {
  const highlights = [
    {
      icon: Brain,
      title: "7 AI Model Types",
      description: "Claude, Titan, Llama, DALL-E and more",
      metric: "4 Providers",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Interactive Playgrounds", 
      description: "Text generation, image creation, model comparison",
      metric: "3 Modes",
      color: "purple"
    },
    {
      icon: Target,
      title: "Prompt Engineering",
      description: "Zero-shot, few-shot, chain-of-thought techniques",
      metric: "6 Methods",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "AI Safety & Guardrails",
      description: "Content filtering, PII protection, responsible AI",
      metric: "5 Features",
      color: "green"
    },
    {
      icon: Users,
      title: "Production Ready",
      description: "Enterprise-grade implementation patterns",
      metric: "Best Practices",
      color: "orange"
    },
    {
      icon: Rocket,
      title: "Real AWS Experience",
      description: "Live console access with guided tutorials",
      metric: "60 Minutes",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-300",
      indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 text-indigo-300",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-300",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-300",
      red: "from-red-500/20 to-red-600/20 border-red-500/30 text-red-300"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
            Project Highlights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Everything You Need to Master AI
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Comprehensive coverage of AWS Bedrock's capabilities with hands-on learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(highlight.color)} backdrop-blur-lg hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <highlight.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">
                    {highlight.metric}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg group-hover:text-opacity-90 transition-colors">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
