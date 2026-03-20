"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Team18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Equipe</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Nossos profissionais
          </h2>
          <p className="md:text-md">
            Especialistas dedicados a encontrar a melhor proteção para você.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Ver vagas" variant="secondary">
              Ver vagas
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">
                  Carlos Silva
                </h5>
                <h6 className="md:text-md">Diretor executivo</h6>
              </div>
              <p>
                Mais de uma década liderando estratégias de seguros e parcerias.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">
                  Maria Santos
                </h5>
                <h6 className="md:text-md">Gerente comercial</h6>
              </div>
              <p>
                Especialista em soluções customizadas para empresas de todos os
                portes.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 sm:gap-y-6 md:grid-cols-2 md:gap-x-8">
            <div className="w-full overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-square size-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">
                  João Oliveira
                </h5>
                <h6 className="md:text-md">Consultor de seguros</h6>
              </div>
              <p>
                Atendimento consultivo focado em entender as necessidades reais.
              </p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-start">
                <a href="#">
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#">
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#">
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
