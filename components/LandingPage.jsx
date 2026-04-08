"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFF9E6] via-white to-[#FAFAFA] text-black font-sans selection:bg-[#D4A017] selection:text-white">
      <Navbar />

      {/* 1. REFINED HERO - Airy & Sophisticated */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.1] mb-8">
            Every service. <br />
            <span className="font-bold italic">One seamless</span> connection.
          </h1>
          <p className="text-lg md:text-xl text-[#757575] max-w-2xl mx-auto leading-relaxed mb-12">
            Arqiv redefines how you discover and collaborate with local trades. 
            Built for reliability, designed for speed, and powered by trust.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-[#D4A017] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#B8890F] transition-colors duration-300 shadow-md shadow-[#D4A017]/20">
              Find Your Expert
            </button>
            <span className="text-[#757575] font-semibold text-sm uppercase tracking-wide">
              or
            </span>
            <button className="text-black font-semibold hover:text-[#D4A017] transition-colors border-b border-[#D3D3D3] hover:border-[#D4A017] pb-1">
              Register Your Business
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE DISCOVERY EXPERIENCE (Search & Location) */}
      <section className="py-32 px-6 bg-white/70 border-y border-[#D3D3D3]/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Precision Search. <br />
              <span className="text-[#D4A017]">Locally Targeted.</span>
            </h2>
            <p className="text-[#757575] text-lg leading-relaxed mb-8">
              Don't just search—find. Filter by specific trade expertise, company names, 
              or your exact current location. Our intelligent directory ensures the 
              right professional is always within reach.
            </p>
            <div className="flex items-center gap-4 text-black font-semibold">
              <span className="bg-[#FFF8E7] border border-[#D3D3D3]/60 p-3 rounded-xl">📍 Street-Level Accuracy</span>
              <span className="bg-[#FFF8E7] border border-[#D3D3D3]/60 p-3 rounded-xl">🛠️ Trade-Specific Filters</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-[400px] bg-black rounded-[3rem] shadow-2xl flex items-center justify-center p-12 text-white">
             <div className="w-full space-y-4">
               <div className="h-14 bg-white/10 rounded-2xl flex items-center px-4 border border-white/20 italic">Searching for Electricians...</div>
               <div className="h-20 bg-[#D4A017] rounded-2xl p-4 font-bold flex items-center justify-between text-white">
                 <span>Expert Pro Services</span>
                 <span className="text-xs bg-white/20 px-2 py-1 rounded">2.4 mi away</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. REAL-TIME CHAT & NOTIFICATIONS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Instant Clarity. <br />
              <span className="text-[#D4A017]">Zero Friction.</span>
            </h2>
            <p className="text-[#757575] text-lg leading-relaxed mb-8">
              Communicate directly within the app. Share site photos, request instant quotes, 
              and receive real-time push notifications so you never miss an update on your project.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span className="font-bold">Direct Messaging with Photos</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span className="font-bold">Push Alerts for New Leads & Messages</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full space-y-4">
             <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#D3D3D3]/80 max-w-sm">
                <p className="text-xs text-[#757575] mb-2 uppercase font-bold">New Message</p>
                <p className="font-medium text-black">"Hi! I've attached the quote for the plumbing repair..."</p>
             </div>
             <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#D3D3D3]/80 max-w-sm ml-auto">
                <p className="text-xs text-[#D4A017] mb-2 uppercase font-bold">Customer Response</p>
                <p className="font-medium text-black">"Looks good. Can you start on Monday?"</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. THE PROVIDER STOREFRONT & ANALYTICS */}
      <section className="py-32 px-6 bg-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">
                Showcase Your <br />
                <span className="text-[#D4A017]">Digital Storefront.</span>
              </h2>
              <p className="text-[#B0B0B0] text-lg leading-relaxed mb-10">
                Providers can upload custom banners, high-resolution galleries, and manage 
                business bios. Track your performance with simple analytics that show your 
                growth in real-time.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-3xl font-bold text-[#D4A017]">128</h4>
                  <p className="text-xs uppercase font-bold text-[#B0B0B0] mt-2">New Leads This Month</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-3xl font-bold text-[#D4A017]">98%</h4>
                  <p className="text-xs uppercase font-bold text-[#B0B0B0] mt-2">Positive Reviews</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full relative">
               <div className="bg-[#222] aspect-video rounded-[2rem] border border-white/10 p-2 overflow-hidden">
                 <div className="bg-gradient-to-r from-gray-700 to-gray-800 h-2/3 w-full rounded-xl flex items-center justify-center text-gray-500 italic">Business Banner</div>
                 <div className="p-4 flex gap-4">
                   <div className="w-12 h-12 bg-[#D4A017] rounded-full shrink-0" />
                   <div className="space-y-2 w-full">
                     <div className="h-4 bg-white/10 rounded w-1/3" />
                     <div className="h-3 bg-white/5 rounded w-full" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. REVIEWS & FAVORITES */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trust built into every interaction.</h2>
            <p className="text-[#757575]">
              Detailed company profiles with community-driven reviews and one-tap saving for your favorites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#D3D3D3]/40 border-t-4 border-t-[#D4A017] flex gap-6 items-start">
              <div className="w-14 h-14 bg-[#FFF9E6] rounded-2xl flex items-center justify-center shrink-0 text-2xl border border-[#D3D3D3]/50">
                ⭐
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Verified Reviews</h3>
                <p className="text-[#757575] leading-relaxed mb-4">
                  Read and write reviews. Providers can reply directly to build community transparency.
                </p>
                <p className="text-[#D4A017] font-bold text-sm italic">Trusted by real customer feedback</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#D3D3D3]/40 border-t-4 border-t-[#D4A017] flex gap-6 items-start">
              <div className="w-14 h-14 bg-[#FFF9E6] rounded-2xl flex items-center justify-center shrink-0 text-2xl text-[#D4A017] border border-[#D3D3D3]/50">
                ♥
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Save Favorites</h3>
                <p className="text-[#757575] leading-relaxed mb-4">
                  Found someone you love? Save them to your personal dashboard for instant re-booking.
                </p>
                <p className="text-[#D4A017] font-bold text-sm italic">Quick re-booking from your shortlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-32 px-6 text-center border-t border-[#D3D3D3]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight text-black">
            Ready to <br /><span className="text-[#D4A017]">connect?</span>
          </h2>
          <button className="bg-[#D4A017] text-white px-16 py-6 rounded-full font-black text-xl hover:bg-[#B8890F] transition-colors shadow-lg shadow-[#D4A017]/30">
            DOWNLOAD ARQIV
          </button>
          <p className="mt-8 text-[#757575] font-medium">Available for both Users and Providers.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
