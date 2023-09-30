import { ThemeVariants2, themeVariants2 } from "../styles/theme2";

export const useThemeConfig2 = (variant: ThemeVariants2) => {
  const {
    themeId,
    colors: { font, highlight },
    ...otherProps
  } = themeVariants2[variant];

  return {
    themeId: themeId,
    variables: {
      "--theme-texture": `url(${otherProps.texture})`,
      "--theme-color": highlight,
      "--theme-font": font,
    },
  };
};
