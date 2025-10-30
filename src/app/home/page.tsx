
'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2 py-16 bg-black text-white">
      {/* Hero */}
      <div className="relative text-center w-full max-w-3xl px-2 sm:px-4">
        {/* Fondo overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 rounded-xl shadow-xl"></div>

        <div className="relative mt-[8rem] z-10 flex flex-col items-center">
          {/* Contenedor del logo e imagen alterna */}
          <div className="relative w-[300px] h-[280px] sm:w-[400px] sm:h-[370px] md:w-[470px] md:h-[440px] group">
            {/* Logo */}
            <Image
              src="/images/logoblancosinf.png"
              alt="La Suite by Night Fall"
              fill
              className="object-contain drop-shadow-lg transition-opacity duration-700 opacity-100 group-hover:opacity-0"
            />

            {/* Imagen hover */}
            <Image
              src="/images/llave.jpg"
              alt="Llave"
              fill
              className="object-contain drop-shadow-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100 filter invert"
            />
          </div>

          {/* Botones */}
          <div className="mt-[8rem] flex flex-col sm:flex-row justify-center gap-6 sm:gap-6 font-Blastimo w-full px-6 sm:px-0">
            <a
              href="/contact"
              className="px-6 py-3 sm:px-8 border border-white bg-white/10 hover:bg-white hover:text-black transition transform hover:scale-105 font-bold rounded-sm shadow-md text-lg sm:text-base"
            >
              Contacto
            </a>
            <a
              href="https://wa.me/34635777116?text=Hola%20Matías,%20quiero%20consultar%20sobre%20LA%20SUIT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 border border-white bg-white/10 hover:bg-white hover:text-black transition transform hover:scale-105 font-bold rounded-sm shadow-md text-lg sm:text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
