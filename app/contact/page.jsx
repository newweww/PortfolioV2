"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import { delay, motion } from "framer-motion"

import { useState } from "react"

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

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [responseMessage, setResponseMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalSubject = `ส่งจาก ${name} ${lastname}`;
    const finalMessage = `
      ชื่อ : ${name} ${lastname}
      เบอร์ : ${phone}
      อีเมล : ${email}
      ข้อความ : ${message}
    `;

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, subject: finalSubject, message: finalMessage }),
    });

    const data = await res.json();

    if (res.ok) {
      setResponseMessage(data.message);
      setEmail('');
      setMessage(''); 
      setName('');
      setLastname('');
      setPhone('');
    } else {
      setResponseMessage(data.error);
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">Descropewqrwfgjsklgnsjklfghsujgsd</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Firstname" />
                <Input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" />
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
              </div>

              <Textarea className="h-[200px]" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type youe message here" />

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