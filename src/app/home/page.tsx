'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Mail, MessageCircle } from 'lucide-react'

export default function Home() {

 const [showText, setShowText] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Hero */}
      <div className="relative text-center w-full max-w-2xl px-4">
        {/* Fondo overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Contenedor del logo e imagen alterna */}
          <div className="relative w-[350px] h-[370px] sm:w-[380px] sm:h-[380px] md:w-[470px] md:h-[440px] group transition-transform duration-300 hover:scale-105">
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

       
          {/* Botones animados */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6 w-full px-6 sm:px-8 font-Blastimo text-black">

            {/* Botón Contacto */}
           <a
  href="/contact"
  className="relative flex items-center justify-center gap-2 px-6 py-6 sm:px-8 border border-white bg-white hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 font-Magofah rounded-sm shadow-md text-xl sm:text-lg overflow-hidden"
>
  <span className={`absolute transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
    Contacto
  </span>
  <Mail
    size={29}
    color="#E50914"
    className={`absolute transition-opacity duration-700 ${showText ? 'opacity-0' : 'opacity-100'}`}
  />
</a>


            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/34635777116?text=Hola%20Matías,%20quiero%20consultar%20sobre%20LA%20SUIT"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 px-6 py-6 sm:px-8 border border-white bg-white hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 font-Magofah rounded-sm shadow-md text-xl sm:text-lg overflow-hidden"
            >
              <span
                className={`absolute transition-opacity duration-700 ${
                  showText ? 'opacity-100' : 'opacity-0'
                }`}
              >
                WhatsApp
              </span>
              <MessageCircle
                size={29}
                color="#25D366"
                className={`absolute transition-opacity duration-700 ${
                  showText ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
