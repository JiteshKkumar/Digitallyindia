import React from 'react';

import BannerImg from "../assets/banner.png"
import LogoCarousel from './LogoCarousel';
import { motion } from 'framer-motion';
import variants from '../utils/variants';
import ContactPopup from './ContactPopup';
import ContactUs from './ContactUs';

const Hero = () => {
    return (
        <section className="bg-white pt-12" id='about'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Left Side - Text */}
                    <div
                        className="md:w-1/2 mb-8 md:mb-0">
                        <div className='md:w-2/3'>
                            <motion.h1
                                className="text-4xl font-bold text-gray-900 mb-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.2)}
                            >
                                Navigating the digital landscape for success
                            </motion.h1>
                            <motion.p
                                className="text-gray-600 mb-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.1 }}
                                variants={variants("bottom", 0.5)}
                            >
                                Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                            </motion.p>
                        </div>
                        <motion.a
                            href="#contact"
                            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.7)}
                        >
                            Book a consultation
                        </motion.a>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 order-first md:order-last">
                        <motion.img
                            src={BannerImg}
                            alt="banner image"
                            className="w-full h-auto rounded-md"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.1 }}
                            variants={variants("bottom", 0.2)}
                        />
                    </div>
                </div>

                {/* Brand Logos Carousel */}
                <LogoCarousel />
                <ContactPopup />
            </div>
        </section>
    );
};

export default Hero;
