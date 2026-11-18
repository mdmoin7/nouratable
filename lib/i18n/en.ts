import { method as methodData, pantry as pantryData, regionNotes as regionNoteData } from "@/lib/recipes";

export type Dictionary = {
  // Brand and navigation
  tagline: string;
  navRecipes: string;
  navMethod: string;
  navPantry: string;
  navAbout: string;
  startCooking: string;
  openMenu: string;
  languageLabel: string;

  // Shared labels
  allRecipes: string;
  aboutThisBook: string;
  theBook: string;
  startHere: string;
  seeAllRecipes: string;
  seeTheRecipes: string;
  fourHabits: string;

  // Home
  heroEyebrow: string;
  heroTitleA: string;
  heroTitleB: string;
  heroTitleC: string;
  heroBody: string;
  statRecipes: string;
  statRegions: string;
  statMinutes: string;
  recipeOfDay: string;
  threeRecipesTitle: string;
  allRecipesCount: string;
  byRegion: string;
  regionsTitle: string;
  regionsIntro: string;
  regionCountOne: string;
  regionCountMany: string;
  methodEyebrow: string;
  methodTitle: string;
  methodIntro: string;
  pantryEyebrow: string;
  pantryTitle: string;
  pantryIntro: string;
  closingEyebrow: string;
  closingTitle: string;

  // Footer
  footerDescription: string;
  countTagline: string;
  copyright: string;
  weightsNote: string;

  // Recipe index
  indexEyebrow: string;
  indexTitleA: string;
  indexTitleB: string;
  indexIntro: string;
  metaIndexTitle: string;
  metaIndexDescription: string;
  filterAll: string;
  heatAny: string;
  heatMild: string;
  heatMedium: string;
  heatHot: string;
  searchPlaceholder: string;
  heatFilterLabel: string;
  clearFilters: string;
  countRecipe: string;
  countRecipes: string;
  inRegion: string;
  emptyTitle: string;
  emptyBody: string;
  blurb1Title: string;
  blurb1Body: string;
  blurb2Title: string;
  blurb2Body: string;
  blurb3Title: string;
  blurb3Body: string;

  // Recipe page
  crumbRecipes: string;
  ingredients: string;
  tickWhatYouHave: string;
  tickedCount: string;
  serveWith: string;
  method: string;
  stepsCount: string;
  cookNotes: string;
  prep: string;
  cookLabel: string;
  servesLabel: string;
  total: string;
  cookNext: string;
  threeMore: string;
  recipeWord: string;
  servesCount: string;
  minuteShort: string;
  hourShort: string;
  heatTitle: string;
  instructionsEnglish: string;

  // About
  aboutEyebrow: string;
  aboutTitleA: string;
  aboutTitleB: string;
  aboutIntro: string;
  aboutBasics: string;
  aboutAssumes: string;
  aboutCountLine: string;
  aboutS1Title: string;
  aboutS1Body: string;
  aboutS2Title: string;
  aboutS2Body: string;
  aboutS3Title: string;
  aboutS3Body: string;
  aboutS4Title: string;
  aboutS4Body: string;
  drawingsEyebrow: string;
  drawingsTitle: string;
  drawingsBody: string;
  drawingsCta: string;
  aboutClosing: string;
  aboutClosingCta: string;
  metaAboutTitle: string;
  metaAboutDescription: string;

  // Site metadata
  metaTitle: string;
  metaDescription: string;

  // Longer data-driven copy
  regionNotes: Record<string, string>;
  methodItems: { number: string; title: string; body: string }[];
  pantryItems: { name: string; note: string }[];
};

