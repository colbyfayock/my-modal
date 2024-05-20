import Image from 'next/image';

import Container from '@/components/Container';

import images from '@/data/images.json';

interface Image {
  alt: string;
  height: number;
  path: string;
  width: number;
}

export default function Home() {
  return (
    <Container className="mt-12">
      <h1 className="text-4xl font-black mb-12">Game Night!</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(image => {
          return (
            <li key={image.path}>
              <Image
                className="block object-cover aspect-square"
                src={image.path}
                width={500}
                height={500}
                alt={image.alt}
                sizes="33vw"
              />
            </li>
          )
        })}
      </ul>
    </Container>
  )
}