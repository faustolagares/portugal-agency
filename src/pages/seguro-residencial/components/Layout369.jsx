"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Processo</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Como funciona
            </h2>
            <p className="md:text-md">
              Três passos simples para proteger seu lar
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Passo um</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Preencha suas informações
                  </h3>
                  <p>
                    Você nos fornece detalhes sobre sua casa e o que deseja
                    proteger. Leva apenas alguns minutos.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Button
                    title="Cotar"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Cotar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait.svg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Passo dois</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Receba cotações
                  </h3>
                  <p>
                    Nossa plataforma busca as melhores opções entre nossas
                    seguradoras parceiras instantaneamente.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Comparar"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Comparar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Passo dois</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Receba cotações
                  </h3>
                  <p>
                    Nossa plataforma busca as melhores opções entre nossas
                    seguradoras parceiras instantaneamente.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Comparar"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Comparar
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
