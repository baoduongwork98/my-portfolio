import { counterItems } from "../constants";
import CountUp from "./Text/CountUp";
import Squares from "./Squares";
import Particles from "./Background/Particles";
import LetterGlitch from "./Background/LetterGlitch";
import ShapeBlur from './Background/ShapeBlur';

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32 w-full ">
            <div className="text-4xl w-full">
                <div className="flex sm:flex-wrap gap-6 mb-2 items-center justify-center">
                    {counterItems.map((item, index) => (
                        <div className="relative h-[150px] w-full sm:w-[500px] overflow-hidden rounded-2xl border shadow-lg transition-transform transform hover:scale-105" key={index}>
                            <div className="absolute inset-0 z-0 rounded-2xl" >
                                {index === 0 && (
                                    <Squares
                                        speed={0.5}
                                        squareSize={40}
                                        direction='diagonal' // up, down, left, right, diagonal
                                        borderColor='#fff'
                                        hoverFillColor='#fff'
                                    />
                                )}
                                <Particles
                                    particleColors={['#ffffff', '#ffffff']}
                                    particleCount={200}
                                    particleSpread={10}
                                    speed={0.1}
                                    particleBaseSize={100}
                                    moveParticlesOnHover={true}
                                    alphaParticles={false}
                                    disableRotation={false}
                                />
                            </div>
                            <div className="relative z-10 p-6 text-white flex items-center justify-start h-full cursor-default select-none pointer-events-none">
                                <CountUp
                                    className="text-6xl font-bold"
                                    from={0}
                                    to={item.value}
                                    separator=","
                                    direction="up"
                                    duration={0.5}
                                />
                                <span className="text-4xl">{item.suffix}</span>
                                <span className="text-xl ml-2">{item.label}</span>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div >
    );
}
export default AnimatedCounter;