import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Vagas from "./pages/Vagas";
import VagaDetalhes from "./pages/VagaDetalhes";
import Candidatar from "./pages/Candidatar";
import Sobre from "./pages/Sobre";
import RecrutadorLogin from "./pages/RecrutadorLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/vaga/:id" element={<VagaDetalhes />} />
          <Route path="/candidatar/:id" element={<Candidatar />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/recrutador/login" element={<RecrutadorLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
