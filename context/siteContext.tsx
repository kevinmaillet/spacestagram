import React, { createContext, useState } from 'react';

export interface ImageTypes {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url: string;
}

interface InitialSiteProps {
  images: ImageTypes[];
  setImages: (images: ImageTypes[]) => void;
}

const initialSite = {
  images: [],
  setImages: () => null,
};

export const siteContext = createContext<InitialSiteProps>(initialSite);

export const SiteProvider = ({ children }: { children: any }) => {
  const [images, setImages] = useState<ImageTypes[] | []>(initialSite.images);

  return (
    <siteContext.Provider
      value={{
        ...initialSite,
        images,
        setImages,
      }}
    >
      {children}
    </siteContext.Provider>
  );
};
