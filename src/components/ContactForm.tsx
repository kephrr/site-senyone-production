'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Configuration d'EmailJS - à remplacer avec vos propres identifiants
  emailjs.init('VOTRE_PUBLIC_KEY');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_8x7h6j5', // Service ID EmailJS
        'template_9d2f7g4', // Template ID EmailJS
        form.current,
        'VOTRE_PUBLIC_KEY' // Remplacez par votre clé publique EmailJS
      )
      .then((result) => {
        toast({
          title: 'Succès',
          description: 'Votre message a été envoyé avec succès !',
          variant: 'default',
        });
        form.current?.reset();
      })
      .catch((error) => {
        toast({
          title: 'Erreur',
          description: "Une erreur est survenue lors de l'envoi du message.",
          variant: 'destructive',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            type="tel"
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
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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