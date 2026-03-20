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
            Respostas para as perguntas mais comuns sobre seguros pessoais e
            como contratar.
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
              Quanto custa um seguro?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              O valor depende do tipo de cobertura, do bem segurado e do seu
              perfil de risco. Nós comparamos múltiplas seguradoras para
              encontrar as melhores opções e preços para você.
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
              Posso contratar online?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sim. Você pode solicitar uma cotação através do nosso site e
              entrar em contato conosco para finalizar a contratação com
              segurança e rapidez.
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
              Quais coberturas são incluídas?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Oferecemos coberturas para casa, carro e bens pessoais. Cada plano
              pode ser personalizado conforme suas necessidades específicas e
              orçamento.
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
              Como funciona o atendimento?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nossa equipe está disponível para orientar você em cada etapa do
              processo, desde a cotação até a contratação e suporte pós-venda.
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
              Preciso de documentação específica?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sim, documentos básicos serão solicitados durante o processo de
              cotação. Nossa equipe orientará você sobre tudo que é necessário.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ainda tem dúvidas?
          </h4>
          <p className="md:text-md">
            Entre em contato conosco para esclarecimentos adicionais.
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
