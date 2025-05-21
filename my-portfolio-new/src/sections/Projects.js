import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import { MagicCard } from "@/components/magicui/magic-card"
import Image from "next/image"

export default function Projects() {

  const showCases = [
    {
      name: "Line Fx",
      imgPath: '/line-fx.png',
      description: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      tech: "Xamarin, .NET MAUI",
      date: "2023",
      ref: {
        app_store: "https://apps.apple.com/jp/app/line-fx/id1492856569",
        ch_play: "https://play.google.com/store/apps/details?id=jp.co.line_sec.fx",
      }

    },
    {
      name: "Line CFD",
      imgPath: '/images/line-cfd.png',
      description: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      tech: "Xamarin, .NET MAUI",
      date: "2023",
      ref: {
        app_store: "https://apps.apple.com/jp/app/sbi%E8%A8%BC%E5%88%B8-%E5%8F%96%E5%BC%95%E6%89%80cfd-%E3%82%A2%E3%83%97%E3%83%AA-%E3%81%8F%E3%82%8A%E3%81%A3%E3%81%8F%E6%A0%AA365/id1545300927",
        ch_play: "https://play.google.com/store/apps/details?id=jp.co.sbisec.clickkabu365.Android",
      }
    },
    {
      name: "SBI CFD",
      imgPath: '/images/sbi-cfd.png',
      description: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      tech: "Xamarin, .NET MAUI",
      date: "2023",
      ref: {
        app_store: "https://apps.apple.com/jp/app/sbi%E8%A8%BC%E5%88%B8-%E5%8F%96%E5%BC%95%E6%89%80cfd-%E3%82%A2%E3%83%97%E3%83%AA-%E3%81%8F%E3%82%8A%E3%81%A3%E3%81%8F%E6%A0%AA365/id1545300927",
        ch_play: "https://play.google.com/store/apps/details?id=jp.co.sbisec.clickkabu365.Android",
      }
    },
    {
      name: "Agree",
      imgPath: '/images/line-cfd.png',
      description: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      tech: "Xamarin, .NET MAUI",
      date: "2023",
      ref: {
        app_store: "https://apps.apple.com/jp/app/sbi%E8%A8%BC%E5%88%B8-%E5%8F%96%E5%BC%95%E6%89%80cfd-%E3%82%A2%E3%83%97%E3%83%AA-%E3%81%8F%E3%82%8A%E3%81%A3%E3%81%8F%E6%A0%AA365/id1545300927",
        ch_play: "https://play.google.com/store/apps/details?id=jp.co.sbisec.clickkabu365.Android",
      }
    },
  ]

  const projects = [
    {
      title: "Line FX",
      description: "You can place orders with one tap while checking the chart, allowing for simple and speedy trading.",
      image: "/line-fx.png",
      tags: [".Net Maui", "Trading View", "Real Time"],
      ref: {
        app_store: "https://apps.apple.com/jp/app/line-fx/id1492856569",
        ch_play: "https://play.google.com/store/apps/details?id=jp.co.line_sec.fx",
      }
    },
    {
      title: "SBI CFD",
      description: "\"Anytime, anywhere\" is in your hands! All the operations necessary for trading can be completed on your smartphone!",
      image: "/sbi-cfd.png",
      tags: [".Net Maui", "Trading View", "Real Time"],
      ref: {
        app_store: "https://apps.apple.com/jp/app/sbi%E8%A8%BC%E5%88%B8-%E5%8F%96%E5%BC%95%E6%89%80cfd-%E3%82%A2%E3%83%97%E3%83%AA-%E3%81%8F%E3%82%8A%E3%81%A3%E3%81%8F%E6%A0%AA365/id1545300927",
        ch_play: "https://play.google.com/store/apps/details?id=jp.co.sbisec.clickkabu365.Android&hl=en",
      }
    },
    {
      title: "GMO Sign",
      description: "GMO Sign by GlobalSign is a cloud-based signing solution which saves you from laborious tasks such as posting, collecting, filing, and searching documents. ",
      image: "/gmo-sign.png",
      tags: [".Net Maui", "PDF", "Signature"],
      ref: {
        app_store: "https://apps.apple.com/vn/app/gmo-sign/id1557198586",
        ch_play: "https://play.google.com/store/apps/details?id=com.gmosign.agree.android&hl=en",
      }
    },
    {
      title: "Z.com Research",
      description: "Join us and answer surveys from companies and organizations worldwide. Help them in making decision and shaping better future. Your input will be rewarded in points, and when accumulated certain amounts, the points may be exchanged to lifestyle vouchers or donation.",
      image: "/zresearch.png",
      tags: [".Net Maui", "Survey", "Redemption"],
      ref: {
        app_store: "https://apps.apple.com/sg/app/z-com-research/id1659991686",
        ch_play: "https://play.google.com/store/apps/details?id=jp.gmoresearch.zrsg.android&hl=en_GB",
      }
    }
  ]

  return (
    <section id="projects" className="py-24 lg:px-30 space-y-8 px-4 sm:px-6 lg:px-8 w-screen mx-auto h-auto">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A selection of my recent work and personal projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <MagicCard
              key={index}
              className="flex flex-col justify-start bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105 h-auto"
              gradientSize={200}
              gradientColor="#262626"
              gradientOpacity={0.8}
              gradientFrom="#9E7AFF"
              gradientTo="#FE8BBB"
            >
              <div className="flex flex-col h-auto">
                <div className="relative aspect-video overflow-hidden h-[250px]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-center rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col flex-grow p-4">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className='flex w-full justify-between mt-4 lg:justify-center lg:gap-10'>
                    {project?.ref?.ch_play && (
                      <a href={project.ref.ch_play} target="_blank" rel="noopener noreferrer">
                        <img className='w-[150px] hover:scale-105' alt="Google Play" src='/ch-play.png' />
                      </a>
                    )}
                    {project?.ref?.app_store && (
                      <a href={project?.ref?.app_store} target="_blank" rel="noopener noreferrer">
                        <img className='w-[150px] hover:scale-105' alt="App Store" src='/app-store.png' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MagicCard>
          )
        })}
      </div>
    </section>
  )
}
