"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue}
from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+994 70 380 33 33"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "ilkin.humbetov.99@mail.ru"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Adress",
        description: "Baku, Azerbaijan"
    },
];

import {motion} from "framer-motion";
import { SelectLabel } from "@radix-ui/react-select";


const Contact  =() =>{
    return(
        <motion.section 
        initial ={{opacity:0}}
        animate ={{
            opacity:1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
        }}
        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/*form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Gəlin birlikdə işləyək</h3>
                            <p>
                            Bizimlə əlaqə saxlamaq üçün aşağıdakı formanı doldurun.
                            </p>
                            {/*input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="Ad"/>
                          <Input type="lastname" placeholder="Soyad"/>
                          <Input type="email" placeholder="E-poçt adresi"/>
                          <Input type="phone" placeholder="Telefon nömrəsi"/>
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                   <SelectValue placeholder="Xidmət seçin" /> 
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                       <SelectLabel>Select a service</SelectLabel>
                                       <SelectItem value="est">Web Development</SelectItem>
                                       <SelectItem value="cst">UI/UX Design</SelectItem>
                                       <SelectItem value="mst">Logo Design</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/*textarea */}
                            <Textarea 
                            className="h-[200px]" 
                            placeholder="Mesajınızı bura yazın"/>
                            {/*button */}
                            <Button className="max-w-40">Mesaj göndər</Button>
                            </form>
                    </div>
                    {/*info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1
                    xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index)=> {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                                        bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
   
         </motion.section>
    );
};
export default Contact