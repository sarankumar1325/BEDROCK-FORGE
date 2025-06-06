
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Image, Code, Briefcase } from "lucide-react";

export const TasksShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Task Implementation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed breakdown of hands-on tasks completed during the Amazon Bedrock lab
          </p>
        </div>
        
        <Tabs defaultValue="task1" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="task1" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Task 1
            </TabsTrigger>
            <TabsTrigger value="task2" className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              Task 2
            </TabsTrigger>
            <TabsTrigger value="task3" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Task 3
            </TabsTrigger>
            <TabsTrigger value="task4" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Task 4
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="task1">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                  Model Access & Exploration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Task 1.1: Model Catalog Exploration</h4>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2">Amazon Provider</Badge>
                      <Badge variant="outline" className="mr-2">Meta Provider</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Explored available foundation models from Amazon and Meta, understanding capabilities 
                      and specifications of each model in the catalog.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Task 1.2: Access Request Process</h4>
                    <div className="space-y-2">
                      <Badge variant="outline" className="mr-2 bg-green-50">Titan Text G1 - Express</Badge>
                      <Badge variant="outline" className="mr-2 bg-green-50">Llama 3 8B Instruct</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Successfully requested and obtained access to specific foundation models 
                      required for lab completion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="task2">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Terminal className="h-8 w-8 text-purple-600" />
                  Text Playground Experimentation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Model Configuration</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Single Prompt Mode</Badge>
                      <Badge variant="outline">Titan Text G1 - Express</Badge>
                      <Badge variant="outline">On-demand Inference</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Configured the text playground environment with Amazon's Titan Text model 
                      for standalone text generation experiments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Parameter Testing</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Temperature: 0-1</Badge>
                      <Badge variant="outline">Top P: 0.1-0.9</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Experimented with temperature and Top P parameters to understand their 
                      impact on response creativity and predictability.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Sample Prompt Used:</h5>
                  <code className="text-sm text-gray-700">"What are advantages to learning Python?"</code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="task3">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Code className="h-8 w-8 text-indigo-600" />
                  Chat Playground & Model Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Conversational AI Testing</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Chat Mode</Badge>
                      <Badge variant="outline">Llama 3 8B Instruct</Badge>
                      <Badge variant="outline">Context Retention</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Engaged in multi-turn conversations with Meta's Llama model, testing 
                      context retention and conversational capabilities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Comparative Analysis</h4>
                    <div className="space-y-2">
                      <Badge variant="outline">Compare Mode</Badge>
                      <Badge variant="outline">Titan vs Llama</Badge>
                      <Badge variant="outline">Metrics Analysis</Badge>
                    </div>
                    <p className="text-muted-foreground mt-3">
                      Utilized compare mode to evaluate response quality, speed, and accuracy 
                      between different foundation models.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Mathematical Query Tested:</h5>
                  <code className="text-sm text-gray-700">"What is the square root of infinity?"</code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Demonstrated different model approaches to complex mathematical concepts
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="task4">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Image className="h-8 w-8 text-green-600" />
                  AI Image Generation Mastery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Image Creation</h4>
                    <Badge variant="outline" className="mb-3">Titan Image Generator G1 v2</Badge>
                    <p className="text-muted-foreground text-sm">
                      Generated original AI images using descriptive prompts in the image playground.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Variation Generation</h4>
                    <Badge variant="outline" className="mb-3">Reference-based Creation</Badge>
                    <p className="text-muted-foreground text-sm">
                      Created image variations using existing images as reference points for new generations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Object Modification</h4>
                    <Badge variant="outline" className="mb-3">Selective Editing</Badge>
                    <p className="text-muted-foreground text-sm">
                      Utilized masking tools to selectively remove or modify specific elements within generated images.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Creative Prompt Example:</h5>
                  <code className="text-sm text-gray-700">"kitten astronaut in space"</code>
                  <p className="text-xs text-muted-foreground mt-2">
                    Demonstrated creative AI image generation capabilities
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
