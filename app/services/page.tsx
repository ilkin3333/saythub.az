"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from "next/link";



const services =[
{
    num: '01',
    title: 'Web Development',
    desc: 'Biz biznes məqsədlərinizə cavab verən sürətli, genişlənən və təhlükəsiz vebsaytlar qururuq.',
    href: ""
},
{
    num: '02',
    title: 'UI/UX Design',
    desc: "Biz istifadəçiləri sevindirən intuitiv və vizual olaraq heyrətamiz interfeyslər yaradırıq.",
    href: ""
},
{
    num: '03',
    title: 'Logo Design',
    desc: 'Brend kimliyinizi təmsil edən unikal və yaddaqalan loqolar yaradırıq',
    href: ""
},
{
    num: '04',
    title: 'SEO',
    desc: 'Görünüşü artırmaq və trafiki artırmaq üçün veb saytınızı axtarış motorları üçün optimallaşdırırıq',
    href: ""
}


];

import {delay, motion} from "framer-motion"

const Services  =() =>{
    return <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
 <div className='container mx-auto'>
<motion.div initial = {{opacity: 0}}
animate = {{
    opacity: 1,
    transition: {delay: 2.4,  duration:0.4, ease: "easeIn"},
}}
className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
>

{services.map((service, index) => {
    return <div key= {index} className='flex flex-col justify-center gap-6 group'>

        {/* top*/}
        <div className='w-full flex justify-between items-center'  >
            <div className='text-5xl font-extrabold text-outline text-transparent
             group-hover:text-outline-hover transition-all duration-500'>
                {service.num}</div>
            <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white
            flex justify-center items-center group-hover:bg-accent transition-all duration-500
            hover:-rotate-45'>
            <BsArrowDownRight className='text-primary text-3xl'/>
            </Link>
        </div>
        {/*heading basliq */}
        <h2 className='text-[42px] font-bold leading-none text-white
        group-hover:text-accent transition-all duration-500'>
            {service.title} </h2>
        {/*description */}
        <p className='text-white/60'>{service.desc}</p>
        {/* border */}
        <div className='border-b border-white/20 w-full'></div>
    </div>
})}
</motion.div>

 </div>
</section>
    
};
export default Services