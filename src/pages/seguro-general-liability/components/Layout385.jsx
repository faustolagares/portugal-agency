"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout385() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Complementos</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Amplie sua proteção
          </h1>
          <p className="md:text-md">
            Adicione coberturas especializadas conforme sua necessidade
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="grid auto-cols-fr grid-cols-1 flex-col border border-border-primary sm:grid-cols-2 lg:col-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-bento-portrait2.svg"
                alt="Relume placeholder image 1"
                className="size-full object-cover"
              />
            </div>
            <div className="block p-6 last-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Produtos</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Responsabilidade por produtos
                </h2>
                <p>Proteja-se contra danos causados por seus produtos</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Adicionar"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-border-primary">
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 2"
                className="size-full object-cover"
              />
            </div>
            <div className="block p-6 last-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold">Operações</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Cobertura de operações especializadas
                </h2>
                <p>Customize limites e franquias para seu risco específico</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Adicionar"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
