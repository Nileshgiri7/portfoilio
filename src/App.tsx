
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ThemeProvider from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

const queryClient = new QueryClient();

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
