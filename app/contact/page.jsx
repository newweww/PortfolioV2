"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import { delay, motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '098-268-8244'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'nattanan2545@hotmai.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: '647 หมู่ 3 ต.สระยายโสม อ.อู่ทอง จ.สุพรรณบุรี 72220'
  },
]

const Contact = () => {
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
      className="py-6 zoom80"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">Descropewqrwfgjsklgnsjklfghsujgsd</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              <Textarea className="h-[200px]" placeholder="Type youe message here" />

              <Button className="max-w-40">Send message</Button>

            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[72px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact