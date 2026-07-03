"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

export default function Home() {
  useReveal();
  const [open, setOpen] = useState<number | null>(null);

  const services = [
    {
      category: "💅 MANUCURE",
      items: [
        { title: "Manucure (sans vernis)", price: "35 CHF", time: "20 min" },
        { title: "Manucure + vernis classique", price: "45 CHF", time: "30 min" },
        { title: "Limage + vernis classique", price: "25 CHF", time: "15 min" },
        { title: "Manucure + semi-permanent", price: "65 CHF", time: "45 min", note: "+ dépose +10 CHF" },
        { title: "Limage + semi-permanent (sans manucure)", price: "50 CHF", time: "30 min" },
        { title: "Renforcement ongle naturel", price: "75 CHF", time: "50 min" },
        { title: "Remplissage gel", price: "90 CHF", time: "75 min", note: "max 4 semaines" },
        { title: "Remplissage gel (+4 semaines)", price: "100 CHF", time: "90 min" },
        { title: "Pose gel chablon", price: "120 CHF", time: "90 min" },
        { title: "Réparation ongle cassé", price: "dès 5 CHF" },
        { title: "Dépose semi-permanent", price: "20 CHF", time: "20 min" },
        { title: "Dépose gel", price: "30 CHF", time: "30 min" },
        { title: "Mini manucure (-14 ans)", price: "20 CHF", time: "15 min" }
      ]
    },

    {
      category: "🎨 NAIL ART",
      items: [
        { title: "French", price: "10 CHF", time: "10 min" },
        { title: "Babyboomer / babycolor", price: "10 CHF", time: "10 min" },
        { title: "Effets (chrome, poudre...)", price: "10 CHF", time: "10 min" }
      ]
    },

    {
      category: "🦶 BEAUTÉ DES PIEDS",
      items: [
        { title: "Pédicure express (sans vernis)", price: "50 CHF", time: "30 min" },
        { title: "Pédicure + vernis classique", price: "65 CHF", time: "40 min" },
        { title: "Limage + vernis classique", price: "35 CHF", time: "15 min" },
        { title: "Pédicure + semi-permanent", price: "75 CHF", time: "45 min", note: "+ dépose +10 CHF" },
        { title: "Limage + semi-permanent", price: "60 CHF", time: "30 min" },
        { title: "Pédicure spa (sans vernis)", price: "70 CHF", time: "40 min" },
        { title: "Pédicure spa + vernis", price: "85 CHF", time: "50 min" },
        { title: "Pédicure spa + semi-permanent", price: "95 CHF", time: "60 min", note: "+ dépose +10 CHF" },
        { title: "Construction ongle gel", price: "10 CHF" },
        { title: "Mini pédicure (-14 ans)", price: "30 CHF", time: "15 min" },
        { title: "Massage + gommage pieds", price: "45 CHF", time: "30 min" }
      ]
    },

    {
      category: "🔥 OFFRES",
      items: [
        { title: "Manucure + pédicure SPA (sans vernis)", price: "90 CHF", oldPrice: "105 CHF", time: "60 min" },
        { title: "Manucure + vernis + pédicure SPA + vernis", price: "115 CHF", oldPrice: "130 CHF", time: "80 min" },
        { title: "Manucure + semi + pédicure SPA semi", price: "145 CHF", oldPrice: "160 CHF", time: "105 min" },
        { title: "Étudiant", price: "-10%", note: "sur présentation carte" }
      ]
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
            alt="nails"
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
          Avec plus de 10 ans d'expérience, les prestations sont réalisées avec passion
          et souci du détail.
          L'hygiène est une priorité absolue.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-24 reveal">
        <h2 className="text-4xl text-center mb-14">
          Prestations
        </h2>

        {services.map((section, i) => (
          <div key={i} className="mb-14">

            <h3 className="text-2xl text-center mb-8">
              {section.category}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((s, j) => (
                <div
                  key={j}
                  className="bg-white border border-[#ead8ca] p-6 rounded-3xl lift"
                >
                  <div className="flex justify-between">
                    <span>{s.title}</span>
                    <span className="opacity-60">{s.price}</span>
                  </div>

                  {(s.time || s.note || s.oldPrice) && (
                    <div className="mt-3 text-sm opacity-70">
                      {s.time && <p>{s.time}</p>}
                      {s.note && <p>{s.note}</p>}
                      {s.oldPrice && (
                        <p className="line-through opacity-50">
                          {s.oldPrice}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
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