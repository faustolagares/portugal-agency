"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const MotionTabsContent = motion.create(TabsContent);

const useRelume = ({ defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const isActive = (tabValue) => {
    return activeTab === tabValue ? 1 : 0;
  };

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};

export function Blog12() {
  const useActive = useRelume({ defaultValue: "view-all" });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Conhecimento sobre seguros
            </h1>
            <p className="md:text-md">
              Artigos e insights para proteger seu negócio
            </p>
          </div>
        </div>
        <Tabs
          value={useActive.activeTab}
          onValueChange={useActive.setActiveTab}
          className="flex flex-col justify-center"
        >
          <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="view-all"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Comerciais
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Pessoais
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Dicas
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Tendências
            </TabsTrigger>
          </TabsList>
          <AnimatePresence initial={false}>
            <MotionTabsContent
              value="view-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("view-all") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">7 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      O que é seguro de responsabilidade geral
                    </h2>
                  </a>
                  <p>
                    Entenda como proteger seu negócio contra riscos inesperados
                  </p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">7 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      O que é seguro de responsabilidade geral
                    </h2>
                  </a>
                  <p>
                    Entenda como proteger seu negócio contra riscos inesperados
                  </p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">7 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      O que é seguro de responsabilidade geral
                    </h2>
                  </a>
                  <p>
                    Entenda como proteger seu negócio contra riscos inesperados
                  </p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">7 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      O que é seguro de responsabilidade geral
                    </h2>
                  </a>
                  <p>
                    Entenda como proteger seu negócio contra riscos inesperados
                  </p>
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
            </MotionTabsContent>
            <MotionTabsContent
              value="category-one"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("category-one") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">5 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Workers' Compensation essencial para empresas
                    </h2>
                  </a>
                  <p>Saiba por que este seguro é obrigatório e como funciona</p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">5 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Workers' Compensation essencial para empresas
                    </h2>
                  </a>
                  <p>Saiba por que este seguro é obrigatório e como funciona</p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">5 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Workers' Compensation essencial para empresas
                    </h2>
                  </a>
                  <p>Saiba por que este seguro é obrigatório e como funciona</p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Comercial
                    </p>
                    <p className="inline text-sm font-semibold">5 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Workers' Compensation essencial para empresas
                    </h2>
                  </a>
                  <p>Saiba por que este seguro é obrigatório e como funciona</p>
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
            </MotionTabsContent>
            <MotionTabsContent
              value="category-two"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("category-two") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Pessoal
                    </p>
                    <p className="inline text-sm font-semibold">6 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Proteja sua casa com seguro residencial adequado
                    </h2>
                  </a>
                  <p>Descubra quais coberturas você realmente precisa</p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Pessoal
                    </p>
                    <p className="inline text-sm font-semibold">6 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Proteja sua casa com seguro residencial adequado
                    </h2>
                  </a>
                  <p>Descubra quais coberturas você realmente precisa</p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Pessoal
                    </p>
                    <p className="inline text-sm font-semibold">6 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Proteja sua casa com seguro residencial adequado
                    </h2>
                  </a>
                  <p>Descubra quais coberturas você realmente precisa</p>
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
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Pessoal
                    </p>
                    <p className="inline text-sm font-semibold">6 minutos</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Proteja sua casa com seguro residencial adequado
                    </h2>
                  </a>
                  <p>Descubra quais coberturas você realmente precisa</p>
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
            </MotionTabsContent>
            <MotionTabsContent
              value="category-three"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("category-three") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Category
                    </p>
                    <p className="inline text-sm font-semibold">5 min read</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Blog title heading will go here
                    </h2>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Category
                    </p>
                    <p className="inline text-sm font-semibold">5 min read</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Blog title heading will go here
                    </h2>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Category
                    </p>
                    <p className="inline text-sm font-semibold">5 min read</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Blog title heading will go here
                    </h2>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
                <div className="flex size-full flex-col items-start justify-start">
                  <a href="#" className="mb-6 w-full">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="aspect-video size-full object-cover"
                    />
                  </a>
                  <div className="rb-4 mb-4 flex w-full items-center justify-start">
                    <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                      Category
                    </p>
                    <p className="inline text-sm font-semibold">5 min read</p>
                  </div>
                  <a
                    className="mb-2 flex w-full flex-col items-start justify-start"
                    href="#"
                  >
                    <h2 className="text-xl font-bold md:text-2xl">
                      Blog title heading will go here
                    </h2>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <Button
                    title="Read more"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                    className="mt-6 flex items-center justify-center gap-x-2"
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </MotionTabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
