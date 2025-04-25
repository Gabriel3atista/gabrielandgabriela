import { Geist } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const geist = Geist({ subsets: ['latin'] });

export const metadata = {
  title: 'Gabriel & Gabriela',
  description: 'Espacinho reservado para os momentos mais especiais do Casamento!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>
        <main className="flex flex-col gap-8 pt-16 items-center max-w-5xl mx-auto min-h-screen px-4 pb-4">
          <Image
            className="w-[56px]"
            src="/gg-logo.png"
            width={130}
            height={80}
            alt="G&G"
          />
          {children}
        </main>
      </body>
    </html>
  );
}