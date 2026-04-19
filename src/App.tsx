import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { Steps } from "./components/Steps/Steps";
import { Form } from "./components/Form/Form";
import { Footer } from "./components/Footer/Footer";
import { useExperiment } from "./hooks/useExperiment";
import "./App.css";

function App() {
  const { variant, isLoading, experimentId } = useExperiment({
    id: "bcp_banner_test_v1",
    name: "BCP Banner A/B Test",
    variants: ["A", "B"],
    splitPercentage: 50,
  });

  const handleCTAClick = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      if (variant === "A") {
        metaDescription.setAttribute(
          "content",
          "Obtén tu tarjeta de crédito BCP con beneficios exclusivos, millas y descuentos especiales.",
        );
      } else {
        metaDescription.setAttribute(
          "content",
          "Abre tu tarjeta de crédito BCP hoy y disfruta de millas, descuentos y servicios premium.",
        );
      }
    }
  }, [variant]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Preparando experiencia...</p>
      </div>
    );
  }

  return (
    <main className="app">
      <Header onNavigate={() => {}} />
      <Banner
        variant={variant}
        experimentId={experimentId}
        onCTAClick={handleCTAClick}
        isLoading={isLoading}
      />
      <Benefits />
      <Steps />
      <Form experimentId={experimentId} variant={variant} />
      <Footer />
    </main>
  );
}

export default App;
