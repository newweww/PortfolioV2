"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@radix-ui/react-tooltip"

import Link from "next/link"
import Image from "next/image"
import { Description } from "@radix-ui/react-dialog"

const projectsData = [
  {
    num: '01',
    category: 'Free2Play',  
    title: 'Free2Play',
    description: 'Free2Play เป็นเว็บไซท์ที่รวบรวมเกมฟรี โดยเว็บไซต์นี้รวบรวมเกมฟรีที่เล่นได้ทันที ไม่มีค่าใช้จ่าย มีเกมให้เลือกเล่นทุกแนว เพิ่มเติมอัพเดทเกมใหม่ๆ อยู่เสมอ',
    stack: [
      {name: 'NextJs'},
      {name: 'Tailwind'},
      {name: 'MongoDB'},
      {name: 'NextAuth'}
    ],
    image: 'assets/projects/thumbnail7',
    live: 'https://free2play-website.vercel.app/',
    github: 'https://github.com/newweww/free2play-website'
  },
  {
    num: '02',
    category: 'Tesla Clone',  
    title: 'TeslaClone',
    description: 'โปรเจ็คเป็นโปรเจ็คการทำเว็บเลียนแบบเว็บของ Tesla เพื่อเป็นการฝึกการทำงานด้าน Frontend',
    stack: [
      {name: 'ReactJs'},
      {name: 'Tailwind'},
    ],
    image: 'assets/projects/thumbnail4',
    live: 'https://teslaclone-b300c.web.app/',
    github: 'https://github.com/newweww/tesla-clone'
  },
  {
    num: '03',
    category: 'Book Store',  
    title: 'BookStore',
    description: 'โปรเจคนี้เป็นเว็บร้านขายหนังสือแบบครบวงจรที่ผมได้มีโอกาศทำ โดยเว็บจะมีทั้งหน้าบ้านสำหรับลูกค้า และหลังบ้านสำหรับพนักงานเพื่อให้ง่ายต่อการใช้งานและจัดการร้านค้า',
    stack: [
      {name: 'NodeJs'},
      {name: 'ReactJs'},
      {name: 'Bootstrap'},
      {name: 'MySQL'},
    ],
    image: 'assets/projects/thumbnail2',
    live: '',
    github: 'https://github.com/newweww/onlineshopping'
  },
  {
    num: '04',
    category: 'Nova Bot',  
    title: 'NovaBot',
    description: 'Nova Bot เป็นบอทสำหรับใช้บนดิสคอร์ด ผมได้สร้างบอทตัวนี้ขึ้นเพื่อให้ง่ายต่อการจัดการเซิร์ฟเวอร์ โดยบอทตัวมีมีความสามารถในการจัดการเซิร์ฟเวอร์คอมมูนิตี้เบื้องต้น',
    stack: [
      {name: 'NodeJs'},
      {name: 'ReactJs'},
      {name: 'DiscordJs'},
      {name: 'MongoDB'},
    ],
    image: 'assets/projects/thumbnail1',
    live: '',
    github: 'https://github.com/newweww/nova-bot'
  },
  {
    num: '05',
    category: 'Bored',  
    title: 'Bored',
    description: 'คุณกำลังเบื่ออยู่รึปล่าว? Bored จะเป็นเว็บที่จะช่วยคุณตัดสินใจว่าจะทำอะไรในเวลาว่างดี',
    stack: [
      {name: 'NextJs'},
      {name: 'Tailwind'},
      {name: 'MongoDB'},
    ],
    image: 'assets/projects/thumbnail6',
    live: '',
    github: 'https://github.com/newweww/bored'
  },
  {
    num: '06',
    category: 'Disney Info',  
    title: 'DisneyInfo',
    description: 'เว็บไซท์นี้เป็นเว็บสำหรับค้าหาข้อมูลตัวละครของดิสนีย์ว่าตัวละครดังกล่าวไปปรากฎอยู่ที่ใดบ้าง',
    stack: [
      {name: 'ReactJs'},
      {name: 'Bootstrap'},
    ],
    image: 'assets/projects/thumbnail3',
    live: 'https://disneyinfo-848d7.web.app/',
    github: 'https://github.com/newweww/disney-character-info'
  },
  {
    num: '07',
    category: 'Note App',  
    title: 'NoteApp',
    description: 'Note App นี้เป็นแอปพลิเคชันที่ช่วยให้คุณบันทึกข้อความและข้อมูลต่าง ๆ ได้อย่างสะดวก ทำให้คุณสามารถเข้าถึงข้อมูลที่ต้องการได้อย่างรวดเร็วและง่ายดาย',
    stack: [
      {name: 'NextJs'},
      {name: 'Tailwind'},
      {name: 'MongoDB'},
    ],
    image: 'assets/projects/thumbnail5',
    live: '',
    github: 'https://github.com/newweww/Noteapp'
  },
  {
    num: '08',
    category: 'Prisma_CRUD',  
    title: 'Prisma_CRUD',
    description: 'โปรเจคนี้เป็นโปรเจคที่ใช้เรียนรู้การทำ CRUD ด้วย Prisma และ MongoDB',
    stack: [
      {name: 'NextJs'},
      {name: 'Tailwind'},
      {name: 'MongoDB'},
      {name: 'Prisma'},
    ],
    image: 'assets/projects/thumbnail8',
    live: '',
    github: 'https://github.com/newweww/prisma-crud'
  },
];

const projects = () => {
  return (
    <div>projects</div>
  )
}

export default projects