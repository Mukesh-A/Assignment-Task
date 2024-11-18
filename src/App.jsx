import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogo";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import AdvancedFeatures from "./components/AdvancedFeatures";
import FeatureList from "./components/FeaturesList";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import BlogSection from "./components/BlogSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Features />
        <Testimonial />
        <AdvancedFeatures />
        <FeatureList />
        <FAQ />
        <CTASection />
        <BlogSection />
        <CTABanner/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
