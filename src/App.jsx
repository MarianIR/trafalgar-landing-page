import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import HealthCare from "./HealthcareProviders";
import DownloadApp from "./DownloadApp";
import CustomerTestimonials from "./CustomerTestimonial";
import Articles from "./Articles";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HealthCare />
      <DownloadApp />
      <CustomerTestimonials />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
