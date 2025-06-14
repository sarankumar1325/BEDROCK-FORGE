
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink, Heart, Code, Zap, BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl border border-white/20">
                <Code className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                AWS Bedrock Guide
              </h3>
            </div>
            <p className="text-blue-100/80 max-w-md mb-6 leading-relaxed">
              A comprehensive learning platform for mastering AWS Bedrock AI foundation models. 
              Built for developers, by developers.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20">
                <Github className="h-4 w-4 mr-2" />
                Source
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20">
                <ExternalLink className="h-4 w-4 mr-2" />
                AWS Console
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Documentation
            </h4>
            <ul className="space-y-3 text-blue-100/80">
              <li><a href="#" className="hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foundation Models</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Text Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Image Creation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prompt Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Safety</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Resources
            </h4>
            <ul className="space-y-3 text-blue-100/80">
              <li><a href="#" className="hover:text-white transition-colors">AWS Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Model Comparison</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-green-500/20 border-green-400/30 text-green-300">
              <Heart className="h-3 w-3 mr-1" />
              Open Source
            </Badge>
            <Badge variant="outline" className="bg-blue-500/20 border-blue-400/30 text-blue-300">
              SPL-CX-100 Lab
            </Badge>
          </div>

          <div className="text-center md:text-right">
            <p className="text-blue-100/60 text-sm">
              © 2024 AWS Bedrock Learning Guide. Built with React, TypeScript & AWS.
            </p>
            <p className="text-blue-100/40 text-xs mt-1">
              Educational project for learning AWS Bedrock AI capabilities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
