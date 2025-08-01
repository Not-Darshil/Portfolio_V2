import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import StarIcon from "@/assets/icons/star.svg"
import BookCover from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/github.svg'
import PythonIcon from '@/assets/icons/html5.svg'
import ExpressIcon from '@/assets/icons/react.svg'
import GithubIcon from '@/assets/icons/github.svg'
import BraveIcon from '@/assets/icons/chrome.svg'
import mapImage from "@/assets/images/map.png"
import SmileMemoji from '@/assets/images/memoji-smile.png'
import { CardHeader } from "@/components/CardHeader";
import { ToolItems } from "@/components/ToolItems";

const Tools = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'Express',
    iconType: ExpressIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Brave',
    iconType: BraveIcon,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji:'🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji:'📸',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji:'🥾',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji:'🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji:'🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Fitness',
    emoji:'💪',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji:'📕',
    left: '45%',
    top: '70%',
  },
]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about me who I am, what I do, and what inspires me." />
      <div className="mt-20 flex flex-col gap-8 ">
        <Card className="h-[320px]">
          <CardHeader title = "My Reads" description="Explore the books shaping my perspectives.">
          </CardHeader>
          <div className="w-40 mx-auto mt-8 ">
            <Image src={BookCover} alt="Book Cover" className=""></Image>
          </div>
        </Card>
        <Card className="h-[320px] p-0">
          <CardHeader title="My Toolbox" 
          description="Explore the technologies and tools I use to craft exceptional digital experiences."
          className="px-6 pt-6" 
          ></CardHeader>
          <ToolItems items= {Tools} className="mt-6 "></ToolItems>
          <ToolItems items= {Tools} className="mt-6 " itemWrapperClassName="-translate-x-1/2"></ToolItems>
        </Card>
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyof the digital realm." className="px-6 py-6"></CardHeader>
          <div className=" relative flex-1 h-full w-full">
            {
              hobbies.map(hobby => (
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-100 to-sky-400  rounded-full py-1.5 absolute  " style={{
                  left: hobby.left,
                  top: hobby.top,
                }}>
                  <span className=" font-medium text-gray-950 ">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))
            }
          </div>
        </Card>
        <Card className=" h-[320px] p-0 relative">
            <Image src={mapImage} alt="map" className="h-full w-full object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={SmileMemoji} alt="smiling memoji" className="size-20" />
            </div>
        </Card>
      </div>
      </div>
    </div>
  )
};
