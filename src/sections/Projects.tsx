import MovieSeriesAnalysis from "@/assets/images/projects/Project1.png";
import MovieSeriesRecommender from "@/assets/images/projects/Project2.png";
import aiStartupLandingPage from "@/assets/images/projects/Project3.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import GrainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Mini Project",
    year: "2024",
    title: "Movie Series Analysis",
    results: [
      { title: "Analyzed Naruto Series" },
      { title: "Made Character Network" },
      { title: "Built Theme Classification" },
    ],
    link: "https://github.com/Not-Darshil/movie-series-analysis",
    image: MovieSeriesAnalysis,
  },
  {
    company: "Side Project",
    year: "2025",
    title: "Movie Series Recommender",
    results: [
      { title: "Recommends Top 5 movies" },
      { title: "Analyzed TMDB Dataset" },
      { title: "Fetching Posters from API" },
    ],
    link: "https://movie-recommender-67cm.onrender.com/",
    image: MovieSeriesRecommender,
  },
  {
    company: "Client Project",
    year: "2024",
    title: "E Commerce Website",
    results: [
      { title: "Full Admin Control" },
      { title: "Integrated Razorpay Gateway" },
      { title: "Orders,Products Management" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="pb-16 lg:py-24">
      <div>
        <div className="container">
          <SectionHeader eyebrow="Real-worls Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."></SectionHeader>
          <div className="mt-10 md:mt-20 flex flex-col gap-20">
            {portfolioProjects.map((project, projectIndex )=> (
              <Card key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex *40}px )`
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                          <CheckCircleIcon className="size-5 md:size-6" />
                          {result.title}
                        </li>
                      ))}
                    </ul>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                  </div>
                </div>
              </Card>

            ))}
          </div>
        </div>
      </div>

    </section >

  );
};
