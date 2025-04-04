"use client";

import Container from "@/utils/Container";
import { Button } from "@nextui-org/react";

export default function Hero() {
  return (
    <Container>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <div className="flex space-x-4">
            <Button
              color="primary"
              auto
              className="px-5 py-3 text-base font-medium rounded-lg"
            >
              Get started
            </Button>
            <Button
              variant="bordered"
              auto
              className="px-5 py-3 text-base font-medium rounded-lg"
            >
              Speak to Sales
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </Container>
  );
}
