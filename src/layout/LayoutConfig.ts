export const LayoutConfig = {
  contentMaxWidth: 960,
  headerHeight: 64,
  footerHeight: 128,
  contentBg: "#FFFFFF",
  headerBg: "#414141",
  footerBg: "#414141",
} as const;

export type LayoutConfigType = typeof LayoutConfig;
