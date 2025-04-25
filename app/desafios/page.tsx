"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { NextIcon } from '@/components/NextIcon';
import Link from 'next/link';

const challenges: string[] = [
  "Fotos em grupo da sua mesa",
  "Fotos dos noivos se beijando",
  "Selfie com os noivos",
  "Uma careta",
  "Selfie com os pais dos noivos",
  "Os recém casados de mãos dadas",
  "O que você mais gostou da celebração",
  "Você curtindo a celebração",
]

export default function Home() {
  useEffect(() => {
    // This will run after the component mounts and the script is loaded
    // It ensures iframes are properly initialized
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 items-center'>
        <Link href="/" className='flex gap-2 items-center hover:text-black'>
          <NextIcon name="mdi:arrow-back"/>
          voltar
        </Link>
        <h2 className='text-2xl text-black font-medium'>Registre o Amor</h2>
      </div>
      <p className='text-center'>Transforme instantes em memórias. Você consegue capturar todos esses momentos?</p>
      <ul className='flex flex-col gap-4'>
        {challenges.map(challange => (
          <li key={challange} className='p-2 bg-white rounded-lg border border-gray-300'>
          <div className='flex items-center gap-2'>
            <NextIcon className='text-rose-500' name="mdi:heart" />
            <p className='text-black'>{challange}</p>
          </div>
        </li>
        ))}
      </ul>
      <p className='text-black font-medium'>Clique no quadrado branco para carregar uma foto</p>
      <div className="flex justify-center items-center w-full max-w-3xl">
        <iframe 
          data-tally-src="https://tally.so/embed/mJG17J?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy"
          width="100%"
          height="247"
          title="Momentos"
        />
      </div>
      {/* Load the Tally script properly using Next.js Script component */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
      />
    </div>
  );
}