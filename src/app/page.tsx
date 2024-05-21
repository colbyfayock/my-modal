"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import Container from '@/components/Container';

import images from '@/data/images.json';
import { X } from 'lucide-react';

interface Image {
  alt: string;
  height: number;
  path: string;
  width: number;
}

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeImage, setActiveImage] = useState<Image>();

  useEffect(() => {
    if ( !activeImage ) return;
    dialogRef.current?.showModal();
  }, [activeImage]);

  function closeDialog() {
    dialogRef.current?.close();
    setActiveImage(undefined)
  }

  return (
    <Container className="mt-12">
      <h1 className="text-4xl font-black mb-12">Game Night!</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(image => {
          return (
            <li key={image.path}>
              <button onClick={() => setActiveImage(image)}>
                <Image
                  className="block object-cover aspect-square"
                  src={image.path}
                  width={500}
                  height={500}
                  alt={image.alt}
                  sizes="33vw"
                />
              </button>
            </li>
          )
        })}
      </ul>
      <dialog ref={dialogRef} className="relative overflow-visible">
        <div
          className="max-h-[90vh] max-w-[90vw]"
          style={{
            aspectRatio: activeImage && `${activeImage.width} / ${activeImage.height}`
          }}
        >
          {activeImage && (
            <Image
              width={activeImage.width}
              height={activeImage.height}
              src={activeImage.path}
              alt=""
              unoptimized
            />
          )}
        </div>
        <button
          className="absolute -top-2 -right-2 z-1 flex items-center justify-center w-5 h-5 bg-zinc-200 rounded-full shadow"
          onClick={() => closeDialog()}
        >
          <X className="w-4 h-4 text-zinc-900" />
          <span className="sr-only">Close</span>
        </button>
      </dialog>
    </Container>
  )
}