"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsCondition = () => {
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

                .terms-section { transition:all .3s ease; border-bottom:1px solid transparent; }
                .terms-section:hover { border-bottom-color:#D4A017; }
            `}</style>

            <Navbar />

            {/* ═══ TERMS & CONDITIONS CONTENT ═══ */}
            <section className="pt-20 pb-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <p className="section-label mb-5">Terms and Conditions</p>
                        <div className="divider mb-8" />
                        <p className="font-body text-[#888] text-base leading-relaxed font-medium max-w-3xl">
                            By downloading, installing, or using Arqiv:you agree to comply with and be bound by these Terms and Conditions.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">1.</span> Acceptance of Terms
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                By accessing and using this App, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">2.</span> User Responsibilities
                            </h3>
                            <div className="space-y-4">
                                <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                    <span className="font-medium text-black">a. Age Restriction:</span> You must be at least 18 years old to use this App. By using the App, you confirm that you are of legal age.
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                    <span className="font-medium text-black">b. Accurate Information:</span> You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                                </p>
                            </div>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">3.</span> Use of the App
                            </h3>
                            <div className="space-y-4">
                                <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                    <span className="font-medium text-black">a. Service Data Usage:</span> The App may use location and service data to enable certain features. You consent to the collection and use of service data as described in the Privacy Policy.
                                </p>
                                <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                    <span className="font-medium text-black">b. Prohibited Activities:</span> You agree not to engage in any activity that may interfere with the proper functioning of the App, including but not limited to, distributing malware, attempting to gain unauthorized access, or disrupting networks connected to the App.
                                </p>
                            </div>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">4.</span> Privacy
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                Your use of the App is also governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">5.</span> Intellectual Property
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                The App and its original content, features, and functionality are owned by Arqiv and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">6.</span> Disclaimer of Warranties
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                The App is provided "as is." Arqiv makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">7.</span> Limitation of Liability
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-medium">
                                In no event shall Arqiv be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use the App.
                            </p>
                        </div>

                        <div className="terms-section pb-8">
                            <h3 className="font-display text-3xl font-medium mb-6 text-black">
                                <span className="text-[#D4A017] mr-3">8.</span> Governing Law
                            </h3>
                            <p className="font-body text-[#666] text-base leading-relaxed font-medium">
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
