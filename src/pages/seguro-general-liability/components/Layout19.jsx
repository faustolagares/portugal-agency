"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Proteção</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              O que é seguro de responsabilidade civil geral
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              General Liability é a proteção fundamental para qualquer negócio.
              Cobre despesas quando seu negócio causa danos a terceiros, seja
              por lesão corporal ou dano à propriedade.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Lesões corporais e acidentes</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Danos à propriedade de terceiros</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Despesas médicas e processos judiciais</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Saber mais" variant="secondary">
                Saber mais
              </Button>
              <Button
                title="Explorar"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explorar
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
