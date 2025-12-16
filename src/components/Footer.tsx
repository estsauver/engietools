import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 mt-20">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <p className="mb-4">© 2025 EngieTools. Built for the modern software engineer.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/privacy.html" className="hover:text-slate-300 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          <a href="https://twitter.com/estsauver" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
