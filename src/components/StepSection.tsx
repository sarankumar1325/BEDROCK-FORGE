import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface StepSectionProps {
  stepNumber: string;
  title: string;
  description: string;
}

export const StepSection = ({ stepNumber, title, description }: StepSectionProps) => {
  const getStepContent = (step: string) => {
    switch (step) {
      case "1":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">1.1 Prerequisites</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-medium mb-2">What you'll need:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• An active AWS account</li>
                  <li>• Basic understanding of web interfaces</li>
                  <li>• 60 minutes of dedicated time</li>
                  <li>• Curiosity about AI technology</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">1.2 AWS Account Setup</h4>
              <p className="text-muted-foreground">
                If you don't have an AWS account yet, you'll need to create one. AWS Bedrock requires 
                proper authentication and may have regional availability restrictions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">1.3 Accessing AWS Bedrock</h4>
              <ol className="space-y-2 text-sm">
                <li>1. Log into your AWS Management Console</li>
                <li>2. Search for "Bedrock" in the services search bar</li>
                <li>3. Click on "Amazon Bedrock" to open the service</li>
                <li>4. Ensure you're in a supported region (us-east-1 recommended)</li>
              </ol>
            </div>
          </div>
        );

      case "2":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">2.1 Understanding the Model Catalog</h4>
              <p className="text-muted-foreground">
                AWS Bedrock provides access to foundation models from multiple AI providers. 
                Each model has different strengths and use cases.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h5 className="font-medium mb-2">Amazon Providers</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Titan Text Models</li>
                    <li>• Titan Image Generator</li>
                    <li>• Titan Embeddings</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h5 className="font-medium mb-2">Third-Party Providers</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Meta Llama Models</li>
                    <li>• Anthropic Claude</li>
                    <li>• Stability AI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">2.2 Model Access Requests</h4>
              <img 
                src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
                alt="AWS Bedrock Model Access Interface"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: AWS Bedrock model catalog showing available foundation models
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Most models require explicit access approval. Follow these steps:
                </p>
                <ol className="space-y-1 text-sm ml-4">
                  <li>1. Navigate to "Model access" in the left sidebar</li>
                  <li>2. Click "Request model access" for required models</li>
                  <li>3. Fill out the access request form</li>
                  <li>4. Wait for approval (usually instant for basic models)</li>
                </ol>
              </div>
            </div>
          </div>
        );

      case "3":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">3.1 Your First Text Generation</h4>
              <img 
                src="/lovable-uploads/0ff4e7e8-269b-4f75-8d88-4828e19c9fbd.png" 
                alt="AWS Bedrock Text Playground Interface"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: Text playground with Titan Text G1 Express model configuration
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">3.2 Understanding Parameters</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Temperature</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Controls randomness in responses
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Low (0.1): More predictable, focused</li>
                      <li>• High (0.9): More creative, varied</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Top P</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Controls word selection diversity
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Low (0.1): Conservative word choices</li>
                      <li>• High (0.9): More diverse vocabulary</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">3.3 Try This Example</h4>
              <div className="bg-gray-50 border rounded-lg p-4">
                <h5 className="font-medium mb-2">Sample Prompt:</h5>
                <code className="text-sm bg-white px-2 py-1 rounded border">
                  "What are the advantages of learning Python programming?"
                </code>
                <p className="text-xs text-muted-foreground mt-2">
                  Try this prompt with different temperature settings to see how responses vary.
                </p>
              </div>
            </div>
          </div>
        );

      case "4":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">4.1 Compare Mode Setup</h4>
              <img 
                src="/lovable-uploads/a752a7a5-3697-438e-860a-01ddb59ce9fb.png" 
                alt="AWS Bedrock Compare Mode Interface"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: Compare mode showing Llama 3 8B Instruct vs Titan Text G1 Express
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">4.2 Model Comparison Exercise</h4>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-medium mb-2">Try this comparison:</h5>
                <div className="space-y-2 text-sm">
                  <p><strong>Prompt:</strong> "What is the square root of infinity?"</p>
                  <p><strong>Models to compare:</strong> Amazon Titan vs Meta Llama</p>
                  <p><strong>Look for:</strong> How each model handles mathematical concepts</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">4.3 What to Observe</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h6 className="font-medium">Response Style</h6>
                  <ul className="text-sm space-y-1">
                    <li>• Length and detail level</li>
                    <li>• Tone and personality</li>
                    <li>• Structure and formatting</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h6 className="font-medium">Accuracy & Logic</h6>
                  <ul className="text-sm space-y-1">
                    <li>• Factual correctness</li>
                    <li>• Reasoning approach</li>
                    <li>• Handling of uncertainty</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "5":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">5.1 Creating Your First AI Image</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <img 
                    src="/lovable-uploads/84d081b4-8920-4aae-9b86-3c582b71ddc4.png" 
                    alt="Original AI generated kitten astronaut images"
                    className="w-full rounded-lg border shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Result: Original "kitten astronaut in space" generation
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/d7cd7f7a-d2f5-4ef0-991f-f6eda4d626e6.png" 
                    alt="Variation images of kitten astronaut"
                    className="w-full rounded-lg border shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Result: Variations generated from reference image
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">5.2 Step-by-Step Image Generation</h4>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs">1</Badge>
                  <div>
                    <p className="font-medium">Navigate to Image Playground</p>
                    <p className="text-sm text-muted-foreground">
                      Find the Image playground in Bedrock's left sidebar
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs">2</Badge>
                  <div>
                    <p className="font-medium">Select Titan Image Generator</p>
                    <p className="text-sm text-muted-foreground">
                      Choose "Titan Image Generator G1 v2" as your model
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs">3</Badge>
                  <div>
                    <p className="font-medium">Write Your Prompt</p>
                    <p className="text-sm text-muted-foreground">
                      Try: "kitten astronaut in space" or create your own creative prompt
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Badge className="w-6 h-6 rounded-full flex items-center justify-center text-xs">4</Badge>
                  <div>
                    <p className="font-medium">Generate and Experiment</p>
                    <p className="text-sm text-muted-foreground">
                      Click generate and try variations or object removal features
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">5.3 Advanced Image Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Image Variations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Upload an existing image and generate similar variations with different styles or elements.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Object Removal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Use masking tools to remove unwanted objects from generated or uploaded images.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Style Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experiment with different artistic styles, lighting, and composition parameters.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Content coming soon...</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
            {stepNumber}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Badge variant="outline" className="bg-green-50">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg">{description}</p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              ~12 minutes
            </div>
            <Badge variant="secondary">Beginner Friendly</Badge>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <Card>
        <CardContent className="p-8">
          {getStepContent(stepNumber)}
        </CardContent>
      </Card>
    </div>
  );
};
