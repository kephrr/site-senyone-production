import React, { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  videoSrc?: string; // pour les vidéos locales
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // vidéo par défaut
  videoSrc 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" style={{ zIndex: 9999999 }}>
      <div className="relative w-full max-w-4xl mx-4">
        {/* Bouton de fermeture */} 
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-200"
          aria-label="Fermer la vidéo"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Conteneur de la vidéo */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#00929E] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white text-sm">Chargement de la vidéo...</p>
              </div>
            </div>
          )}

          {/* Vidéo YouTube (distante) */}
          {videoUrl && !videoSrc && (
            <iframe
              src={videoUrl}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoad}
              title="Vidéo de démonstration SENYONE"
            />
          )}

          {/* Vidéo locale */}
          {videoSrc && (
            <video
              src={videoSrc}
              className="w-full aspect-video"
              controls
              autoPlay
              onLoadStart={handleVideoLoad}
              onCanPlay={handleVideoLoad}
              title="Vidéo de démonstration SENYONE"
            >
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          )}
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-4 text-center">
          <p className="text-white/80 text-sm">
            Découvrez comment SENYONE transforme vos processus métier
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
