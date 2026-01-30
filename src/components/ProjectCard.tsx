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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-slate-600">
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary-100/80 via-slate-100 to-primary-200/60 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700">
        {showImage ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:bg-slate-800/80 dark:text-slate-300">
            截圖占位 · {project.title}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {showLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-600 hover:underline dark:text-primary-400"
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
              className="font-medium text-slate-600 hover:underline dark:text-slate-400"
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
