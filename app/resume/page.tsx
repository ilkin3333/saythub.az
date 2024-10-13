"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaPhp,
    FaLaravel,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si";

const about = {
    title: "Bizim komandamız",
    description: "Saythub komandası təcrübəli və ixtisaslaşmış üzvlərdən ibarətdir.",
    team: [
        {
            photo: "/assets/resume/ilkinpp.jpeg",
            name: "İlkin Hümbətov",
            position: "CEO & Komanda Rəhbəri, Full Stack Developer ",
        },
        
        {
            photo: "/assets/resume/heqiqetinavatari.jpg",
            name: "Həqiqət Ağazadə",
            position: "Front end developer",
        },
        {
            photo: "/assets/resume/gulnurunavatari.jpg",
            name: "Gülnur Mirzəyeva",
            position: "Back end developer",
        },
        {
            photo: "/assets/resume/cavidpp.jpg",
            name: "Cavid Babayev",
            position: "Motion Designer",
        }
    ]
};

const experience = {
    title: "Bizim missiyamız",
    description: "Saythub müştərilərin məmnuniyyətini hədəfləyir və məmnun müştərinin ən yaxşı tanıtım üsulu olmasını anlayırıq. Müştərilərimizin digital-texniki problemlərini həll edərək onların rəqabətdə öndə olmalarını təmin edirik.",
};

const education = {
    title: "Bizim vizyonumuz",
    description: "Biznesiniz, təşkilatınız və hətta şəxsiniz üçün Saythub komandası olaraq digital həllər, veb-saytlar, ERP sistemləri, mobil tətbiqlər, Email xidmətləri, ödəniş sistemlərinin inteqrasiyası keyfiyyətli və güvənilir xidmət təklif edir.",
};

const skills = {
    title: "Bizim bacarıqlarımız",
    skilList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <FaPhp />,
            name: "php"
        },
        {
            icon: <FaLaravel />,
            name: "laravel"
        },
        {
            icon: <SiTypescript />,
            name: "typescript"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        }
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from '@/components/ui/tooltip';
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Bizim missiyamız</TabsTrigger>
                        <TabsTrigger value="education">Bizim vizyonumuz</TabsTrigger>
                        <TabsTrigger value="skills">Bizim bacarıqlarımız</TabsTrigger>
                        <TabsTrigger value="about">Bizim komandamız</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl fond-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description}</p>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl fond-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">
    <div className="flex flex-col gap-[30px] text-center xl:text-left mb-10">  {/* mb-6 margin bottom ekledim */}
        <h3 className="text-4xl fond-bold">{skills.title}</h3>
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skilList.map((skill, index) => (
            <li key={index}>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </li>
        ))}
    </ul>
</TabsContent>


                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl fond-bold">{about.title}</h3>
                                <div className="mt-10">

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {about.team.map((member, index) => (
                                            <div key={index} className="bg-[#232329] p-6 rounded-xl flex flex-col items-center">
                                                <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
                                                <h5 className="text-xl font-medium">{member.name}</h5>
                                                <p className="text-white/60">{member.position}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
