"use client";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white font-sans">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-5 md:max-w-[250px]">
            <Image
              src="/images/Arqiv_Logo_Black 2.svg"
              alt="Arqiv"
              width={100}
              height={34}
              className="w-[90px] h-auto brightness-0 invert"
            />
            <p className="text-[#B7B7B7] text-sm leading-7 tracking-[0.01em] font-normal">
              Connecting users with trusted local service providers. Search, chat, and book — all in one place.
            </p>
          </div>

          {/* Links column */}
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[2.4px] text-[#D4A017] font-semibold mb-2">Legal</p>
            <Link
              href="/termsCondition"
              className="text-[#D0D0D0] text-sm tracking-[0.01em] leading-6 hover:text-white transition-colors duration-200"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacyPolicy"
              className="text-[#D0D0D0] text-sm tracking-[0.01em] leading-6 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Download + Social column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[2.4px] text-[#D4A017] font-semibold mb-4">Comming soon in</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Image
                  src="/images/playStore.svg"
                  alt="Google Play"
                  width={140}
                  height={46}
                  className="w-[130px] h-auto"
                />
                <Image
                  src="/images/appStore.svg"
                  alt="App Store"
                  width={140}
                  height={46}
                  className="w-[130px] h-auto"
                />
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2.4px] text-[#D4A017] font-semibold mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { src: "/images/instagram.svg", alt: "Instagram", href: "https://www.instagram.com/arqiv_au/" },
                  { src: "/images/facebook.svg", alt: "Facebook", href: "https://www.facebook.com/profile.php?id=61589656256483" },
                  { src: "/images/linkedIn.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/arqiv-pty-ltd" },
                  { svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" color="currentColor"/></svg>, alt: "Threads", href: "https://www.threads.com/@arqiv_au" },
                ].map(({ src, alt, href, icon, svg }) => (
                  <a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#D4A017] hover:bg-[#D4A017]/10 transition-all duration-200 cursor-pointer"
                  >
                    {svg ? (
                      <div className="text-white opacity-70">
                        {svg}
                      </div>
                    ) : icon ? (
                      <icon size={18} className="text-white opacity-70" />
                    ) : (
                      <Image src={src} alt={alt} width={18} height={18} className="w-[18px] h-[18px] brightness-0 invert opacity-70" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1F1F1F]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#9A9A9A] text-sm tracking-[0.01em] leading-6">
            © {new Date().getFullYear()} Arqiv. All rights reserved.
          </p>
          <p className="text-[#7D7D7D] text-sm tracking-[0.01em] leading-6">
            Built for those who value their time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;