'use client';

import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const { toast } = useToast();

  // Récupération des variables d'environnement
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Initialisation d'EmailJS une seule fois
  useEffect(() => {
    if (!PUBLIC_KEY) {
      console.error('La clé publique EmailJS est manquante');
      return;
    }
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification des variables d'environnement
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: 'Erreur de configuration',
        description: 'La configuration du service email est incomplète.',
        variant: 'destructive',
      });
      return;
    }

    if (!form.current) {
      toast({
        title: 'Erreur',
        description: "Le formulaire n'est pas correctement initialisé.",
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      
      toast({
        title: 'Succès',
        description: 'Votre message a été envoyé avec succès !',
        variant: 'default',
      });
      form.current.reset();
    } catch (error) {
      console.error('Erreur détaillée:', error);
      toast({
        title: 'Erreur',
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
        <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-800">Contactez-nous !</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4  py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="SECK"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Prénom */}
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              placeholder="Mohamadou Lamine"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mohalamine@monmail.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
            Numéro de téléphone
          </label>
          <input
            type="number"
            id="telephone"
            name="telephone"
            placeholder="78-111-22-33"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Checkbox de confidentialité */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
            You agree to our friendly privacy policy.
          </label>
        </div>

        {/* Bouton d'envoi */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00929E] text-white py-2 px-4 rounded-md "
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>

        {/* Les messages sont maintenant gérés par le composant Toaster */}
      </form>
    </div>
  );
};

export default ContactForm;