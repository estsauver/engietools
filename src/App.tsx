import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToolCard } from './components/ToolCard';
import { Footer } from './components/Footer';
import { tools } from './data/tools';

function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(tools.map(t => t.category)))];

  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <Header />
      
      <main>
        <Hero />

        <div className="container mx-auto px-4 py-12">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No tools found in this category.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;