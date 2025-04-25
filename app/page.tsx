import Link from 'next/link';

import { Gabriela } from '@/components/Gabriela';
import { Gabriel } from '@/components/Gabriel';
import { NextIcon } from '@/components/NextIcon';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mb-8 sr-only">
        Gabriel & Gabriela - Registro de momentos únicos do nosso casamento
      </h1>
      <div className='flex flex-col gap-16'>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className='flex gap-2 items-center justify-center'>
            <Gabriel />
            <p>AND</p>
            <Gabriela />
          </div>
          <Image
            className="w-full rounded-xl"
            src="/the-couple.png"
            width={1000}
            height={1000}
            alt="Na imagem mostra um casal abraçados vestidos de branco."
          />
          <p className='text-center'>Criamos este espaço com muito carinho para que você possa compartilhar os momentos especiais que viveu em nosso casamento.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className='flex flex-col gap-4 w-full bg-white border border-gray-300 rounded-xl p-4'>
            <div className='flex items-center gap-3'>
              <NextIcon className='text-[#739472]' name='ri:sword-fill' />
              <p className='text-lg font-medium text-black'>Desafios</p>
            </div>
            <p>Registre momentos únicos com a nossa lista de desafios especiais. Capture sorrisos, abraços e instantes inesquecíveis que vão tornar esse dia ainda mais memorável.</p>
            <Link className='flex items-center justify-center gap-2 bg-black px-3 py-2 rounded-lg text-white w-fit' href="/desafios">
              Ir para os Desafios
              <NextIcon name="mdi:arrow-top-right" />
            </Link>
          </div>
          <div className='flex flex-col gap-4 w-full bg-white border border-gray-300 rounded-xl p-4'>
            <div className='flex items-center gap-3'>
              <NextIcon className='text-[#739472]' name='ri:hourglass-fill' />
              <p className='text-lg font-medium text-black'>Cápsula do tempo</p>
            </div>
            <p>Grave um vídeo com uma mensagem ou lembrança especial desse dia. Sua gravação fará parte da nossa cápsula do tempo, que será aberta no nosso aniversário de casamento. Vamos adorar reviver esse momento com você no futuro!</p>
            <Link className='flex items-center justify-center gap-2 bg-black px-3 py-2 rounded-lg text-white w-fit' href="/capsula-do-tempo">
              Ir para a Cápsula do Tempo
              <NextIcon name="mdi:arrow-top-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}