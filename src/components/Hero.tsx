import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import type { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 mb-8"
        >
          <Terminal size={16} />
          <span className="text-sm font-medium">The Developer's Toolkit</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-6 tracking-tight"
        >
          Top 20 Engineering<br />Tools of 2025
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
        >
          Curated selection of the most impactful software engineering tools released or significantly updated this year. Upgrade your workflow today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center gap-8 text-slate-500"
        >
          <div className="flex items-center gap-2">
            <Cpu size={20} />
            <span>AI Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={20} />
            <span>Developer First</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
