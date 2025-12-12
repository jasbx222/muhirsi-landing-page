import "./App.css";
import { Footer } from "./components/footer/Footer";
import About from "./pages/about/About";
import FAQ from "./pages/faq/Faq";
import Future from "./pages/future/Future";
import GetApp from "./pages/getApp/GetApp";
import Hero from "./pages/hero/Hero";
import Testimonials from "./pages/testimonials/Testimonials";

function App() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <Hero />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <About />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <Testimonials />
        </div>
      </section>

      {/* Future Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <Future />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <FAQ />
        </div>
      </section>

      {/* GetApp Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <GetApp />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-100">
        <div className="container mx-auto px-4 sm:px-8 lg:px-20">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
