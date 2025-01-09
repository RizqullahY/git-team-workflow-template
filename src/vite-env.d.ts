/// <reference types="vite/client" />

// Type definition for import.meta.glob
interface ImportMeta {
    readonly glob: <T = unknown>(
      pattern: string
    ) => Record<string, () => Promise<T>>;
  }
  