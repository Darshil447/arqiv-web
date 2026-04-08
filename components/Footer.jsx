"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return (
        <div>
            <footer className="font-ginger">
                <div className="w-full lg:h-[280px] bg-[#D4A017] lg:mt-36 mt-12 ">
                    <div className="flex lg:pt-8 pt-6 flex-col lg:flex-row">
                        <div className="text-[16px] text-opacity-[80%] text-white text-center underline lg:w-[60%] w-full pl-2 pt-2 lg:pl-36">
                            <p className="lg:w-[101px] cursor-pointer">
                                <Link href="/termsCondition">
                                    Terms of use
                                </Link>
                            </p>
                            <p className="lg:pt-[30px] pt-[15px] lg:w-[112px] cursor-pointer">
                                <Link href="/privacyPolicy">
                                    Privacy policy
                                </Link>
                            </p>
                        </div>
                        <div>
                            <div className="flex gap-4 justify-center pt-8 lg:pt-0">
                                <div>
                                    <Image
                                        src="/images/playStore.svg"
                                        alt="playStore"
                                        width={200}
                                        height={70}
                                        className="lg:w-[180px] lg:h-[70px] md:w-[160px] md:h-[55px] w-[130px] h-[45px] "
                                    ></Image>
                                </div>
                                <div>
                                    <Image
                                        src="/images/appStore.svg"
                                        alt="appStore"
                                        width={200}
                                        height={70}
                                        className="lg:w-[180px] lg:h-[70px] md:w-[160px] md:h-[55px] w-[130px] h-[45px]"
                                    ></Image>
                                </div>
                            </div>
                            <div className="flex lg:gap-6 gap-4 lg:mt-6 mt-9 justify-center lg:justify-start">
                                <div>
                                    <Image
                                        src="/images/instagram.svg"
                                        alt="instagram"
                                        width={40}
                                        height={40}
                                    ></Image>
                                </div>
                                <div>
                                    <Image
                                        src="/images/facebook.svg"
                                        alt="facebook"
                                        width={40}
                                        height={40}
                                    ></Image>
                                </div>
                                <div>
                                    <Image
                                        src="/images/linkedIn.svg"
                                        alt="linkedIn"
                                        width={40}
                                        height={40}
                                    ></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-white text-opacity-[70%] flex justify-center items-center gap-1 mx-auto lg:mt-12 mt-6 pb-3">
                        <span>&copy;</span>
                        <span className="text-[12px]">
                            Arqiv, All rights reserved.
                        </span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
