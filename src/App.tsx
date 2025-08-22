import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import JoinDonor from "./pages/JoinDonor";
import Emergency from "./pages/Emergency";
import BloodGroupSelection from "./pages/BloodGroupSelection";
import DonorList from "./pages/DonorList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/join-donor" element={<JoinDonor />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/district/:district" element={<BloodGroupSelection />} />
              <Route path="/donors/:district/:bloodGroup" element={<DonorList />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
