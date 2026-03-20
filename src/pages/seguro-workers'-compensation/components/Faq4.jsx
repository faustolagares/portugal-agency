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
            Respostas para as perguntas mais comuns sobre proteção de
            funcionários.
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
              Quem precisa contratar?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A maioria dos estados exige que empregadores com funcionários
              contrate workers' compensation. As regras variam conforme a
              localização e o número de colaboradores. Verifique os requisitos
              específicos do seu estado com nossos especialistas.
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
              O que o seguro cobre?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Cobre despesas médicas, reabilitação e parte dos salários perdidos
              quando um funcionário sofre lesão ou doença relacionada ao
              trabalho. A cobertura exata depende do plano escolhido e das leis
              estaduais.
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
              Como funciona o processo?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Você fornece informações sobre sua empresa e funcionários. Nós
              buscamos cotações com múltiplas seguradoras e apresentamos as
              melhores opções. Escolha o plano que se adequa ao seu negócio.
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
              Qual é o custo médio?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              O prêmio varia conforme o tipo de negócio, número de funcionários
              e histórico de sinistros. Solicitamos uma cotação personalizada
              para obter um valor preciso para sua situação.
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
              Posso mudar de seguradora?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sim. Você pode revisar sua cobertura a qualquer momento e mudar
              para um plano melhor. Ajudamos no processo de transição para
              garantir proteção contínua.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ainda tem dúvidas?
          </h4>
          <p className="md:text-md">
            Entre em contato com nossa equipe para orientação personalizada.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Falar" variant="secondary">
              Falar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
