import { CSSProperties } from "react";
import { ThemeVariants, themeVariants } from "../styles/theme";

export function useThemeConfig(variant?: ThemeVariants) {
  const themeVariant = variant || ThemeVariants.Almond;
  const { themeId, ...configs } = themeVariants[themeVariant];

  return {
    themeId,
    configs,
    variables: {
      "--theme-texture": `url(${configs.texture})`,
      "--theme-font-color": configs.colors.font,
      "--theme-highlight-color": configs.colors.highlight,
    } as CSSProperties,
  };
}
