import type { Module, Track } from '../types';
import { foundationModules } from './foundations';
import { coreModules } from './core';
import { deepModules } from './deep';
import { llmModules } from './llm';
import { productionModules } from './production';
import { impactModules } from './impact';

export const modules: Module[] = [
  ...foundationModules,
  ...coreModules,
  ...deepModules,
  ...llmModules,
  ...productionModules,
  ...impactModules
];

export const moduleBySlug = Object.fromEntries(modules.map((m) => [m.slug, m]));
export const moduleById = Object.fromEntries(modules.map((m) => [m.id, m]));

export function modulesByPhase(phase: string) {
  return modules.filter((m) => m.phase === phase);
}

export function modulesByTrack(track: Track) {
  return modules.filter((m) => m.tracks.includes(track));
}

export function moduleNeighbors(slug: string) {
  const index = modules.findIndex((m) => m.slug === slug);
  return {
    prev: index > 0 ? modules[index - 1] : null,
    next: index < modules.length - 1 ? modules[index + 1] : null
  };
}

export const TOTAL_MODULES = modules.length;
// totalMinutes เป็นค่าประเมินคร่าว (28*60) ไม่ได้คำนวณจาก durations รายบท 1–2 สัปดาห์
export const totalMinutes = 28 * 60;
