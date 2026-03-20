"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout363() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Opções</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Escolha o tempo certo
            </h2>
            <p className="md:text-md">Trinta minutos ou uma hora inteira</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 items-start border border-border-primary sm:grid-cols-2">
            <div className="flex size-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex h-full flex-col justify-center p-6">
              <p className="mb-2 text-sm font-semibold">Rápida</p>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Consultoria de trinta minutos
              </h3>
              <p>Para quem tem uma dúvida específica</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start border border-border-primary sm:grid-cols-2">
            <div className="flex size-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                className="size-full object-cover"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex h-full flex-col justify-center p-6">
              <p className="mb-2 text-sm font-semibold">Completa</p>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Consultoria de uma hora
              </h3>
              <p>Para quem quer entender tudo de verdade</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
