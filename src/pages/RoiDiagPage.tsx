import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
// import QuestionComponent from "@/components/ui/roi-calculator";
import Question from "@/components/QuestionComponent";

const RoiDiagPage = () => {
  return (
    <div className="min-h-screen max-w-screen relative overflow-hidden bg-[#efefef]">
      {/*<Navbar />
      <div className="relative">
        <HeroSection 
        title="Calculateur de ROI" 
        description="Veuillez répondre aux questions afin d'avoir votre diagnostique gratuit" 
        showButtons={false}
        />
      </div>
      <QuestionComponent />
      */}
      <Question />
      <Footer />
    </div>
  );
};

export default RoiDiagPage;