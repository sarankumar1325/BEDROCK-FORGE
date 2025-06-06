
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight, Lightbulb, AlertCircle } from "lucide-react";

export const StepByStepGuide = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How to Follow This Tutorial</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This guide shows you exactly how to navigate through each section and get the most out of your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-xl">Before You Start</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <p className="font-medium text-sm">Set up your AWS account</p>
                    <p className="text-xs text-muted-foreground">You'll need this to access the Bedrock console</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <p className="font-medium text-sm">Open two browser tabs</p>
                    <p className="text-xs text-muted-foreground">One for this tutorial, one for the AWS console</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <p className="font-medium text-sm">Take your time</p>
                    <p className="text-xs text-muted-foreground">There's no rush - experiment and explore!</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-green-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ArrowRight className="h-8 w-8 text-green-600" />
                <CardTitle className="text-xl">How to Navigate</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium text-sm">Read each section carefully</p>
                    <p className="text-xs text-muted-foreground">Understand the concept before trying it</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium text-sm">Look at the screenshots</p>
                    <p className="text-xs text-muted-foreground">These show you exactly what to expect</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium text-sm">Try it yourself</p>
                    <p className="text-xs text-muted-foreground">Follow along in your own AWS console</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium text-sm">Experiment freely</p>
                    <p className="text-xs text-muted-foreground">Try different inputs and see what happens</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                <CardTitle className="text-lg text-yellow-800">Pro Tips</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-yellow-700">• Don't worry about making mistakes - you can't break anything!</p>
              <p className="text-sm text-yellow-700">• Take screenshots of your own results to remember what you learned</p>
              <p className="text-sm text-yellow-700">• Try asking the AI models fun questions to see their personalities</p>
              <p className="text-sm text-yellow-700">• Save interesting prompts that work well for future reference</p>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <CardTitle className="text-lg text-red-800">Things to Remember</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-red-700">• Some models may require approval before you can use them</p>
              <p className="text-sm text-red-700">• AI responses can vary each time, even with the same prompt</p>
              <p className="text-sm text-red-700">• Image generation takes a few seconds - be patient!</p>
              <p className="text-sm text-red-700">• AWS has usage costs, but this tutorial uses minimal resources</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
