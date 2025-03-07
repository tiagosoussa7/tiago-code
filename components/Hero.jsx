"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSFill,
} from "react-icons/ri";

//components
import { Socials } from "./Socials";
import { Photo } from "./Photo";
import { Badge } from "./Badge";

export const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/** text */}
          <div
            className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0
          text-center xl:text-left z-20 relative"
          >
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">
              <span>Transformando</span>
              <br />
              <TypeAnimation
                preRenderFirstString={true}
                sequence={["Ideias", 2000, "Em Realidade Digital", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={false}
                className="ml-2 text-primary"
              />
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              brief description with insigths into mmyself, my vocational
              journey, and what i engage in professionally.
            </p>
            {/** buttons */}
            <div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0
            mb-12"
            >
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contate-me
                  <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button>
            </div>
            {/** social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/** image */}
          <div className="hidden xl:flex relative">
            {/** badge 1 */}
            <Badge
              containerStyles="absolute top-[25%] -left-[9rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="anos de experiência"
            />
            {/** badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="k"
              badgeText="projetos concluídos"
            />
            {/** badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-16"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText="k"
              badgeText="clientes satisfeitos"
            />

            <div className="w-[500px] h-[500px] absolute -top-1 -right-2">
              <Image
                src="/graph1.png"
                fill
                quality="100"
                alt=""
                className="object-contain z-10
                "
              />
              <Image
                src="/graph (3).png"
                fill
                quality="100"
                alt=""
                className="object-contain"
              />
            </div>
            <Photo />
          </div>
        </div>
        {/** icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSFill className="text-2xl text-primary" />
        </div>
      </div>
    </section>
  );
};
