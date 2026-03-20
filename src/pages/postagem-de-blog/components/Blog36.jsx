"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog36() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Leia mais artigos
            </h2>
            <p className="md:text-md">Explore nossos guias e dicas</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Comercial
                </p>
                <p className="inline text-sm font-semibold">7 min leitura</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Guia completo sobre general liability
                </h2>
              </a>
              <p>Entenda as coberturas essenciais para seu negócio</p>
              <Button
                title="Ler mais"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Ler mais
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Pessoal
                </p>
                <p className="inline text-sm font-semibold">5 min leitura</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Seguro residencial, o que você precisa saber
                </h2>
              </a>
              <p>Proteja sua casa com as coberturas adequadas</p>
              <Button
                title="Ler mais"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Ler mais
              </Button>
            </div>
          </div>
          <div className="flex size-full flex-col items-center justify-start border border-border-primary">
            <a href="#" className="w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="px-5 py-6 md:p-6">
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                  Comercial
                </p>
                <p className="inline text-sm font-semibold">6 min leitura</p>
              </div>
              <a className="mb-2 block max-w-full" href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Workers' compensation para pequenas empresas
                </h2>
              </a>
              <p>Saiba como proteger seus funcionários adequadamente</p>
              <Button
                title="Ler mais"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 flex items-center justify-center gap-x-2"
              >
                Ler mais
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="Ver todos"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            Ver todos
          </Button>
        </div>
      </div>
    </section>
  );
}
