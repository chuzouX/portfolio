import dynamic from 'next/dynamic';

// Lazy load heavy components with loading states
export const FooterAI = dynamic(() => import('./FooterAI').then(mod => ({ default: mod.FooterAI })), {
  loading: () => <div className="h-96 bg-[#020203]" />,
  ssr: true,
});

export const ProjectsGithub = dynamic(() => import('./ProjectsGithub').then(mod => ({ default: mod.ProjectsGithub })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-slate-500">Loading projects...</div></div>,
  ssr: false,
});

export const ServicesBento = dynamic(() => import('./ServicesBento').then(mod => ({ default: mod.ServicesBento })), {
  loading: () => <div className="min-h-screen bg-[#020203]" />,
  ssr: false,
});
