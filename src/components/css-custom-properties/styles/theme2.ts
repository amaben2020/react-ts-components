// step 1: create an enum with the different themes

export enum ThemeVariants2 {
  Soya = "Soya",
  Oat = "Oat",
  Almond = "Almond",
  NotMilk = "Not Milk",
  Protein = "Protein",
  NoSugar = "No Sugar",
}
type TThemeVariants2 = Record<
  ThemeVariants2,
  {
    themeId: string;
    texture: string;
    colors: {
      font: string;
      highlight: string;
    };
  }
>;
export const themeVariants2: TThemeVariants2 = {
  [ThemeVariants2.Almond]: {
    themeId: ThemeVariants2.Almond.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },

  [ThemeVariants2.NoSugar]: {
    themeId: ThemeVariants2.NoSugar.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants2.NotMilk]: {
    themeId: ThemeVariants2.NotMilk.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants2.Oat]: {
    themeId: ThemeVariants2.Oat.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants2.Protein]: {
    themeId: ThemeVariants2.Protein.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants2.Soya]: {
    themeId: ThemeVariants2.Soya.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
};
