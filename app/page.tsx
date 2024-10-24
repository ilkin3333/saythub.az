'use client'; 


import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.click();
  };

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <h1 className="h1 mb-6">
              Hello We're <br /> <span className="text-accent">saythub</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              
            Biz, mükəmməl rəqəmsal təcrübələr yaratmaqda geniş təcrübəyə malik Saythub komandasıyıq.
            <br /> 
            Veb saytların hazırlanması, motion dizayn və SMM sahələrində peşəkar xidmətlər təqdim edirik.
            </p>
            {/* Button və sosial şəbəkələr */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
