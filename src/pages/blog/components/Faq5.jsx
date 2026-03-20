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

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Dúvidas
          </h2>
          <p className="md:text-md">
            Respostas para as perguntas mais comuns sobre nossos conteúdos
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
              Qual é a diferença entre seguro pessoal e comercial
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Seguros pessoais cobrem indivíduos e suas propriedades, como casa
              e carro. Seguros comerciais protegem empresas contra riscos
              operacionais, responsabilidades e perdas de propriedade. A
              Portugal Agency oferece ambas as categorias para atender suas
              necessidades específicas.
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
              Por que devo ler sobre seguros no blog
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Nossos artigos ajudam você a entender melhor os tipos de cobertura
              disponíveis, tomar decisões informadas e proteger adequadamente
              seu patrimônio. Conhecimento é a melhor defesa contra riscos
              inesperados.
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
              Com que frequência publicamos novos artigos
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Publicamos regularmente conteúdo relevante sobre tendências do
              mercado, dicas de proteção e análises de seguros. Acompanhe nosso
              blog para ficar atualizado sobre o que importa.
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
              Posso compartilhar estes artigos com minha empresa
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sim, nossos artigos são recursos valiosos para educação e
              planejamento. Compartilhe com sua equipe ou clientes para promover
              uma melhor compreensão sobre proteção de seguros.
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
              Como os artigos ajudam na cotação de seguros
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ao entender melhor seus riscos e necessidades através de nossos
              artigos, você estará mais preparado para solicitar uma cotação
              precisa. Isso resulta em propostas mais adequadas às suas reais
              necessidades.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Tem mais perguntas
          </h4>
          <p className="md:text-md">
            Entre em contato conosco para esclarecer dúvidas específicas
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Fale conosco" variant="secondary">
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
