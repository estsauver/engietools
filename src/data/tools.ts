export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  link: string;
  isNew?: boolean; // New/Major update in 2025
}

export const tools: Tool[] = [
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'AI Editor',
    description: 'The AI-first code editor that understands your entire codebase. 2025 updates brought "Cursor Tab" to a whole new level of prediction.',
    link: 'https://cursor.sh',
    isNew: false
  },
  {
    id: 'gh-copilot-workspace',
    name: 'GitHub Copilot Workspace',
    category: 'AI Environment',
    description: 'A radical new way to build software. Describe the task, and Copilot Workspace plans and implements the changes across your repo.',
    link: 'https://githubnext.com/projects/copilot-workspace',
    isNew: true
  },
  {
    id: 'eidolon',
    name: 'Eidolon AI',
    category: 'AI Agents',
    description: 'The open-source framework for building modular, production-ready AI agents. Released in 2025 to solve the "agent orchestration" problem.',
    link: 'https://eidolonai.com',
    isNew: true
  },
  {
    id: 'devstral',
    name: 'Devstral 2',
    category: 'AI Model',
    description: 'Mistral AI\'s specialized coding model. Version 2 (Dec 2025) brings enhanced reasoning for agentic workflows.',
    link: 'https://mistral.ai',
    isNew: true
  },
  {
    id: 'astral-uv',
    name: 'Astral (uv)',
    category: 'Python Tooling',
    description: 'An extremely fast Python package installer and resolver, written in Rust. It revolutionized Python dependency management in 2024-2025.',
    link: 'https://github.com/astral-sh/uv',
    isNew: false
  },
  {
    id: 'zed',
    name: 'Zed',
    category: 'Editor',
    description: 'A high-performance, multiplayer code editor from the creators of Atom. Now open source and gaining massive traction in 2025.',
    link: 'https://zed.dev',
    isNew: false
  },
  {
    id: 'bun',
    name: 'Bun',
    category: 'Runtime',
    description: 'A fast all-in-one JavaScript runtime, bundler, transpiler, and package manager. Reached peak maturity and adoption in 2025.',
    link: 'https://bun.sh',
    isNew: false
  },
  {
    id: 'duckdb',
    name: 'DuckDB 1.4.3',
    category: 'Database',
    description: 'An in-process SQL OLAP database management system. Version 1.4.3 (Dec 2025) brings massive performance gains for local analytics.',
    link: 'https://duckdb.org',
    isNew: true
  },
  {
    id: 'keploy',
    name: 'Keploy',
    category: 'Testing',
    description: 'Open source AI-based backend testing tool that generates tests from API traffic. Essential for regression testing in 2025.',
    link: 'https://keploy.io',
    isNew: false
  },
  {
    id: 'langchain',
    name: 'LangChain 1.2',
    category: 'AI Framework',
    description: 'The standard framework for building LLM apps. Version 1.2 (Dec 2025) finally brings API stability and production-ready features.',
    link: 'https://langchain.com',
    isNew: true
  },
  {
    id: 'tauri',
    name: 'Tauri 2.0',
    category: 'Framework',
    description: 'Build smaller, faster, and more secure desktop and mobile applications. 2.0 brings full mobile support (iOS/Android).',
    link: 'https://tauri.app',
    isNew: true
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'Backend',
    description: 'The open source Firebase alternative. In 2025, their AI/Vector support and Edge Functions have become industry standard.',
    link: 'https://supabase.com',
    isNew: false
  },
  {
    id: 'biome',
    name: 'Biome',
    category: 'Toolchain',
    description: 'A fast formatter, linter, and more for web projects. It has largely replaced Prettier and ESLint for many new projects in 2025.',
    link: 'https://biomejs.dev',
    isNew: false
  },
  {
    id: 'warp',
    name: 'Warp',
    category: 'Terminal',
    description: 'The terminal for the 21st century. AI command search, workflows, and collaborative features make it a must-have.',
    link: 'https://www.warp.dev',
    isNew: false
  },
  {
    id: 'dagger',
    name: 'Dagger',
    category: 'CI/CD',
    description: 'A programmable CI/CD engine that runs your pipelines in containers. " CI/CD as Code" finally done right.',
    link: 'https://dagger.io',
    isNew: false
  },
  {
    id: 'rspack',
    name: 'Rspack',
    category: 'Bundler',
    description: 'A high-performance web bundler written in Rust. Compatible with Webpack but orders of magnitude faster.',
    link: 'https://www.rspack.dev',
    isNew: false
  },
  {
    id: 'amp',
    name: 'Amp',
    category: 'AI Agent',
    description: 'Sourcegraph\'s new AI coding agent. Engineered for outcomes with no token constraints, replacing Cody Free/Pro.',
    link: 'https://sourcegraph.com/cody',
    isNew: true
  },
  {
    id: 'amazon-q',
    name: 'Amazon Q',
    category: 'Cloud AI',
    description: 'The generative AI-powered assistant designed for work. Specifically tuned for AWS architecture and development in 2025.',
    link: 'https://aws.amazon.com/q',
    isNew: true
  },
  {
    id: 'gitlab-duo',
    name: 'GitLab Duo',
    category: 'DevOps',
    description: 'GitLab\'s suite of AI capabilities. From planning to security scanning, it integrates AI into the entire DevOps lifecycle.',
    link: 'https://about.gitlab.com/gitlab-duo',
    isNew: false
  },
  {
    id: 'blender',
    name: 'Blender 5.0',
    category: 'Design',
    description: 'The free and open source 3D creation suite. Version 5.0 (Nov 2025) introduces revolutionary Geometry Nodes and UI overhaul.',
    link: 'https://www.blender.org',
    isNew: true
  }
];