export const en: Dictionary = {
  tagline: "Indian chicken cookbook",
  navRecipes: "Recipes",
  navMethod: "The method",
  navPantry: "Pantry",
  navAbout: "About",
  startCooking: "Start cooking",
  openMenu: "Open menu",
  languageLabel: "Language",

  allRecipes: "All recipes",
  aboutThisBook: "About this book",
  theBook: "The book",
  startHere: "Start here",
  seeAllRecipes: "See all recipes",
  seeTheRecipes: "See the recipes",
  fourHabits: "The four habits",

  heroEyebrow: "{recipes} recipes · {regions} regions",
  heroTitleA: "Chicken,",
  heroTitleB: "the Indian",
  heroTitleC: "way.",
  heroBody:
    "One chicken, cooked in twelve ways, from eight regions. Delhi's butter chicken, Kerala's coconut curry, Tamil Nadu's pepper chicken. Every recipe is written for a home kitchen, with weights in grams and time in minutes.",
  statRecipes: "recipes",
  statRegions: "regions",
  statMinutes: "minutes on average",
  recipeOfDay: "Recipe 01",
  threeRecipesTitle: "Three recipes to cook first.",
  allRecipesCount: "All {count} recipes",
  byRegion: "By region",
  regionsTitle: "{count} regions, one chicken, no fixed rules.",
  regionsIntro:
    "Indian chicken is not one dish. Every region has its own spices, its own oil and its own way of cooking.",
  regionCountOne: "{count} recipe",
  regionCountMany: "{count} recipes",
  methodEyebrow: "The method",
  methodTitle: "Four habits that make any chicken curry better.",
  methodIntro:
    "You will find these four steps in every recipe in this book. Learn them once and you can cook without looking at the page.",
  pantryEyebrow: "The pantry",
  pantryTitle: "{count} things to keep in your kitchen.",
  pantryIntro: "Every recipe here can be cooked with these, plus chicken, onion, tomato, ginger, garlic and a lemon.",
  closingEyebrow: "Start cooking",
  closingTitle: "Begin with the butter chicken. Then work your way south.",

  footerDescription:
    "Twelve Indian chicken recipes from eight regions, written and tested for home kitchens.",
  countTagline: "{recipes} recipes · {regions} regions",
  copyright: "© {year} Murgh. Cook it and change it to your taste.",
  weightsNote: "Weights are in grams and liquids in millilitres.",

  indexEyebrow: "The recipes",
  indexTitleA: "Twelve ways to",
  indexTitleB: "cook chicken.",
  indexIntro:
    "Pick a region, or choose how much heat you can take. Marinade time and cooking time are listed separately in every recipe, so you know how long the dish will take.",
  metaIndexTitle: "The recipes",
  metaIndexDescription: "Twelve Indian chicken recipes, browsable by region and heat.",
  filterAll: "All",
  heatAny: "Any heat",
  heatMild: "Mild",
  heatMedium: "Medium",
  heatHot: "Hot",
  searchPlaceholder: "Search recipes",
  heatFilterLabel: "Filter by heat",
  clearFilters: "Clear filters",
  countRecipe: "{count} recipe",
  countRecipes: "{count} recipes",
  inRegion: "in {region}",
  emptyTitle: "No recipes match these filters.",
  emptyBody: "Try another region or a different heat level.",
  blurb1Title: "Measured properly",
  blurb1Body:
    "Weights are in grams and liquids in millilitres. Spoons are used only where exact weight does not matter.",
  blurb2Title: "For a normal kitchen",
  blurb2Body: "One heavy pan, one sharp knife and an oven that goes up to 220°C.",
  blurb3Title: "Cook's notes",
  blurb3Body: "Every recipe lists the three things that usually go wrong.",

  crumbRecipes: "Recipes",
  ingredients: "Ingredients",
  tickWhatYouHave: "Tick what you have",
  tickedCount: "{count} ticked",
  serveWith: "Serve with",
  method: "Method",
  stepsCount: "{count} steps",
  cookNotes: "Cook's notes",
  prep: "Prep",
  cookLabel: "Cook",
  servesLabel: "Serves",
  total: "Total",
  cookNext: "Cook next",
  threeMore: "Three more from the book.",
  recipeWord: "Recipe",
  servesCount: "Serves {count}",
  minuteShort: "min",
  hourShort: "hr",
  heatTitle: "{heat} heat",
  instructionsEnglish: "This recipe's ingredients and steps are in English for now.",

  aboutEyebrow: "About this book",
  aboutTitleA: "A small book about",
  aboutTitleB: "one chicken.",
  aboutIntro:
    "Murgh has twelve recipes from eight regions, and one simple point: Indian chicken is not one dish. Every region has its own spices and its own method. Cook a few of these recipes and you will learn the method, not just the dish.",
  aboutBasics: "The basics",
  aboutAssumes: "What every recipe assumes.",
  aboutCountLine: "{recipes} recipes from {regions} regions. Most need one heavy pan. Two need an oven.",
  aboutS1Title: "Why chicken",
  aboutS1Body:
    "Chicken is the easiest meat to cook at home and the most common in Indian kitchens. But most restaurant menus serve the same red gravy and give it different names. This book keeps the regions separate: Goan vindalho, Lucknowi korma, Chettinad pepper chicken.",
  aboutS2Title: "How the book works",
  aboutS2Body:
    "Every recipe starts with the region and a short note, then the marinade, the masala and the method, in that order. Marinade time is listed separately from cooking time, so you know how long the dish will take.",
  aboutS3Title: "Buying the chicken",
  aboutS3Body:
    "Buy chicken with bone when the recipe allows it. Bone keeps the chicken soft and makes the gravy thicker. Thigh pieces are safer for beginners; breast dries out fast. Keep the chicken in the fridge till you cook it, pat it dry before frying, and do not put too many pieces in the pan at one time.",
  aboutS4Title: "Spice and heat",
  aboutS4Body:
    "Kashmiri chilli gives colour, dried red chilli gives heat, and black pepper gives slow heat. If a recipe says mild, it will be mild. Keep green chilli or chilli oil on the table for those who want more.",
  drawingsEyebrow: "About the drawings",
  drawingsTitle: "Every dish here is drawn, not photographed. So the page shows the food, not the styling.",
  drawingsBody:
    "Each plate has just three things: the dish, the masala and a garnish. If your pan looks different from the drawing, it is probably right.",
  drawingsCta: "See all {count} recipes",
  aboutClosing: "Cook it the way you like it, and change it to your taste.",
  aboutClosingCta: "Start with butter chicken",
  metaAboutTitle: "About this book",
  metaAboutDescription:
    "Why twelve Indian chicken recipes, how the book is arranged, and how to buy and cook chicken at home.",

  metaTitle: "Murgh — a modern Indian chicken cookbook",
  metaDescription:
    "Twelve Indian chicken recipes, from Delhi's butter chicken to Chettinad pepper chicken. Marinades, masalas, methods and cook's notes for home kitchens.",

  regionNotes: regionNoteData,
  methodItems: methodData,
  pantryItems: pantryData,
};
