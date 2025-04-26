import React from 'react';
import { words, description } from '../constants';
import DecryptedText from '../components/Text/DecryptedText';
import RotatingText from '../components/Text/RotatingText';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import ShinyText from '../components/Text/ShinyText';
import StarBorder from '../components/StarBorder';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.hero-text h1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.inOut',
            }
        )
        gsap.fromTo(
            '.btnSeeWork',
            {
                x: 50,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: 'power2.inOut',
            }
        )
    })

    const handleSeeMyWork = () => {
        console.log("See My Work clicked");
        const target = document.getElementById("counter"); // Find the section with ID "counter"
        const id = 'counter'; // Get the ID of the target element
        // Only scroll if we found the section and an ID is passed in
        // taht prevents the contact button from scrolling to the top
        if (target && id) {
            const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

            // Calculate how far down the page we need to scroll
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            // Scroll smoothly to that position
            window.scrollTo({ top, behavior: "smooth" });
        }
    }

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10 max-w-screen h-screen">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="relative flex flex-col items-center justify-center w-dvw h-screen bg-cover bg-no-repeat bg-center">
                {/* /* LEFT: Hero Content */}
                <header className="flex flex-col justify-center w-full max-w-screen md:px-20 px-5 md:z-10 z-1">
                    <div className="flex flex-col gap-7 w-ful max-w-screen">
                        <div className="hero-text">
                            <h1>Hello!</h1>
                            <h1> My name is DuongNB,</h1>
                            <h1>I’m a developer </h1>
                            <h1>with over 5 years</h1>
                            <h1>of experience in building</h1>
                            <h1>
                                <span className='flex items-center gap-2'>
                                    <RotatingText
                                        texts={words}
                                        mainClassName="md:h-[80px] px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-0 justify-center rounded-lg"
                                        staggerFrom={"last"}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </span>
                            </h1>

                            <h1 className='mt-4 text-2xl text-gray-400 font-light text-left xl:w-[50%]'>
                                {description}
                            </h1>

                        </div>
                        <div className="btnSeeWork w-60" onClick={handleSeeMyWork}>
                            <StarBorder
                                as="button"
                                className="w-60"
                                color="cyan"
                                speed="5s"
                            >
                                <ShinyText text="See My Work" disabled={false} speed={3} />
                            </StarBorder>
                        </div>
                    </div>
                </header>

                <div className='absolute w-full h-full top-145 right-0 xl:w-[60%] xl:-top-20 xl:h-[100vh]'>
                    <img src="/images/portfolio.png" alt="hero" className="w-full h-full object-contain xl:object-contain xl:mr-0" />
                </div>
                {/* RIGHT: 3D Model or Visual */}
                {/* <figure>
                    <div className="absolute w-full xl:w-[70%] h-full min-h-[50vh] top-64 xl:-top-20 right-0 xl:-right-20">
                        <HeroExperience />
                    </div>
                </figure> */}
            </div>
            <AnimatedCounter />
        </section >
    );
}
export default Hero; 