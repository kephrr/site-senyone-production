import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VideoModalContextType {
  isVideoModalOpen: boolean;
  openVideoModal: () => void;
  closeVideoModal: () => void;
}

const VideoModalContext = createContext<VideoModalContextType | undefined>(undefined);

export const useVideoModal = () => {
  const context = useContext(VideoModalContext);
  if (!context) {
    throw new Error('useVideoModal must be used within a VideoModalProvider');
  }
  return context;
};

interface VideoModalProviderProps {
  children: ReactNode;
}

export const VideoModalProvider: React.FC<VideoModalProviderProps> = ({ children }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <VideoModalContext.Provider value={{ isVideoModalOpen, openVideoModal, closeVideoModal }}>
      {children}
    </VideoModalContext.Provider>
  );
};
