import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 'horse-racing',
    title: '賽馬預測平台',
    description: '基於 XGBoost 的賽馬結果預測，協助數據驅動投注決策。',
    tech: ['XGBoost', 'Python', 'Pandas', 'Scikit-learn'],
    image: '/images/project-horse.jpg',
    liveUrl: 'https://racingai.site',
    githubUrl: '#',
    metrics: '80%+ 準確率',
  },
  {
    id: 'us-stocks',
    title: '美股買賣通知',
    description: '實時股票信號推送，整合 Finnhub API，及時掌握買賣時機。',
    tech: ['Finnhub', 'Node.js', 'WebSocket', 'React'],
    image: '/images/project-us-stocks.jpg',
    liveUrl: 'https://sectorpulse.app',
    githubUrl: '#',
    metrics: '實時信號',
  },
  {
    id: 'chamber',
    title: '商會管理系統',
    description: '會員與活動管理一站式平台，讓商會營運更輕鬆高效。',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'TypeScript'],
    image: '/images/project-value.jpg',
    liveUrl: 'https://event.value-chapter.com',
    githubUrl: '#',
    metrics: '一站式管理',
  },
  {
    id: 'profit-poker',
    title: '德州撲克管理系統',
    description: '會員、比賽建立與發佈，一站式德州撲克比賽管理。',
    tech: ['TensorFlow', 'Python', 'FastAPI', 'Vue'],
    image: '/images/project-poker.jpg',
    liveUrl: 'https://m.pokersports.hk',
    githubUrl: '#',
    metrics: '全流程管理',
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-widest text-mlpredict-500">
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          精選項目
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          從賽馬預測到商會管理，涵蓋多種生產級 ML 與系統開發案例。
        </p>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
