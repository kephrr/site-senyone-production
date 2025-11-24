import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection title="Nous contacter" description="Vous souhaitez-nous contacter ? Voici ce dont vous avez besoin"/>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
