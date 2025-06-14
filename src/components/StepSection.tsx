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

      case "6":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.1 Zero Shot Prompting</h4>
              <p className="text-muted-foreground">
                Zero shot prompting involves asking the AI a direct question without providing any examples. 
                This is the most straightforward approach where you rely on the model's pre-trained knowledge.
              </p>
              <img 
                src="/lovable-uploads/b409ddda-c56f-4046-9600-d09cf31933ca.png" 
                alt="Zero shot prompting example showing a simple question about candles"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Example: "What is a candle?" - A direct question with no prior context or examples.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.2 One Shot Prompting</h4>
              <p className="text-muted-foreground">
                One shot prompting provides a single example to guide the AI's response format and style.
                This helps the model understand the expected output structure.
              </p>
              <img 
                src="/lovable-uploads/b1e1b3b5-8f7e-4107-b463-25bfe57d6e87.png" 
                alt="One shot prompting showing one example before the main question"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Example: Shows one Q&A pair ("What is a car" - "A car is not a dog") before asking about a candle.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.3 Few Shot Prompting</h4>
              <p className="text-muted-foreground">
                Few shot prompting provides multiple examples to establish a clear pattern for the AI to follow.
                This technique is excellent for consistent formatting and response style.
              </p>
              <img 
                src="/lovable-uploads/1839b9b0-b3bb-4112-a53f-fe4b8924d85f.png" 
                alt="Few shot prompting with multiple examples before the main question"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Example: Multiple Q&A pairs establish a pattern before asking the target question.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.4 Chain of Thought Prompting</h4>
              <p className="text-muted-foreground">
                Chain of thought prompting encourages the AI to show its reasoning process step-by-step.
                This is particularly useful for complex problems requiring logical reasoning.
              </p>
              <img 
                src="/lovable-uploads/16edcc72-16ad-4929-b55d-23bd6e5dda5d.png" 
                alt="Chain of thought prompting showing step-by-step reasoning for an age calculation problem"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Example: "Answer step-by-step" - The AI breaks down a math problem into clear logical steps.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.5 Context Learning Prompting</h4>
              <p className="text-muted-foreground">
                Context learning involves providing relevant background information or domain-specific context
                to help the AI generate more accurate and relevant responses.
              </p>
              <img 
                src="/lovable-uploads/e4b017ca-f1a1-40c7-a2f3-5ca7b7adcd1a.png" 
                alt="Context learning example with business scenario about cloud storage optimization"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Example: Providing business context about S3 cloud hosting before asking for cost optimization strategies.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.6 Prompt Interrogation</h4>
              <p className="text-muted-foreground">
                Prompt interrogation involves asking the AI to elaborate, explain, or provide more detailed
                information about a topic, encouraging comprehensive responses.
              </p>
              <img 
                src="/lovable-uploads/5d5fae36-1e79-43fa-aa7f-5c4c350cb125.png" 
                alt="Prompt interrogation showing detailed explanation and case study response"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Example: The AI provides detailed explanations with real-world case studies and specific metrics.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">6.7 Best Practices Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">When to Use Each Technique</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• <strong>Zero Shot:</strong> Simple, direct questions</li>
                      <li>• <strong>One/Few Shot:</strong> Consistent formatting needed</li>
                      <li>• <strong>Chain of Thought:</strong> Complex reasoning tasks</li>
                      <li>• <strong>Context Learning:</strong> Domain-specific queries</li>
                      <li>• <strong>Interrogation:</strong> Detailed explanations needed</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Tips for Better Prompts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Be specific and clear in your requests</li>
                      <li>• Provide context when domain knowledge is needed</li>
                      <li>• Use examples to show desired output format</li>
                      <li>• Ask for step-by-step reasoning for complex tasks</li>
                      <li>• Experiment with different approaches</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      case "7":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">7.1 Creating Custom Guardrails</h4>
              <p className="text-muted-foreground">
                AWS Bedrock Guardrails help you implement responsible AI practices by filtering harmful content, 
                blocking unwanted topics, and protecting personally identifiable information (PII).
              </p>
              <img 
                src="/lovable-uploads/a660d9a1-8bd4-4c3e-b363-1825262048bb.png" 
                alt="AWS Bedrock Guardrails creation interface showing configuration steps"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: Creating a new guardrail with step-by-step configuration process
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  To create a custom guardrail:
                </p>
                <ol className="space-y-1 text-sm ml-4">
                  <li>1. Navigate to "Guardrails" in the Bedrock sidebar</li>
                  <li>2. Click "Create guardrail" and provide details</li>
                  <li>3. Configure content filters for different categories</li>
                  <li>4. Set up denied topics and word filters</li>
                  <li>5. Enable PII detection and redaction</li>
                  <li>6. Review and create your guardrail</li>
                </ol>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">7.2 Content Filter Configuration</h4>
              <img 
                src="/lovable-uploads/543c1b22-ba9b-4f66-8f7d-608878b2e9c7.png" 
                alt="Guardrail testing interface with content filtering options"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: Testing guardrails with harmful content detection and filtering
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Harmful Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Hate:</strong> Discriminatory content</li>
                      <li>• <strong>Insults:</strong> Offensive language</li>
                      <li>• <strong>Sexual:</strong> Inappropriate content</li>
                      <li>• <strong>Violence:</strong> Harmful instructions</li>
                      <li>• <strong>Misconduct:</strong> Illegal activities</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Filter Strength</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>Low:</strong> Basic filtering</li>
                      <li>• <strong>Medium:</strong> Balanced protection</li>
                      <li>• <strong>High:</strong> Strict filtering</li>
                      <li>• <strong>None:</strong> No filtering</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">7.3 Guardrail Testing and Validation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <img 
                    src="/lovable-uploads/55ee4ef5-05ac-4316-a474-210d03727a24.png" 
                    alt="Guardrail working draft with content filters configuration"
                    className="w-full rounded-lg border shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Working draft: Configuring content filters with high strength settings
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/7c4cee53-8011-483c-b7e5-f7c034f5088b.png" 
                    alt="Testing guardrail with blocked response for harmful content"
                    className="w-full rounded-lg border shadow-sm"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Result: Guardrail successfully blocking inappropriate medical advice
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Test your guardrails with various prompts to ensure they block harmful content while allowing 
                legitimate use cases. The system will show "Intervened" status when content is blocked.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">7.4 PII Protection and Content Security</h4>
              <img 
                src="/lovable-uploads/f2c5dee2-c68d-4511-a721-e04bfc04d7b3.png" 
                alt="Comprehensive content filtering dashboard showing all filter categories"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: Complete guardrail configuration with all content filters enabled
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-medium mb-2">PII Detection Categories:</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <ul className="space-y-1">
                    <li>• Social Security Numbers</li>
                    <li>• Credit Card Numbers</li>
                    <li>• Email Addresses</li>
                    <li>• Phone Numbers</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Addresses</li>
                    <li>• Names</li>
                    <li>• Driver's License Numbers</li>
                    <li>• Passport Numbers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">7.5 Monitoring and Traces</h4>
              <img 
                src="/lovable-uploads/54e4b7c2-0c33-4f3a-bcdc-e34123f43359.png" 
                alt="Guardrail trace monitoring showing detailed filtering results"
                className="w-full rounded-lg border shadow-sm"
              />
              <p className="text-sm text-muted-foreground">
                Screenshot: Detailed trace view showing how guardrails evaluate and filter content
              </p>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The trace functionality provides detailed insights into how your guardrails are performing:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h6 className="font-medium">Trace Information</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Detection confidence levels</li>
                      <li>• Specific categories triggered</li>
                      <li>• Filter strength applied</li>
                      <li>• Action taken (Block/Allow)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h6 className="font-medium">Monitoring Benefits</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Fine-tune filter sensitivity</li>
                      <li>• Identify false positives</li>
                      <li>• Track safety performance</li>
                      <li>• Compliance reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">7.6 Best Practices for AI Safety</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-green-800">Recommended Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-green-700">
                      <li>• Start with high filter strength and adjust down</li>
                      <li>• Test guardrails thoroughly before production</li>
                      <li>• Monitor traces regularly for optimization</li>
                      <li>• Enable PII detection for sensitive applications</li>
                      <li>• Document your safety requirements</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-orange-800">Common Pitfalls</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2 text-orange-700">
                      <li>• Over-restrictive filters blocking valid content</li>
                      <li>• Not testing edge cases adequately</li>
                      <li>• Ignoring trace data for improvements</li>
                      <li>• Inconsistent guardrail application</li>
                      <li>• Not updating filters based on new threats</li>
                    </ul>
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
