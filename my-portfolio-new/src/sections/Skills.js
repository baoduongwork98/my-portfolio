// import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/magicui/magic-card"
import { ShineBorder } from "@/components/magicui/shine-border"
import { Code, Layout, Palette, Sparkles, Workflow, Cpu, Smartphone, Cloud, Activity } from "lucide-react"
import useTheme from '@/hooks/useTheme'
import { IconCloud } from "@/components/magicui/icon-cloud"
import { MdHtml } from "react-icons/md";
import { motion } from "framer-motion"

export default function Skills() {
  const { theme, toggleTheme } = useTheme()
  const getSlugImg = (imgs, times = 1) => {
    return imgs.flatMap(
      (slug) => {
        let url = `https://cdn.simpleicons.org/${slug}/${slug}`;
        if ([
          "nextdotjs",
          'ios',
          'githubcopilot',
          'github',
          'vercel'
        ].includes(slug)) url = url + "/white";
        return Array(times).fill(url);
      },
    );
  }
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      tech: ["JavaScript", 'Tailwind CSS', "Node.js", "React.js", "Next.js", "Vue.js"],
      images: getSlugImg(["html5", "css3", "javascript", "tailwindcss", "nodedotjs", "react", "nextdotjs", "vuedotjs",], 2),
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      tech: [".Net MAUI", "Flutter", "Android", "iOS"],
      images: getSlugImg(["dotnet", "flutter", "android", "ios",], 5),
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud & DevOps",
      tech: ["AWS", "Docker", "Git", "GitHub", "GitLab", "Jira", "Slack"],
      images: getSlugImg(["amazonaws", "docker", "github", "gitlab", "jira", 'slack'], 3),
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Tools & Workflow",
      tech: ["GitHub Copilot", "VS Code", "Jira", "GitLab", "AI", 'Fork'],
      images: getSlugImg(["git", 'githubcopilot', "github", "visualstudiocode", "jira", "gitlab", "googlegemini", "fork"], 2),
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "CI/CD",
      tech: ["AppScript", "Vercel", "Netlify", "Firebase", "Azure Pipelines"],
      images: getSlugImg(["googleappsscript", "vercel", "netlify", "firebase",], 4),
    },
  ]

  return (
    <section id="skills" className="py-24 lg:px-30 space-y-8 px-4 sm:px-6 lg:px-8 w-screen mx-auto h-auto lg:h-screen">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          My technical skills and areas of expertise
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="flex flex-col justify-center bg-white dark:bg-black shadow-lg rounded-lg transition-transform transform hover:scale-105"
              >
                <div className="relative p-6 rounded-lg h-[250px]">
                  <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <div className="absolute  w-full h-[40%] rounded-lg top-0 left-0">
                    <div className="scale-75 absolute -top-15 -right-25">
                      <IconCloud images={skill?.images} />
                    </div>
                  </div>
                  <div className="z-10">
                    <div className="w-full">{skill.icon}</div>
                    <h3 className="text-lg font-semibold w-full">{skill.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-2 max-w-[50%]">
                      {skill.tech.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
