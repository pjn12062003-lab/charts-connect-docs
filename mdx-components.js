// mdx-components.tsx
import { useMDXComponents as getThemeMDXComponents } from 'nextra-theme-docs'
import { Steps, FileTree } from 'nextra/components'

const themeComponents = getThemeMDXComponents()

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    Steps,
    FileTree,
    ...components
  }
}