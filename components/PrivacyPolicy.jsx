"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
    return (
        <div className="font-ginger box-border bg-white text-black">
            <div className="w-full lg:h-[498px] h-[300px] bg-gradient-to-b from-[#FFF9E6] to-[#D4A017] ">
                <Navbar />
                <div className="lg:pt-56 md:pt-32 pt-36">
                    <p className="lg:w-[725px] lg:text-[60px] md:text-[42px] text-[32px] mx-auto font-bold text-white text-center ">
                        Privacy Policy
                    </p>
                    {/* <p className="lg:w-[289px] lg:text-[20px] md:text-[18px] text-[16px] text-[#F5EFE6] mx-auto lg:mt-4 mt-1 text-center">
                        Updated September 28, 2023
                    </p> */}
                </div>
            </div>

            <section className="lg:h-[910px] lg:mx-[140px] lg:my-20 my-6">
                <div className="px-4 pt-5">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>1.</span> <span>Introduction</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        Welcome to Arqiv, the AI Powered Service Connect App ("we," "us," or "our"). This Privacy Policy is designed to inform you about how we collect, use, disclose, and safeguard your personal information when you use our Arqiv mobile application (the "App"). By using the App, you consent to the practices described in this Privacy Policy.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>2.</span> <span>Information We Collect</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        a. Personal Information: We may collect personal information, such as your name, email address, and device information, when you register or use our App.
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        b. Service Data: Arqiv utilizes location and service data to connect you with providers. This data is processed securely within the app.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>3.</span> <span>How We Use Your Information</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        We may use your information for the following purposes:
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        a. To provide and enhance our services, including personalized service recommendations.
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        b. To communicate with you, respond to your inquiries, and provide user support.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>4.</span> <span>Disclosure of Your Information</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        We do not sell, trade, or otherwise transfer your personal information to third parties. We may share aggregated, non-personal information publicly.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>5.</span> <span>Your Choices</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        You can manage location permissions within your device settings. Additionally, you can contact us to request the deletion of your account and personal information from our records.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>6.</span> <span>Security</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>7.</span> <span>Changes to This Privacy Policy</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
