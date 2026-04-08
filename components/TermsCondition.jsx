"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsCondition = () => {
    return (
        <div className="font-ginger box-border bg-white text-black">
            <div className="w-full lg:h-[498px] h-[300px] bg-gradient-to-b from-[#FFF9E6] to-[#D4A017] ">
                <Navbar />
                <div className="lg:pt-56 md:pt-32 pt-36">
                    <p className="lg:w-[725px] lg:text-[60px] md:text-[42px] text-[32px] mx-auto font-bold text-white text-center ">
                        Terms and Conditions
                    </p>
                    {/* <p className="lg:w-[289px] lg:text-[20px] md:text-[18px] text-[16px] text-[#F5EFE6] mx-auto lg:mt-4 mt-1 text-center">
                        Updated September 28, 2023
                    </p> */}
                </div>
            </div>

            <section className="lg:h-[1020px] lg:mx-[140px] lg:my-20 my-6">
                <div className="px-4 pt-5">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>1.</span> <span>Acceptance of Terms</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        By downloading, installing, or using Arqiv: AI Powered Service Connect App (&quot;App&quot;), you agree to comply with and be bound by these Terms and Conditions.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>2.</span> <span>User Responsibilities</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        a. Age Restriction: You must be at least 18 years old to use this App. By using the App, you confirm that you are of legal age.
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        b. Accurate Information: You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>3.</span> <span>Use of the App</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        a. Service Data Usage: The App may use location and service data to enable certain features. You consent to the collection and use of service data as described in the Privacy Policy.
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        b. Prohibited Activities: You agree not to engage in any activity that may interfere with the proper functioning of the App, including but not limited to, distributing malware, attempting to gain unauthorized access, or disrupting networks connected to the App.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>4.</span> <span>Privacy</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        Your use of the App is also governed by our Privacy Policy, which is incorporated by reference into these Terms and Conditions.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>5.</span> <span>Intellectual Property</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        The App and its original content, features, and functionality are owned by Arqiv and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>6.</span> <span>Disclaimer of Warranties</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        The App is provided "as is." Arqiv makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>7.</span> <span>Limitation of Liability</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        In no event shall Arqiv be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the App; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the App; or (d) any bugs, viruses, trojan horses, or the like, which may be transmitted to or through the App by any third party.
                    </p>
                </div>
                <div className="px-4 pt-7">
                    <p className="font-bold text-[24px] text-black tracking-[0.5px] flex">
                        <span>8.</span> <span>Governing Law</span>
                    </p>
                    <p className="text-[#757575] text-[14px] tracking-[0.5px] pt-2">
                        These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
        );
};

export default TermsCondition;
