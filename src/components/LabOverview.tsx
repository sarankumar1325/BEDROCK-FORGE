
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code } from "lucide-react";

export const LabOverview = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Background using your uploaded image */}
      <div className="absolute inset-0 opacity-3">
        <img 
          src="/lovable-uploads/a752a7a5-3697-438e-860a-01ddb59ce9fb.png" 
          alt="AWS Bedrock Console Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Lab Overview</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional development journey through Amazon Bedrock's console environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">Professional Context</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="bg-blue-50">AnyCompany Intern</Badge>
                <Badge variant="outline" className="bg-purple-50">AI/ML Focus</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Accepted an intern position at AnyCompany, working on projects that leverage 
                Large Language Models (LLMs) through Amazon Bedrock. This lab provided essential 
                foundation knowledge for complex AI implementation tasks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gained hands-on experience in a safe, guided environment to build confidence 
                with Amazon Bedrock's functionality and available resources.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Code className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl">Technical Scope</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Foundation model provider documentation exploration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">LLM access enablement and configuration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Interactive playground experimentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Parameter tuning and model comparison</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">AI image generation and modification</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
