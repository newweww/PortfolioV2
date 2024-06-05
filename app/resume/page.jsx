"use client"

import { SiReact, SiNextdotjs, SiNodedotjs, SiBootstrap, SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si"

const about = {
  title: 'About Me',
  description: 'I am a Full',
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
  description: 'I am a Full',
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
  description: 'I am a Full',
  skillList: [
    {
      icon: <SiReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiNodedotjs />,
      name: 'node.js',
    },
    {
      icon: <SiBootstrap />,
      name: 'bootstrap',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwindcss',
    },
    {
      icon: <SiMysql />,
      name: 'mysql',
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb',
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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div>
            contextn
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume