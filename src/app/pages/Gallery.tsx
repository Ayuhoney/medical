import React, { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router";
import { PageHero, BookingBanner } from "@/app/components/ui";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { IMAGES, VIDEOS, IMAGE_GALLERIES } from "@/app/constants";
import {
  Sparkles, Award, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight,
  Eye, ArrowUpRight, Star, Camera, Stethoscope, Heart, Shield, Calendar, Clock
} from "lucide-react";

import awardRegional  from "@/imports/award-regional-winner.png";
import awardFinalist  from "@/imports/award-finalist.png";
import awardISC       from "@/imports/award-isc-winner.jpg";
import logoANU        from "@/imports/logo-anu.png";
import logoRACGP      from "@/imports/logo-racgp.png";
import awardWinner2022 from "@/imports/award-winner-2022.png";
import logoAgpal      from "@/imports/logo-agpal-award.png";
import logoSCI        from "@/imports/logo-sci-award.webp";

/* ─── Reusable Image Carousel ─────────────────────────────────────────────── */
function ImageCarousel({ images, label }: { images: string[]; label: string }) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden bg-[#0D1F2D] shadow-lg group aspect-[4/3]">
        {/* Current Image */}
        <img
          src={images[idx]}
          alt={`${label} ${idx + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/80 via-transparent to-transparent" />

        {/* Left / Right arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0A7E94] text-white flex items-center justify-center transition-colors shadow-md"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0A7E94] text-white flex items-center justify-center transition-colors shadow-md"
        >
          <ChevronRight size={18} />
        </button>

        {/* Expand */}
        <button
          onClick={() => setLightbox(images[idx])}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#0A7E94] flex items-center justify-center text-white transition-colors"
        >
          <Eye size={14} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 font-sans">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-[#7EC8D8] w-4" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0D1F2D]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Full size" className="max-w-4xl max-h-[90vh] object-contain rounded-xl shadow-2xl" />
          <button className="absolute top-5 right-6 text-white text-3xl hover:text-[#7EC8D8]">&times;</button>
        </div>
      )}
    </>
  );
}

const BADGE_CREDS = [
  { src: awardRegional,   title: "Regional Winner",         sub: "Local Business Awards",           cat: "Winner" },
  { src: awardFinalist,   title: "Finalist",                sub: "Local Business Awards",           cat: "Finalist" },
  { src: awardISC,        title: "ISC Winner",              sub: "Specialist Skin Clinic",          cat: "Skin Cancer" },
  { src: awardWinner2022, title: "Winner 2022",             sub: "Clinical Excellence Award",       cat: "Innovation" },
  { src: logoAgpal,       title: "AGPAL Accredited",        sub: "Australian General Practice",     cat: "Quality" },
  { src: logoRACGP,       title: "RACGP Members",           sub: "Royal College of GPs",            cat: "Academic" },
  { src: logoANU,         title: "ANU Teaching Clinic",     sub: "Australian National University",  cat: "Education" },
  { src: logoSCI,         title: "Skin Cancer Institute",   sub: "Recognised Member Clinic",        cat: "Specialist" },
];

/* ─── Premium Before & After Drag Slider ─────────────────────────────────── */
function BeforeAfterSlider({ beforeImg, afterImg, treatmentName, description }: {
  beforeImg: string;
  afterImg: string;
  treatmentName: string;
  description: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };

  return (
    <div className="bg-[#0D1F2D]/95 rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Info panel */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#7EC8D8] flex items-center gap-1.5">
            <Sparkles size={12} /> Interactive Showcase
          </span>
          <h3 className="font-serif text-white text-2xl md:text-3xl leading-tight">{treatmentName}</h3>
          <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">{description}</p>
          <div className="pt-4 flex flex-wrap gap-3">
            <span className="text-[10px] uppercase font-semibold font-sans tracking-wider bg-white/10 text-white px-3.5 py-1.5 rounded-full border border-white/5">
              Before &amp; After
            </span>
            <span className="text-[10px] uppercase font-semibold font-sans tracking-wider bg-[#0A7E94] text-white px-3.5 py-1.5 rounded-full shadow-md">
              Dr Kishani Weerasena
            </span>
          </div>
          <div className="pt-6">
            <Link to="/book" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E] text-xs py-2.5 px-6 rounded-full inline-flex items-center gap-2">
              <Calendar size={14} /> Book Consultation
            </Link>
          </div>
        </div>

        {/* Drag image container */}
        <div className="lg:col-span-7">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/5 shadow-inner"
          >
            {/* After Image (Full width base) */}
            <img src={afterImg} alt="After Treatment" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded">
              AFTER TREATMENT
            </div>

            {/* Before Image (Overlay width controlled by slider) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={beforeImg}
                alt="Before Treatment"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded">
                BEFORE TREATMENT
              </div>
            </div>

            {/* Slider bar & handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#0D1F2D] flex items-center justify-center shadow-lg border-2 border-[#0A7E94] hover:scale-110 transition-transform">
                <ChevronLeft size={12} className="absolute left-1" />
                <ChevronRight size={12} className="absolute right-1" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Premium Glassmorphic Card Showcase ────────────────────────────────── */
function GalleryCard({ src, title, category, description, onClick }: {
  src: string;
  title: string;
  category: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] bg-[#0D1F2D] border border-white/5 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={src}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/95 via-[#0D1F2D]/35 to-transparent opacity-90 transition-all duration-300" />

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
        <span className="text-[9px] tracking-widest uppercase font-bold text-[#7EC8D8] mb-1.5">
          {category}
        </span>
        <h3 className="font-serif text-white text-lg leading-tight mb-2 group-hover:text-[#7EC8D8] transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-xs font-sans line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
        <span className="bg-white/90 backdrop-blur-sm text-[#0D1F2D] text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
          <Eye size={12} /> Expand Portrait
        </span>
      </div>
    </div>
  );
}

/* ─── Video Library Showcase Card ─────────────────────────────────────────── */
function VideoShowcaseCard({ id, src, title, subtitle, description, muted, playing, onToggleMute, onTogglePlay, videoRef }: {
  id: string; src: string; title: string; subtitle: string; description: string;
  muted: boolean; playing: boolean;
  onToggleMute: () => void; onTogglePlay: () => void;
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  return (
    <div className="bg-[#0D1F2D]/95 border border-white/5 rounded-3xl overflow-hidden shadow-lg flex flex-col h-full group">
      <div className="relative aspect-video bg-black overflow-hidden">
        <video ref={videoRef} src={src} autoPlay muted={muted} loop playsInline
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-103" />
        
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[#0A7E94]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Video Player Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button onClick={onToggleMute}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#0A7E94] flex items-center justify-center text-white backdrop-blur-sm transition-colors">
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
          <button onClick={onTogglePlay}
            className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#0A7E94] flex items-center justify-center text-white backdrop-blur-sm transition-colors">
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[9px] tracking-widest uppercase text-[#7EC8D8] font-bold mb-1.5">{subtitle}</span>
        <h3 className="font-serif text-white text-base md:text-lg mb-2">{title}</h3>
        <p className="text-white/60 text-xs leading-relaxed font-sans mb-5">{description}</p>
        <Link to="/book" className="mt-auto inline-flex items-center gap-1.5 text-xs text-[#7EC8D8] font-semibold hover:underline">
          Book Treatment Room <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}

const LUXURY_SECTIONS = [
  { id: "awards",    label: "Awards & Milestones",  desc: "Local Business Awards, gala night highlights, and official team certifications.", icon: <Award size={14} /> },
  { id: "treatments",label: "Clinical Treatments",  desc: "Surgical, aesthetic RF, PDO threads, laser skin checks and dermatologist results.", icon: <Sparkles size={14} /> },
  { id: "clinic",    label: "Clinic & Equipment",   desc: "Our premium clinical rooms, advanced handpieces, and reception interiors.", icon: <Camera size={14} /> },
  { id: "videos",    label: "Video library",        desc: "Watch our registered nurse therapists executing modern dermatology procedures.", icon: <Play size={14} /> },
] as const;
type SectionId = (typeof LUXURY_SECTIONS)[number]["id"];

export default function Gallery() {
  const [activeSection, setActiveSection] = useState<SectionId>("awards");
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; category: string; description: string } | null>(null);

  // Video controller states
  const [mutedStates, setMutedStates] = useState<Record<string, boolean>>({
    clearLift: true, clearSkin: true, clearVein: true, clearSkinPro: true, laserRoom: true, therapistSession: true, faceliftDemo: true, surgeryProc: true
  });
  const [playStates, setPlayStates] = useState<Record<string, boolean>>({
    clearLift: true, clearSkin: true, clearVein: true, clearSkinPro: true, laserRoom: true, therapistSession: true, faceliftDemo: true, surgeryProc: true
  });
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const toggleMute = useCallback((id: string) => {
    const v = videoRefs.current[id];
    if (v) {
      v.muted = !v.muted;
      setMutedStates(prev => ({ ...prev, [id]: v.muted }));
    }
  }, []);

  const togglePlay = useCallback((id: string) => {
    const v = videoRefs.current[id];
    if (v) {
      if (v.paused) { v.play(); setPlayStates(prev => ({ ...prev, [id]: true })); }
      else          { v.pause(); setPlayStates(prev => ({ ...prev, [id]: false })); }
    }
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.awardNightGroup}
        tag="GALLERY"
        title={<>Accreditations, Awards<br /><em>&amp; Treatment Gallery</em></>}
        subtitle="Explore our regional local business awards and premium medical skincare operations."
      />

      {/* ── Minimalist Luxury Selector Dock (No Scrolling) ───────────────── */}
      <section className="bg-white border-b border-[rgba(10,126,148,0.06)] py-6 sticky top-[100px] z-40 backdrop-blur-md bg-white/95">
        <div className="site-container max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-1.5 bg-[#EDF8FB] rounded-2xl border border-[rgba(10,126,148,0.1)] shadow-inner">
            {LUXURY_SECTIONS.map(sec => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`py-3 px-4 rounded-xl text-[11px] font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeSection === sec.id
                    ? "bg-[#0A7E94] text-white shadow-md"
                    : "text-[#5C7A8A] hover:bg-[#D8F2F7]/50 hover:text-[#0A7E94]"
                }`}
              >
                {sec.icon}
                {sec.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content area ────────────────────────────────────────────── */}
      <section className="section-py section-white min-h-[600px]">
        <div className="site-container">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#0A7E94] bg-[#EDF8FB] px-3.5 py-1.5 rounded-full">
              Category Showcase
            </span>
            <h2 className="font-serif text-[#0D1F2D] text-3xl md:text-4xl">
              {LUXURY_SECTIONS.find(s => s.id === activeSection)?.label}
            </h2>
            <p className="body-text text-sm max-w-xl mx-auto">
              {LUXURY_SECTIONS.find(s => s.id === activeSection)?.desc}
            </p>
          </div>

          {/* ── AWARDS & MILESTONES ── */}
          {activeSection === "awards" && (
            <div className="space-y-16">
              {/* Highlight photo */}
              <ScrollReveal>
                <div className="bg-[#0D1F2D] rounded-3xl overflow-hidden border border-white/5 shadow-xl p-8 max-w-5xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <img src={IMAGES.awardNightGroup} alt="Gala group" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="md:col-span-5 space-y-4">
                      <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#7EC8D8] block">Regional Winner 2022</span>
                      <h3 className="font-serif text-white text-2xl">Local Business Awards Night</h3>
                      <p className="text-white/60 text-xs md:text-sm font-sans leading-relaxed">
                        Dr Kishani Weerasena and the team celebrating regional success at the official Eurobodalla business community gala dinner.
                      </p>
                      <div className="pt-4">
                        <Link to="/book" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E] text-xs py-2 px-5 rounded-full inline-flex">
                          Book Consultation
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Grid of awards night photos */}
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[#0A7E94]">Gala Celebration Archive</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <GalleryCard src={IMAGES.awardNightCheer} title="Pure Celebration" category="Awards Gala" description="The clinical team cheering as the practice is announced as the regional winner." onClick={() => setSelectedPhoto({ src: IMAGES.awardNightCheer, title: "Pure Celebration", category: "Awards Gala", description: "The clinical team cheering as the practice is announced as the regional winner." })} />
                  <GalleryCard src={IMAGES.awardNightStage} title="Stage Acceptance" category="Accolades" description="Accepting the regional healthcare excellence plaque under the spotlights." onClick={() => setSelectedPhoto({ src: IMAGES.awardNightStage, title: "Stage Acceptance", category: "Accolades", description: "Accepting the regional healthcare excellence plaque under the spotlights." })} />
                  <GalleryCard src={IMAGES.awardNightTeam} title="Staff Dedication" category="Clinical Crew" description="A memorable group portrait of our doctors, nurses and administration staff." onClick={() => setSelectedPhoto({ src: IMAGES.awardNightTeam, title: "Staff Dedication", category: "Clinical Crew", description: "A memorable group portrait of our doctors, nurses and administration staff." })} />
                  <GalleryCard src={IMAGES.awardNightCelebration} title="Awards Night Gala" category="Celebration" description="Raising a toast to high clinical standards and patient trust in Batemans Bay." onClick={() => setSelectedPhoto({ src: IMAGES.awardNightCelebration, title: "Awards Night Gala", category: "Celebration", description: "Raising a toast to high clinical standards and patient trust in Batemans Bay." })} />
                  <GalleryCard src={IMAGES.awardNightTrophy} title="Accreditation Plaque" category="Credentials" description="Our official winner's trophy presented at the Eurobodalla gala dinner." onClick={() => setSelectedPhoto({ src: IMAGES.awardNightTrophy, title: "Accreditation Plaque", category: "Credentials", description: "Our official winner's trophy presented at the Eurobodalla gala dinner." })} />
                  <GalleryCard src={IMAGES.awardNightTrophy2} title="Business Plaque" category="Credentials" description="Close-up photograph of the regional excellence award plaque." onClick={() => setSelectedPhoto({ src: IMAGES.awardNightTrophy2, title: "Business Plaque", category: "Credentials", description: "Close-up photograph of the regional excellence award plaque." })} />
                  <GalleryCard src={IMAGE_GALLERIES.awardsClose[0]} title="Gold Category Plaque" category="Credentials" description="Gold category winner plaque honoring community healthcare." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.awardsClose[0], title: "Gold Category Plaque", category: "Credentials", description: "Gold category winner plaque honoring community healthcare." })} />
                  <GalleryCard src={IMAGE_GALLERIES.awardsClose[1]} title="Business Winner Badge" category="Credentials" description="Official Local Business Awards Regional Winner presentation plaque." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.awardsClose[1], title: "Business Winner Badge", category: "Credentials", description: "Official Local Business Awards Regional Winner presentation plaque." })} />
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-10 border-t border-[rgba(10,126,148,0.06)]">
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[#0A7E94] mb-8 text-center">Registered Clinic Accreditations</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {BADGE_CREDS.slice(0, 4).map(b => (
                    <div key={b.title} className="bg-[#EDF8FB]/30 rounded-2xl p-6 border border-[rgba(10,126,148,0.05)] text-center flex flex-col items-center">
                      <img src={b.src} alt={b.title} className="h-12 object-contain mb-4" />
                      <h5 className="font-serif text-[#0D1F2D] text-sm font-semibold">{b.title}</h5>
                      <p className="text-[#5C7A8A] text-[11px] font-sans mt-1">{b.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── CLINICAL TREATMENTS ── */}
          {activeSection === "treatments" && (
            <div className="space-y-16">
              
              {/* Interactive Before & After Slider */}
              <ScrollReveal>
                <BeforeAfterSlider
                  beforeImg={IMAGE_GALLERIES.pdo[0]}
                  afterImg={IMAGE_GALLERIES.pdo[3]}
                  treatmentName="PDO Mono Thread Treatment"
                  description="A non-invasive aesthetic procedure using fine threads to lift, tighten, and stimulate natural collagen production in the deep dermal layers. Performed in our sterile clinic rooms."
                />
              </ScrollReveal>

              {/* Treatment card showcase grid */}
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[#0A7E94]">Skincare &amp; Procedure Archive</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <GalleryCard src={IMAGE_GALLERIES.laser[0]} title="Laser Skin Resurfacing" category="Dermal Laser" description="Harmony XL PRO laser skin resurfacing procedure targets blemishes and wrinkles." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.laser[0], title: "Laser Skin Resurfacing", category: "Dermal Laser", description: "Harmony XL PRO laser skin resurfacing procedure targets blemishes and wrinkles." })} />
                  <GalleryCard src={IMAGE_GALLERIES.laser[1]} title="Pigmentation Clearance" category="Dermal Laser" description="Clearing facial pigmentation and evening skin tone using targeted laser waves." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.laser[1], title: "Pigmentation Clearance", category: "Dermal Laser", description: "Clearing facial pigmentation and evening skin tone using targeted laser waves." })} />
                  <GalleryCard src={IMAGE_GALLERIES.pdo[1]} title="RF Skin Tightening" category="Aesthetic Medicine" description="Applying radio-frequency skin tightening waves to restore skin elasticity." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.pdo[1], title: "RF Skin Tightening", category: "Aesthetic Medicine", description: "Applying radio-frequency skin tightening waves to restore skin elasticity." })} />
                  <GalleryCard src={IMAGE_GALLERIES.pdo[2]} title="Aesthetic Consultation" category="Skin Analysis" description="Clinical mapping of facial volume before executing dermal injectable treatments." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.pdo[2], title: "Aesthetic Consultation", category: "Skin Analysis", description: "Clinical mapping of facial volume before executing dermal injectable treatments." })} />
                  <GalleryCard src={IMAGE_GALLERIES.surgery[0]} title="Sterile Surgical Suite" category="Minor Surgery" description="Our doctors executing safe skin excision procedures inside Batemans Bay theater." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.surgery[0], title: "Sterile Surgical Suite", category: "Minor Surgery", description: "Our doctors executing safe skin excision procedures inside Batemans Bay theater." })} />
                  <GalleryCard src={IMAGE_GALLERIES.surgery[1]} title="Mole Excisions" category="Minor Surgery" description="Surgical removal of suspicious skin lesions using precision sterile setups." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.surgery[1], title: "Mole Excisions", category: "Minor Surgery", description: "Surgical removal of suspicious skin lesions using precision sterile setups." })} />
                  <GalleryCard src={IMAGE_GALLERIES.skinTalk[0]} title="Public Skin Health Education" category="Community Talks" description="Dr Kishani presenting clinical findings on skin cancer prevention to the public." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.skinTalk[0], title: "Public Skin Health Education", category: "Community Talks", description: "Dr Kishani presenting clinical findings on skin cancer prevention to the public." })} />
                  <GalleryCard src={IMAGE_GALLERIES.skinTalk[1]} title="Melanoma Awareness Seminar" category="Community Talks" description="Our clinical specialists holding community educational programs about early detection." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.skinTalk[1], title: "Melanoma Awareness Seminar", category: "Community Talks", description: "Our clinical specialists holding community educational programs about early detection." })} />
                </div>
              </div>

            </div>
          )}

          {/* ── CLINIC & EQUIPMENT ── */}
          {activeSection === "clinic" && (
            <div className="space-y-16">
              
              {/* Highlight Slideshow */}
              <div className="max-w-4xl mx-auto">
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[#0A7E94] mb-4 text-center">Featured Clinic Tour</h4>
                <ImageCarousel images={IMAGE_GALLERIES.clinic.slice(0, 8)} label="Clinic" />
              </div>

              {/* Equipment Grid */}
              <div className="space-y-6">
                <h4 className="text-[10px] tracking-widest uppercase font-bold text-[#0A7E94]">Harmony XL PRO Tech &amp; Interior Gallery</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <GalleryCard src={IMAGES.clinicLobby} title="Clinic Reception Suite" category="Interiors" description="Modern reception foyer welcoming patients at Beach Road Surgery." onClick={() => setSelectedPhoto({ src: IMAGES.clinicLobby, title: "Clinic Reception Suite", category: "Interiors", description: "Modern reception foyer welcoming patients at Beach Road Surgery." })} />
                  <GalleryCard src={IMAGES.clinicInterior} title="Aesthetic Treatment Suite" category="Interiors" description="Clean, professional aesthetic consultation and treatment room." onClick={() => setSelectedPhoto({ src: IMAGES.clinicInterior, title: "Aesthetic Treatment Suite", category: "Interiors", description: "Clean, professional aesthetic consultation and treatment room." })} />
                  <GalleryCard src={IMAGES.laserDevice} title="Harmony XL PRO Laser System" category="Dermal Devices" description="Alma Laser system powering non-ablative face lifts and acne skin treatments." onClick={() => setSelectedPhoto({ src: IMAGES.laserDevice, title: "Harmony XL PRO Laser System", category: "Dermal Devices", description: "Alma Laser system powering non-ablative face lifts and acne skin treatments." })} />
                  <GalleryCard src={IMAGES.skinCheck} title="MoleMax HD Digital Mapping" category="Skin Cancer Tech" description=" Larisa executing computerized dermatoscopy mole tracking." onClick={() => setSelectedPhoto({ src: IMAGES.skinCheck, title: "MoleMax HD Digital Mapping", category: "Skin Cancer Tech", description: " Larisa executing computerized dermatoscopy mole tracking." })} />
                  
                  {/* Equipment Handpieces */}
                  <GalleryCard src={IMAGE_GALLERIES.equipment[0]} title="ClearLift Laser Applicator" category="Applicators" description="Q-Switched Nd:YAG laser handpiece for collagen remodeling treatments." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.equipment[0], title: "ClearLift Laser Applicator", category: "Applicators", description: "Q-Switched Nd:YAG laser handpiece for collagen remodeling treatments." })} />
                  <GalleryCard src={IMAGE_GALLERIES.equipment[1]} title="ClearSkin PRO Laser Head" category="Applicators" description="Applicator with integrated cooling to treat active acne scars painlessly." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.equipment[1], title: "ClearSkin PRO Laser Head", category: "Applicators", description: "Applicator with integrated cooling to treat active acne scars painlessly." })} />
                  <GalleryCard src={IMAGE_GALLERIES.equipment[2]} title="ClearVein Vascular Applicator" category="Applicators" description="Precision laser handpiece for targeting deep facial vessels and redness." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.equipment[2], title: "ClearVein Vascular Applicator", category: "Applicators", description: "Precision laser handpiece for targeting deep facial vessels and redness." })} />
                  <GalleryCard src={IMAGE_GALLERIES.equipment[3]} title="iPixel Er:YAG Handpiece" category="Applicators" description="Fractional laser applicator for high-end micro-ablative skin resurfacing." onClick={() => setSelectedPhoto({ src: IMAGE_GALLERIES.equipment[3], title: "iPixel Er:YAG Handpiece", category: "Applicators", description: "Fractional laser applicator for high-end micro-ablative skin resurfacing." })} />
                </div>
              </div>

            </div>
          )}

          {/* ── VIDEO LIBRARY ── */}
          {activeSection === "videos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <VideoShowcaseCard
                id="clearLift"
                src={VIDEOS.clearLiftNew}
                title="ClearLift Laser Skin Tightening"
                subtitle="Hollywood Facelift Session"
                description="Watch our registered therapist executing the Nd:YAG laser treatment, stimulating deep collagen layers with no pain."
                muted={mutedStates.clearLift}
                playing={playStates.clearLift}
                onToggleMute={() => toggleMute("clearLift")}
                onTogglePlay={() => togglePlay("clearLift")}
                videoRef={el => { videoRefs.current["clearLift"] = el; }}
              />
              <VideoShowcaseCard
                id="clearSkin"
                src={VIDEOS.clearSkinNew}
                title="ClearSkin Acne Scar Resurfacing"
                subtitle="Dermal Laser Treatments"
                description="Watch our fractional laser procedure clearing deep acne scars, blemishes and promoting tissue regeneration."
                muted={mutedStates.clearSkin}
                playing={playStates.clearSkin}
                onToggleMute={() => toggleMute("clearSkin")}
                onTogglePlay={() => togglePlay("clearSkin")}
                videoRef={el => { videoRefs.current["clearSkin"] = el; }}
              />
              <VideoShowcaseCard
                id="clearVein"
                src={VIDEOS.clearVeinNew}
                title="ClearVein Capillary Laser Therapy"
                subtitle="Vascular Treatments"
                description="Treatment clip showing the removal of spider veins, vascular lesions, and facial redness in real-time."
                muted={mutedStates.clearVein}
                playing={playStates.clearVein}
                onToggleMute={() => toggleMute("clearVein")}
                onTogglePlay={() => togglePlay("clearVein")}
                videoRef={el => { videoRefs.current["clearVein"] = el; }}
              />
              <VideoShowcaseCard
                id="clearSkinPro"
                src={VIDEOS.clearSkinProWeb}
                title="Alma ClearSkin PRO Platform"
                subtitle="Technology Showcase"
                description="A cinematic look at the Harmony XL PRO laser skin rejuvenation technology and cooling face systems."
                muted={mutedStates.clearSkinPro}
                playing={playStates.clearSkinPro}
                onToggleMute={() => toggleMute("clearSkinPro")}
                onTogglePlay={() => togglePlay("clearSkinPro")}
                videoRef={el => { videoRefs.current["clearSkinPro"] = el; }}
              />
              <VideoShowcaseCard
                id="laserRoom"
                src={VIDEOS.clinic2291}
                title="Laser Suite Clinical Procedure"
                subtitle="Clinical Walkthrough"
                description="Watch original video footage inside our Batemans Bay aesthetic treatment room showcasing skin preparation."
                muted={mutedStates.laserRoom}
                playing={playStates.laserRoom}
                onToggleMute={() => toggleMute("laserRoom")}
                onTogglePlay={() => togglePlay("laserRoom")}
                videoRef={el => { videoRefs.current["laserRoom"] = el; }}
              />
              <VideoShowcaseCard
                id="therapistSession"
                src={VIDEOS.clinic2311}
                title="Dermal Therapist Protocol"
                subtitle="Laser Safety &amp; Gels"
                description="Clinical setup showing active safety protocols, cooling gels application, and patient protection systems."
                muted={mutedStates.therapistSession}
                playing={playStates.therapistSession}
                onToggleMute={() => toggleMute("therapistSession")}
                onTogglePlay={() => togglePlay("therapistSession")}
                videoRef={el => { videoRefs.current["therapistSession"] = el; }}
              />
              <VideoShowcaseCard
                id="surgeryProc"
                src={VIDEOS.clinicSurgery}
                title="Minor Surgical Procedure"
                subtitle="Skin Cancer Surgery"
                description="Inside our accredited procedure room — Dr Walgamage performing a minor skin cancer excision with full sterile protocols."
                muted={mutedStates.surgeryProc}
                playing={playStates.surgeryProc}
                onToggleMute={() => toggleMute("surgeryProc")}
                onTogglePlay={() => togglePlay("surgeryProc")}
                videoRef={el => { videoRefs.current["surgeryProc"] = el; }}
              />
            </div>
          )}

        </div>
      </section>

      {/* ── Luxury Detailed Lightbox Modal ────────────────────────────────── */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1F2D]/95 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden border border-[rgba(10,126,148,0.12)] shadow-2xl relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-[#0A7E94] flex items-center justify-center text-white transition-colors text-lg z-10"
            >
              &times;
            </button>
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Image side */}
              <div className="md:col-span-7 bg-black flex items-center justify-center aspect-[4/3] md:aspect-auto md:min-h-[500px]">
                <img src={selectedPhoto.src} alt={selectedPhoto.title} className="w-full h-full object-cover" />
              </div>

              {/* Data side */}
              <div className="md:col-span-5 p-8 flex flex-col justify-between bg-white">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] tracking-widest uppercase font-bold text-[#0A7E94] bg-[#EDF8FB] px-3 py-1 rounded-full">
                      {selectedPhoto.category}
                    </span>
                    <h3 className="font-serif text-[#0D1F2D] text-2xl md:text-3xl mt-4 mb-2">{selectedPhoto.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-body-text text-sm leading-relaxed font-sans">
                      {selectedPhoto.description}
                    </p>
                    <div className="flex gap-4 py-2 border-y border-[rgba(10,126,148,0.06)] text-xs text-[#5C7A8A]">
                      <span className="flex items-center gap-1"><Shield size={14} className="text-[#0A7E94]" /> Verified Result</span>
                      <span className="flex items-center gap-1"><Clock size={14} className="text-[#0A7E94]" /> Real Patient</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 space-y-3">
                  <Link
                    to="/book"
                    onClick={() => setSelectedPhoto(null)}
                    className="btn-primary w-full bg-[#0A7E94] hover:bg-[#086B7E] text-xs py-3 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Calendar size={14} /> Schedule Treatment Consultation
                  </Link>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="w-full text-center text-xs font-semibold text-[#5C7A8A] hover:text-[#0a7e94] py-1 transition-colors"
                  >
                    Close Image Foyer
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <BookingBanner />
    </>
  );
}
