import { EqualApproximately, CalendarSync, BanknoteIcon } from "lucide-react"
import AnimatedSlidingText from "./ui/animated-sliding-text"
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import pattern from "@/assets/images/pattern.png";

export function MetricsSection() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const [section2Ref, section2Visible] = useScrollAnimation(0.1);
  
  return (
    <div className={`w-full mx-auto bg-[#00929e] rounded-b-[50px] bg-[url(assets/images/pattern.png)] bg-repeat-x bg-cover`} style={{ backgroundImage: `url(${pattern})` }}>
      <div className="bg-[#efefef] w-full rounded-b-[50px] h-20"></div>
      <div className="rounded-3xl md:p-12 p-4 text-white">
        {/* Version PC */}
        <div className="hidden md:grid grid-cols-1 px-4 md:grid-cols-3 md:gap-12 justify-center 
        md:mx-auto md:my-10 md:w-[800px] h-[400px]">
          {/* Automatisations déployées */}
          <div ref={section2Ref} className="flex flex-col justify-between md:mx-12 h-full">
            <div className="space-y-6">
              <div className="flex justify-start">
                <CalendarSync className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <AnimatedSlidingText text="+100" className="text-white text-4xl font-bold w-full font-neue-plak"
                repeat={true} repeatDelay={10} duration={0.3} delay={0} stagger={0.2} animate={section2Visible} />
                <h3 className="md:text-base text-sm font-medium leading-tight md:font-neue-plak text-start">
                  Automatisations
                  déployées
                </h3>
              </div>
            </div>

            <div className="mt-auto space-y-2">
              <div className="text-4xl font-bold text-start">
                5<span className="text-2xl font-normal font-neue-plak"> ANS</span>
              </div>
              <p className="md:text-base text-sm leading-tight md:font-neue-plak text-start">
                d'expertise en
                <br />
                Afrique de l'Ouest
              </p>
            </div>
          </div>

          {/* ROI Moyen */}
          <div ref={section2Ref} className="flex flex-col justify-between md:mx-12 h-full">
            <div className="space-y-6">
              <div className="flex justify-start">
                <EqualApproximately className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <AnimatedSlidingText text="300%" className="text-white text-4xl font-bold w-full font-neue-plak"
                repeat={true} repeatDelay={10} duration={0.3} delay={0} stagger={0.2} animate={section2Visible} />
                <h3 className="md:text-base text-sm font-medium leading-tight md:font-neue-plak text-start">
                  ROI moyen en 12 mois
                </h3>
              </div>
            </div>

            <div className="mt-auto space-y-2">
              <div className="text-4xl font-bold text-start">95%</div>
              <p className="md:text-base text-sm leading-tight md:font-neue-plak text-start">
                Satisfaction
                <br />
                client
              </p>
            </div>
          </div>

          {/* Économisés par client */}
          <div ref={section2Ref} className="flex flex-col justify-between md:mx-12 h-full">
            <div className="space-y-6">
              <div className="flex justify-start">
                <BanknoteIcon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <AnimatedSlidingText text="15M" className="text-4xl font-bold w-full font-neue-plak" 
                duration={0.3} delay={0} stagger={0.2} animate={section2Visible} repeat={true} repeatDelay={10} />
                <h3 className="md:text-base text-sm font-medium leading-tight md:font-neue-plak text-start">
                  Economosé par client par an
                </h3>
              </div>
            </div>

            <div className="mt-auto space-y-2">
              <div className="text-4xl font-bold font-neue-plak text-start">
                2<span className="text-xl font-normal font-neue-plak"> SEMAINES</span>
              </div>
              <p className="md:text-base text-sm leading-tight md:font-neue-plak text-start">
                Votre première
                <br />
                automatisation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden rounded-3xl md:p-12 p-4 text-white">
        {/* Version Mobile */}
        <div className="md:max-w-0 grid grid-cols-1 px-4 md:grid-cols-3 md:gap-12 justify-center 
        md:mx-auto md:my-10 md:w-[800px]">
          {/* Automatisations déployées */}
          <div ref={sectionRef} className="text-center space-y-2 flex md:flex-col md:mx-12 gap-4 md:w-full">
            <div className="mb-16 flex-1">
              <div className="flex justify-start">
                <CalendarSync className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2" >
                <AnimatedSlidingText text="+100" className="text-4xl font-bold w-full font-neue-plak"
                repeat={true} repeatDelay={10} duration={0.3} delay={0} stagger={0.2} animate={sectionVisible} />
                <h3 className="md:text-base text-sm font-medium leading-tight md:font-neue-plak text-start min-w-52">
                  Automatisations
                  déployées
                </h3>
              </div>
            </div>

            <div className="space-y-2 flex-1">
              <div className="text-4xl font-bold text-start">
                5<span className="text-2xl font-normal font-neue-plak"> ANS</span>
              </div>
              <p className="md:text-base text-sm leading-tight md:font-neue-plak text-start">
                d'expertise en
                <br />
                Afrique de l'Ouest
              </p>
            </div>
          </div>

          {/* ROI Moyen */}
          <div ref={sectionRef} className="text-center space-y-2 md:max-w-40 flex md:flex-col md:mx-12 gap-4">
            <div className="mb-16 flex-1">
              <div className="flex justify-start">
                <EqualApproximately className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <AnimatedSlidingText text="300%" className="text-4xl font-bold w-full font-neue-plak"
                repeat={true} repeatDelay={10} duration={0.3} delay={0} stagger={0.2} animate={sectionVisible} />
                <h3 className="md:text-base text-sm font-medium leading-tight md:font-neue-plak text-start min-w-52">
                  ROI moyen en 12 mois
                </h3>
              </div>
            </div>

            <div className="space-y-2 flex-1">
              <div className="text-4xl font-bold text-start">95%</div>
                <p className="md:text-base text-sm leading-tight md:font-neue-plak text-start ">
                  Satisfaction
                <br />
                client
              </p>
            </div>
          </div>

          {/* Économisés par client */}
          <div ref={sectionRef} className="text-center space-y-2 md:max-w-40 flex md:flex-col md:mx-12 gap-4">
            <div className="mb-16 flex-1">
              <div className="flex justify-start">
                <BanknoteIcon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                  <AnimatedSlidingText text="15M" className="text-4xl font-bold w-full font-neue-plak" 
                  duration={0.3} delay={0} stagger={0.2} animate={sectionVisible} repeat={true} repeatDelay={10} />
                  <h3 className="md:text-base text-sm font-medium leading-tight md:font-neue-plak text-start min-w-52">
                    Economosé par client par an
                  </h3>
              </div>
            </div>

            <div className="space-y-2 flex-1">
              <div className="text-4xl font-bold font-neue-plak text-start">
                2<span className="text-xl font-normal font-neue-plak"> SEMAINES</span>
              </div>
              <p className="md:text-base text-sm leading-tight md:font-neue-plak text-start">
                Votre première
                <br />
                automatisation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
