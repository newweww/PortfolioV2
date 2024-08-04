"use client"

import { SiReact, SiNextdotjs, SiNodedotjs, SiBootstrap, SiTailwindcss, SiMysql, SiMongodb, SiPrisma, SiPostman, SiJavascript, SiPostgresql ,SiNuxtdotjs   } from "react-icons/si"
import { FaGithub, FaHtml5 ,FaCss3Alt, FaFigma } from "react-icons/fa";

const about = {
  title: 'About Me',
  description: 'I’m New, a university student studying Information Technology. This portfolio showcases my skills, projects, and academic achievements.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Nattanan Saingthong'
    },
    {
      fieldName: 'Phone',
      fieldValue: '098-268-8244'
    },
    {
      fieldName: 'Email',
      fieldValue: 'nattanan2545@hotmail.com'
    },

  ]
}

const education = {
  icon: 'assets/resume/cap.svg',
  title: 'Education',
  description: "This is my journey in programming education. Through study and practice, I've developed software development skills, emphasizing efficiency and innovation.",
  items: [
    {
      institution: 'Kasetsart University',
      degree: 'Information Technology',
      duration: '2021 - Present'
    },
    {
      institution: 'HackerRank',
      degree: 'SQL (Advanced) Certificate',
      duration: '2023'
    },

  ]
}

const skills = {
  title: 'Skills',
  description: 'Explore my skills and abilities, including programming and problem-solving. Learn how I can assist with your projects.',
  langList: [
    {
      icon: <FaHtml5 />,
      name: 'html5',
    },
    {
      icon: <FaCss3Alt />,
      name: 'css3',
    },
    {
      icon: <SiJavascript />,
      name: 'javascript',
    },
  ],
  frameworkList: [
    {
      icon: <SiNodedotjs />,
      name: 'node.js',
    },
    {
      icon: <SiReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiNuxtdotjs />,
      name: 'nuxt.js',
    },
    {
      icon: <SiBootstrap />,
      name: 'bootstrap',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },
  ],
  databaseList: [
    {
      icon: <SiMysql />,
      name: 'mysql',
    },
    {
      icon: <SiPostgresql />,
      name: 'postgresql',
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb',
    },
  ],
  toolList: [
    {
      icon: <FaGithub />,
      name: 'github',
    },
    {
      icon: <SiPostman />,
      name: 'postman',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiPrisma />,
      name: 'prisma',
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { delay, motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 zoom80"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            {/* about part */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Eduaction part */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/80">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skill part */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:flex sm:flex-row sm:justify-around">
                  <div className="flex flex-col min-w-10 items-center">
                    <h3 className="text-2xl font-bold">Language</h3>
                    <ul className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-1 xl:gap-[10px]">
                      {skills.langList.map((Lang, index) => {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{Lang.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{Lang.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                  </div>
              
                  <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold">Framework</h3>
                  <ul className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 xl:gap-[10px]">
                    {skills.frameworkList.map((framework, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{framework.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{framework.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                  </div>
                  <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold">Database</h3>
                  <ul className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-1 xl:gap-[10px]">
                    {skills.databaseList.map((database, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{database.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{database.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                  </div>
                  <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold">Tools</h3>
                  <ul className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-1 xl:gap-[10px]">
                    {skills.toolList.map((tool, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[100px] h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{tool.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{tool.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>

                  </div>
                </div>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume