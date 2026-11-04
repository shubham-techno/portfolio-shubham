/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection, ProjectData } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen w-full overflow-x-clip font-['Kanit',sans-serif] selection:bg-[#B600A8] selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection onOpenProject={(proj) => setSelectedProject(proj)} />

      {/* Interactive Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
