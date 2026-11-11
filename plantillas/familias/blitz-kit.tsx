/**
 * Puente para que las plantillas importen '../blitz-kit' igual que un demo
 * real: aquí (en plantillas/familias/<familia>/) resuelve a este archivo y
 * así `npm run typecheck` las compila; cuando armar.mjs copia el page.tsx a
 * app/demos/<slug>/, el mismo import '../blitz-kit' resuelve al kit real.
 * Este archivo no se copia a app/.
 */
export * from '../../app/demos/blitz-kit'
