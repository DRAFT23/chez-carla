"use client";

import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Manucure simple",
      price: "30 CHF",
      desc: "Soin complet des ongles et des cuticules pour des mains propres et soignées."
    },
    {
      title: "Semi-permanent",
      price: "dès 60 CHF",
      desc: "Vernis longue tenue avec finition brillante et élégante."
    },
    {
      title: "Gel",
      price: "95 CHF",
      desc: "Renforcement de l’ongle naturel pour un résultat solide et esthétique."
    },
    {
      title: "Pose chablon",
      price: "110 CHF",
      desc: "Extension des ongles pour une longueur personnalisée et élégante."
    },
    {
      title: "Remplissage",
      price: "85 CHF",
      desc: "Entretien du gel pour garder des ongles toujours parfaits."
    },
    {
      title: "Dépose",
      price: "25 CHF",
      desc: "Retrait propre du gel ou semi-permanent sans abîmer l’ongle naturel."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF7F4] to-white text-[#2E2E2E] font-sans">

      {/* HERO */}
      <section className="text-center py-28 px-6">

        <div className="inline-block mb-6 px-5 py-2 rounded-full bg-black text-white text-sm animate-pulse">
          ⚡ Rapide & efficace
        </div>

        <h1 className="text-6xl md:text-7xl font-serif font-semibold">
          Chez Carla
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Manucure & soins des ongles à Genève. Élégance, précision et douceur.
        </p>

        {/* BOUTONS */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">

          {/* WhatsApp */}
          <a
            href="https://wa.me/41791234567"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition inline-block"
          >
            WhatsApp
          </a>

          {/* Réservation */}
          <a
            href="https://www.planity.com/"
            target="_blank"
            className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition inline-block"
          >
            Réserver
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition inline-block"
          >
            Instagram
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition inline-block"
          >
            TikTok
          </a>

        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif text-center mb-12">
          Prestations
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {services.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-100 p-5 rounded-2xl shadow-sm hover:scale-[1.02] transition"
              >

                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.title}</span>
                  <span className="font-semibold">{item.price}</span>
                </div>

                <div
                  className={`text-gray-600 text-sm mt-3 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.desc}
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* POURQUOI */}
      <section className="py-20 px-6 text-center bg-[#FAF7F4]">

        <h2 className="text-3xl font-semibold mb-10">Pourquoi Chez Carla ?</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:scale-105 transition">
            <h3 className="font-semibold">✨ Qualité</h3>
            <p className="text-gray-600 mt-2">Résultat propre et durable.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:scale-105 transition">
            <h3 className="font-semibold">💅 Style</h3>
            <p className="text-gray-600 mt-2">Design moderne et élégant.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:scale-105 transition">
            <h3 className="font-semibold">⚡ Rapide</h3>
            <p className="text-gray-600 mt-2">Service efficace et soigné.</p>
          </div>

        </div>
      </section>

      {/* IMAGE FINALE */}
      <section className="py-28 px-6 text-center bg-white">

        <h2 className="text-4xl font-serif mb-10">
          Votre style, vos ongles 💅
        </h2>

        <div className="max-w-4xl mx-auto h-96 rounded-3xl bg-gradient-to-r from-pink-200 via-rose-100 to-amber-100 shadow-lg hover:scale-[1.02] transition"></div>

        <p className="text-gray-500 mt-6">
          Une expérience simple, rapide et élégante à Genève
        </p>

      </section>

      {/* CONTACT */}
      <section className="text-center py-24 bg-[#FAF7F4]">

        <h2 className="text-4xl font-serif">Genève</h2>

        <p className="text-gray-600 mt-3">
          Sur rendez-vous uniquement
        </p>

        <button className="mt-8 bg-black text-white px-7 py-3 rounded-full hover:scale-105 transition">
          Réserver maintenant
        </button>

      </section>

    </main>
  );
}