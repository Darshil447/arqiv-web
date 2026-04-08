"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsCondition = () => {
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

                .terms-section { transition:all .3s ease; border-bottom:1px solid transparent; }
                .terms-section:hover { border-bottom-color:#D4A017; }
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
                        Terms & <span className="italic shimmer-text">Conditions</span>
                    </h1>
                </div>
            </section>

            {/* ═══ TERMS & CONDITIONS CONTENT ═══ */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <p className="section-label mb-5">Terms and Conditions</p>
                        <div className="divider mb-8" />
                        <p className="font-body text-[#888] text-base leading-relaxed font-light max-w-3xl">
                            By downloading, installing, or using Arqiv: AI Powered Service Connect App ("App"), you agree to comply with and be bound by these Terms and Conditions.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">1.</span> Acceptance of Terms
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                By accessing and using this App, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">2.</span> User Responsibilities
                            </h3>
                            <div className="space-y-4">
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">a. Age Restriction:</span> You must be at least 18 years old to use this App. By using the App, you confirm that you are of legal age.
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">b. Accurate Information:</span> You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                                </p>
                            </div>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">3.</span> Use of the App
                            </h3>
                            <div className="space-y-4">
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">a. Service Data Usage:</span> The App may use location and service data to enable certain features. You consent to the collection and use of service data as described in the Privacy Policy.
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                    <span className="font-medium text-black">b. Prohibited Activities:</span> You agree not to engage in any activity that may interfere with the proper functioning of the App, including but not limited to, distributing malware, attempting to gain unauthorized access, or disrupting networks connected to the App.
                                </p>
                            </div>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">4.</span> Privacy
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                Your use of the App is also governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">5.</span> Intellectual Property
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                The App and its original content, features, and functionality are owned by Arqiv and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">6.</span> Disclaimer of Warranties
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                The App is provided "as is." Arqiv makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">7.</span> Limitation of Liability
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                In no event shall Arqiv be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use the App.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-light mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">8.</span> Governing Law
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-light">
                                These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsCondition;
