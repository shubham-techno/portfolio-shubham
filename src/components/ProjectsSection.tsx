import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  description: string;
  year: string;
  deliverables: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    year: '2026',
    deliverables: ['3D Environment', 'Octane Shader System', 'Interactive Web Reel'],
    description:
      'Immersive digital studio identity featuring volumetric atmospheric lighting, procedural chrome geometry, and bespoke sound-reactive particle simulations.',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    year: '2025',
    deliverables: ['Sculptural Forms', 'Spatial Typography', 'Brand Guidelines'],
    description:
      'Exploration of fluid glass physics and iridescence in motion. Built to examine how tactile lighting changes consumer perceptions of digital luxury products.',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    year: '2026',
    deliverables: ['Real-time WebGL', 'Procedural Flora', 'Interactive Installation'],
    description:
      'Architectural visual system capturing celestial cycles and bioluminescent flora. Seamlessly ported from Cinema 4D and Redshift into high-performance web scenes.',
    col1Img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Scale down as user scrolls past: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[520px] sm:min-h-[580px] md:h-[85vh] md:min-h-[640px] flex items-start justify-center sticky top-20 sm:top-24 md:top-32 mb-8 md:mb-0"
      style={{
        top: `calc(4.5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[45px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl transition-shadow flex flex-col gap-4 sm:gap-6"
      >
        {/* Top row: Number, Category label, Project name, Live Project button */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 sm:pb-5">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Huge Number */}
            <span className="font-black text-2xl sm:text-4xl md:text-6xl text-[#D7E2EA] leading-none tabular-nums">
              {project.number}
            </span>

            {/* Category Label */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-light uppercase tracking-wider text-[#D7E2EA]/70">
                {project.category}
              </span>
              <span className="text-white/20">/</span>
              {/* Project Name */}
              <h3 className="font-bold uppercase tracking-tight text-lg sm:text-2xl md:text-4xl text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton onClick={() => onOpenProject(project)} />
        </div>

        {/* Bottom row: Two-column image grid (Left: 40% with 2 stacked images on desktop, side-by-side on mobile; Right: 60% with 1 tall image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 flex-1 items-stretch">
          {/* Left Column (40% width / 5 cols) */}
          <div className="md:col-span-5 grid grid-cols-2 md:flex md:flex-col gap-3 sm:gap-6 justify-between">
            {/* Left Top Image */}
            <div
              onClick={() => onOpenProject(project)}
              className="w-full h-[110px] sm:h-[150px] md:h-[clamp(130px,16vw,230px)] rounded-[20px] sm:rounded-[32px] md:rounded-[50px] overflow-hidden group cursor-pointer relative bg-[#181818] border border-white/5"
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} detail view 1`}
                loading="lazy"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest bg-black/70 px-2.5 py-1 rounded-full text-white">
                  View Detail
                </span>
              </div>
            </div>

            {/* Left Bottom Image */}
            <div
              onClick={() => onOpenProject(project)}
              className="w-full h-[110px] sm:h-[150px] md:h-[clamp(160px,22vw,340px)] rounded-[20px] sm:rounded-[32px] md:rounded-[50px] overflow-hidden group cursor-pointer relative bg-[#181818] border border-white/5"
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} detail view 2`}
                loading="lazy"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest bg-black/70 px-2.5 py-1 rounded-full text-white">
                  View Detail
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (60% width / 7 cols) with 1 tall image */}
          <div
            onClick={() => onOpenProject(project)}
            className="md:col-span-7 h-[190px] sm:h-[280px] md:h-full rounded-[20px] sm:rounded-[32px] md:rounded-[50px] overflow-hidden group cursor-pointer relative bg-[#181818] border border-white/5"
          >
            <img
              src={project.col2Img}
              alt={`${project.name} hero render`}
              loading="lazy"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#D7E2EA] font-light">
                {project.description}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-32 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center leading-none text-[clamp(3rem,12vw,160px)] mb-16 md:mb-24">
            Project
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="relative pb-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
