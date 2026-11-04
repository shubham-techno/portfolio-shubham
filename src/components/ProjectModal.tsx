import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Layers, CheckCircle, ExternalLink } from 'lucide-react';
import { ProjectData } from './ProjectsSection';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.col2Img);
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }
  }, [project, onClose]);

  if (!project) return null;

  const allImages = [project.col2Img, project.col1Img1, project.col1Img2];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#121212] border border-white/10 rounded-[32px] sm:rounded-[40px] shadow-2xl p-6 sm:p-8 md:p-10 z-10 my-auto text-[#D7E2EA] overflow-hidden"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6 mb-6">
            <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-widest text-white/50">
              <span className="text-[#B600A8] font-bold">PROJECT {project.number}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mt-1 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Media Showcase */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-[24px] overflow-hidden bg-black/40 border border-white/10 relative">
              <img
                src={activeImage}
                alt="Active Render"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-3">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`relative w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img ? 'border-[#B600A8] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Deliverables & Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/[0.03] p-5 sm:p-6 rounded-2xl border border-white/5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                <Layers className="w-4 h-4 text-[#B600A8]" />
                <span>Scope & Deliverables</span>
              </div>
              <ul className="flex flex-col gap-2">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50 mb-2">
                  <Sparkles className="w-4 h-4 text-[#BE4C00]" />
                  <span>Pipeline & Tooling</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Engineered using Cinema 4D, Redshift/Octane, and WebGL custom GLSL fragment shaders.
                  Calibrated for 60fps real-time client presentations.
                </p>
              </div>

              <div className="pt-4 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => onClose()}
                  className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                >
                  <span>Request Similar Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
