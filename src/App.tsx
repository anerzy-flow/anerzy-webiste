import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { ProblemSection } from "./components/ProblemSection/ProblemSection";
import { ThesisSection } from "./components/ThesisSection/ThesisSection";
import { UseCaseSection } from "./components/UseCaseSection/UseCaseSection";
import { ExampleQuestions } from "./components/ExampleQuestions/ExampleQuestions";
import { ProductBoundarySection } from "./components/ProductBoundarySection/ProductBoundarySection";
import { AudienceSection } from "./components/AudienceSection/AudienceSection";
import { CTASection } from "./components/CTASection/CTASection";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ThesisSection />
        <UseCaseSection />
        <ExampleQuestions />
        <ProductBoundarySection />
        <AudienceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
