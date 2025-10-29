"use client";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Sección de Formulario */}
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

          <label className="block text-lg mb-2">Nombre:</label>
          <input 
            type="text" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
            placeholder="Tu nombre"
          />

          <label className="block text-lg mb-2">Correo:</label>
          <input 
            type="email" 
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
            placeholder="Tu correo electrónico"
          />

          <label className="block text-lg mb-2">Mensaje:</label>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
            rows={4}
            placeholder="Tu mensaje"
          ></textarea>

          <button 
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded transition duration-300 transform hover:scale-105"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
