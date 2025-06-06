
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Terminal, Code, Image, Activity } from "lucide-react";

export const Conclusion = () => {
  const achievements = [
    { icon: Terminal, text: "Foundation model provider documentation exploration" },
    { icon: Code, text: "LLM access enablement in Amazon Bedrock" },
    { icon: Activity, text: "Text and chat playground experimentation" },
    { icon: Code, text: "Model parameter optimization and testing" },
    { icon: Image, text: "AI image generation and modification" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border-blue-200">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold mb-4">Lab Completion Summary</CardTitle>
            <Badge variant="outline" className="bg-white/80 px-4 py-2">
              Successfully Completed All Objectives
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This comprehensive hands-on lab provided essential foundational knowledge for working with 
                Amazon Bedrock's powerful AI capabilities. The experience covered the full spectrum of 
                Bedrock's console functionality, from model access management to advanced AI generation techniques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white/80 rounded-lg border border-gray-200">
                    <IconComponent className="h-8 w-8 text-blue-600 mb-3" />
                    <p className="text-sm text-muted-foreground leading-tight">
                      {achievement.text}
                    </p>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-white/80 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-lg mb-4 text-center">Key Outcomes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Technical Proficiency</h5>
                  <ul className="space-y-1">
                    <li>• Model access configuration and management</li>
                    <li>• Parameter tuning for optimal model performance</li>
                    <li>• Multi-model comparison and evaluation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Practical Skills</h5>
                  <ul className="space-y-1">
                    <li>• Interactive playground navigation</li>
                    <li>• AI image generation and editing workflows</li>
                    <li>• Best practices for prompt engineering</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-6 py-2">
                Ready for Advanced Amazon Bedrock Implementation
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
