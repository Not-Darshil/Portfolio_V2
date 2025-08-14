'use client';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import StarIcon from "@/assets/icons/star.svg"
import BookCover from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import PythonIcon from '@/assets/icons/python.svg'
import ExpressIcon from '@/assets/icons/express.svg'
import GithubIcon from '@/assets/icons/github.svg'
import ReactIcon from '@/assets/icons/react.svg'
import NodeJSIcon from '@/assets/icons/nodejs.svg'
import NextJSIcon from '@/assets/icons/next.svg'
import BraveIcon from '@/assets/icons/brave.svg'
import SQLIcon from '@/assets/icons/sql.svg'
import mapImage from "@/assets/images/map.jpg"
import SmileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolItems } from "@/components/ToolItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const Tools = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'Node JS',
    iconType: NodeJSIcon,
  },
  {
    title: 'Express JS',
    iconType: ExpressIcon,
  },
  {
    title: 'Next JS',
    iconType: NextJSIcon,
  },
  {
    title: 'Git/ Github',
    iconType: GithubIcon,
  },
  {
    title: 'React JS',
    iconType: ReactIcon,
  },
  {
    title: 'Brave',
    iconType: BraveIcon,
  },
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
]

const hobbies = [
  {
    title: 'Sports',
    emoji: '🏏',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Cooking',
    emoji: '🍪',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Chess',
    emoji: '♟️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji: '💪',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📕',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = ({ id }: { id?: string }) => {
  const constraintRef = useRef(null);
  return (
    <div id={id} className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about me who I am, what I do, and what inspires me." />
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0 ">
                <Image src={BookCover} alt="Book Cover" className=""></Image>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              ></CardHeader>
              <ToolItems items={Tools} className="" itemsWrapperClassName="animate-move-left [animation-duration:15s]"></ToolItems>
              <ToolItems items={Tools} className="mt-6 " itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"></ToolItems>
            </Card>
          </div>
        </div>
        <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyof the digital realm." className="px-6 py-6"></CardHeader>
            <div className=" relative flex-1" ref={constraintRef}>
              {
                hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-100 to-sky-400  rounded-full py-1.5 absolute  " style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                  >
                    <span className=" font-medium text-gray-950 ">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))
              }
            </div>
          </Card>

          <Card className=" h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r after:content-[''] after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <div className="absolute inset-0 bg-gradient-to-r rounded-full from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 bg-gradient-to-r rounded-full  from-emerald-300 -z-10 to-sky-400 "></div>
              <Image src={SmileMemoji} alt="smiling memoji" className="size-20 z-0" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
};
