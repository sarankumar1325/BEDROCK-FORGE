
import { Hero } from "@/components/Hero";
import { LabOverview } from "@/components/LabOverview";
import { StepByStepGuide } from "@/components/StepByStepGuide";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { TasksShowcase } from "@/components/TasksShowcase";
import { TechnicalHighlights } from "@/components/TechnicalHighlights";
import { Conclusion } from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <LabOverview />
      <StepByStepGuide />
      <ObjectivesSection />
      <TasksShowcase />
      <TechnicalHighlights />
      <Conclusion />
    </div>
  );
};

export default Index;
