"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import { Description } from "@radix-ui/react-dialog"
import { handleClientScriptLoad } from "next/script"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projectsData = [
  {
    num: '01',
    category: 'Free2Play',
    title: 'Free2Play',
    description: 'Free2Play เป็นเว็บไซท์ที่รวบรวมเกมฟรี โดยเว็บไซต์นี้รวบรวมเกมฟรีที่เล่นได้ทันที ไม่มีค่าใช้จ่าย มีเกมให้เลือกเล่นทุกแนว เพิ่มเติมอัพเดทเกมใหม่ๆ อยู่เสมอ',
    stack: [
      { name: 'NextJs' },
      { name: 'Tailwind' },
      { name: 'MongoDB' },
      { name: 'NextAuth' }
    ],
    image: '/projects/thumbnail7.png',
    live: 'https://free2play-website.vercel.app/',
    github: 'https://github.com/newweww/free2play-website'
  },
  {
    num: '02',
    category: 'Tesla Clone',
    title: 'TeslaClone',
    description: 'โปรเจ็คเป็นโปรเจ็คการทำเว็บเลียนแบบเว็บของ Tesla เพื่อเป็นการฝึกการทำงานด้าน Frontend',
    stack: [
      { name: 'ReactJs' },
      { name: 'Tailwind' },
    ],
    image: '/projects/thumbnail4.png',
    live: 'https://teslaclone-b300c.web.app/',
    github: 'https://github.com/newweww/tesla-clone'
  },
  {
    num: '03',
    category: 'Book Store',
    title: 'BookStore',
    description: 'โปรเจคนี้เป็นเว็บร้านขายหนังสือแบบครบวงจรที่ผมได้มีโอกาศทำ โดยเว็บจะมีทั้งหน้าบ้านสำหรับลูกค้า และหลังบ้านสำหรับพนักงานเพื่อให้ง่ายต่อการใช้งานและจัดการร้านค้า',
    stack: [
      { name: 'NodeJs' },
      { name: 'ReactJs' },
      { name: 'Bootstrap' },
      { name: 'MySQL' },
    ],
    image: '/projects/thumbnail2.png',
    live: '',
    github: 'https://github.com/newweww/onlineshopping'
  },
  {
    num: '04',
    category: 'Nova Bot',
    title: 'NovaBot',
    description: 'Nova Bot เป็นบอทสำหรับใช้บนดิสคอร์ด ผมได้สร้างบอทตัวนี้ขึ้นเพื่อให้ง่ายต่อการจัดการเซิร์ฟเวอร์ โดยบอทตัวมีมีความสามารถในการจัดการเซิร์ฟเวอร์คอมมูนิตี้เบื้องต้น',
    stack: [
      { name: 'NodeJs' },
      { name: 'ReactJs' },
      { name: 'DiscordJs' },
      { name: 'MongoDB' },
    ],
    image: '/projects/thumbnail1.png',
    live: '',
    github: 'https://github.com/newweww/nova-bot'
  },
  {
    num: '05',
    category: 'Bored',
    title: 'Bored',
    description: 'คุณกำลังเบื่ออยู่รึปล่าว? Bored จะเป็นเว็บที่จะช่วยคุณตัดสินใจว่าจะทำอะไรในเวลาว่างดี',
    stack: [
      { name: 'NextJs' },
      { name: 'Tailwind' },
      { name: 'MongoDB' },
    ],
    image: '/projects/thumbnail6.png',
    live: '',
    github: 'https://github.com/newweww/bored'
  },
  {
    num: '06',
    category: 'Disney Info',
    title: 'DisneyInfo',
    description: 'เว็บไซท์นี้เป็นเว็บสำหรับค้าหาข้อมูลตัวละครของดิสนีย์ว่าตัวละครดังกล่าวไปปรากฎอยู่ที่ใดบ้าง',
    stack: [
      { name: 'ReactJs' },
      { name: 'Bootstrap' },
    ],
    image: '/projects/thumbnail3.png',
    live: 'https://disneyinfo-848d7.web.app/',
    github: 'https://github.com/newweww/disney-character-info'
  },
  {
    num: '07',
    category: 'Note App',
    title: 'NoteApp',
    description: 'Note App นี้เป็นแอปพลิเคชันที่ช่วยให้คุณบันทึกข้อความและข้อมูลต่าง ๆ ได้อย่างสะดวก ทำให้คุณสามารถเข้าถึงข้อมูลที่ต้องการได้อย่างรวดเร็วและง่ายดาย',
    stack: [
      { name: 'NextJs' },
      { name: 'Tailwind' },
      { name: 'MongoDB' },
    ],
    image: '/projects/thumbnail5.png',
    live: '',
    github: 'https://github.com/newweww/Noteapp'
  },
  {
    num: '08',
    category: 'Prisma_CRUD',
    title: 'Prisma_CRUD',
    description: 'โปรเจคนี้เป็นโปรเจคที่ใช้เรียนรู้การทำ CRUD ด้วย Prisma และ MongoDB',
    stack: [
      { name: 'NextJs' },
      { name: 'Tailwind' },
      { name: 'MongoDB' },
      { name: 'Prisma' },
    ],
    image: '/projects/thumbnail8.png',
    live: '',
    github: 'https://github.com/newweww/prisma-crud'
  },
];

const Projects = () => {

  const [project, setProject] = useState(projectsData[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projectsData[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 zoom80"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline" >
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && " , "}
                  </li>
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {/* Live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projectsData.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 buttom-0 w-full h-full bg-black/10 z-10"></div>
                    <div>
                      <Image
                        src={project.image}
                        alt=""
                        className="object-cover"
                        fill
                      />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* button */}
              <WorkSliderBtns
                containerStyle="flex gap-2 w-full right-0 absolute z-20 inset-0 bottom-0 xl:mt-4 xl:w-full xl:justify-end xl:items-end justify-between items-center"
                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyle="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects