export type RecipeTranslation = {
  /** Localised dish name, shown in cards, headings and page titles. */
  name: string;
  /** Localised native/alternate name. */
  native: string;
  subtitle: string;
  story: string;
  tags: string[];
  ingredients: { title: string; items: string[] }[];
  steps: { title: string; body: string }[];
  notes: string[];
  serveWith: string[];
};
