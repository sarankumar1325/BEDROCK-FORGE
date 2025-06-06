
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Image, Code, Briefcase } from "lucide-react";

export const TasksShowcase = () => {
  return (
    <section className="py-20 px-6 relative">
      {/* Subtle background image using your upload */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
          alt="AWS Bedrock Console Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
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
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
                  alt="AWS Bedrock Model Catalog"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80" />
                <CardHeader className="absolute inset-0 flex flex-row items-center text-white">
                  <Briefcase className="h-8 w-8 mr-3" />
                  <CardTitle className="text-2xl">Model Access & Exploration</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-6 pt-6">
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
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
                  alt="Amazon Bedrock Text Playground Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-indigo-600/80" />
                <CardHeader className="absolute inset-0 flex flex-row items-center text-white">
                  <Terminal className="h-8 w-8 mr-3" />
                  <CardTitle className="text-2xl">Text Playground Experimentation</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-6 pt-6">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
                    alt="AWS Bedrock Text Playground showing Titan Text G1 configuration"
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Live screenshot: Amazon Bedrock Text Playground with Titan Text G1 - Express model
                  </p>
                </div>
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
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/a752a7a5-3697-438e-860a-01ddb59ce9fb.png" 
                  alt="Amazon Bedrock Chat Playground Compare Mode"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-blue-600/80" />
                <CardHeader className="absolute inset-0 flex flex-row items-center text-white">
                  <Code className="h-8 w-8 mr-3" />
                  <CardTitle className="text-2xl">Chat Playground & Model Comparison</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-6 pt-6">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/a752a7a5-3697-438e-860a-01ddb59ce9fb.png" 
                    alt="AWS Bedrock Compare Mode showing Llama 3 8B vs Titan Text G1"
                    className="w-full rounded-lg border shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Live screenshot: Compare mode testing Llama 3 8B Instruct vs Titan Text G1 - Express
                  </p>
                </div>
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
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="/lovable-uploads/84d081b4-8920-4aae-9b86-3c582b71ddc4.png" 
                  alt="Amazon Bedrock Image Generation Playground"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-teal-600/80" />
                <CardHeader className="absolute inset-0 flex flex-row items-center text-white">
                  <Image className="h-8 w-8 mr-3" />
                  <CardTitle className="text-2xl">AI Image Generation Mastery</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img 
                      src="/lovable-uploads/84d081b4-8920-4aae-9b86-3c582b71ddc4.png" 
                      alt="Original kitten astronaut images generated by Titan Image Generator"
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Original generation: "kitten astronaut in space"
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/d7cd7f7a-d2f5-4ef0-991f-f6eda4d626e6.png" 
                      alt="Variation images generated from reference kitten astronaut"
                      className="w-full rounded-lg border shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">
                      Variations generated from reference image
                    </p>
                  </div>
                </div>
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
                    Demonstrated creative AI image generation capabilities with actual results shown above
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
