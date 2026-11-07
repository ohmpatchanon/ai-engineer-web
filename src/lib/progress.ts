// Shared localStorage keys and the typed browser-side progress API.
//
// The runtime implementation lives in BaseLayout.astro (inline script).
// This module is the single source of truth for key names and the
// `window.AIE` shape so call sites can use `window.AIE?.…` (typed)
// instead of `(window as any).AIE`.

export const KEY_MODULES = 'aie:modules';
export const KEY_PLAN = 'aie:plan';
export const KEY_ASSESSMENT = 'aie:assessment';

export interface AIEApi {
  /** Completed module ids stored in localStorage. */
  getModules(): string[];
  /** Persist the full completed set and broadcast `aie:progress`. */
  setModules(value: string[]): void;
  /** Toggle one module; returns the new completed state. */
  toggleModule(id: string): boolean;
  /** Show the shared toast notification. */
  toast(message: string): void;
}

declare global {
  interface Window {
    AIE?: AIEApi;
  }
}
