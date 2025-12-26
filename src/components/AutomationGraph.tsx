import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Mail,
  FileSpreadsheet, 
  FileCheck,
  CheckCircle2,
  Send,
  BarChart3
} from 'lucide-react';
import senyoneLogo from '@/assets/logo.svg';

// Custom YouTube icon component
const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  className="lucide lucide-linkedin-icon lucide-linkedin">
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
  <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const SlackIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
  className="lucide lucide-slack-icon lucide-slack">
    <rect width="3" height="8" x="13" y="2" rx="1.5"/>
    <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"/>
    <rect width="3" height="8" x="8" y="14" rx="1.5"/>
    <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"/>
    <rect width="8" height="3" x="14" y="13" rx="1.5"/>
    <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"/>
    <rect width="8" height="3" x="2" y="8" rx="1.5"/>
    <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"/></svg>
)


// --- Types ---
interface IconProps {
  Icon: React.ElementType;
  color: string;
  bg: string;
}

interface OutputCardProps {
  title: string;
  icon: any;
  color: string;
  delay: number;
}

// --- Components ---

// 1. Floating Source Icons (Left Side)
const SourceIcon = ({ Icon, color, bg, delay, xStart, yStart }: IconProps & { delay: number, xStart: number, yStart: number }) => {
  return (
    <motion.div
      initial={{ x: xStart, y: yStart, opacity: 0, scale: 0.8 }}
      animate={{ 
        x: [xStart, 0], // Move to center
        y: [yStart, 0], // Move to center
        opacity: [0, 1, 1, 0], // Fade in then out at center
        scale: [0.8, 1, 0.5] // Shrink at the end
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className={`absolute left-1/2 top-1/2 w-12 h-12 md:w-16 md:h-16 rounded-2xl ${bg} shadow-lg border border-white/50 flex items-center justify-center z-10`}
    >
      <Icon className={`w-6 h-6 md:w-8 md:h-8 ${color}`} />
    </motion.div>
  );
};

// 2. The Central Processor (The "Senyone Hub")
const ProcessorHub = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
      <div className="relative w-48 h-28 md:w-56 md:h-32 perspective-500 group cursor-default">
        {/* Shadow/Glow under the device */}
        <div className="absolute -inset-8 bg-blue-500/20 blur-3xl rounded-full -z-10" />

        {/* Main Body - 3D effect layers */}
        {/* Layer 1: Dark bottom for depth (Fake 3D thickness) */}
        <div className="absolute inset-0 top-3 rounded-[2rem] bg-slate-200 shadow-xl" />
        
        {/* Layer 2: Top Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-[2rem] border border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center overflow-hidden">
            
            {/* Glossy Reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/80 to-transparent opacity-50 pointer-events-none" />

            {/* Engraved Text Effect */}
            {/* 
               Technique: Text color slightly darker than bg. 
               Drop shadow white (bottom-right) to represent light hitting the far edge of the indentation.
               Shadow top-left (dark) to represent shadow cast by the edge.
            */}
            <div className="relative z-10 transform translate-y-[-4px]">
              {/*<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-300 select-none"
                  style={{ 
                    textShadow: '1px 1px 0px rgba(255,255,255,1), -1px -1px 1px rgba(0,0,0,0.1)'
                  }}
              >gr
                Senyone
              </h3>*/}
              <img src={senyoneLogo} className='h-14' />
            </div>

            {/* Activity Indicator (The "Scanner" or "Pulse") */}
            <div className="absolute bottom-5 flex gap-2">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                />
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                />
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                />
            </div>

            {/* Scanning Sheen */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 pointer-events-none"
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
            />
        </div>
      </div>
    </div>
  );
};

// 3. Processed Output Cards (Right Side)
const OutputCard: React.FC<OutputCardProps> = ({ title, icon: Icon, color, delay }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
      animate={{ 
        x: [0, 250], // Move outwards right
        y: [0, -100], // Move upwards slightly (isometric feel)
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className="absolute left-1/2 top-1/2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-3 flex items-center gap-3 z-10"
      style={{ transformOrigin: 'center left' }}
    >
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0`}>
        <Icon size={16} className="text-white" />
      </div>
      <div className="min-w-0">
        <div className="h-2 w-16 bg-slate-100 rounded mb-1.5" />
        <p className="text-xs font-semibold text-slate-700 truncate">{title}</p>
      </div>
      <div className="ml-auto">
        <CheckCircle2 size={14} className="text-green-500" />
      </div>
    </motion.div>
  );
};

const AutomationGraphic: React.FC = () => {
  // Data for left side inputs
  const inputs = [
    { Icon: Mail, color: 'text-orange-500', bg: 'bg-orange-50', x: -350, y: 100, delay: 3.2 },
    { Icon: FileSpreadsheet, color: 'text-green-600', bg: 'bg-green-50', x: -320, y: -40, delay: 2.5 },
    { Icon: FileText, color: 'text-red-500', bg: 'bg-red-50', x: -280, y: 50, delay: 1.2 },
    { Icon: YouTubeIcon, color: 'text-red-600', bg: 'bg-red-50', x: -200, y: 150, delay: 0.8 },
    { Icon: LinkedinIcon, color: 'text-blue-700', bg: 'bg-blue-50', x: -180, y: -150, delay: 1.8 },
    { Icon: SlackIcon, color: 'text-purple-600', bg: 'bg-purple-50', x: -250, y: -100, delay: 0 }
  ];

  // Data for right side outputs
  const outputs = [
    { title: "Personalized Outreach", icon: Send, color: "bg-blue-500", delay: 1.5 },
    { title: "Automation Action", icon: FileCheck, color: "bg-red-500", delay: 2.8 },
    { title: "Strategic Connect", icon: BarChart3, color: "bg-green-500", delay: 0.2 },
    { title: "Sync Data", icon: FileSpreadsheet, color: "bg-emerald-500", delay: 3.5 },
  ];

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      
      {/* Background decoration dots/grid */}
      <div className="absolute inset-0 -z-10 opacity-30">
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
         <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-300 rounded-full animate-bounce" style={{ animationDuration: '3s'}} />
         <div className="absolute top-1/2 left-10 w-2 h-2 bg-slate-300 rounded-full" />
      </div>

      {/* Inputs (Left) */}
      {inputs.map((item, i) => (
        <React.Fragment key={i}>
            {/* Visual Line (simplified straight line for React SVG compatibility in this context) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30">
                 <motion.path
                    d={`M ${window.innerWidth < 768 ? item.x/2 + 200 : item.x + 600} ${item.y + 300} L ${window.innerWidth < 768 ? 200 : 600} 300`} 
                    stroke="#CBD5E1" 
                    strokeWidth="1" 
                    strokeDasharray="4 4"
                    fill="none"
                 />
             </svg>
            <SourceIcon 
              {...item} 
              xStart={item.x} 
              yStart={item.y} 
            />
        </React.Fragment>
      ))}

      {/* The Central Hub */}
      <ProcessorHub />

      {/* Outputs (Right) */}
      {outputs.map((item, i) => (
        <OutputCard 
            key={i} 
            {...item} 
        />
      ))}
      
      
    </div>
  );
};

export default AutomationGraphic;