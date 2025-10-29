'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black text-white">
      {/* Hero */}
      <div className="relative text-center max-w-3xl">
        {/* Fondo suave tipo overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 rounded-xl shadow-xl"></div>

      <div className="relative z-10 flex flex-col items-center">
  
<div className="relative z-10 flex flex-col items-center">
  {/* Contenedor del logo y la otra imagen */}
  <div className="relative w-[460px] h-[430px] group">
    {/* Logo */}
    <Image
      src="/images/logoblancosinf.png"
      alt="La Suite by Night Fall"
      width={400}
      height={600}
      className="absolute top-0 left-0 w-full h-full mx-auto drop-shadow-lg transition-opacity duration-700 opacity-100 group-hover:opacity-0"
    />

    {/* Imagen que aparece al pasar el mouse */}
 <Image
  src="/images/llave.jpg"
  alt="Llave"
  width={400}
  height={600}
  className="absolute top-0 left-0 w-full h-full mx-auto drop-shadow-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100 filter invert"
/>

  </div>

  {/* Botones */}
  <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 font-Blastimo">
    <a
      href="/contact"
      className="px-8 py-3 border border-white bg-white/10 hover:bg-white hover:text-black transition transform hover:scale-105 font-bold rounded-lg shadow-md"
    >
      Contacto
    </a>
    <a
      href="https://wa.me/34635777116?text=Hola%20Matías,%20quiero%20consultar%20sobre%20LA%20SUIT"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 border border-white bg-white/10 hover:bg-white hover:text-black transition transform hover:scale-105 font-bold rounded-lg shadow-md"
    >
      WhatsApp
    </a>
  </div>
</div>

</div>

      </div>
    </main>
  )
}
