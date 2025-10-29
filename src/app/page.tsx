"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Fade-in inicial
    const fadeInTimer = setTimeout(() => setFadeIn(true), 100);
    
    // Fade-out y redirección
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => router.push("/home"), 1000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeInTimer);
    };
  }, [router]);

  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-black text-white transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      {/* Título principal */}
      <h1 className={`font-Vogue text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] leading-none mb-2 text-center transform transition-all duration-1000 ${fadeIn ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
        LA SUITE
      </h1>

      {/* Subtítulo con animación slide + fade */}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-Vogue text-center transition-all duration-1000 ${fadeIn ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
        by Night Fall
      </h2>

     
    </div>
  );
}
