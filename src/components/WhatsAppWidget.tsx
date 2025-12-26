import { MessageCircle } from "lucide-react";

export const WhatsAppWidget = () => {
  const phoneNumber = "+221774592047";
  const message = "Bonjour ! Je viens de votre site et j'aimerais en savoir plus sur vos services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Discutez avec nous sur WhatsApp
      </span>
    </a>
  );
};
