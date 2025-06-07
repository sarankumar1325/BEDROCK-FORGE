
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Users, Target } from "lucide-react";

export const DocumentationHeader = () => {
  return (
    <div className="border-b bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            Complete Tutorial Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AWS Bedrock Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive step-by-step guide to mastering Amazon Bedrock's AI capabilities. 
            Perfect for beginners with hands-on examples and detailed explanations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-4">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">60</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-muted-foreground">Main Steps</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm text-muted-foreground">Sub-tasks</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-4">
              <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">Lab</div>
              <div className="text-sm text-muted-foreground">SPL-CX-100</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
