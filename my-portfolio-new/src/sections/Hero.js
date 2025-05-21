import { Meteors } from '../components/magicui/meteors'
import { Cover } from '../components/ui/cover'
import { SparklesText } from "@/components/magicui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import TypingTextSwitcher from "@/components/magicui/typing-text-switcher";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from 'framer-motion';

export default function Hero() {
  // const words = ['Mobile Developer', 'Web Developer', ''];
  const words = [
    "Frontend Developer",
    "Mobile Developer",
    "ReactJS Developer",
    "Next.js Developer",
    'UI Engineer',
    'Cross-platform Mobile Developer',
  ];
  const quote = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "Good code is its own best documentation. – Steve McConnell",
    "Code never lies, comments sometimes do. – Ron Jeffries",];

  return (
    <section className="lg:py-0 py-20 px-10 h-dvh text-center">
      <div className='flex flex-col lg:flex-row gap-3'>
        {/*Left side*/}
        <div className='lg:w-[50%] lg:ml-20 items-center lg:items-start justify-center flex flex-col gap-3'>
          <Meteors />

          <div className='relative gap-3 w-full flex flex-col items-center lg:items-start justify-center'>
            <div className='text-4xl w-full items-left justify-center flex flex-col '>
              <SparklesText className={'text-left'}> Hi </SparklesText>
              <h1 className='text-5xl font-bold text-left'>
                I'm <Cover>Duongnb</Cover>
              </h1>
            </div>

            {/* Role badge */}
            <div className='relative w-full flex items-start text-left justify-center'>
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <span className="flex items-center gap-2">
                  <FlipWords
                    className={"text-lg sm:text-xl text-blue-400 font-medium"}
                    words={words}
                  />
                </span>
              </div>
            </div>
            <TypingTextSwitcher />

            <div className="absolute left-[10px] top-[-50px] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>Teamwork
              </div>
            </div>
            <div className="absolute top-[1rem] right-[-10px] transform -translate-x-1/2 animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-lightbulb"></i>Mobile UI/UX
              </div>
            </div>
          </div>
        </div>

        {/*Right side*/}
        <div className='relative w-full h-[50vh] lg:h-dvh lg:-top-20 pointer-events-none scale-130 lg:scale-100'>
          <iframe src='https://my.spline.design/miniroomremakecopyprogrammerroom-PG0Wv8zAK6raYrHg3P5KNZCh/' width='100%' height='100%'></iframe>
          <div className='absolute bottom-0 right-2 w-[150px] h-[60px] bg-gray-100 dark:bg-gray-800 z-10'>
          </div>
        </div>
      </div>
    </section >
  );
}
