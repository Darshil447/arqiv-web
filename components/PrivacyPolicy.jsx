"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#FAFAF8] text-black font-sans selection:bg-[#D4A017] selection:text-white overflow-x-hidden">
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

                .section-label {
                    font-family:'Archivo',sans-serif;
                    font-size:14px; letter-spacing:3.5px;
                    text-transform:uppercase; color:#D4A017; font-weight:500;
                }
                .divider { width:36px; height:1px; background:#D4A017; }

                .policy-section { transition:all .3s ease; border-bottom:1px solid transparent; }
                .policy-section:hover { border-bottom-color:#D4A017; }
            `}</style>

            <Navbar />

            {/* ═══ PRIVACY POLICY CONTENT ═══ */}
            <section className="pt-20 pb-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <p className="section-label mb-5 ">Privacy Policy</p>
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
