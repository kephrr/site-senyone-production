import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoModalProvider } from "@/contexts/VideoModalContext";
import Index from "./pages/Index";
import QuiSommesNous from "./pages/QuiSommesNous";
import QuiAidonsNous from "./pages/interface/QuiAidonsNous";
import NosSolutions from "./pages/NosSolutions";
import Blog from "./pages/Blog";
import Contact from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import NosRessources from "./pages/NosRessources";
import QANJuridique from "./pages/QANJuridique";
import QANAchatsLogistique from "./pages/QANAchatsLogistique";
import QANCommerciale from "./pages/QANCommerciale";
import QANInformatique from "./pages/QANInformatique";
import QANRessourcesHumaines from "./pages/QANRessourcesHumaines";
import QANOperationProduction from "./pages/QANOperationProduction";
import QANMarketing from "./pages/QANMarketing";
import QANFinanciere from "./pages/QANFinanciere";
import RoiDiagPage from "./pages/RoiDiagPage";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import MentionsLegales from "./pages/MentionsLegales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <VideoModalProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/juridique" element={<QANJuridique />} />
          <Route path="/informatique" element={<QANInformatique />} />
          <Route path="/ressources-humaines" element={<QANRessourcesHumaines />} />
          <Route path="/operations-production" element={<QANOperationProduction />} />
          <Route path="/marketing" element={<QANMarketing />} />
          <Route path="/financiere" element={<QANFinanciere />} />
          <Route path="/commerciale" element={<QANCommerciale />} />
          <Route path="/achats-logistique" element={<QANAchatsLogistique />} />
          <Route path="/Nos-ressources" element={<NosRessources />} />
          <Route path="/Nos-solutions" element={<NosSolutions />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/fast-diagnostic" element={<RoiDiagPage />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/Confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/Mentions-legales" element={<MentionsLegales />} />
          
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </VideoModalProvider>
  </QueryClientProvider>
);

export default App;
