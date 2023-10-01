import { CSSProperties } from 'react';
import { TThemeVariant, themeVariants2 } from '../styles/theme2';

export const useThemeConfig2 = (variant: TThemeVariant) => {
  const {
    themeId,
    colors: { font, highlight },
    ...otherProps
  } = themeVariants2[variant];

  return {
    themeId: themeId,
    variables: {
      '--theme-texture': `url(${otherProps.texture})`,
      '--theme-color': highlight,
      '--theme-font': font,
    } as CSSProperties,
  };
};
