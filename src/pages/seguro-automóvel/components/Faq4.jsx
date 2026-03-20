"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Dúvidas
          </h2>
          <p className="md:text-md">
            Respostas claras sobre coberturas, franquias e procedimentos de
            sinistro
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Qual cobertura escolher?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A cobertura depende do seu veículo e necessidades. Oferecemos
              opções desde responsabilidade civil até cobertura total com
              proteção contra roubo e colisão. Nossos especialistas ajudam você
              a encontrar o equilíbrio certo entre proteção e custo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Como funciona a franquia?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A franquia é o valor que você paga quando faz uma reclamação.
              Franquias menores significam prêmios maiores, e vice-versa. Você
              escolhe o valor que melhor se adequa ao seu orçamento durante a
              cotação.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Quanto tempo leva uma cotação?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nossa plataforma compara múltiplas seguradoras em minutos. Você
              recebe opções de diferentes provedores com preços e coberturas
              lado a lado, economizando horas de pesquisa manual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              O que fazer após sinistro?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Entre em contato conosco imediatamente após um acidente.
              Orientaremos você através de cada etapa do processo de reclamação
              e garantiremos que sua situação seja resolvida rapidamente com a
              seguradora.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Posso mudar de seguro?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sim, você pode trocar de seguro a qualquer momento. Ajudamos com a
              transição e garantimos que não haja lacunas na cobertura durante a
              mudança de uma apólice para outra.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ainda tem perguntas?
          </h4>
          <p className="md:text-md">
            Fale com nossos especialistas para orientação personalizada
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contato" variant="secondary">
              Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
