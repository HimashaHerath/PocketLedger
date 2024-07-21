"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LottieAnimation {
  v: string;
  meta: { g: string; a: string; k: string; d: string; tc: string };
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: { id: string; layers: any[] }[];
  layers: any[];
}

interface HeroProps {
  lottieSrc: LottieAnimation;
  title: string;
  subtitle?: string;
  description: string;
  primaryLink: string;
  secondaryLink: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  buttonVisibility?: { primary: boolean; secondary: boolean };
}

const Hero: React.FC<HeroProps> = ({
  lottieSrc,
  title,
  subtitle = "",
  description,
  primaryLink,
  secondaryLink,
  primaryButtonText,
  secondaryButtonText,
  buttonVisibility = { primary: true, secondary: true },
}) => {
  return (
    <div>
      <section className="bg-white text-white h-screen flex items-center">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-96 sm:h-112 lg:h-128 xl:h-144 2xl:h-160">
            <div className="relative h-full w-full flex items-center justify-center">
              <Player
                autoplay
                loop
                src={lottieSrc}
                className="w-full max-w-lg lg:max-w-xl"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-black text-5xl font-bold leading-none sm:text-6xl">
              {title}
              <span className="text-gray-500"> {subtitle}</span>
            </h1>
            <p className="text-gray-700 mt-6 mb-8 text-lg sm:mb-12">{description}</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              {buttonVisibility.primary && (
                <Link href={primaryLink}>
                  <Button size="lg">{primaryButtonText}</Button>
                </Link>
              )}
              {buttonVisibility.secondary && (
                <Link href={secondaryLink}>
                  <Button variant="secondary" size="lg">
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
