"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

export default function Home() {
  useReveal();
  const [open, setOpen] = useState<number | null>(null);

  const services = [
    {
      title: "💅 Manucure Signature",
      price: "30 CHF",
      desc: "Soin complet des mains avec mise en forme des ongles et finition élégante."
    },
    {
      title: "✨ Semi-Permanent",
      price: "dès 60 CHF",
      desc: "Couleur brillante longue tenue pour des ongles parfaits pendant plusieurs semaines."
    },
    {
      title: "🌸 Gel Naturel",
      price: "95 CHF",
      desc: "Renforcement naturel pour un résultat fin, solide et élégant."
    },
    {
      title: "💎 Gel Chablon",
      price: "110 CHF",
      desc: "Extension sur mesure pour une longueur et une forme parfaite."
    },
    {
      title: "🔄 Remplissage",
      price: "85 CHF",
      desc: "Entretien du gel pour garder une manucure impeccable."
    },
    {
      title: "🌿 Dépose",
      price: "25 CHF",
      desc: "Retrait doux et professionnel dans le respect de l’ongle naturel."
    }
  ];

  return (
    <main className="bg-[#f8f2ed] text-[#2a2320]">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#f8f2ed]/80 backdrop-blur-md border-b border-[#ead8ca]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-medium tracking-wide">Caly Nails</span>

          <a
            href="#"
            className="bg-[#c8a58b] text-white px-5 py-2 rounded-full text-sm"
          >
            Réserver
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 reveal">
        <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-4">
          Genève • Nail Studio
        </p>

        <h1 className="text-6xl md:text-8xl">
          Caly Nails
        </h1>

        <p className="mt-8 max-w-2xl opacity-70 text-lg leading-relaxed">
          Un espace dédié à la beauté de vos mains. Élégance, douceur et précision
          pour sublimer votre style au quotidien.
        </p>

        <a
          href="#"
          className="mt-10 bg-[#c8a58b] text-white px-10 py-4 rounded-full lift"
        >
          Prendre rendez-vous ✨
        </a>
      </section>

      {/* IMAGE */}
      <section className="px-6 pb-24 reveal">
        <div className="max-w-6xl mx-auto h-[550px] rounded-[40px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center reveal">
        <h2 className="text-4xl mb-8">
          Une expérience beauté unique
        </h2>

        <p className="opacity-70 text-lg leading-loose">
          Situé au sein du salon Coiffure Ashraf aux Pâquis, Caly Nails vous accueille
          dans une ambiance conviviale et professionnelle.
          Avec plus de 10 ans d'expérience, les prestations sont réalisées avec
          passion et souci du détail.
          L'hygiène est une priorité absolue avec du matériel désinfecté pour chaque cliente.
          <br /><br />
          <strong>Caly Nails – Le soin du détail jusqu'au bout des ongles.</strong>
        </p>
      </section>

      {/* AVANTAGES */}
      <section className="max-w-6xl mx-auto px-6 py-24 reveal">
        <h2 className="text-4xl text-center mb-14">
          Pourquoi choisir Caly Nails ?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl text-center lift">
            <div className="text-5xl mb-4">💖</div>
            <h3 className="text-xl mb-3">Passion</h3>
            <p className="opacity-70">Chaque détail est travaillé avec soin.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl text-center lift">
            <div className="text-5xl mb-4">🧼</div>
            <h3 className="text-xl mb-3">Hygiène</h3>
            <p className="opacity-70">Matériel propre et désinfecté.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl text-center lift">
            <div className="text-5xl mb-4">🌸</div>
            <h3 className="text-xl mb-3">Détente</h3>
            <p className="opacity-70">Un moment rien que pour vous.</p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-24 reveal">
        <h2 className="text-4xl text-center mb-14">
          Prestations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="bg-white border border-[#ead8ca] p-6 rounded-3xl cursor-pointer lift"
            >
              <div className="flex justify-between">
                <span>{s.title}</span>
                <span className="opacity-60">{s.price}</span>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ${
                open === i ? "max-h-40 mt-4" : "max-h-0"
              }`}>
                <p className="text-sm opacity-70">{s.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center reveal">
        <h2 className="text-4xl mb-6">
          Réservez votre moment beauté ✨
        </h2>

        <a
          href="#"
          className="inline-block bg-[#c8a58b] text-white px-10 py-4 rounded-full lift"
        >
          Prendre rendez-vous
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-[#ead8ca] opacity-60">
        <p>Caly Nails • Genève • Sur rendez-vous</p>
      </footer>

    </main>
  );
}