"use client";

import React from "react";

export function Stats34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Números</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Credibilidade em dados
          </h1>
          <p className="md:text-md">
            Nossa trajetória reflete dedicação e confiança no mercado.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-7 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-[0.5fr_1fr] lg:gap-x-8 lg:gap-y-8">
          <div className="flex flex-col justify-center gap-x-6 gap-y-6 md:flex-row md:gap-y-8 lg:flex-col lg:gap-x-8">
            <div className="flex w-full flex-col border border-border-primary p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                15+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Anos de atuação
              </h3>
              <p className="mt-2">
                Experiência consolidada no segmento de Property & Casualty.
              </p>
            </div>
            <div className="flex w-full flex-col border border-border-primary p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                500+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Clientes atendidos
              </h3>
              <p className="mt-2">
                Pessoas e empresas que confiam em nossas soluções.
              </p>
            </div>
            <div className="flex w-full flex-col border border-border-primary p-8">
              <p className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                20+
              </p>
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">
                Parcerias estratégicas
              </h3>
              <p className="mt-2">
                Acesso a seguradoras e plataformas líderes do mercado.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-image.svg"
              alt="Relume placeholder image"
              className="aspect-[3/2] size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
