import type { ThemeConfig, ThemeColors, ThemePreset } from '@/types'

export const themePresets: Record<ThemePreset, ThemeColors> = {
  'electric-lime': {
    primaryBg: '#090909',
    secondaryBg: '#141414',
    surface: '#141414',
    surface2: '#1c1c1c',
    primaryAccent: '#c6ff00',
    secondaryAccent: '#e4ff6b',
    textPrimary: '#f5f5f2',
    textSecondary: '#a1a1aa',
    borderColor: '#242424',
    fontHeading: "'Barlow Condensed', sans-serif",
    fontBody: "'DM Sans', sans-serif",
  },
  'crimson-red': {
    primaryBg: '#0a0a0c',
    secondaryBg: '#151518',
    surface: '#151518',
    surface2: '#1f1e24',
    primaryAccent: '#ff2247',
    secondaryAccent: '#ff617d',
    textPrimary: '#f5f5f7',
    textSecondary: '#9c9ca4',
    borderColor: '#292830',
    fontHeading: "'Barlow Condensed', sans-serif",
    fontBody: "'DM Sans', sans-serif",
  },
  'neon-orange': {
    primaryBg: '#0a0908',
    secondaryBg: '#161412',
    surface: '#161412',
    surface2: '#201d19',
    primaryAccent: '#ff6200',
    secondaryAccent: '#ffa040',
    textPrimary: '#f7f5f2',
    textSecondary: '#a39f99',
    borderColor: '#2a2520',
    fontHeading: "'Barlow Condensed', sans-serif",
    fontBody: "'DM Sans', sans-serif",
  },
  'pure-gold': {
    primaryBg: '#090909',
    secondaryBg: '#141311',
    surface: '#141311',
    surface2: '#1f1c16',
    primaryAccent: '#d4af37',
    secondaryAccent: '#f5df88',
    textPrimary: '#f8f7f4',
    textSecondary: '#a8a396',
    borderColor: '#2b261d',
    fontHeading: "'Barlow Condensed', sans-serif",
    fontBody: "'DM Sans', sans-serif",
  },
  'cyber-blue': {
    primaryBg: '#060b13',
    secondaryBg: '#0c1524',
    surface: '#0c1524',
    surface2: '#132036',
    primaryAccent: '#00e5ff',
    secondaryAccent: '#7df3ff',
    textPrimary: '#f0f6fc',
    textSecondary: '#8b9cb0',
    borderColor: '#1a2a42',
    fontHeading: "'Barlow Condensed', sans-serif",
    fontBody: "'DM Sans', sans-serif",
  },
  'monochrome': {
    primaryBg: '#0b0b0b',
    secondaryBg: '#161616',
    surface: '#161616',
    surface2: '#222222',
    primaryAccent: '#ffffff',
    secondaryAccent: '#d4d4d4',
    textPrimary: '#ffffff',
    textSecondary: '#a3a3a3',
    borderColor: '#2a2a2a',
    fontHeading: "'Barlow Condensed', sans-serif",
    fontBody: "'DM Sans', sans-serif",
  },
}

/**
 * ACTIVE THEME CONFIGURATION
 * To change the website's brand colors:
 * Change activePreset to:
 * - 'electric-lime' (High-energy black + vibrant neon lime)
 * - 'crimson-red'   (Aggressive strength black + crimson red)
 * - 'neon-orange'   (Dynamic athletics black + neon orange)
 * - 'pure-gold'     (Luxury prestige black + burnished gold)
 * - 'cyber-blue'    (Modern high-tech deep navy + cyan blue)
 * - 'monochrome'    (Minimalist luxury deep charcoal + stark white)
 *
 * Or override specific colors in customColors.
 */
export const themeConfig: ThemeConfig = {
  activePreset: 'electric-lime',
  presets: themePresets,
  customColors: {},
}

/**
 * Returns the resolved theme colors based on activePreset and customColors overrides.
 */
export function getActiveTheme(): ThemeColors {
  const base = themePresets[themeConfig.activePreset] || themePresets['electric-lime']
  return {
    ...base,
    ...(themeConfig.customColors || {}),
  }
}

/**
 * Generates the CSS root variables string to be injected in layout.tsx.
 * This guarantees the entire website respects theme changes instantly.
 */
export function generateThemeCssVariables(): string {
  const theme = getActiveTheme()
  return `
    :root {
      --primary-bg: ${theme.primaryBg};
      --secondary-bg: ${theme.secondaryBg};
      --surface: ${theme.surface};
      --surface2: ${theme.surface2};
      --primary-accent: ${theme.primaryAccent};
      --secondary-accent: ${theme.secondaryAccent};
      --text-primary: ${theme.textPrimary};
      --text-secondary: ${theme.textSecondary};
      --border-color: ${theme.borderColor};
      --line: ${theme.borderColor};
      --font-heading: ${theme.fontHeading};
      --font-body: ${theme.fontBody};

      /* Legacy / alias bindings for zero-breakage */
      --black: ${theme.primaryBg};
      --lime: ${theme.primaryAccent};
      --white: ${theme.textPrimary};
      --muted: ${theme.textSecondary};
      --nav-h: 88px;
    }
  `.trim()
}
