"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

export default function Home() {
  useReveal();
  const [open, setOpen] = useState<number | null>(null);

  const services = [
    { title: "Manucure (sans vernis)", price: "35 CHF", time: "20 min" },
    { title: "Manucure + vernis", price: "45 CHF", time: "30 min" },
    { title: "Semi-permanent", price: "65 CHF", time: "45 min" },
    { title: "Gel complet", price: "120 CHF", time: "90 min" },
    { title: "Remplissage", price: "90 CHF", time: "75 min" },
    { title: "Dépose", price: "20-30 CHF", time: "20-30 min" }
  ];

  return (
    <main className="bg-[#f8f2ed] text-[#2a2320]">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl">Caly Nails</h1>
        <p className="mt-6 opacity-70">
          Beauté des ongles à Genève
        </p>

        <a className="mt-8 bg-[#c8a58b] text-white px-8 py-3 rounded-full">
          Réserver
        </a>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-3xl text-center mb-10">Prestations</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card reveal">

              <div className="flex justify-between">
                <span>{s.title}</span>
                <strong>{s.price}</strong>
              </div>

              <div className="text-sm opacity-60 mt-2">
                {s.time}
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-2xl mb-6">
          Prends rendez-vous ✨
        </h2>

        <a className="bg-[#c8a58b] text-white px-8 py-4 rounded-full">
          Réserver maintenant
        </a>
      </section>

    </main>
  );
}