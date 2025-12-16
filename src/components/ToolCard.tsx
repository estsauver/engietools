import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import type { Tool } from '../data/tools';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: FC<ToolCardProps> = ({ tool }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={48} />
      </div>

      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-950/50 rounded-full border border-blue-900 mb-2">
            {tool.category}
          </span>
          {tool.isNew && (
            <span className="ml-2 inline-block px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/50 rounded-full border border-emerald-900 mb-2">
              New in 2025
            </span>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">
        <a 
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors hover:underline decoration-blue-500/30 underline-offset-4"
        >
          {tool.name}
        </a>
      </h3>
      
      <p className="text-slate-400 mb-6 leading-relaxed">
        {tool.description}
      </p>

      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
      >
        Learn more <ExternalLink size={14} />
      </a>
    </motion.div>
  );
};
