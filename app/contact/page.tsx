"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+994 70 380 33 33",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "info@saythub.az",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Baku, Azerbaijan",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xvgoowbp");
  const [service, setService] = useState("");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl text-accent mt-[-400px]">
          Təşəkkür edirik! Mesajınız göndərildi.
        </p>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Gəlin birlikdə işləyək</h3>
              <p>Bizimlə əlaqə saxlamaq üçün aşağıdakı formanı doldurun.</p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Ad"
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Soyad"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="E-poçt adresi"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Telefon nömrəsi"
                  required
                />
              </div>

              {/* Select Service */}
              <Select onValueChange={(value) => setService(value)} name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Xidmət seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                    <SelectItem value="motion-design">Motion Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input type="hidden" name="service" value={service} />

              {/* Message */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Mesajınızı bura yazın"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Submit Button */}
              <Button type="submit" disabled={state.submitting} className="max-w-40">
                Mesaj göndər
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
