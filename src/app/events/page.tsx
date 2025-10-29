'use client'

import Image from 'next/image'

export default function events() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="relative w-64 h-32 mb-8">
        <Image
          src="/images/logoblancosinf.png" // Asegurate que esté en public/images/
          alt="LA SUIT by Night Fall"
          fill
          className="object-contain"
        />
      </div>

      {/* Título */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
        Coming Soon
      </h1>

      {/* Descripción */}
      <p className="text-center text-lg md:text-xl max-w-md mb-8">
        LA SUIT by Night Fall está en camino. Prepárate para una experiencia exclusiva en un solo lugar.
      </p>

      {/* Botones de contacto */}
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="mailto:nightfall@gmail.com"
          className="px-8 py-3 border border-white hover:bg-white hover:text-black transition font-bold text-center"
        >
          Contacto
        </a>
        <a
          href="https://wa.me/34635777116?text=Hola%20Matías,%20quiero%20consultar%20sobre%20LA%20SUIT"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-white hover:bg-white hover:text-black transition font-bold text-center"
        >
          WhatsApp
        </a>
      </div>

      
    </main>
  )
}
