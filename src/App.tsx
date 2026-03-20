import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DesignSystem from "./pages/DesignSystem";
import Consultoria from "./pages/Consultoria";
import SegurosComerciais from "./pages/SegurosComerciais";
import WorkersCompensation from "./pages/WorkersCompensation";
import SobreNos from "./pages/SobreNos";
import GeneralLiability from "./pages/GeneralLiability";
import SeguroPessoal from "./pages/SeguroPessoal";
import SeguroResidencial from "./pages/SeguroResidencial";
import Blog from "./pages/Blog";
import PostagemBlog from "./pages/PostagemBlog";
import Parceiros from "./pages/Parceiros";
import SeguroAutomovel from "./pages/SeguroAutomovel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/seguros-comerciais" element={<SegurosComerciais />} />
          <Route path="/workers-compensation" element={<WorkersCompensation />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/general-liability" element={<GeneralLiability />} />
          <Route path="/seguros-pessoais" element={<SeguroPessoal />} />
          <Route path="/seguro-residencial" element={<SeguroResidencial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/artigo" element={<PostagemBlog />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/seguro-automovel" element={<SeguroAutomovel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
