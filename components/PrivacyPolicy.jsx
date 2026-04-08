"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#FAFAF8] text-black font-sans selection:bg-[#D4A017] selection:text-white overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

                .font-display { font-family: 'Cormorant Garamond', serif; }
                .font-body    { font-family: 'DM Sans', sans-serif; }

                @keyframes fadeUp {
                    from { opacity:0; transform:translateY(24px); }
                    to   { opacity:1; transform:translateY(0); }
                }
                @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
                @keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }

                .au1 { animation:fadeUp .9s ease forwards; animation-delay:.10s; opacity:0; }
                .au2 { animation:fadeUp .9s ease forwards; animation-delay:.28s; opacity:0; }

                .shimmer-text {
                    background:linear-gradient(90deg,#D4A017 0%,#F0C84A 40%,#D4A017 65%,#B8890F 100%);
                    background-size:200% auto;
                    -webkit-background-clip:text; -webkit-text-fill-color:transparent;
                    background-clip:text;
                    animation:shimmer 4s linear infinite;
                }

                .section-label {
                    font-family:'DM Sans',sans-serif;
                    font-size:10px; letter-spacing:3.5px;
                    text-transform:uppercase; color:#D4A017; font-weight:500;
                }
                .divider { width:36px; height:1px; background:#D4A017; }

                .policy-section { transition:all .3s ease; border-bottom:1px solid transparent; }
                .policy-section:hover { border-bottom-color:#D4A017; }
            `}</style>

            <Navbar />

            {/* ═══ HERO SECTION ═══ */}
            <section className="relative min-h-[70vh] flex flex-col justify-center px-4 text-center overflow-hidden bg-[#FAFAF8] border-b border-[#E8E8E4]">
                <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute top-20 left-10 w-64 h-64 opacity-20" viewBox="0 0 100 100">
                        <circle cx="10" cy="50" r="1.5" className="tech-dot" />
                        <path d="M10 50 L40 50 L50 40 L80 40" stroke="#D4A017" strokeWidth="0.5" fill="none" />
                        <circle cx="80" cy="40" r="1" fill="#D4A017" />
                    </svg>
                    <svg className="absolute bottom-40 right-10 w-80 h-80 opacity-20" viewBox="0 0 100 100">
                        <path d="M90 20 L70 20 L60 35 L20 35" stroke="#D4A017" strokeWidth="0.5" fill="none" />
                        <circle cx="90" cy="20" r="1.5" className="tech-dot" />
                        <path d="M70 20 L70 60 L50 80" stroke="#D4A017" strokeWidth="0.5" fill="none" />
                        <circle cx="50" cy="80" r="1" fill="#D4A017" />
                    </svg>
                </div>

                <div className="relative z-10 py-20">
                    <div className="au1 mb-10 flex items-center gap-3 justify-center">
                        <div className="divider" />
                        <span className="text-[10px] tracking-[4px] uppercase font-body font-medium text-[#D4A017]">
                            Legal Information
                        </span>
                        <div className="divider" />
                    </div>

                    <h1 className="font-display au2 text-[clamp(3.5rem,9vw,7.5rem)] font-light tracking-tight leading-[1.0] mb-10 max-w-5xl mx-auto text-black">
                        Privacy <span className="italic shimmer-text">Policy</span>
                    </h1>
                </div>
            </section>

            {/* ═══ PRIVACY POLICY CONTENT ═══ */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <p className="section-label mb-5">Privacy Policy</p>
                        <div className="divider mb-8" />
                        <p className="font-body text-[#888] text-base leading-relaxed font-light max-w-3xl">
                            Welcome to Arqiv, the AI Powered Service Connect App ("we," "us," or "our"). This Privacy Policy is designed to inform you about how we collect, use, disclose, and safeguard your personal information when you use our Arqiv mobile application (the "App"). By using the App, you consent to the practices described in this Privacy Policy.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">1.</span> Introduction
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                We are committed to protecting your privacy and ensuring transparency in how we handle your personal information. This policy outlines our data practices and your rights regarding your personal data.
                            </p>
                        </div>

                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">2.</span> Information We Collect
                            </h3>
                            <div className="space-y-4">
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">a. Personal Information:</span> We may collect personal information, such as your name, email address, and device information, when you register or use our App.
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">b. Service Data:</span> Arqiv utilizes location and service data to connect you with providers. This data is processed securely within the app.
                                </p>
                            </div>
                        </div>

                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">3.</span> How We Use Your Information
                            </h3>
                            <div className="space-y-4">
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    We may use your information for the following purposes:
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">a. Service Enhancement:</span> To provide and enhance our services, including personalized service recommendations.
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">b. Communication:</span> To communicate with you, respond to your inquiries, and provide user support.
                                </p>
                            </div>
                        </div>

                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">4.</span> Disclosure of Your Information
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share aggregated, non-personal information publicly.
                            </p>
                        </div>

                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">5.</span> Your Choices
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                You can manage location permissions within your device settings. Additionally, you can contact us to request the deletion of your account and personal information from our records.
                            </p>
                        </div>

                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">6.</span> Security
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </div>

                        <div className="policy-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">7.</span> Changes to This Privacy Policy
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
