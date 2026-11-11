/**
 * Puente para '../meta', igual que blitz-kit.tsx: deja que las plantillas
 * usen demoMetadata mientras viven en plantillas/ (solo typecheck); al
 * copiarse a app/demos/<slug>/ el import apunta a app/demos/meta.ts.
 * Este archivo no se copia a app/.
 */
export * from '../../app/demos/meta'
