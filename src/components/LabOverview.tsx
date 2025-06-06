
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Users, Target } from "lucide-react";

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
          <h2 className="text-4xl font-bold mb-6">What You'll Learn</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This tutorial takes you through a real-world scenario where you're learning AWS Bedrock 
            as a new intern at a tech company
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">The Scenario</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="bg-blue-50">New Intern</Badge>
                <Badge variant="outline" className="bg-purple-50">AnyCompany</Badge>
                <Badge variant="outline" className="bg-green-50">AI Team</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Your Role:</strong> You've just started as an intern at AnyCompany, 
                a tech company that's exploring AI solutions for their products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Your Mission:</strong> Your manager wants you to get familiar with 
                Amazon Bedrock before working on real AI projects. This lab is your training ground!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Why This Matters:</strong> Understanding Bedrock will help you contribute 
                to the company's AI initiatives and make you a valuable team member.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl">Learning Path</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <p className="text-muted-foreground">Start by exploring what AI models are available</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <p className="text-muted-foreground">Learn how to get access to these AI models</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <p className="text-muted-foreground">Try out text generation with simple prompts</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <p className="text-muted-foreground">Experiment with different AI models and compare them</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</div>
                  <p className="text-muted-foreground">Create amazing images using AI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-green-600" />
              <CardTitle className="text-2xl">Who This Tutorial Is For</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-700">Perfect for beginners who:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Have never used AWS Bedrock before</li>
                  <li>• Want to understand AI without technical jargon</li>
                  <li>• Learn better with hands-on examples</li>
                  <li>• Are curious about what AI can actually do</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-700">What you'll need:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• A computer with internet access</li>
                  <li>• An AWS account (we'll show you how)</li>
                  <li>• About 60 minutes of your time</li>
                  <li>• Curiosity and willingness to experiment!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
