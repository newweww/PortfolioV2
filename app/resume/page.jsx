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

import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Resume = () => {
    return (
      <div>Resume</div>
    )
  }

export default Resume