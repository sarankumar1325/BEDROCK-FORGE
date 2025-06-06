
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle } from "lucide-react";

export const ObjectivesSection = () => {
  const objectives = [
    {
      title: "Discover Available AI Models",
      description: "Learn what AI models are available in AWS Bedrock and understand what each one can do",
      status: "Completed",
      category: "Getting Started",
      difficulty: "Easy",
      timeEstimate: "10 minutes",
      whatYoullDo: "Browse the model catalog and read about different AI providers like Amazon and Meta"
    },
    {
      title: "Get Access to AI Models", 
      description: "Understand how to request access to AI models and why this step is important",
      status: "Completed",
      category: "Setup",
      difficulty: "Easy",
      timeEstimate: "5 minutes",
      whatYoullDo: "Click through the access request process and wait for approval"
    },
    {
      title: "Try Your First AI Conversation",
      description: "Use the text playground to have your first conversation with an AI model",
      status: "Completed",
      category: "Hands-On Practice",
      difficulty: "Beginner",
      timeEstimate: "15 minutes",
      whatYoullDo: "Type questions and see how the AI responds, experiment with different prompts"
    },
    {
      title: "Understand AI Settings",
      description: "Learn what 'Temperature' and 'Top P' mean and how they change AI responses",
      status: "Completed",
      category: "Advanced Concepts",
      difficulty: "Intermediate",
      timeEstimate: "15 minutes",
      whatYoullDo: "Adjust settings and see how the same question gets different types of answers"
    },
    {
      title: "Compare Different AI Models",
      description: "See how different AI models answer the same question and learn their strengths",
      status: "Completed",
      category: "Comparison",
      difficulty: "Intermediate",
      timeEstimate: "10 minutes",
      whatYoullDo: "Use compare mode to ask both Amazon Titan and Meta Llama the same question"
    },
    {
      title: "Create AI-Generated Images",
      description: "Use AI to create, modify, and enhance images with simple text descriptions",
      status: "Completed",
      category: "Creative AI",
      difficulty: "Beginner",
      timeEstimate: "15 minutes",
      whatYoullDo: "Type descriptions like 'kitten astronaut' and watch AI create amazing images"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-50 text-green-700 border-green-200";
      case "Beginner": return "bg-blue-50 text-blue-700 border-blue-200";
      case "Intermediate": return "bg-orange-50 text-orange-700 border-orange-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Your Learning Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these 6 steps to master the basics of AWS Bedrock. Each step builds on the previous one, 
            so you'll gradually become more confident with AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {objective.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-xs font-medium text-green-600">{objective.status}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {objective.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {objective.description}
                </p>
                
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className={getDifficultyColor(objective.difficulty)}>
                    {objective.difficulty}
                  </Badge>
                  <Badge variant="outline" className="bg-gray-50">
                    ⏱️ {objective.timeEstimate}
                  </Badge>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <h5 className="font-medium text-sm text-blue-800 mb-1">What you'll do:</h5>
                  <p className="text-xs text-blue-700">{objective.whatYoullDo}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Total Learning Time</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">60 Minutes</p>
              <p className="text-sm text-muted-foreground">
                By the end of this tutorial, you'll have hands-on experience with all major AWS Bedrock features!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
