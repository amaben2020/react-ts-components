// step 1: create an enum with the different themes

export enum ThemeVariants {
  Soya = "Soya",
  Oat = "Oat",
  Almond = "Almond",
  NotMilk = "Not Milk",
  Protein = "Protein",
  NoSugar = "No Sugar",
}
type TThemeVariants = Record<
  ThemeVariants,
  {
    themeId: string;
    texture: string;
    colors: {
      font: string;
      highlight: string;
    };
  }
>;
export const themeVariants: TThemeVariants = {
  [ThemeVariants.Almond]: {
    themeId: ThemeVariants.Almond.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },

  [ThemeVariants.NoSugar]: {
    themeId: ThemeVariants.NoSugar.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants.NotMilk]: {
    themeId: ThemeVariants.NotMilk.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants.Oat]: {
    themeId: ThemeVariants.Oat.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants.Protein]: {
    themeId: ThemeVariants.Protein.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
  [ThemeVariants.Soya]: {
    themeId: ThemeVariants.Soya.toLowerCase(),
    texture: "/images/textures/almond.jpg",
    colors: {
      font: "#279FD0",
      highlight: "#45a0c4",
    },
  },
};
