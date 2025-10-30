/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<{ type: string; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // 🔍 Validación básica
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setStatus({ type: "error", message: "Por favor, completa todos los campos." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      setStatus({ type: "error", message: "Por favor, ingresa un correo válido." });
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({ type: "success", message: "Mensaje enviado correctamente ✅" });
      setFormData({ nombre: "", correo: "", mensaje: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Ocurrió un error al enviar el mensaje. Intenta nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 mt-24 relative overflow-hidden">
      {/* 🔹 Efecto de fondo suave con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-90 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <form
          onSubmit={handleSubmit}
          className="bg-[#0a0a0a]/90 backdrop-blur-lg border border-gray-800 p-10 rounded-2xl shadow-[0_0_30px_-10px_rgba(255,0,0,0.4)] hover:shadow-[0_0_35px_-5px_rgba(255,0,0,0.6)] transition-all duration-500"
        >
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-Vogue  mb-10 text-center text-red-500 tracking-wider uppercase">
            Contáctanos
          </h2>

          {/* Nombre */}
          <div className="mb-6">
            <label className="block text-lg mb-2 font-semibold text-gray-200">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition-all"
              placeholder="Tu nombre"
            />
          </div>

          {/* Correo */}
          <div className="mb-6">
            <label className="block text-lg mb-2 font-semibold text-gray-200">
              Correo
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition-all"
              placeholder="Tu correo electrónico"
            />
          </div>

          {/* Mensaje */}
          <div className="mb-6">
            <label className="block text-lg mb-2 font-semibold text-gray-200">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black text-white placeholder-gray-400 border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 outline-none transition-all resize-none"
              rows={5}
              placeholder="Tu mensaje"
            ></textarea>
          </div>

          {/* Estado */}
          {status && (
            <p
              className={`text-center mb-5 font-medium ${
                status.type === "error" ? "text-red-400" : "text-green-400"
              }`}
            >
              {status.message}
            </p>
          )}

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white py-3 rounded-lg font-bold text-lg tracking-wide shadow-[0_0_20px_-5px_rgba(255,0,0,0.4)] hover:shadow-[0_0_25px_-3px_rgba(255,0,0,0.6)] transition-all duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
