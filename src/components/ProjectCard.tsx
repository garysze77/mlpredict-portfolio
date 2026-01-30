'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Project } from '@/types';

type ProjectCardProps = { project: Project };

const isPlaceholder = (url: string) => !url || url === '#';

export function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const showLive = !isPlaceholder(project.liveUrl);
  const showGitHub = !isPlaceholder(project.githubUrl);
  const showImage = project.image && !isPlaceholder(project.image) && !imgError;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl dark:border-slate-600/30 dark:bg-slate-800/70">
      {/* Hero 圖 400x250 比例 */}
      <div className="relative h-[250px] w-full shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-700">
        {showImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              截圖占位 · {project.title}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        {project.metrics && (
          <p className="mt-1 text-sm font-medium text-mlpredict-600 dark:text-mlpredict-400">
            {project.metrics}
          </p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="inline rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-600 dark:text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {showLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mlpredict-600 hover:underline dark:text-mlpredict-400"
            >
              Live Demo →
            </a>
          ) : (
            <span className="text-slate-400 dark:text-slate-500">Live Demo 即將推出</span>
          )}
          {showGitHub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-600 hover:underline dark:text-slate-400"
            >
              GitHub
            </a>
          ) : (
            <span className="text-slate-400 dark:text-slate-500">GitHub 即將推出</span>
          )}
        </div>
      </div>
    </article>
  );
}
