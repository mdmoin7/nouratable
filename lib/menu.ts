export type MenuItem = {
  name: string;
  category: "Meals" | "Bowls" | "Snacks";
  diet: "Vegetarian" | "Non-veg";
  description: string;
  tags: string[];
  price: number;
  minutes: number | "Ready";
  image: string;
  imageAlt: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Quinoa Power Bowl",
    category: "Bowls",
    diet: "Vegetarian",
    description:
      "Quinoa, roasted vegetables, chickpeas, avocado, seeds and house lemon dressing.",
    tags: ["High fibre", "Protein rich"],
    price: 349,
    minutes: 8,
    image: "/food/quinoa.svg",
    imageAlt: "Colourful vegetarian grain bowl with greens and roasted vegetables",
  },
  {
    name: "Millet Veg Bowl",
    category: "Bowls",
    diet: "Vegetarian",
    description:
      "Foxtail millet, roasted vegetables, greens, hummus and lemon tahini.",
    tags: ["Whole grains", "Light"],
    price: 329,
    minutes: 8,
    image: "/food/millet.svg",
    imageAlt: "Bowl of vegetables and grains with herbs",
  },
  {
    name: "Oats & Seed Crunch",
    category: "Snacks",
    diet: "Vegetarian",
    description: "Rolled oats, seeds, nuts, honey and cinnamon. Ready to eat.",
    tags: ["No artificial flavours"],
    price: 199,
    minutes: "Ready",
    image: "/food/oats.svg",
    imageAlt: "Oat and seed snack on a plate",
  },
  {
    name: "Chicken Millet Bowl",
    category: "Bowls",
    diet: "Non-veg",
    description:
      "Slow-cooked chicken, foxtail millet, greens, pickled onion and yoghurt dressing.",
    tags: ["High protein", "Filling"],
    price: 399,
    minutes: 10,
    image: "/food/chicken-bowl.svg",
    imageAlt: "Chicken grain bowl with greens",
  },
  {
    name: "Herb Grilled Fish Plate",
    category: "Meals",
    diet: "Non-veg",
    description:
      "Grilled fish, herbed millet, sautéed greens and a citrus yoghurt sauce.",
    tags: ["Light", "High protein"],
    price: 449,
    minutes: 12,
    image: "/food/fish.svg",
    imageAlt: "Grilled fish plate with vegetables",
  },
  {
    name: "Pepper Chicken Meal",
    category: "Meals",
    diet: "Non-veg",
    description:
      "Black pepper chicken, brown rice, beans and a fresh cucumber salad.",
    tags: ["Comforting", "Made fresh"],
    price: 379,
    minutes: 10,
    image: "/food/pepper-chicken.svg",
    imageAlt: "Chicken meal with rice and salad",
  },
];
