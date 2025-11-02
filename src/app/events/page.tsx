'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'

export default function Events() {
  const [showText, setShowText] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16">
      {/* Logo */}
      <div className="relative w-48 h-24 sm:w-64 sm:h-32 lg:w-80 lg:h-40 mb-10">
        <Image
          src="/images/logoblancosinf.png"
          alt="LA SUIT by Night Fall"
          fill
          className="object-contain"
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-Magofah text-center mb-6">
        Coming Soon
      </h1>

      {/* Descripción */}
      <p className="text-center text-base sm:text-lg lg:text-2xl max-w-xs sm:max-w-md lg:max-w-2xl mb-10 font-Vogue leading-relaxed">
        LA SUIT by Night Fall está en camino. Prepárate para una experiencia exclusiva en un solo lugar.
      </p>

    {/* Botones de contacto */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl text-black mt-14">
  
  {/* Botón Contacto */}
  <a
    href="/contact"
    className="relative flex items-center justify-center 
    w-64 sm:w-72 lg:w-80
    px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6
    border border-white bg-white hover:bg-black hover:text-white 
    transition-all duration-500 hover:scale-105 font-Magofah 
    rounded-md shadow-md text-lg sm:text-xl lg:text-2xl overflow-hidden"
  >
    <span
      className={`absolute transition-opacity duration-700 ${
        showText ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Contacto
    </span>
    <Mail
      size={30}
      color="#E50914"
      className={`absolute transition-opacity duration-700 ${
        showText ? 'opacity-0' : 'opacity-100'
      }`}
    />
  </a>

  {/* Botón WhatsApp */}
  <a
    href="https://wa.me/34635777116?text=Hola%20Matías,%20quiero%20consultar%20sobre%20LA%20SUIT"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center 
    w-64 sm:w-72 lg:w-80
    px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6
    border border-white bg-white hover:bg-black hover:text-white 
    transition-all duration-500 hover:scale-105 font-Magofah 
    rounded-md shadow-md text-lg sm:text-xl lg:text-2xl overflow-hidden"
  >
    <span
      className={`absolute transition-opacity duration-700 ${
        showText ? 'opacity-100' : 'opacity-0'
      }`}
    >
      WhatsApp
    </span>
    <MessageCircle
      size={30}
      color="#25D366"
      className={`absolute transition-opacity duration-700 ${
        showText ? 'opacity-0' : 'opacity-100'
      }`}
    />
  </a>
</div>

    </main>
  )
}
