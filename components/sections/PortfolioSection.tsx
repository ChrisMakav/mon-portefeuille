"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects, type Project } from "@/lib/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

type ProjectTranslation = {
  category: string;
  title: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  solution: string;
  results: readonly string[];
};

function localizeProject(project: Project, pd: Record<string, ProjectTranslation>): Project {
  const trans = pd[project.id];
  if (!trans) return project;
  return {
    ...project,
    category: trans.category,
    title: trans.title,
    imageAlt: trans.imageAlt,
    summary: trans.summary,
    challenge: trans.challenge,
    solution: trans.solution,
    results: trans.results as string[],
  };
}

function ProjectThumbnail({ project, onExpand, caseStudyLabel }: { project: Project; onExpand: () => void; caseStudyLabel: string }) {
  return (
    <article className="group rounded-xl overflow-hidden bg-surface border border-line shadow-sm transition-all duration-[200ms] hover:-translate-y-0.5 hover:border-accent flex flex-col">
      <button
        type="button"
        className="relative aspect-video bg-surface-raised overflow-hidden flex items-center justify-center w-full border-0 cursor-pointer"
        onClick={onExpand}
        aria-label={`${caseStudyLabel}: ${project.title}`}
      >
        {project.image && !project.image.includes("placeholder") ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-[350ms] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <span
            className="font-display text-5xl font-black text-accent/10 select-none transition-transform duration-[350ms] group-hover:scale-110"
            aria-hidden="true"
          >
            {project.category[0]}
          </span>
        )}
      </button>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <span className="font-mono text-label text-fg-subtle">{project.year}</span>
        </div>

        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-fg leading-tight">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-fg-muted leading-relaxed flex-1">
          {project.summary}
        </p>

        <button
          type="button"
          onClick={onExpand}
          className="inline-flex items-center gap-1 font-sans text-sm text-fg-muted transition-colors duration-[200ms] group-hover:text-accent hover:text-accent mt-auto pt-1 cursor-pointer border-0 bg-transparent p-0"
        >
          {caseStudyLabel}
        </button>
      </div>
    </article>
  );
}

function CaseStudyModal({
  project,
  onClose,
  labels,
}: {
  project: Project | null;
  onClose: () => void;
  labels: { challenge: string; solution: string; results: string; technologies: string; viewProject: string; close: string; ariaClose: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [project]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="w-full max-w-2xl rounded-2xl bg-overlay border border-line-strong shadow-xl p-0 mx-auto my-auto overflow-hidden"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      {project && (
        <div className="overflow-y-auto max-h-[85vh] p-8 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="accent">{project.category}</Badge>
                <span className="font-mono text-label text-fg-subtle">{project.year}</span>
              </div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight text-fg leading-tight">
                {project.title}
              </h2>
              <p className="font-mono text-caption text-fg-muted">{project.client}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 text-fg-subtle hover:text-fg transition-colors duration-[200ms] text-2xl leading-none p-1 cursor-pointer border-0 bg-transparent"
              aria-label={labels.ariaClose}
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-2">{labels.challenge}</p>
              <p className="font-sans text-sm text-fg-muted leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-2">{labels.solution}</p>
              <p className="font-sans text-sm text-fg-muted leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <p className="font-mono text-label uppercase tracking-widest text-accent mb-3">{labels.results}</p>
              <ul className="flex flex-col gap-2">
                {project.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 shrink-0">✓</span>
                    <span className="font-sans text-sm text-fg-muted">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.technologies.length > 0 && (
              <div>
                <p className="font-mono text-label uppercase tracking-widest text-accent mb-3">{labels.technologies}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-2 border-t border-line">
            {project.href && (
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">{labels.viewProject}</Button>
              </a>
            )}
            <Button variant="secondary" size="sm" onClick={onClose}>{labels.close}</Button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export function PortfolioSection() {
  const { tr, lang } = useLanguage();
  const { portfolio } = tr;
  const allLabel = portfolio.all;

  const pd = tr.projectsData as Record<string, ProjectTranslation>;
  const localizedProjects = projects.map((p) => localizeProject(p, pd));
  const categories = [allLabel, ...Array.from(new Set(localizedProjects.map((p) => p.category)))];

  const [activeCategory, setActiveCategory] = useState<string>(allLabel);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setActiveCategory(allLabel);
    setSelectedProject(null);
  }, [lang, allLabel]);

  const filtered =
    activeCategory === allLabel
      ? localizedProjects
      : localizedProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeader label={portfolio.label} heading={portfolio.heading} />

        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={[
                "font-mono text-label uppercase tracking-widest px-4 py-2 rounded-md border transition-all duration-[200ms] cursor-pointer",
                activeCategory === cat
                  ? "bg-accent text-fg-inverse border-accent"
                  : "bg-surface border-line text-fg-muted hover:border-accent hover:text-accent",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
          {filtered.map((project) => (
            <ProjectThumbnail
              key={`${project.id}-${lang}`}
              project={project}
              onExpand={() => setSelectedProject(project)}
              caseStudyLabel={portfolio.caseStudy}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        labels={{
          challenge: portfolio.challenge,
          solution: portfolio.solution,
          results: portfolio.results,
          technologies: portfolio.technologies,
          viewProject: portfolio.viewProject,
          close: portfolio.close,
          ariaClose: portfolio.ariaClose,
        }}
      />
    </section>
  );
}
