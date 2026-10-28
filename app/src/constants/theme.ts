// Shared colors and spacing for the whole app.
// Keeping them in one place makes the UI consistent and easy to restyle.

export const colors = {
  primary: '#2563EB',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',

  // Verdict colors used on the result screen.
  danger: '#DC2626', // allergens found
  dangerBg: '#FEE2E2',
  warning: '#D97706', // may contain traces
  warningBg: '#FEF3C7',
  success: '#16A34A', // no allergens detected
  successBg: '#DCFCE7',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  md: 12,
  lg: 16,
} as const;
