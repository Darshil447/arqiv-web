"use client";

import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../src/lib /firebaseConfig";

import {
  Home,
  MessageSquare,
  Phone,
  User,
  Bell,
  Search,
  Building2,
  BadgeCheck,
  MessagesSquare,
  Heart,
  BellRing,
  Zap,
  ShieldCheck,
  Layers3,
} from "lucide-react"; 

const LandingPage = () => {
  const waitingListRef = useRef(null);
  const exploreRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const scrollToSection = (ref, offset = 0) => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  };

  const handleExploreScroll = () => {
    scrollToSection(exploreRef, 80);
  };

  const handleWaitingListScroll = () => {
    scrollToSection(waitingListRef, 80);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    setIsSubmitting(true);

    try {

      const documentData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        createdAt: serverTimestamp()
      };


      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, "Waiting_List"), documentData);



      setIsSubmitting(false);
      setShowSuccess(true);



      // Reset form after success
      setTimeout(() => {
        setFormData({ firstName: '', lastName: '', email: '', phone: '' });
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error("🔥 Firebase error details:", {
        code: error.code,
        message: error.message,
        stack: error.stack
      });

      setIsSubmitting(false);

      // You could add error handling here, like showing an error message
      alert("There was an error submitting your information. Please try again.");
    }
  };

  return (
    <div className="bg-[#FAFAF8] text-black font-sans selection:bg-[#D4A017] selection:text-white overflow-x-hidden force-logo-font">
      <style>{`
        .font-display {
          font-family: 'Archivo', sans-serif;
          font-weight: 700;
          letter-spacing: -0.03em;
        }
        .font-body {
          font-family: 'Archivo', sans-serif;
          letter-spacing: 0.012em;
        }
        .force-logo-font { font-family: 'Archivo', sans-serif; letter-spacing: -0.01em; }
        .force-logo-font .italic { font-style: normal !important; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
        @keyframes ticker  { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes float   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
        @keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
        @keyframes pulseDot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

        .au1 { animation:fadeUp .9s ease forwards; animation-delay:.10s; opacity:0; }
        .au2 { animation:fadeUp .9s ease forwards; animation-delay:.28s; opacity:0; }
        .au3 { animation:fadeUp .9s ease forwards; animation-delay:.46s; opacity:0; }
        .au4 { animation:fadeUp .9s ease forwards; animation-delay:.64s; opacity:0; }
        .ai  { animation:fadeIn 1.2s ease forwards; animation-delay:.55s; opacity:0; }

        .ticker-track { animation:ticker 32s linear infinite; }
        .floatEl { animation:float 4.5s ease-in-out infinite; }
        .pulseDot { animation:pulseDot 2s ease-in-out infinite; }

        .shimmer-text {
          background:linear-gradient(90deg,#D4A017 0%,#F0C84A 40%,#D4A017 65%,#B8890F 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 4s linear infinite;
        }

        @keyframes slideInUp {
          from { transform:translateY(20px); opacity:0; }
          to { transform:translateY(0); opacity:1; }
        }
        @keyframes checkmark {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes successPulse {
          0% { transform:scale(0.8); opacity:0; }
          50% { transform:scale(1.1); }
          100% { transform:scale(1); opacity:1; }
        }
        .success-animation { animation:slideInUp 0.5s ease forwards; }
        .checkmark-circle { animation:successPulse 0.6s ease forwards; }
        .checkmark-path { stroke-dasharray: 50; animation:checkmark 0.4s ease 0.3s forwards; }

        .card-hover { transition:transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease; }
        .card-hover:hover { transform:translateY(-5px); box-shadow:0 20px 50px rgba(0,0,0,.08); }

        .btn-gold { position:relative; overflow:hidden; transition:transform .25s ease, box-shadow .25s ease; }
        .btn-gold:hover { transform:translateY(-2px); box-shadow:0 10px 32px rgba(212,160,23,.32); }

        .section-label {
          font-family:'Archivo',sans-serif;
          font-size:14px;
          letter-spacing:2px;
          line-height:1.35;
          text-transform:uppercase;
          color:#6f5205;
          font-weight:800;
        }
        .divider { width:36px; height:1px; background:#D4A017; }

        .feat-line { position:relative; padding-left:18px; }
        .feat-line::before {
          content:''; position:absolute; left:0; top:50%;
          transform:translateY(-50%); width:7px; height:1px; background:#D4A017;
        }

        .mock-phone {
          background:#0E0E0E; border-radius:34px;
          border:1px solid rgba(255,255,255,.07);
          box-shadow:0 40px 90px rgba(0,0,0,.28);
        }

        .why-card { transition:all .3s ease; border-bottom:1px solid transparent; }
        .why-card:hover { border-bottom-color:#D4A017; }
        .why-icon { transition:all .3s ease; }
        .why-card:hover .why-icon { background:#D4A017; color:white; }
      `}</style>

      <Navbar />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-[86vh] flex flex-col justify-between px-4 text-center overflow-hidden bg-[#FAFAF8] border-b border-[#E8E8E4]">

        {/* ✨ BACKGROUND SYSTEM */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Base ambient glow */}
          <div className="hero-glow" />

          {/* Tech grid */}
          <div className="tech-lines" />

          {/* Floating blobs */}
          <div className="hero-blob top-[-10%] left-[-10%]" />
          <div className="hero-blob bottom-[-15%] right-[-10%]" />

          {/* Noise texture (premium touch) */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        </div>
        {/* Decorative SVG (lighter opacity) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-20 left-10 w-64 h-64 opacity-25" viewBox="0 0 100 100">
            <circle cx="10" cy="50" r="1.5" className="tech-dot" />
            <path d="M10 50 L40 50 L50 40 L80 40" stroke="#D4A017" strokeWidth="0.5" fill="none" />
            <circle cx="80" cy="40" r="1" fill="#D4A017" />
          </svg>

          <svg className="absolute bottom-40 right-10 w-80 h-80 opacity-25" viewBox="0 0 100 100">
            <path d="M90 20 L70 20 L60 35 L20 35" stroke="#D4A017" strokeWidth="0.5" fill="none" />
            <circle cx="90" cy="20" r="1.5" className="tech-dot" />
            <path d="M70 20 L70 60 L50 80" stroke="#D4A017" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="80" r="1" fill="#D4A017" />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="grow flex flex-col items-center justify-center relative z-10 py-10">

          <div className="au1 mb-10 flex items-center gap-3">
            <div className="divider" />
            <span className="text-[14px] tracking-[4px] uppercase font-body font-medium text-[#D4A017]">
              Trusted Professionals
            </span>
            <div className="divider" />
          </div>

          {/* ✨ HERO HEADING WITH GLOW */}
          <h1 className="relative font-display au2 text-[clamp(3.5rem,9vw,7.5rem)] font-light tracking-tight leading-[1.0] mb-10 max-w-5xl mx-auto text-black">

            {/* Glow behind text */}
            <span className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="hero-glow-center glow-animate" />
            </span>

            Find trusted local<br />
            experts. <span className="italic shimmer-text">Instantly.</span>
          </h1>

          <div className="au4 mt-8 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={handleExploreScroll}
              className="btn-gold bg-[#D4A017] text-white px-12 py-5 rounded-full font-body font-medium text-sm tracking-widest uppercase duration-300"
            >
              Explore
            </button>
            <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="animate-bounce opacity-40">
              <path d="M6 0V22M6 22L1 17M6 22L11 17" stroke="#D4A017" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* TICKER */}
        <div className="relative z-20 -mt-20 py-6 border-y border-[#E8E8E4] overflow-hidden bg-white/50 backdrop-blur-sm">
  <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
    {[
      "Electrician",
      "Plumber",
      "Handyman",
      "Locksmith",
      "Painting",
      "Pest Control",
      "Tiling",
      "Bricklaying",
      "Glazing",
      "Concreting",
      "Fencing",
      "Earthworks",
      "Retaining Walls",
      "Gardening",
      "Carpentry",
      "Paving",
      "Plastering",
      "Cleaning",
      "Mechanic",
      "Electrical Appliances",
      "HVAC / Air Conditioning",
      "Demolition",
      "Solar Panels",
      "Interior Design",
      "Pool / Spa Services",
      "Security Systems",
      "Moving Services",
      "Landscaping",
      "Tech / IT Services",
      "Pet Services",
      "Other / Miscellaneous"
    ].map((item, i) => (
      <span
        key={i}
        className="font-display text-base italic text-[#111]/70 flex items-center gap-12"
      >
        {item}
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]/40" />
      </span>
    ))}
  </div>
</div>

      </section>

      {/* ═══ 2. WHAT YOU GET ═══ */}
      <section

        className="py-15 px-6 bg-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="section-label mb-6">What You Get in Arqiv</p>
            <div className="divider mb-8" />
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight max-w-xl leading-[1.05]">
              Everything in one<br /><span className="italic">seamless app.</span>
            </h2>
          </div>
          <div ref={exploreRef} className="grid md:grid-cols-3 gap-px bg-[#EAEAE6] border border-[#EAEAE6]">
            {[
              { icon: Search, title: "Smart Search", desc: "Find providers by trade type, company name, or your current location with street-level precision." },
              { icon: Building2, title: "Company Profiles", desc: "View full business profiles with photo galleries, banners, bios, and all the context you need to decide." },
              { icon: BadgeCheck, title: "Verified Reviews", desc: "Read and write reviews. Providers can reply directly, building an honest, transparent community." },
              { icon: MessagesSquare, title: "Direct Chat", desc: "Message providers inside the app, share site photos, and request quotes without leaving Arqiv." },
              { icon: Heart, title: "Save Favourites", desc: "Found someone you trust? Save them to your personal dashboard for quick access next time." },
              { icon: BellRing, title: "Live Notifications", desc: "Push alerts keep both users and providers informed — new leads, messages, and job updates." },
            ].map((f) => (
              <div key={f.title} className="bg-white p-12 card-hover group">
                <f.icon size={30} strokeWidth={2} className="text-[#D4A017] block mb-6 group-hover:scale-110 transition-transform duration-300 origin-left" />
                <h3 className="font-body font-medium text-black text-base mb-4">{f.title}</h3>
                <p className="font-body text-[#5F5F5F] text-[15px] leading-7 font-normal">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. FEATURES (Search & Chat) ═══ */}
      <section className="py-32 px-6 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="section-label mb-6">Features</p>
            <div className="divider mb-8" />
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              Built for how people<br />
              <span className="italic text-[#D4A017]">actually connect.</span>
            </h2>
          </div>

          {/* 01 — Search & Discovery */}
          <div className="flex flex-col md:flex-row items-center gap-20 mb-32 pb-32 border-b border-[#EAEAE6]">
            <div className="md:w-1/2">
              <p className="section-label mb-6">01 — Search & Discovery</p>
              <h3 className="font-display text-4xl md:text-6xl font-light mb-8 leading-tight">
                Find expert help,<br /><span className="italic">exactly where you need it.</span>
              </h3>
              <p className="font-body text-[#5F5F5F] leading-8 mb-10 font-normal text-[17px] max-w-md">
                Precision discovery at your fingertips. Toggle between trade categories or set a custom radius to find the highest-rated professionals in your immediate area.
              </p>
              <div className="space-y-4">
                {[
                  "Filter by Trade: Electricians, Plumbers, Handymen",
                  "Adjustable distance radius from 2km to 50km",
                  "Real-time availability and emergency service tags"
                ].map(f => (
                  <div key={f} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                    <p className="font-body text-[15px] text-[#555] leading-7">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 w-full floatEl">
              <div className="mock-phone p-4 max-w-[300px] mx-auto bg-[#F9F9F7] rounded-[48px] shadow-2xl border border-[#EEE]">
                <div className="rounded-[36px] bg-white overflow-hidden border border-[#EEE] h-[540px] flex flex-col">
                  {/* App Header Status */}
                  <div className="p-6 pb-2">
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wider font-bold">Location</p>
                        <p className="text-xs font-semibold text-[#1A1A1A] flex items-center gap-1">
                          Macon, Georgia <span className="text-[8px]">▼</span>
                        </p>
                        <p className="text-[9px] text-[#D4A017]">Postcode: 6169</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#F5F5F0] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-dot-icon lucide-bell-dot"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"/><circle cx="18" cy="5" r="3"/></svg>
                    </div>
                    </div>
                    <div className="bg-[#F5F5F0] rounded-xl px-4 py-2.5 flex items-center gap-2 mb-5">
                      <span className="text-[#A0A0A0]">🔍</span>
                      <span className="text-[10px] text-[#A0A0A0]">Search Plumbers, Electricians...</span>
                    </div>
                  </div>

                  <div className="px-6 py-5 bg-[#FAFAF9] border-y border-[#EEE]">
                    <p className="text-[10px] font-bold mb-4 uppercase tracking-tight">Select Distance Range</p>
                    <div className="grid grid-cols-3 gap-2.5 mb-4">
                      {["2 km", "5 km", "10 km"].map((dist, i) => (
                        <div key={dist} className={`text-center py-2.5 rounded-md text-[10px] border ${i === 1 ? 'bg-[#D4A017] border-[#D4A017] text-white' : 'bg-white border-[#E0E0E0] text-[#666]'}`}>
                          {dist}
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-2.5 bg-[#D4A017] rounded-xl text-white text-[11px] font-bold shadow-lg shadow-[#D4A017]/20">Apply Filters</button>
                  </div>

                  <div className="p-6 space-y-5 overflow-hidden">
                    <p className="text-[10px] font-bold uppercase tracking-tight text-[#A0A0A0]">Nearby Pros</p>
                    <div className="relative group">
                      <div className="aspect-video w-full bg-[#1A1A1A] rounded-2xl mb-3 overflow-hidden flex items-center justify-center">
                        <div className="text-white text-[8px] opacity-40">Professional Profile Preview</div>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[12px] font-bold text-[#1A1A1A]">Drip Hunter Plumbing</p>
                          <p className="text-[10px] text-[#888]">⭐ 4.1 (42+) • 0.8km away</p>
                        </div>
                        <span className="text-[#D4A017] text-sm">♡</span>
                      </div>
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[8px] text-white px-2.5 py-1 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Available Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 — Direct Communication */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-20 pb-16">
            <div className="md:w-1/2">
              <p className="section-label mb-6">02 — Direct Communication</p>
              <h3 className="font-display text-4xl md:text-6xl font-light mb-8 leading-tight">
                Chat, share photos,<br /><span className="italic">get quotes — instantly.</span>
              </h3>
              <p className="font-body text-[#5F5F5F] leading-8 mb-10 font-normal text-[17px] max-w-md">
                Skip the phone tag. Arqiv’s integrated messaging allows you to explain the job, share site photos, and receive professional quotes without leaving the app.
              </p>
              <div className="space-y-4">
                {[
                  "Encrypted in-app direct messaging",
                  "Photo and file sharing for accurate quotes",
                  "Direct calling via integrated Call Logs"
                ].map(f => (
                  <div key={f} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
                    <p className="font-body text-[15px] text-[#555] leading-7">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 w-full floatEl">
              <div className="mock-phone p-4 max-w-[300px] mx-auto bg-[#F9F9F7] rounded-[48px] shadow-2xl border border-[#EEE]">
                <div className="rounded-[36px] bg-white overflow-hidden border border-[#EEE] h-[540px] flex flex-col">
                  {/* Chat Header */}
                  <div className="p-6 border-b border-[#EEE] flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-[11px]">DH</div>
                    <div>
                      <p className="text-[12px] font-bold text-[#1A1A1A]">Drip Hunter Plumbing</p>
                      <p className="text-[10px] text-green-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online
                      </p>
                    </div>
                  </div>

                  {/* Messaging Area */}
                  <div className="flex-1 p-5 space-y-5 overflow-y-auto bg-[#FAFAF9]">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] bg-white border border-[#EEE] rounded-[20px] rounded-bl-none p-4 shadow-sm">
                        <p className="text-[11px] text-[#D4A017] font-bold mb-1.5">Drip Hunter</p>
                        <p className="text-[12px] text-[#444] leading-relaxed">I saw your request for the kitchen leak. Could you send a photo of the pipes under the sink?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[85%] bg-[#D4A017] rounded-[20px] rounded-br-none p-4 shadow-md shadow-[#D4A017]/20">
                        <p className="text-[12px] text-white leading-relaxed">Sure thing! Sending it over now.</p>
                      </div>
                    </div>
                    
                  </div>

                  {/* Bottom Nav Mock */}
                  <div className="p-4 border-t border-[#EEE] bg-white">
                    <div className="flex justify-around items-center">
                      {[
                        { i: <Home size={18} strokeWidth={2.5} />, t: "Home", a: 0.4 },
                        { i: <MessageSquare size={18} strokeWidth={2.5} />, t: "Chat", a: 1 },
                        { i: <Phone size={18} strokeWidth={2.5} />, t: "Call Logs", a: 0.4 },
                        { i: <User size={18} strokeWidth={2.5} />, t: "Profile", a: 0.4 }
                      ].map((nav) => (
                        <div
                          key={nav.t}
                          className={`flex flex-col items-center transition-opacity duration-300 ${nav.a === 1 ? 'text-[#D4A017]' : 'text-black opacity-40'}`}
                        >
                          <span>{nav.i}</span>
                          <span className="text-[8px] mt-1.5 font-bold uppercase tracking-tighter">{nav.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. FOR PROVIDERS (Dashboard) ═══ */}
      <section className="py-32 px-6 bg-[#FAFAF8] border-t border-[#EAEAE6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="md:w-1/2">
              <p className="section-label mb-6">For Service Providers</p>
              <div className="divider mb-8" />
              <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight leading-[1.05] mb-8">
                Grow your business<br />
                <span className="italic text-[#D4A017]">on your terms.</span>
              </h2>
              <p className="font-body text-[#5F5F5F] text-[17px] leading-8 mb-12 font-normal max-w-sm">
                Build your digital storefront, attract quality clients, and manage your pipeline from your phone.
              </p>
              <div className="space-y-5 mb-12">
                {[
                  "Customisable profile with banners",
                  "Manage and reply to customer reviews",
                  "Track leads and performance analytics",
                  "Get discovered through location searches",
                ].map(f => (
                  <div key={f} className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                    </div>
                    <p className="font-body text-[16px] text-[#555] leading-7">{f}</p>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleWaitingListScroll}
                className="btn-gold bg-[#111] text-white px-10 py-5 rounded-full font-body font-medium text-sm tracking-widest uppercase"
              >
                Join the Waiting List
              </button>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-white border border-[#EAEAE6] rounded-[3rem] p-10 max-w-[380px] mx-auto shadow-2xl relative overflow-hidden">

                {/* Header with Notification Icon */}
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="font-body text-[11px] text-[#999] uppercase tracking-wider">Welcome Back!</p>
                    <p className="font-body text-lg font-bold text-black">John Wilson</p>
                  </div>
                  <div className="relative">
                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A017] text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white font-bold z-10">
                      1
                    </span>
                    <div className="w-10 h-10 bg-[#FAF9F3] rounded-full flex items-center justify-center text-black">
                      <Bell size={20} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-3xl font-semibold mb-8 text-black">Your Dashboard</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Profile Views", val: "1.4k", unit: "Views" },
                    { label: "Call Leads", val: "89", unit: "calls" },
                    { label: "Message Leads", val: "216", unit: "leads" },
                    { label: "Total Leads", val: "45", unit: "leads" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#FAF9F3] rounded-2xl p-5 border border-transparent">
                      <p className="font-body text-[11px] text-[#888] mb-5 uppercase tracking-wide">{s.label}</p>
                      <p className="font-body text-2xl font-bold text-black">
                        {s.val} <span className="text-[12px] font-normal lowercase">{s.unit}</span>
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-[#EAEAE6] rounded-2xl p-5 shadow-sm mb-16">
                  <p className="font-body text-[13px] font-semibold text-black mb-1.5">Weekly performance summary</p>
                  <p className="font-body text-[12px] text-[#888]">Your profile views are up to 15% this week!</p>
                </div>

                {/* Bottom Nav with Lucide Icons */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#EAEAE6] px-10 py-5 flex justify-between items-center">
                  <div className="flex flex-col items-center gap-1.5 text-[#D4A017]">
                    <Home size={20} strokeWidth={2.5} />
                    <span className="text-[10px] font-bold">Home</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 opacity-40 text-black">
                    <MessageSquare size={20} strokeWidth={2} />
                    <span className="text-[10px]">Chat</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 opacity-40 text-black">
                    <User size={20} strokeWidth={2} />
                    <span className="text-[10px]">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. WHY PEOPLE USE ARQIV ═══ */}
      <section className="py-36 px-6 bg-[#F5F3EC] text-black border-t border-[#E8E6DF]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <p className="section-label mb-6">Why People Use Arqiv</p>
            <div className="divider mb-8" />
            <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight max-w-2xl leading-[1.05]">
              Built around what<br />
              <span className="italic text-[#D4A017]">people actually need.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "Find the Right People Faster", desc: "Search by trade, name, or location and immediately see who is nearby and available." },
              { icon: ShieldCheck, title: "Reviews You Can Trust", desc: "Every review is written by a real user. Providers can respond publicly to build trust." },
              { icon: Layers3, title: "Everything in One Place", desc: "Browse profiles, chat, share photos, and receive quotes without switching apps." },
              { icon: BellRing, title: "Stay Informed, Always", desc: "Push notifications keep users and providers connected in real-time." },
            ].map((c) => (
              <div key={c.title} className="bg-white p-12 rounded-[2.5rem] border border-[#ECEAE2] hover:shadow-2xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF6E8] border border-[#EAD9A4] flex items-center justify-center font-display text-2xl text-[#D4A017] mb-8 transition-all duration-500 group-hover:bg-[#D4A017] group-hover:text-white group-hover:rotate-6">
                  <c.icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="font-body font-medium text-black text-lg mb-4">{c.title}</h3>
                <p className="font-body text-[#5A5A5A] text-[17px] leading-8 font-normal">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temporary waiting list block (remove when app is fully launched) */}
      <section
        ref={waitingListRef}
        tabIndex={-1}
        className="py-24 px-6 bg-[#FAFAF8] border-t border-[#E8E6DF] focus:outline-none scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 border border-[#E8E1CC] rounded-[2rem] overflow-hidden bg-white shadow-[0_25px_80px_rgba(0,0,0,.06)]">
            <div className="bg-[#111827] text-white p-10 md:p-14">
              <p className="section-label !text-[#D4A017] mb-6">Early Access</p>
              <h3 className="font-display text-4xl md:text-5xl leading-tight mb-6">
                Join Our Waiting List
              </h3>
              <p className="font-body text-[#D1D5DB] text-[17px] leading-8 max-w-md">
                Get exclusive updates and early access to Arqiv. Be the first to try new features when we launch.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-[#FFFDF7]">
              {showSuccess ? (
                <div className="success-animation flex flex-col items-center justify-center py-12">
                  <div className="checkmark-circle w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        className="checkmark-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">Success!</h4>
                  <p className="text-gray-600 text-center">You've been added to our waiting list. Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name *"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#222] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#D4A017]/30 ${errors.firstName ? 'border-red-500' : 'border-[#E3E3DE]'
                        }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name *"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#222] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#D4A017]/30 ${errors.lastName ? 'border-red-500' : 'border-[#E3E3DE]'
                        }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address *"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#222] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#D4A017]/30 ${errors.email ? 'border-red-500' : 'border-[#E3E3DE]'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number *"
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#222] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#D4A017]/30 ${errors.phone ? 'border-red-500' : 'border-[#E3E3DE]'
                        }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 btn-gold bg-[#D4A017] text-white rounded-xl px-6 py-3.5 font-body font-semibold tracking-[0.04em] uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Join Our Waiting List'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;