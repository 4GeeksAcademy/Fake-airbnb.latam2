"use client";

import { useMemo, useState } from "react";

type PhotoGalleryProps = {
  photos: string[];
  title: string;
};

export const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const safePhotos = useMemo(() => (photos.length > 0 ? photos : ["photo-placeholder.jpg"]), [photos]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const roomIdSeed = useMemo(() => {
    const firstPhoto = safePhotos[0];
    const match = firstPhoto.match(/photo-(\d+)-/);
    return match ? match[1] : "0";
  }, [safePhotos]);
  const photoUrl = `https://loremflickr.com/800/600/interior,house,apartment/all?random=${roomIdSeed}`;

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? safePhotos.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === safePhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="rounded-2xl border border-[#DDDDDD] bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#222222]">Galeria</h2>
        <span className="text-sm text-[#6A6A6A]">
          {currentPhotoIndex + 1}/{safePhotos.length}
        </span>
      </div>
      <div className="h-72 overflow-hidden rounded-xl bg-gradient-to-br from-[#F7F7F7] to-[#EBEBEB] md:h-96">
        <img src={photoUrl} alt={`Foto de ${title}`} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={prevPhoto} className="rounded-full border border-[#DDDDDD] px-4 py-2 text-sm text-[#222222]">
          Anterior
        </button>
        <button onClick={nextPhoto} className="rounded-full border border-[#DDDDDD] px-4 py-2 text-sm text-[#222222]">
          Siguiente
        </button>
      </div>
    </section>
  );
};
