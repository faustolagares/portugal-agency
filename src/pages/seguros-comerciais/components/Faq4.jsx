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
            Respostas para as perguntas mais comuns sobre seguros comerciais
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
              Quanto tempo leva para cotar?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A maioria das cotações é processada em minutos. Você insere seus
              dados uma única vez e recebe ofertas de múltiplas seguradoras
              simultaneamente, sem necessidade de preencher formulários
              repetidos.
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
              Preciso de todos os seguros?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Depende do seu negócio. Workers' Compensation é obrigatório em
              muitos estados se você tem funcionários. General Liability é
              altamente recomendado. Nossos especialistas analisam seu caso e
              recomendam o que você realmente precisa.
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
              Como vocês encontram melhores preços?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Acessamos múltiplas seguradoras e plataformas de uma vez. Isso nos
              permite comparar ofertas rapidamente e negociar as melhores taxas
              para você, economizando tempo e dinheiro.
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
              Posso mudar de seguro depois?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sim. Você não está preso a nada. Se encontrar uma opção melhor ou
              suas necessidades mudarem, podemos ajudá-lo a fazer a transição
              para outra cobertura sem complicações.
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
              Vocês oferecem suporte contínuo?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutamente. Não desaparecemos após a venda. Nossa equipe está
              disponível para responder perguntas, ajudar com sinistros e
              revisar sua cobertura conforme seu negócio cresce.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Ainda tem dúvidas?
          </h4>
          <p className="md:text-md">Fale com nossos especialistas</p>
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
