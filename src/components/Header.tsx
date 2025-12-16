import { Layers } from 'lucide-react';
import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Layers className="text-blue-500" />
          <span>EngieTools</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-colors">
          Subscribe
        </button>
      </div>
    </header>
  );
};
