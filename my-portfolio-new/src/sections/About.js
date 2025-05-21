
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
export default function About() {
  return (
    <section id="about" className="py-24 lg:px-30 space-y-8 px-4 sm:px-6 lg:px-8 w-screen mx-auto h-auto">
      <h2 className="text-3xl font-bold w-full text-center tracking-tighter sm:text-4xl md:text-5xl">About</h2>
      <NeonGradientCard borderSize={2}>
        <div className='relative flex flex-col lg:flex-row rounded-[18px] shadow-lg'>
          <div className='relative w-full lg:w-[50%] h-[50vh] lg:h-dvh lg:-top-20 pointer-events-none'>
            <iframe src='https://my.spline.design/characteruicollection001-fQRjlyJ8dwuUQea5SOt7zmG0/' width='100%' height='100%'></iframe>
            <div className='absolute bottom-0 right-2 w-[150px] h-[60px] dark:bg-neutral-900 bg-gray-100 z-10' />
          </div>
          <hr className="bg-black dark:bg-white w-[300px] lg:w-[1px] h-[2px] lg:h-[400px] items-center my-auto mx-auto" />
          <div className='text-black w-full lg:w-[50%] dark:text-white flex flex-col items-center lg:items-start justify-center p-4 lg:p-8'>
            I'm a dedicated professional with five years of experience. Throughout my journey, I have continuously learned, adapted, and contributed to the success of each project I was part of. I believe in the value of collaboration, steady growth, and delivering work that speaks through results rather than words. I am committed to improving myself every day and supporting the teams and organizations I work with to achieve their goals.
          </div>
        </div>
      </NeonGradientCard>
    </section>
  );
}
