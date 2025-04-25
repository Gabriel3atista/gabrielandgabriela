"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { NextIcon } from '@/components/NextIcon';
import Link from 'next/link';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    }
  }
}
export default function Home() {
  useEffect(() => {
    // This will run after the component mounts and the script is loaded
    // It ensures iframes are properly initialized
    if (typeof window !== 'undefined' && 'Tally' in window) {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 items-center'>
        <Link href="/" className='flex gap-2 items-center hover:text-black'>
          <NextIcon name="mdi:arrow-back"/>
          voltar
        </Link>
        <h2 className='text-2xl text-black font-medium'>Cápsula do Tempo</h2>
      </div>
      <p>Queremos te convidar a fazer parte de algo especial: nossa cápsula do tempo! Grave um vídeo com até 1 minuto contando o que viveu, desejando algo para o nosso futuro ou apenas deixando seu carinho registrado. Esse vídeo será guardado com muito amor e só será assistido no nosso aniversário de casamento. Vai ser incrível reviver tudo isso com a sua presença registrada ali, no tempo.</p>
      <p className='text-black font-medium'>Clique no quadrado branco para carregar o vídeo</p>
      <div className="flex justify-center items-center w-full max-w-3xl">
        <iframe 
          data-tally-src="https://tally.so/embed/3qg5xd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
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