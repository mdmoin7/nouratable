import { hiRecipeTranslations } from "./recipe-translations/hi";
import type { RecipeTranslation } from "./recipe-translations/types";

export type Heat = 1 | 2 | 3;
export type Vessel = "curry" | "dry" | "rice" | "grill" | "soup";

export type Palette = {
  bg: string;
  curry: string;
  deep: string;
  piece: string;
  garnish: string;
  accent: string;
};

export type Recipe = {
  slug: string;
  name: string;
  native: string;
  subtitle: string;
  region: string;
  origin: string;
  heat: Heat;
  prep: number;
  cook: number;
  serves: number;
  variant: Vessel;
  palette: Palette;
  story: string;
  tags: string[];
  ingredients: { title: string; items: string[] }[];
  steps: { title: string; body: string }[];
  notes: string[];
  serveWith: string[];
};

export const heatLabel: Record<Heat, string> = {
  1: "Mild",
  2: "Medium",
  3: "Hot",
};

export const recipes: Recipe[] = [
  {
    slug: "murgh-makhani",
    name: "Butter Chicken",
    native: "Murgh Makhani",
    subtitle: "Grilled chicken simmered in a smooth tomato and butter gravy.",
    region: "Delhi",
    origin: "Moti Mahal, Delhi",
    heat: 1,
    prep: 25,
    cook: 35,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f2e4d3",
      curry: "#c05621",
      deep: "#8f3b12",
      piece: "#e8bf93",
      garnish: "#4c6b47",
      accent: "#f2d6a2",
    },
    story:
      "Butter chicken started in Delhi as a way to use leftover tandoori chicken. The grilled chicken is added to a tomato and butter gravy. At home, the one step that matters most is straining the gravy so it becomes smooth.",
    tags: ["Weekend", "For guests", "Mild"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g boneless chicken, cut into small pieces",
          "4 tbsp thick curd (hung curd)",
          "1 tbsp ginger-garlic paste",
          "1 tsp Kashmiri chilli powder",
          "½ tsp garam masala",
          "1 tbsp lemon juice",
          "1 tsp salt",
        ],
      },
      {
        title: "For the gravy",
        items: [
          "60 g butter, plus 2 tbsp for the end",
          "1 tbsp oil",
          "4 green cardamom (choti elaichi), crushed",
          "2 cloves (laung)",
          "1 bay leaf (tej patta)",
          "1 small cinnamon stick (dalchini)",
          "1 tbsp ginger-garlic paste",
          "700 g ripe tomatoes, chopped",
          "1 tbsp tomato purée",
          "1 tsp Kashmiri chilli powder",
          "1 tsp coriander powder (dhania)",
          "1 tbsp kasuri methi, crushed in your palm",
          "1 tsp honey or sugar",
          "120 ml fresh cream",
          "Salt to taste",
        ],
      },
      {
        title: "To finish",
        items: [
          "2 tbsp cream",
          "1 tbsp butter",
          "Ginger, cut into thin strips",
          "A few coriander leaves",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Mix curd, ginger-garlic paste, chilli powder, garam masala, lemon juice and salt in a bowl. Add the chicken and mix well. Keep it covered in the fridge for 4 hours, or overnight. Take it out 30 minutes before cooking.",
      },
      {
        title: "Grill on high heat",
        body: "Heat a heavy pan till it is very hot. Add the chicken in batches and cook for 2–3 minutes on each side. The edges should get charred, but the chicken should stay a little raw inside. Remove it and keep the juices.",
      },
      {
        title: "Fry the whole spices",
        body: "Melt the butter with oil on medium heat. Add cardamom, cloves, bay leaf and cinnamon and fry for 45 seconds. Add ginger-garlic paste and cook for 1 minute till the raw smell goes away.",
      },
      {
        title: "Cook the tomato base",
        body: "Add the tomatoes, tomato purée, chilli powder, coriander powder and salt. Cook for 15–18 minutes till the tomatoes turn soft and the oil starts coming out at the sides.",
      },
      {
        title: "Strain the gravy",
        body: "Let the gravy cool for 5 minutes. Grind it smooth, then strain it back into the pan. This one step gives you a smooth restaurant-style gravy.",
      },
      {
        title: "Add the chicken back",
        body: "Add kasuri methi, honey and 100 ml water. Cook for 5 minutes. Add the chicken with its juices and cook on low heat for 8 minutes, till the chicken is cooked.",
      },
      {
        title: "Finish",
        body: "Switch off the heat. Add cream and the remaining butter and mix once. Taste and add salt or lemon juice if needed. Keep aside for 5 minutes, then top with ginger and coriander.",
      },
    ],
    notes: [
      "Kashmiri chilli powder gives colour, not heat. If you only have regular chilli powder, use one-third of the quantity.",
      "Chicken with bone gives a thicker gravy, but boneless thigh pieces cook faster. Avoid breast.",
      "The gravy freezes well for a month. Freeze it before adding the chicken.",
    ],
    serveWith: ["Butter naan", "Laccha paratha", "Jeera rice", "Onion rings and lemon"],
  },
  {
    slug: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    native: "Murgh Tikka Masala",
    subtitle: "Grilled chicken tikka in a thick, smoky onion and tomato masala.",
    region: "Punjab",
    origin: "Punjabi dhabas",
    heat: 2,
    prep: 30,
    cook: 30,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f0e0d2",
      curry: "#b0441f",
      deep: "#7c2d12",
      piece: "#e6b98e",
      garnish: "#4f6b45",
      accent: "#f0c987",
    },
    story:
      "Tikka masala is really two dishes: first the chicken is grilled like tikka, then it goes into a thick onion and tomato gravy. Do not skip the grilling. That slightly burnt taste is what makes this dish different from a normal chicken curry.",
    tags: ["Weeknight", "Grill and pan", "Smoky"],
    ingredients: [
      {
        title: "For the tikka",
        items: [
          "700 g boneless chicken, cut into pieces",
          "150 g thick curd",
          "1 tbsp ginger-garlic paste",
          "2 tsp Kashmiri chilli powder",
          "1 tsp cumin powder (jeera)",
          "1 tsp coriander powder (dhania)",
          "½ tsp garam masala",
          "1 tsp salt",
          "1 tbsp mustard oil or ghee, for grilling",
        ],
      },
      {
        title: "For the masala",
        items: [
          "3 tbsp ghee",
          "1 tsp cumin seeds (jeera)",
          "2 onions, finely chopped",
          "1 tbsp ginger-garlic paste",
          "400 g tomatoes, puréed",
          "1 tbsp tomato purée",
          "1 tsp Kashmiri chilli powder",
          "1 tsp coriander powder (dhania)",
          "1 tsp kasuri methi",
          "1 tsp smoked paprika (optional)",
          "100 ml fresh cream",
          "1 tsp honey or sugar",
          "Salt to taste",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Mix curd, ginger-garlic paste, chilli powder, cumin, coriander, garam masala and salt. Add the chicken and mix well. Keep it for 4 hours, or overnight in the fridge.",
      },
      {
        title: "Grill the tikka",
        body: "Put the chicken on skewers or on a tray. Grill on the highest heat for 10–12 minutes, turning once, till it gets black spots. It should not be fully cooked at this stage.",
      },
      {
        title: "Fry the onions",
        body: "Heat the ghee and add cumin seeds. When they crackle, add the onions. Fry on medium heat for 12–14 minutes, stirring often, till the onions turn golden brown. This gives the gravy its sweetness.",
      },
      {
        title: "Cook the tomato",
        body: "Add ginger-garlic paste and cook for 1 minute. Add the tomato purée, tomato paste, chilli powder, coriander powder and salt. Cook for 12 minutes till the masala becomes thick and dark.",
      },
      {
        title: "Add the chicken",
        body: "Add kasuri methi, paprika and honey and mix. Add the chicken with its juices and 80 ml water. Cook on low heat for 8 minutes.",
      },
      {
        title: "Add cream and keep aside",
        body: "Lower the heat, add the cream and mix well. Do not boil after adding cream. Keep aside for 5 minutes, taste for salt and serve.",
      },
    ],
    notes: [
      "Smoked paprika gives the smoky taste of a tandoor. Regular paprika only gives colour.",
      "A grill pan or a thick-bottomed pan works well here. The black spots on the chicken are important.",
      "You can make the same recipe with paneer or gobi. Use the same marinade and grill for less time.",
    ],
    serveWith: ["Butter naan", "Cucumber and onion salad", "Basmati rice", "Lemon wedges"],
  },
  {
    slug: "hyderabadi-chicken-biryani",
    name: "Hyderabadi Chicken Biryani",
    native: "Hyderabadi Murgh Dum Biryani",
    subtitle: "Raw marinated chicken and half-cooked rice, sealed and cooked on dum.",
    region: "Hyderabad",
    origin: "Hyderabad",
    heat: 3,
    prep: 45,
    cook: 65,
    serves: 6,
    variant: "rice",
    palette: {
      bg: "#f3e8d4",
      curry: "#d9a53a",
      deep: "#a97b1e",
      piece: "#d9a86a",
      garnish: "#4c6b47",
      accent: "#f5e3b3",
    },
    story:
      "In Hyderabadi kacchi biryani, raw marinated chicken is kept at the bottom of the handi and half-cooked rice is spread over it. The pot is sealed and cooked on low heat, so the chicken cooks in its own steam. Open the lid only at the table.",
    tags: ["Weekend", "Dum cooked", "For a crowd"],
    ingredients: [
      {
        title: "For the chicken layer",
        items: [
          "1 kg chicken, cut into large pieces",
          "400 g thick curd",
          "3 tbsp ginger-garlic paste",
          "2 tsp Kashmiri chilli powder",
          "1 tsp haldi (turmeric)",
          "2 tbsp biryani masala",
          "2 green chillies, slit",
          "Juice of 1 lemon",
          "2 tsp salt",
          "3 tbsp fried onions (birista)",
          "A handful of mint and coriander leaves",
          "1 potato, cut in half (optional)",
        ],
      },
      {
        title: "For the rice",
        items: [
          "500 g basmati rice, soaked for 30 minutes",
          "4 green cardamom (choti elaichi)",
          "2 bay leaves (tej patta)",
          "1 cinnamon stick (dalchini)",
          "1 tbsp salt",
          "2 tbsp ghee",
        ],
      },
      {
        title: "For the dum",
        items: [
          "A big pinch of saffron, soaked in 4 tbsp warm milk",
          "3 tbsp ghee, melted",
          "3 tbsp fried onions (birista)",
          "Mint leaves",
          "Dough or foil to seal the lid",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Mix curd, ginger-garlic paste, chilli powder, haldi, biryani masala, green chilli, lemon juice and salt. Add the chicken, fried onions and half the mint and coriander. Keep it for 4 hours, or overnight in the fridge.",
      },
      {
        title: "Half-cook the rice",
        body: "Boil a large pot of water with the whole spices, salt and ghee. Add the drained rice and cook for 5–6 minutes. The rice should be almost done but the centre should still be a little firm. Strain the water at once.",
      },
      {
        title: "Layer the handi",
        body: "Spread the marinated chicken in a heavy-bottomed handi with a tight lid. Spread the rice evenly on top. Pour saffron milk and melted ghee over the rice, then add fried onions and mint leaves.",
      },
      {
        title: "Seal and cook on dum",
        body: "Seal the lid with dough or two layers of foil and put a heavy weight on top. Cook on the lowest flame for 35 minutes. Switch off the gas and keep it sealed for another 10 minutes.",
      },
      {
        title: "Open at the table",
        body: "Open the lid at the table. Put a spoon down one side to check that the rice is cooked and the chicken is soft. Mix gently from the bottom. Do not stir.",
      },
      {
        title: "Serve",
        body: "Serve with mirchi ka salan and a bowl of thick raita. Let everyone take their own portion from the top.",
      },
    ],
    notes: [
      "Old basmati rice holds its shape. New rice becomes sticky when cooked on dum.",
      "Keep a tawa under the handi so the bottom does not burn.",
      "If you do not have a heavy handi, use a baking dish, cover it tightly with foil and bake at 180°C for 40 minutes.",
    ],
    serveWith: ["Mirchi ka salan", "Onion raita", "Boiled egg", "Cucumber and mint salad"],
  },
  {
    slug: "chettinad-pepper-chicken",
    name: "Chettinad Pepper Chicken",
    native: "Chettinad Milagu Kozhi",
    subtitle: "A dry chicken masala with black pepper, fennel and roasted coconut.",
    region: "Tamil Nadu",
    origin: "Chettinad, Tamil Nadu",
    heat: 3,
    prep: 20,
    cook: 35,
    serves: 4,
    variant: "dry",
    palette: {
      bg: "#e9dfcf",
      curry: "#5e3d22",
      deep: "#3d2716",
      piece: "#c69a6b",
      garnish: "#41603f",
      accent: "#d9a84e",
    },
    story:
      "In Chettinad cooking, the masala is made fresh every time and it shows in the taste. Here, black pepper gives the heat, fennel gives sweetness and coconut gives body. Roast and grind the masala yourself instead of using ready-made powder.",
    tags: ["Weeknight", "Dry", "Fresh masala"],
    ingredients: [
      {
        title: "For the masala",
        items: [
          "1 tbsp black peppercorns (kali mirch)",
          "1 tbsp fennel seeds (saunf)",
          "4 dried red chillies",
          "1 tbsp coriander seeds (dhania)",
          "1 tsp cumin seeds (jeera)",
          "2 cloves (laung)",
          "1 small cinnamon stick (dalchini)",
          "3 tbsp grated fresh coconut",
        ],
      },
      {
        title: "For the chicken",
        items: [
          "800 g chicken, cut into small pieces",
          "3 tbsp sesame oil (til ka tel)",
          "1 tsp fennel seeds (saunf)",
          "20 curry leaves (kadhi patta)",
          "2 onions, finely chopped",
          "1 tbsp ginger-garlic paste",
          "2 tomatoes, chopped",
          "½ tsp haldi (turmeric)",
          "1 tsp salt",
          "2 tbsp chopped coriander",
        ],
      },
    ],
    steps: [
      {
        title: "Roast the masala",
        body: "Dry roast the peppercorns, fennel, red chillies, coriander seeds, cumin, cloves and cinnamon on low heat for 2 minutes. Add the coconut and roast till it turns slightly darker and smells nice. Cool and grind to a powder.",
      },
      {
        title: "Start the masala",
        body: "Heat the sesame oil. Add fennel seeds and curry leaves, then the onions. Fry for 10 minutes till the onions turn golden at the edges.",
      },
      {
        title: "Fry the chicken",
        body: "Add ginger-garlic paste and cook for a minute. Add the chicken and fry on medium-high heat for 6–8 minutes till the pieces change colour.",
      },
      {
        title: "Add tomato and masala",
        body: "Add the tomatoes, haldi, salt and the ground masala. Cook for 8 minutes till the tomatoes turn soft and the masala coats the chicken.",
      },
      {
        title: "Cover and cook",
        body: "Add 150 ml water, cover and cook for 12 minutes till the chicken is soft. Remove the lid and cook on high heat for 3–4 minutes, stirring, till the masala becomes dry.",
      },
      {
        title: "Keep aside and serve",
        body: "Add coriander and keep aside for 5 minutes. Serve with rice or idiyappam.",
      },
    ],
    notes: [
      "Do not roast the pepper on high heat, or it turns bitter. Keep the flame low and keep stirring.",
      "For a gravy version, stop after the covered stage and add 100 ml thick coconut milk.",
      "Chicken with bone tastes better here. The bones make the masala thicker.",
    ],
    serveWith: ["Steamed rice", "Idiyappam", "Rasam", "Curd rice"],
  },
  {
    slug: "tandoori-chicken",
    name: "Tandoori Chicken",
    native: "Tandoori Murgh",
    subtitle: "Two marinades, a hot oven and a lot of char.",
    region: "Punjab",
    origin: "Peshawar, Punjab",
    heat: 2,
    prep: 20,
    cook: 35,
    serves: 4,
    variant: "grill",
    palette: {
      bg: "#f1dfd6",
      curry: "#a52e1c",
      deep: "#6d1c12",
      piece: "#d68b62",
      garnish: "#496a45",
      accent: "#e8b48a",
    },
    story:
      "Tandoori chicken gets two marinades. The first is salt and lemon, which opens up the chicken. The second is curd and spices, which gives it colour and taste. At home, a very hot oven and a few minutes under the grill give a taste very close to the tandoor.",
    tags: ["Oven", "Prepare ahead", "Charred"],
    ingredients: [
      {
        title: "First marinade",
        items: [
          "1 kg chicken legs or 8 drumsticks, skin removed, cut twice on each piece",
          "1 tbsp lemon juice",
          "1 tsp salt",
          "1 tbsp Kashmiri chilli powder",
          "1 tbsp ginger-garlic paste",
        ],
      },
      {
        title: "Second marinade",
        items: [
          "200 g thick curd (hung curd)",
          "2 tbsp fresh cream",
          "1 tbsp mustard oil",
          "½ tsp garam masala",
          "1 tsp cumin powder (jeera)",
          "1 tsp coriander powder (dhania)",
          "1 tsp kasuri methi, crushed",
          "1 tsp salt",
        ],
      },
      {
        title: "To serve",
        items: ["1 tsp chaat masala", "Lemon wedges", "Onion rings", "Mint chutney"],
      },
    ],
    steps: [
      {
        title: "Apply the first marinade",
        body: "Rub the chicken with lemon juice, salt, chilli powder and ginger-garlic paste. Keep it aside for 20 minutes so the salt and lemon work on the chicken.",
      },
      {
        title: "Apply the curd marinade",
        body: "Mix the second marinade well. Rub it on the chicken and press it into the cuts. Cover and keep it in the fridge for at least 2 hours, or 6 hours if you have time.",
      },
      {
        title: "Heat the oven",
        body: "Heat the oven to 220°C. Put a wire rack on a baking tray. Take the chicken out of the fridge while the oven heats.",
      },
      {
        title: "Roast and grill",
        body: "Roast for 22–25 minutes, turning once. Then grill for 4–5 minutes till the edges turn black in places and the fat melts.",
      },
      {
        title: "Keep aside and serve",
        body: "Sprinkle chaat masala and squeeze lemon on the hot chicken. Keep aside for 5 minutes. Serve with onion rings and mint chutney.",
      },
    ],
    notes: [
      "Hung curd has less water. If you use normal curd, the chicken will steam instead of roasting.",
      "Mustard oil is optional, but it gives the real tandoori taste.",
      "The same marinade works for gobi and paneer. Roast for less time.",
    ],
    serveWith: ["Mint chutney", "Onion rings", "Lemon rice", "Roomali roti"],
  },
  {
    slug: "chicken-65",
    name: "Chicken 65",
    native: "Kozhi 65",
    subtitle: "Crisp fried chicken tossed with curry leaves and green chilli.",
    region: "Tamil Nadu",
    origin: "Chennai",
    heat: 3,
    prep: 20,
    cook: 20,
    serves: 4,
    variant: "dry",
    palette: {
      bg: "#f4e3d0",
      curry: "#b23a15",
      deep: "#7a240d",
      piece: "#d98b56",
      garnish: "#3f6040",
      accent: "#f0c15a",
    },
    story:
      "Chicken 65 is a bar snack that became a starter everywhere. The crunch comes from rice flour and cornflour, very hot oil and frying in small batches. The curry leaf and garlic tempering at the end is not optional.",
    tags: ["Fried", "Starter", "Under 45 minutes"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "600 g boneless chicken, cut into small pieces",
          "1 tbsp ginger-garlic paste",
          "1 tsp Kashmiri chilli powder",
          "½ tsp black pepper",
          "2 tbsp rice flour",
          "2 tbsp cornflour",
          "1 egg white",
          "2 tbsp curd",
          "1 tsp salt",
          "1 tsp lemon juice",
        ],
      },
      {
        title: "For the tempering",
        items: [
          "Oil, for deep frying",
          "15 curry leaves (kadhi patta), pat dry",
          "3 garlic cloves, thinly sliced",
          "2 green chillies, slit",
          "¼ tsp red chilli flakes",
          "A pinch of chaat masala",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate for 20 minutes",
        body: "Mix all the ingredients from the first list. Keep aside for 20 minutes. Do not keep it longer, or the chicken becomes tough.",
      },
      {
        title: "Heat the oil",
        body: "Heat the oil to medium-high. A drop of batter should come up at once and sizzle.",
      },
      {
        title: "Fry in small batches",
        body: "Fry the chicken in small batches for 4–5 minutes till it turns deep red and crisp. Keep the fried pieces on a rack, not on paper, so they stay crisp.",
      },
      {
        title: "Fry the curry leaves and garlic",
        body: "Take one spoon of the hot oil in another pan. Fry the curry leaves, garlic, green chilli and chilli flakes for 30 seconds till the garlic turns light golden.",
      },
      {
        title: "Toss and serve",
        body: "Add the fried chicken and chaat masala and toss for 30 seconds. Serve at once with onion rings and lemon.",
      },
    ],
    notes: [
      "Dry the curry leaves before frying, or the oil will splutter.",
      "For extra crunch, fry twice: 3 minutes first, keep aside for 5 minutes, then fry again for 90 seconds on higher heat.",
      "Kashmiri chilli powder gives the red colour without making it too hot.",
    ],
    serveWith: ["Onion rings", "Lemon wedges", "Coconut chutney", "Lime soda"],
  },
  {
    slug: "kadai-chicken",
    name: "Kadai Chicken",
    native: "Murgh Karahi",
    subtitle: "Cooked fast in a kadai with capsicum and crushed coriander.",
    region: "Punjab",
    origin: "Punjab",
    heat: 2,
    prep: 20,
    cook: 30,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#efe2d0",
      curry: "#a8501f",
      deep: "#743512",
      piece: "#dba977",
      garnish: "#47663f",
      accent: "#e9c27a",
    },
    story:
      "Kadai chicken is named after the kadai it is cooked in. Everything happens on high heat in one pan, without a lid. The masala should be thick and the capsicum should still have a slight crunch.",
    tags: ["One pan", "Weeknight", "Quick"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g boneless chicken, cut into pieces",
          "3 tbsp ghee",
          "1 tsp cumin seeds (jeera)",
          "1 tbsp coriander seeds (dhania), crushed",
          "2 onions, cut into wedges",
          "1 tbsp ginger-garlic paste",
          "3 tomatoes, chopped",
          "1 tsp Kashmiri chilli powder",
          "½ tsp haldi (turmeric)",
          "1 tsp salt",
          "1 capsicum, cut into cubes",
          "2 green chillies, slit",
          "1 tsp kasuri methi",
          "½ tsp garam masala",
        ],
      },
    ],
    steps: [
      {
        title: "Heat the kadai",
        body: "Heat ghee in a kadai or wide pan on high heat. Add cumin seeds and crushed coriander seeds and let them crackle for 20 seconds.",
      },
      {
        title: "Fry the onions",
        body: "Add the onion wedges and fry for 4 minutes. The onions should turn light brown but stay a little crunchy.",
      },
      {
        title: "Fry the chicken",
        body: "Add ginger-garlic paste and the chicken. Fry for 6 minutes till the chicken changes colour and gets light brown in places.",
      },
      {
        title: "Add tomatoes",
        body: "Add tomatoes, chilli powder, haldi and salt. Cook without a lid for 10 minutes, stirring, till the tomatoes turn soft and the water dries up.",
      },
      {
        title: "Add capsicum",
        body: "Add capsicum and green chillies and cook for 4 minutes. Add kasuri methi and garam masala, mix and switch off the heat.",
      },
      {
        title: "Serve",
        body: "Serve hot in the same kadai with roti, so no masala is left behind.",
      },
    ],
    notes: [
      "Cook on high heat without a lid. Kadai chicken is a dry dish; a lid turns it into a curry.",
      "Crushing the coriander seeds roughly gives the masala a better texture than powder.",
      "Squeeze lemon on top at the end if the tomatoes were sweet.",
    ],
    serveWith: ["Tandoori roti", "Butter naan", "Kachumber salad", "Lassi"],
  },
  {
    slug: "awadhi-chicken-korma",
    name: "Awadhi Chicken Korma",
    native: "Murgh Korma",
    subtitle: "Cashew, curd and green cardamom — rich, but not spicy.",
    region: "Awadh",
    origin: "Lucknow",
    heat: 1,
    prep: 25,
    cook: 50,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f3e9d7",
      curry: "#cfae72",
      deep: "#9c7a45",
      piece: "#ecd3a8",
      garnish: "#4b6647",
      accent: "#f6e8cd",
    },
    story:
      "Awadhi korma is mild and rich. Nothing is fried till brown and there is no chilli powder. The gravy gets its body from onion paste, cashew paste and curd, and stays a pale golden colour.",
    tags: ["Slow", "Mild", "For guests"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g chicken, cut into large pieces",
          "1 tsp salt",
          "½ tsp white pepper",
          "1 tbsp ginger-garlic paste",
          "150 g curd, beaten well",
        ],
      },
      {
        title: "For the gravy",
        items: [
          "4 tbsp ghee",
          "2 onions, boiled and ground to a paste",
          "40 g cashew nuts, soaked in warm water",
          "1 tbsp white poppy seeds (khus khus) or melon seeds",
          "4 green cardamom (choti elaichi)",
          "1 piece mace (javitri)",
          "1 bay leaf (tej patta)",
          "2 tbsp fresh cream",
          "½ tsp sugar",
          "2 tsp kewra water",
          "A pinch of saffron, soaked in 2 tbsp milk",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Rub the chicken with salt, white pepper and ginger-garlic paste. Add the curd and mix well. Keep aside for 30 minutes.",
      },
      {
        title: "Make the pastes",
        body: "Drain the cashew nuts and grind with poppy seeds and a little water till smooth. Grind the boiled onions separately.",
      },
      {
        title: "Cook the onion paste",
        body: "Heat ghee with cardamom, mace and bay leaf. Add the onion paste and cook on low heat for 15 minutes, stirring, till it turns light golden. Do not let it brown.",
      },
      {
        title: "Add the chicken",
        body: "Add the chicken with the curd and cook on low heat for 10 minutes, turning the pieces once or twice.",
      },
      {
        title: "Add cashew paste and cook",
        body: "Add the cashew paste, sugar and 200 ml water. Cover and cook for 20 minutes till the chicken is soft and the gravy becomes thick.",
      },
      {
        title: "Finish",
        body: "Switch off the heat. Add cream, kewra water and saffron milk. Keep aside for 5 minutes, taste for salt and serve with naan or sheermal.",
      },
    ],
    notes: [
      "Boil the onions before grinding. Raw onion paste turns brown and bitter.",
      "Beat the curd well and add it slowly, or it will split.",
      "Kewra water is strong. Two teaspoons are enough for the whole pot.",
    ],
    serveWith: ["Sheermal", "Warqi paratha", "Awadhi pulao", "Green chutney"],
  },
  {
    slug: "goan-chicken-vindaloo",
    name: "Goan Chicken Vindaloo",
    native: "Galinha Vindalho",
    subtitle: "Kashmiri chilli, vinegar and jaggery — sour first, then hot.",
    region: "Goa",
    origin: "Goa",
    heat: 3,
    prep: 25,
    cook: 45,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f0dcd2",
      curry: "#9c2a14",
      deep: "#661a0c",
      piece: "#cf8a60",
      garnish: "#426141",
      accent: "#e0a15a",
    },
    story:
      "Vindalho comes from the Portuguese words for wine and garlic. In Goa, palm vinegar replaced the wine and jaggery was added to balance the sourness. The dish should taste sour and slightly sweet first, and the heat should come later.",
    tags: ["Prepare ahead", "Sour and hot", "Slow"],
    ingredients: [
      {
        title: "For the vindalho paste",
        items: [
          "10 dried Kashmiri chillies",
          "2 dried red chillies",
          "1 tbsp black peppercorns (kali mirch)",
          "4 cloves (laung)",
          "1 small cinnamon stick (dalchini)",
          "1 tsp cumin seeds (jeera)",
          "1 tsp mustard seeds (rai)",
          "½ tsp haldi (turmeric)",
          "6 garlic cloves",
          "1 inch ginger",
          "80 ml palm vinegar or any vinegar",
        ],
      },
      {
        title: "For the curry",
        items: [
          "1 kg chicken, cut into large pieces",
          "1 tbsp jaggery, grated",
          "2 tsp salt",
          "3 tbsp coconut oil",
          "1 onion, sliced",
          "1 tomato, chopped",
          "1 potato, cut into wedges (optional)",
          "2 green chillies, slit",
        ],
      },
    ],
    steps: [
      {
        title: "Soak the chillies",
        body: "Soak the dried chillies in hot water for 20 minutes. Drain them and keep the water.",
      },
      {
        title: "Grind the paste",
        body: "Grind the chillies with the whole spices, haldi, garlic, ginger and vinegar to a smooth paste. Add a little chilli water if needed.",
      },
      {
        title: "Marinate overnight",
        body: "Rub the paste on the chicken with jaggery and salt. Keep it covered in the fridge for at least 8 hours, or a full day.",
      },
      {
        title: "Fry the onion and tomato",
        body: "Heat coconut oil and add the onion. Fry for 8 minutes till soft and light golden. Add the tomato and cook for 4 minutes.",
      },
      {
        title: "Cook the chicken",
        body: "Add the chicken with all the marinade, the potato and 200 ml hot water. Cover and cook for 25–30 minutes till the chicken is soft and the gravy is thick.",
      },
      {
        title: "Adjust and keep aside",
        body: "Remove the lid and cook for 5 minutes. Taste it: it should be sour first, then sweet, then hot. Add vinegar or jaggery if needed. Keep aside for 10 minutes and serve with rice.",
      },
    ],
    notes: [
      "Kashmiri chillies give the red colour. The two dried red chillies give the heat. Do not change this proportion.",
      "Palm vinegar tastes best. Cider vinegar also works. Do not use white vinegar.",
      "Vindalho tastes even better after two days in the fridge.",
    ],
    serveWith: ["Goan red rice", "Poi bread", "Kachumber", "Lime soda"],
  },
  {
    slug: "kerala-chicken-curry",
    name: "Kerala Chicken Curry",
    native: "Nadan Kozhi Curry",
    subtitle: "Coconut milk, small onions and curry leaves, with coconut oil on top.",
    region: "Kerala",
    origin: "Kerala",
    heat: 2,
    prep: 20,
    cook: 40,
    serves: 4,
    variant: "curry",
    palette: {
      bg: "#f0e9d5",
      curry: "#c99b3f",
      deep: "#96702a",
      piece: "#e3c18c",
      garnish: "#3f5f3e",
      accent: "#f2e7c0",
    },
    story:
      "This is a Sunday curry in Kerala. Thin coconut milk is used to cook the chicken and thick coconut milk is added at the end. A final tempering of coconut oil, small onions and curry leaves goes on top. It is not very spicy, but the taste is deep.",
    tags: ["Coconut", "Family", "One pot"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "800 g chicken, cut into medium pieces",
          "1 tsp haldi (turmeric)",
          "1 tsp salt",
          "1 tbsp ginger-garlic paste",
          "2 green chillies, slit",
        ],
      },
      {
        title: "For the curry",
        items: [
          "3 tbsp coconut oil",
          "1 tsp mustard seeds (rai)",
          "20 curry leaves (kadhi patta)",
          "8 small onions (shallots), sliced",
          "2 onions, sliced",
          "1 tomato, chopped",
          "1 tsp Kashmiri chilli powder",
          "2 tsp coriander powder (dhania)",
          "½ tsp black pepper",
          "1 tsp garam masala",
          "400 ml thin coconut milk",
          "150 ml thick coconut milk",
          "Salt to taste",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Rub the chicken with haldi, salt, ginger-garlic paste and green chilli. Keep it aside while you start the curry.",
      },
      {
        title: "Fry the onions",
        body: "Heat coconut oil. Add mustard seeds and curry leaves, then the small onions and regular onions. Fry for 10 minutes till they turn golden brown.",
      },
      {
        title: "Add the powders",
        body: "Lower the heat and add chilli powder, coriander powder, black pepper and garam masala. Stir for 30 seconds so the powders cook but do not burn.",
      },
      {
        title: "Add tomato and chicken",
        body: "Add the tomato and cook for 3 minutes. Add the chicken and mix well for 5 minutes so it gets coated with the masala.",
      },
      {
        title: "Cook in thin coconut milk",
        body: "Pour in the thin coconut milk and 100 ml water. Cook on low heat for 20–25 minutes without a lid, till the chicken is soft and the gravy reduces a little.",
      },
      {
        title: "Finish with thick coconut milk",
        body: "Lower the heat and add the thick coconut milk. Cook for 3 minutes. Do not boil. Taste for salt. Top with fried small onions and curry leaves and serve with appam or rice.",
      },
    ],
    notes: [
      "Do not boil after adding thick coconut milk, or it will split. Keep the heat low.",
      "The gravy should be thin enough to soak into appam, not thick like a paste.",
      "If you get kudampuli (malabar tamarind), add one piece for the sour taste of Kerala curry.",
    ],
    serveWith: ["Appam", "Idiyappam", "Red rice", "Avial"],
  },
  {
    slug: "bengali-chicken-kosha",
    name: "Bengali Chicken Kosha",
    native: "Murgir Kosha",
    subtitle: "Slow-fried chicken with a dark, thick masala and a little sweetness.",
    region: "Bengal",
    origin: "Bengal",
    heat: 2,
    prep: 15,
    cook: 45,
    serves: 4,
    variant: "dry",
    palette: {
      bg: "#eee0ce",
      curry: "#6b3a1c",
      deep: "#452412",
      piece: "#c08c5d",
      garnish: "#4a6644",
      accent: "#dcae6a",
    },
    story:
      "Kosha means to fry slowly till the water dries up. The chicken is cooked in mustard oil with the masala till the oil separates and the masala sticks to the pieces. A little sugar at the start is the Bengali touch.",
    tags: ["Slow", "Mustard oil", "Goes with rice"],
    ingredients: [
      {
        title: "For the chicken",
        items: [
          "1 kg chicken, cut into medium pieces",
          "1 tsp haldi (turmeric)",
          "1 tsp salt",
          "1 tbsp ginger-garlic paste",
          "150 g curd, beaten well",
        ],
      },
      {
        title: "For the pan",
        items: [
          "4 tbsp mustard oil",
          "1 bay leaf (tej patta)",
          "3 green cardamom (choti elaichi)",
          "2 onions, finely chopped",
          "1 tsp sugar",
          "2 tomatoes, chopped",
          "1 tsp Kashmiri chilli powder",
          "1 tsp cumin powder (jeera)",
          "1 tsp coriander powder (dhania)",
          "1 potato, cut into wedges (optional)",
          "1 tsp ghee",
          "½ tsp garam masala",
          "1 tsp kasuri methi, crushed",
        ],
      },
    ],
    steps: [
      {
        title: "Marinate the chicken",
        body: "Rub the chicken with haldi, salt and ginger-garlic paste. Add the curd and mix well. Keep aside for 30 minutes.",
      },
      {
        title: "Heat the mustard oil",
        body: "Heat the mustard oil till it smokes slightly, then lower the heat. Add bay leaf, cardamom and onions with the sugar. Fry for 12 minutes till the onions turn dark brown.",
      },
      {
        title: "Fry the chicken",
        body: "Add the chicken and potato and fry on medium-high heat for 8 minutes. The pieces should change colour and the curd should dry up.",
      },
      {
        title: "Bhuna the masala",
        body: "Add tomatoes, chilli powder, cumin and coriander. Cook without a lid for 15 minutes, stirring often and scraping the bottom, till the masala turns dark and coats the chicken.",
      },
      {
        title: "Cover and cook",
        body: "Add 100 ml hot water, cover and cook for 12 minutes till the chicken is soft. Remove the lid and cook for 3 minutes so the extra water dries up.",
      },
      {
        title: "Finish with ghee",
        body: "Add ghee, garam masala and kasuri methi. Keep aside for 5 minutes. Serve with rice, dal and a slice of lemon.",
      },
    ],
    notes: [
      "If the masala sticks to the pan, add a little water and lower the heat. Dark is good, burnt is not.",
      "The potato is optional, but it soaks up the masala very well.",
      "Leftovers taste better the next day with paratha.",
    ],
    serveWith: ["Steamed rice", "Moong dal", "Luchi", "Lemon wedge"],
  },
  {
    slug: "murgh-shorba",
    name: "Murgh Shorba",
    native: "Murgh Yakhni Shorba",
    subtitle: "A clear chicken soup with saffron and toasted almonds.",
    region: "Awadh",
    origin: "Lucknow",
    heat: 1,
    prep: 15,
    cook: 45,
    serves: 4,
    variant: "soup",
    palette: {
      bg: "#f5ead6",
      curry: "#d9a94e",
      deep: "#a87a24",
      piece: "#e9c68f",
      garnish: "#4a6743",
      accent: "#f7e6c0",
    },
    story:
      "Shorba is a clear chicken soup, the kind served before biryani. Use bones, because that is where the taste is. Keep the flame low and do not stir too much, or the soup will turn cloudy.",
    tags: ["Light", "Weeknight", "Uses bones"],
    ingredients: [
      {
        title: "For the soup",
        items: [
          "600 g chicken bones and 2 chicken thighs, with skin",
          "1 tbsp ghee",
          "1 onion, cut into four",
          "1 inch ginger, sliced",
          "4 garlic cloves",
          "1 bay leaf (tej patta)",
          "3 green cardamom (choti elaichi)",
          "1 small cinnamon stick (dalchini)",
          "½ tsp black peppercorns (kali mirch)",
          "¼ tsp haldi (turmeric)",
          "A few coriander stems",
          "1.4 litres water",
          "1 tsp salt",
        ],
      },
      {
        title: "To finish",
        items: [
          "A pinch of saffron, soaked in 2 tbsp hot milk",
          "1 tbsp fresh cream",
          "1 tbsp sliced almonds, toasted",
          "Coriander leaves",
          "Lemon juice",
          "Cracked black pepper",
        ],
      },
    ],
    steps: [
      {
        title: "Fry the chicken a little",
        body: "Heat ghee in a deep pot and fry the chicken and bones for 5 minutes. Do not let them brown. The soup should stay light in colour.",
      },
      {
        title: "Add water and spices",
        body: "Add onion, ginger, garlic, whole spices, haldi, coriander stems, salt and water. Bring to a boil, then lower the heat at once.",
      },
      {
        title: "Cook slowly",
        body: "Remove the foam that comes up in the first ten minutes. Cook on low heat for 35–40 minutes without a lid, till the soup tastes of chicken and reduces by about one-third.",
      },
      {
        title: "Strain",
        body: "Strain through a fine strainer or muslin cloth. Press the solids lightly. Throw away the spices and remove the extra fat from the top.",
      },
      {
        title: "Serve in bowls",
        body: "Shred the chicken thigh and put it in bowls. Pour the hot soup on top. Add saffron milk, cream, almonds, coriander, lemon juice and pepper at the table.",
      },
    ],
    notes: [
      "Do not boil on high heat. A strong boil makes the soup cloudy.",
      "Add less salt while cooking and adjust at the end, after the soup has reduced.",
      "Freeze the strained soup in small boxes. It is the base for many other dishes.",
    ],
    serveWith: ["Sheermal", "Khasta roti", "Green salad", "Biryani, as a first course"],
  },
  {
    "slug": "maharashtra-kombdi-rassa",
    "name": "Maharashtrian Chicken Rassa",
    "native": "Kombdi Rassa",
    "subtitle": "A fiery, thin village-style chicken curry with roasted coconut and goda masala.",
    "region": "Maharashtra",
    "origin": "Konkan and Western Maharashtra",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kombdi rassa is a home-style chicken curry from Maharashtra. Roasted coconut, onion and regional goda masala give the gravy its earthy body. Keep it thinner than a restaurant curry and serve it with bhakri or rice.",
    "tags": [
      "Goda masala",
      "Roasted coconut",
      "Village style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, cut into medium pieces",
          "1 tsp turmeric (haldi)",
          "1 tbsp ginger-garlic paste",
          "1 tsp red chilli powder",
          "1 tsp salt",
          "1 tbsp lemon juice"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp oil",
          "2 onions, sliced",
          "½ cup grated coconut",
          "2 tbsp goda masala",
          "1 tomato, chopped",
          "1 tsp coriander powder",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast the coconut",
        "body": "Dry roast the coconut on low heat till golden. Keep aside."
      },
      {
        "title": "Brown the onion",
        "body": "Heat oil and fry onions till deep golden. Add ginger-garlic paste and cook for a minute."
      },
      {
        "title": "Make the masala",
        "body": "Grind the roasted coconut and onions with goda masala, coriander and a little water."
      },
      {
        "title": "Cook the chicken",
        "body": "Fry chicken with turmeric, chilli and salt for 6 minutes. Add tomato and cook till soft."
      },
      {
        "title": "Simmer",
        "body": "Add the ground masala and hot water. Cover and cook for 20–25 minutes till the chicken is fully cooked."
      },
      {
        "title": "Finish",
        "body": "Adjust salt, add coriander and keep aside for 5 minutes."
      }
    ],
    "notes": [
      "Roast coconut slowly; burnt coconut makes the gravy bitter.",
      "Use a little more water for a rassa to eat with rice.",
      "Goda masala varies by brand, so adjust salt after simmering."
    ],
    "serveWith": [
      "Jowar bhakri",
      "Steamed rice",
      "Kanda bhaji"
    ]
  },
  {
    "slug": "kolhapuri-chicken",
    "name": "Kolhapuri Chicken",
    "native": "Kolhapuri Kombdi",
    "subtitle": "A bold red curry built on roasted dry chilli, coconut and sesame masala.",
    "region": "Maharashtra",
    "origin": "Kolhapur, Maharashtra",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kolhapuri chicken is known for a deep roasted masala and a strong chilli finish. This home version uses dry coconut, sesame and whole spices ground fresh. The colour should come from the masala, not only chilli powder.",
    "tags": [
      "Roasted masala",
      "Sesame",
      "Hot curry"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt",
          "1 tbsp lemon juice"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp oil",
          "1 onion, sliced",
          "¼ cup dry coconut",
          "1 tbsp sesame seeds",
          "2 tbsp coriander seeds",
          "5 dried red chillies",
          "1 tsp cumin seeds",
          "4 cloves",
          "1 cinnamon stick",
          "1 tomato, chopped",
          "300 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast the spices",
        "body": "Dry roast coriander, cumin, cloves, cinnamon and chillies till aromatic. Remove."
      },
      {
        "title": "Roast coconut and sesame",
        "body": "Roast coconut and sesame separately till golden. Cool everything."
      },
      {
        "title": "Grind the masala",
        "body": "Grind roasted ingredients with fried onion and a little water to a thick paste."
      },
      {
        "title": "Fry chicken",
        "body": "Heat oil, add ginger-garlic paste and chicken. Fry for 7 minutes with turmeric and salt."
      },
      {
        "title": "Simmer the curry",
        "body": "Add tomato and ground masala. Fry till oil shows at the edges. Add hot water, cover and cook for 25 minutes."
      },
      {
        "title": "Serve",
        "body": "Check the chicken is cooked through. Finish with coriander and serve hot."
      }
    ],
    "notes": [
      "Use Byadgi chillies for colour and hotter chillies for heat.",
      "Roast each spice separately because they brown at different speeds.",
      "Add water gradually to keep the curry thick."
    ],
    "serveWith": [
      "Jowar bhakri",
      "Steamed rice",
      "Sliced onion"
    ]
  },
  {
    "slug": "andhra-kodi-kura",
    "name": "Andhra Chicken Curry",
    "native": "Andhra Kodi Kura",
    "subtitle": "A spicy Andhra chicken curry with curry leaves, chilli and a tamarind lift.",
    "region": "Andhra Pradesh",
    "origin": "Andhra Pradesh",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kodi kura changes across Andhra homes. This version balances chilli, curry leaves and a little tamarind for a lively gravy. Use bone-in chicken and let the masala fry properly before adding water.",
    "tags": [
      "Andhra style",
      "Curry leaves",
      "Tamarind"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1½ tsp chilli powder",
          "1 tsp salt",
          "Small lemon-sized tamarind, soaked"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp oil",
          "1 tsp mustard seeds",
          "1 tsp cumin seeds",
          "2 onions, finely chopped",
          "2 sprigs curry leaves",
          "1 tomato, chopped",
          "1 tbsp coriander powder",
          "½ tsp cumin powder",
          "1 green chilli",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with turmeric, ginger-garlic paste, chilli and salt. Keep aside for 20 minutes."
      },
      {
        "title": "Temper",
        "body": "Heat oil. Add mustard, cumin and curry leaves. Add onions and fry till golden."
      },
      {
        "title": "Cook tomato",
        "body": "Add tomato, coriander and cumin powders. Cook till the tomato softens and oil separates."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and fry on medium-high heat for 8 minutes so the pieces are coated."
      },
      {
        "title": "Simmer",
        "body": "Add strained tamarind water and hot water. Cover and cook for 20–25 minutes till tender."
      },
      {
        "title": "Finish",
        "body": "Add slit green chilli and coriander. Adjust tang and salt before serving."
      }
    ],
    "notes": [
      "Tamarind should add a gentle sourness, not dominate the chilli.",
      "Use chilli powder to taste; Andhra varieties differ in heat.",
      "Simmer gently until the chicken is cooked through."
    ],
    "serveWith": [
      "Steamed rice",
      "Ragi sangati",
      "Dosa"
    ]
  },
  {
    "slug": "gongura-chicken",
    "name": "Gongura Chicken",
    "native": "Gongura Kodi",
    "subtitle": "A tangy Andhra chicken curry with sorrel leaves and a roasted spice paste.",
    "region": "Andhra Pradesh",
    "origin": "Coastal Andhra",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Gongura leaves have a sharp, lemony taste that gives this Andhra chicken its identity. The leaves are cooked down first, then blended into the masala so the sourness spreads through the gravy.",
    "tags": [
      "Gongura",
      "Sorrel leaves",
      "Tangy"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp chilli powder",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 bunches gongura leaves, cleaned",
          "3 tbsp oil",
          "1 onion, sliced",
          "4 dried red chillies",
          "1 tsp cumin seeds",
          "1 tbsp coriander seeds",
          "½ tsp fenugreek seeds",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Cook the gongura",
        "body": "Heat a little oil and cook gongura leaves till wilted and soft. Cool and grind to a coarse paste."
      },
      {
        "title": "Roast spices",
        "body": "Roast dried chillies, cumin, coriander and fenugreek briefly. Grind with the cooked leaves."
      },
      {
        "title": "Fry onion",
        "body": "Heat remaining oil and fry onion till golden. Add ginger-garlic paste and cook for a minute."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric, chilli and salt. Fry for 7 minutes till coated."
      },
      {
        "title": "Add gongura paste",
        "body": "Stir in the paste and fry for 5 minutes. Add hot water and cover."
      },
      {
        "title": "Simmer",
        "body": "Cook for 20 minutes till chicken is fully cooked and gravy thickens. Finish with coriander."
      }
    ],
    "notes": [
      "Gongura is naturally sour; taste before adding lemon or tamarind.",
      "Use tender leaves and remove thick stems.",
      "A little sesame oil gives a traditional flavour."
    ],
    "serveWith": [
      "Steamed rice",
      "Jonna roti",
      "Pappu"
    ]
  },
  {
    "slug": "kerala-varutharachathu",
    "name": "Kerala Roasted Coconut Chicken Curry",
    "native": "Kozhi Varutharachathu",
    "subtitle": "Chicken simmered in a freshly roasted coconut, coriander and spice gravy.",
    "region": "Kerala",
    "origin": "Central Kerala",
    "heat": 2,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Varutharachathu means roasted and ground. Coconut, coriander and spices are browned carefully, ground smooth and simmered with chicken. The roasted paste makes this Kerala curry different from a simple coconut milk curry.",
    "tags": [
      "Roasted coconut",
      "Kerala curry",
      "Coconut oil"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "½ tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 cup grated coconut",
          "2 tbsp coriander seeds",
          "4 dried red chillies",
          "½ tsp fennel seeds",
          "3 cloves",
          "1 small cinnamon stick",
          "3 tbsp coconut oil",
          "2 onions, sliced",
          "2 sprigs curry leaves",
          "1 tomato, chopped",
          "300 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Dry roast coconut on low heat till evenly deep golden. Do not burn."
      },
      {
        "title": "Roast spices",
        "body": "Roast coriander, chillies, fennel, cloves and cinnamon briefly. Grind with coconut and water."
      },
      {
        "title": "Start the curry",
        "body": "Heat coconut oil. Fry onions and curry leaves till golden. Add ginger-garlic paste."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken, turmeric and salt. Fry till the outside changes colour."
      },
      {
        "title": "Simmer",
        "body": "Add tomato and ground coconut paste. Add hot water, cover and cook for 25 minutes."
      },
      {
        "title": "Finish",
        "body": "Cook uncovered to thicken. Check chicken is fully cooked and serve hot."
      }
    ],
    "notes": [
      "The coconut should be golden brown, not black.",
      "Add water in stages; the curry thickens as it rests.",
      "Use fresh curry leaves for the best aroma."
    ],
    "serveWith": [
      "Appam",
      "Matta rice",
      "Malabar parotta"
    ]
  },
  {
    "slug": "malabar-chicken-roast",
    "name": "Malabar Chicken Roast",
    "native": "Malabar Kozhi Roast",
    "subtitle": "Peppery chicken roasted down with onions, curry leaves and coconut oil.",
    "region": "Kerala",
    "origin": "Malabar, Kerala",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Malabar chicken roast is a semi-dry preparation where onions cook down around the chicken. Pepper and curry leaves give warmth, while coconut oil adds the familiar coastal aroma.",
    "tags": [
      "Malabar",
      "Pepper roast",
      "Semi-dry"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, small pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp black pepper",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp coconut oil",
          "3 onions, thinly sliced",
          "2 sprigs curry leaves",
          "2 tomatoes, chopped",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "½ tsp fennel powder",
          "½ tsp garam masala",
          "100 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with turmeric, pepper, ginger-garlic paste and salt. Keep aside for 20 minutes."
      },
      {
        "title": "Fry onions",
        "body": "Heat coconut oil. Add curry leaves and onions. Fry till deep golden and soft."
      },
      {
        "title": "Build masala",
        "body": "Add tomatoes, chilli and coriander powders. Cook till thick."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken and fry on medium heat for 7 minutes."
      },
      {
        "title": "Cover",
        "body": "Add hot water, cover and cook for 18–20 minutes till chicken is tender."
      },
      {
        "title": "Roast down",
        "body": "Remove lid and cook on high heat till the masala clings to chicken. Add fennel and garam masala."
      }
    ],
    "notes": [
      "Slice onions evenly so they cook at the same pace.",
      "Keep stirring during the final roast to prevent sticking.",
      "Use more pepper for a sharper finish."
    ],
    "serveWith": [
      "Pathiri",
      "Appam",
      "Ghee rice"
    ]
  },
  {
    "slug": "goan-xacuti",
    "name": "Goan Chicken Xacuti",
    "native": "Galinha Xacuti",
    "subtitle": "A fragrant Goan curry with toasted coconut, poppy seeds and a complex spice blend.",
    "region": "Goa",
    "origin": "Goa",
    "heat": 3,
    "prep": 30,
    "cook": 50,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Xacuti is a Goan curry known for its roasted coconut and layered spice paste. The spices are toasted separately, then ground with coconut to make a thick, aromatic gravy. It differs from the vinegar-forward taste of vindaloo.",
    "tags": [
      "Goan",
      "Roasted coconut",
      "Spice paste"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 cup grated coconut",
          "2 tbsp coriander seeds",
          "4 dried red chillies",
          "1 tsp cumin seeds",
          "½ tsp poppy seeds",
          "4 cloves",
          "1 cinnamon stick",
          "½ tsp black peppercorns",
          "3 tbsp oil",
          "2 onions, sliced",
          "1 tomato, chopped",
          "300 ml hot water",
          "Small ball tamarind"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Roast coconut slowly till golden brown. Keep aside."
      },
      {
        "title": "Toast spices",
        "body": "Toast coriander, cumin, poppy, cloves, cinnamon, pepper and chillies until fragrant."
      },
      {
        "title": "Grind paste",
        "body": "Grind toasted spices and coconut with a little water to a smooth paste."
      },
      {
        "title": "Fry base",
        "body": "Heat oil. Fry onions till golden, add ginger-garlic paste and tomato."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken and turmeric. Fry for 6–8 minutes."
      },
      {
        "title": "Simmer",
        "body": "Add ground paste, tamarind and hot water. Cover and cook for 25–30 minutes till done. Adjust salt."
      }
    ],
    "notes": [
      "Tamarind should balance the roasted spices without making the curry too sour.",
      "Do not rush the coconut roasting; pale coconut gives a lighter gravy.",
      "Serve with plain rice to let the masala stand out."
    ],
    "serveWith": [
      "Goan rice",
      "Poi",
      "Sanna"
    ]
  },
  {
    "slug": "kashmiri-chicken-yakhni",
    "name": "Kashmiri Chicken Yakhni",
    "native": "Kokur Yakhni",
    "subtitle": "A gentle curd-based chicken curry scented with fennel, dry ginger and whole spices.",
    "region": "Kashmir",
    "origin": "Kashmir Valley",
    "heat": 1,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kashmiri yakhni is a delicate yoghurt gravy scented with fennel and dry ginger. Unlike many North Indian curries, it does not depend on tomato or a heavy onion base. Keep the heat gentle so the curd stays smooth.",
    "tags": [
      "Kashmiri",
      "Fennel",
      "Curd gravy"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "200 g thick curd, whisked",
          "1 tsp salt",
          "½ tsp dry ginger powder (saunth)",
          "1 tbsp fennel powder"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "1 bay leaf",
          "1 black cardamom",
          "1 small cinnamon stick",
          "4 green cardamom",
          "½ tsp cumin seeds",
          "½ tsp asafoetida (hing)",
          "1 tsp fennel powder",
          "½ tsp dry ginger powder",
          "250 ml hot water",
          "A few mint leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare curd",
        "body": "Whisk curd till smooth. Keep it at room temperature while preparing the pan."
      },
      {
        "title": "Temper spices",
        "body": "Heat mustard oil. Add bay leaf, cardamom, cinnamon, cumin and hing."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and salt. Fry till the outside changes colour."
      },
      {
        "title": "Add curd",
        "body": "Lower the flame. Add curd a spoon at a time, stirring continuously so it does not split."
      },
      {
        "title": "Season",
        "body": "Add fennel and dry ginger powder. Stir well and add hot water."
      },
      {
        "title": "Simmer",
        "body": "Cover and cook gently for 20–25 minutes till chicken is cooked through. Finish with mint."
      }
    ],
    "notes": [
      "Keep the flame low when adding curd.",
      "Fennel is the main flavour; do not replace it with garam masala.",
      "This is a light gravy, not a thick red curry."
    ],
    "serveWith": [
      "Steamed rice",
      "Kashmiri girda",
      "Jeera rice"
    ]
  },
  {
    "slug": "bihari-chicken-mustard",
    "name": "Bihari Mustard Chicken",
    "native": "Bihari Sarson Murgh",
    "subtitle": "A mustard-oil chicken curry with pungent mustard, garlic and a bright chilli finish.",
    "region": "Bihar",
    "origin": "Bihar",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "This home-style Bihari chicken uses mustard oil and a freshly ground mustard paste for a sharp, pungent gravy. Use the mustard carefully and balance it with tomato and lemon. It pairs well with rice or sattu roti.",
    "tags": [
      "Mustard oil",
      "Bihari home style",
      "Pungent"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp turmeric",
          "1 tbsp garlic paste",
          "1 tsp chilli powder",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "2 tbsp yellow mustard seeds, soaked",
          "1 tsp cumin seeds",
          "2 onions, sliced",
          "2 tomatoes, chopped",
          "1 tsp coriander powder",
          "1 green chilli",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Soak mustard",
        "body": "Soak mustard seeds for 20 minutes. Grind with a little water to a smooth paste."
      },
      {
        "title": "Heat oil",
        "body": "Heat mustard oil till it smokes lightly. Lower the flame and add cumin."
      },
      {
        "title": "Fry onions",
        "body": "Add onions and fry till golden. Add garlic paste and cook for a minute."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric, chilli and salt. Fry for 7 minutes."
      },
      {
        "title": "Add gravy",
        "body": "Add tomatoes and coriander powder. Cook till soft, then add mustard paste and hot water."
      },
      {
        "title": "Simmer",
        "body": "Cover and cook for 20–25 minutes till the chicken is done. Finish with green chilli and coriander."
      }
    ],
    "notes": [
      "Soaked mustard paste can turn bitter if boiled hard; simmer gently.",
      "Heat mustard oil till it smokes, then lower the flame.",
      "Use a mix of yellow and black mustard for sharper flavour."
    ],
    "serveWith": [
      "Steamed rice",
      "Sattu roti",
      "Litti"
    ]
  },
  {
    "slug": "rajasthani-safed-murg",
    "name": "Rajasthani Safed Chicken",
    "native": "Safed Maas Style Murgh",
    "subtitle": "A pale, mildly spiced chicken curry with curd, nuts, pepper and cardamom.",
    "region": "Rajasthan",
    "origin": "Rajasthan",
    "heat": 1,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Inspired by the pale, nut-rich gravies of Rajasthan, this chicken version uses curd, cashew and pepper rather than a red chilli base. It is a mild festive curry for a slower meal.",
    "tags": [
      "Mild",
      "Nut gravy",
      "Festive"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g thick curd",
          "1 tbsp ginger-garlic paste",
          "½ tsp white pepper",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp ghee",
          "1 onion, boiled and ground",
          "40 g cashews, soaked",
          "1 tbsp melon seeds",
          "4 green cardamom",
          "1 bay leaf",
          "½ tsp black pepper",
          "100 ml fresh cream",
          "200 ml hot water",
          "A pinch of saffron"
        ]
      }
    ],
    "steps": [
      {
        "title": "Make nut paste",
        "body": "Grind soaked cashews and melon seeds with a little water."
      },
      {
        "title": "Cook onion",
        "body": "Heat ghee with cardamom and bay leaf. Add onion paste and cook on low till pale golden."
      },
      {
        "title": "Add chicken",
        "body": "Add ginger-garlic paste and chicken. Fry gently for 6 minutes."
      },
      {
        "title": "Add curd",
        "body": "Lower heat and stir in whisked curd gradually."
      },
      {
        "title": "Simmer",
        "body": "Add nut paste, pepper, saffron and hot water. Cover and cook 22–25 minutes."
      },
      {
        "title": "Finish",
        "body": "Add cream on low heat, adjust salt and switch off before it boils."
      }
    ],
    "notes": [
      "Keep the gravy pale; do not brown the onions deeply.",
      "Whisk curd well and add slowly over low heat.",
      "Use fresh white pepper for a clean warmth."
    ],
    "serveWith": [
      "Roomali roti",
      "Pulao",
      "Sheermal"
    ]
  },
  {
    "slug": "himachali-chicken-madra",
    "name": "Himachali Chicken Madra",
    "native": "Pahari Murgh Madra",
    "subtitle": "A curd-rich hill-style chicken curry with whole spices and a slow simmer.",
    "region": "Himachal Pradesh",
    "origin": "Himachal Pradesh",
    "heat": 2,
    "prep": 20,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Madra is associated with Himachali cooking and is often made with pulses. This chicken adaptation borrows the region's yoghurt-rich, gently spiced gravy, with chickpeas adding texture. It is a Murgh variation rather than a claim that chicken madra is the sole traditional form.",
    "tags": [
      "Pahari inspired",
      "Curd gravy",
      "Chickpeas"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "150 g curd, whisked",
          "150 g cooked chickpeas",
          "1 tsp ginger paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp ghee",
          "1 tsp cumin seeds",
          "3 cloves",
          "1 cinnamon stick",
          "1 black cardamom",
          "½ tsp turmeric",
          "1 tsp coriander powder",
          "½ tsp fennel powder",
          "250 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Temper",
        "body": "Heat ghee and add cumin, cloves, cinnamon and black cardamom."
      },
      {
        "title": "Fry chicken",
        "body": "Add ginger and chicken. Fry for 6–7 minutes."
      },
      {
        "title": "Season",
        "body": "Add turmeric, coriander and fennel. Stir for a minute."
      },
      {
        "title": "Add curd",
        "body": "Lower the flame and add whisked curd gradually while stirring."
      },
      {
        "title": "Simmer",
        "body": "Add chickpeas and hot water. Cover and cook for 22–25 minutes till chicken is cooked."
      },
      {
        "title": "Finish",
        "body": "Adjust salt and garnish with coriander."
      }
    ],
    "notes": [
      "This is a regional adaptation inspired by madra's curd-based style.",
      "Use cooked chickpeas so they do not stay hard in the curry.",
      "Keep the flame low after adding curd."
    ],
    "serveWith": [
      "Chakki ki roti",
      "Steamed rice",
      "Cucumber salad"
    ]
  },
  {
    "slug": "assamese-chicken-khar",
    "name": "Assamese Chicken Khar",
    "native": "Kharir Logot Murgi",
    "subtitle": "A light Assamese chicken preparation with raw papaya, ginger and a gentle alkaline note.",
    "region": "Assam",
    "origin": "Assam",
    "heat": 1,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Khar is a distinctive Assamese alkaline preparation traditionally associated with banana-ash filtrate. This accessible chicken version uses a small amount of food-grade khar water where available; never substitute household cleaning soda. It is light and best eaten with rice.",
    "tags": [
      "Assamese",
      "Khar",
      "Raw papaya"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken, small pieces",
          "150 g raw papaya, peeled and cubed",
          "1 tsp ginger paste",
          "½ tsp turmeric",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp mustard oil",
          "1 potato, cubed",
          "1 onion, sliced",
          "1 tomato, chopped",
          "½ tsp black pepper",
          "100 ml water",
          "1–2 tbsp food-grade khar water, optional",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare papaya",
        "body": "Peel and cube raw papaya. Keep aside."
      },
      {
        "title": "Fry base",
        "body": "Heat mustard oil. Fry potato and onion till lightly golden."
      },
      {
        "title": "Add chicken",
        "body": "Add chicken, ginger, turmeric and salt. Fry for 6 minutes."
      },
      {
        "title": "Cook vegetables",
        "body": "Add tomato, papaya, pepper and water. Cover and cook 15–18 minutes."
      },
      {
        "title": "Finish with khar",
        "body": "Add food-grade khar water a little at a time, only if using. Simmer briefly and taste."
      },
      {
        "title": "Serve",
        "body": "Check chicken is fully cooked and serve with steamed rice."
      }
    ],
    "notes": [
      "Use only food-grade khar supplied for cooking; omit if unsure.",
      "Do not use washing soda or an unmeasured alkaline substitute.",
      "Raw papaya softens as it cooks and helps thicken the broth."
    ],
    "serveWith": [
      "Steamed rice",
      "Khar",
      "Lemon wedge"
    ]
  },
  {
    "slug": "nagaland-smoked-chicken",
    "name": "Naga Smoked Chicken Curry",
    "native": "Naga Smoked Murgh",
    "subtitle": "A smoky chilli chicken curry inspired by Naga home cooking and smoked ingredients.",
    "region": "Nagaland",
    "origin": "Nagaland",
    "heat": 3,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Smoking and dried chillies are used in several Naga food traditions. This home-kitchen chicken curry uses smoked chicken or smoked chilli as a flavour cue, with bamboo shoot optional. It is a practical adaptation, not a single canonical Naga recipe.",
    "tags": [
      "Northeast",
      "Smoked flavour",
      "Bamboo shoot"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "1 tbsp ginger-garlic paste",
          "1 tsp chilli flakes",
          "1 tsp salt",
          "½ tsp turmeric"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp mustard oil",
          "1 onion, sliced",
          "2 tomatoes, chopped",
          "2 dried smoked chillies",
          "100 g cooked bamboo shoot, optional",
          "½ tsp black pepper",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Temper",
        "body": "Heat mustard oil and add crushed dried chillies."
      },
      {
        "title": "Fry onion",
        "body": "Add onion and fry till soft and lightly golden."
      },
      {
        "title": "Add chicken",
        "body": "Add ginger-garlic paste and chicken. Fry for 7 minutes."
      },
      {
        "title": "Add tomato",
        "body": "Add tomatoes, turmeric, pepper and salt. Cook till tomatoes soften."
      },
      {
        "title": "Simmer",
        "body": "Add bamboo shoot if using and hot water. Cover and cook 20 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Remove lid to reduce gravy. Taste for salt and serve."
      }
    ],
    "notes": [
      "Bamboo shoot has a strong aroma; rinse and cook it before adding.",
      "Use smoked chilli if smoked chicken is not easy to source.",
      "Naga food varies widely between communities and households."
    ],
    "serveWith": [
      "Steamed rice",
      "Boiled greens",
      "Chilli chutney"
    ]
  },
  {
    "slug": "manipuri-chicken-kangshoi",
    "name": "Manipuri Chicken Kangshoi",
    "native": "Yen Thongba Inspired",
    "subtitle": "A light broth with chicken, seasonal vegetables, ginger and fresh herbs.",
    "region": "Manipur",
    "origin": "Manipur",
    "heat": 1,
    "prep": 15,
    "cook": 30,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kangshoi is a light Manipuri vegetable stew. This chicken variation is inspired by its simple broth and seasonal vegetables; it is not presented as a canonical traditional meat recipe. Keep the seasoning clean and let the vegetables flavour the stock.",
    "tags": [
      "Northeast",
      "Light broth",
      "Vegetables"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "600 g chicken, bone-in small pieces",
          "1 tsp ginger, crushed",
          "1 tsp salt",
          "½ tsp turmeric"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 potato, cubed",
          "100 g pumpkin, cubed",
          "100 g beans, cut",
          "1 tomato, quartered",
          "2 green chillies",
          "1 litre water",
          "Spring onion greens",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Start broth",
        "body": "Add chicken, ginger, turmeric, salt and water to a pot. Bring to a simmer and skim foam."
      },
      {
        "title": "Cook chicken",
        "body": "Cover partly and simmer for 18 minutes."
      },
      {
        "title": "Add vegetables",
        "body": "Add potato, pumpkin, beans and tomato. Simmer till vegetables soften."
      },
      {
        "title": "Season",
        "body": "Add green chillies and adjust salt. Cook until chicken is thoroughly cooked."
      },
      {
        "title": "Finish",
        "body": "Switch off heat and add spring onion greens and coriander."
      },
      {
        "title": "Serve",
        "body": "Ladle into bowls with rice."
      }
    ],
    "notes": [
      "Keep broth at a gentle simmer for clarity.",
      "Cut vegetables evenly so they cook at the same speed.",
      "This is an inspired chicken variation on a vegetable stew tradition."
    ],
    "serveWith": [
      "Steamed rice",
      "Herb chutney",
      "Seasonal greens"
    ]
  },
  {
    "slug": "bihari-chicken-korma",
    "name": "Bihari Chicken Korma",
    "native": "Bihari Murgh Korma",
    "subtitle": "A fragrant mustard-oil chicken korma with curd, fried onion and warm spices.",
    "region": "Bihar",
    "origin": "Bihar",
    "heat": 2,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "This Bihari home-style korma uses mustard oil, curd and a freshly ground spice mix. It is less fiery than the mustard chicken and gets its flavour from a slow onion base.",
    "tags": [
      "Bihari",
      "Korma",
      "Mustard oil"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g curd",
          "1 tbsp ginger-garlic paste",
          "½ tsp turmeric",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "2 onions, sliced",
          "1 tsp cumin",
          "3 cloves",
          "1 cinnamon stick",
          "2 green cardamom",
          "1 tsp coriander powder",
          "½ tsp chilli powder",
          "1 tomato, chopped",
          "250 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Brown onion",
        "body": "Heat mustard oil and fry onions till golden brown. Remove half for garnish."
      },
      {
        "title": "Fry spices",
        "body": "Add whole spices and ginger-garlic paste. Cook for a minute."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric and salt. Fry for 7 minutes."
      },
      {
        "title": "Add curd",
        "body": "Lower heat and add whisked curd gradually, stirring continuously."
      },
      {
        "title": "Simmer",
        "body": "Add tomato, coriander, chilli and hot water. Cover and cook for 25 minutes."
      },
      {
        "title": "Finish",
        "body": "Reduce gravy uncovered. Add reserved onions and serve."
      }
    ],
    "notes": [
      "Use mustard oil for its characteristic aroma.",
      "Keep stirring while adding curd to avoid splitting.",
      "Adjust chilli after the curry has simmered."
    ],
    "serveWith": [
      "Steamed rice",
      "Sattu roti",
      "Paratha"
    ]
  },
  {
    "slug": "karnataka-kundapura-chicken",
    "name": "Kundapura Chicken Curry",
    "native": "Kundapura Kori Gassi",
    "subtitle": "A coastal Karnataka chicken curry with Byadgi chilli, coconut and tamarind.",
    "region": "Karnataka",
    "origin": "Kundapura, coastal Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kori gassi is a coastal Karnataka chicken curry associated with Mangalorean kitchens. This Kundapura-style variation leans on Byadgi chillies, coconut and tamarind. The red masala should be aromatic, not only hot.",
    "tags": [
      "Coastal Karnataka",
      "Coconut",
      "Byadgi chilli"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 cup grated coconut",
          "6 Byadgi chillies",
          "1 tbsp coriander seeds",
          "1 tsp cumin",
          "½ tsp fenugreek seeds",
          "4 cloves",
          "1 cinnamon stick",
          "3 tbsp coconut oil",
          "2 onions, sliced",
          "Small ball tamarind",
          "300 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Roast coconut till golden and fragrant."
      },
      {
        "title": "Toast spices",
        "body": "Toast chillies, coriander, cumin, fenugreek, cloves and cinnamon."
      },
      {
        "title": "Grind masala",
        "body": "Grind spices with coconut and soaked tamarind to a smooth paste."
      },
      {
        "title": "Fry onion",
        "body": "Heat coconut oil and fry onion till golden. Add ginger-garlic paste."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric. Fry for 7 minutes."
      },
      {
        "title": "Simmer",
        "body": "Add masala and hot water. Cover and cook 25 minutes till chicken is tender."
      }
    ],
    "notes": [
      "Byadgi chillies give deep colour with moderate heat.",
      "Use tamarind sparingly and adjust after simmering.",
      "Serve with neer dosa or rice."
    ],
    "serveWith": [
      "Neer dosa",
      "Steamed rice",
      "Kori rotti"
    ]
  },
  {
    "slug": "mangalorean-chicken-sukka",
    "name": "Mangalorean Chicken Sukka",
    "native": "Kori Ajadina",
    "subtitle": "A semi-dry chicken dish coated in roasted coconut, curry leaves and spice masala.",
    "region": "Karnataka",
    "origin": "Mangaluru, Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Sukka is a dry or semi-dry coastal preparation. The chicken cooks in a roasted coconut masala with curry leaves and Byadgi chilli. Keep the masala thick and scrape the pan so it coats every piece.",
    "tags": [
      "Mangalorean",
      "Semi-dry",
      "Roasted coconut"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, small pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "¾ cup grated coconut",
          "5 Byadgi chillies",
          "1 tbsp coriander seeds",
          "½ tsp cumin",
          "4 cloves",
          "1 cinnamon stick",
          "3 tbsp coconut oil",
          "2 onions, sliced",
          "2 sprigs curry leaves",
          "100 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast coconut",
        "body": "Roast coconut till golden. Keep aside."
      },
      {
        "title": "Roast spices",
        "body": "Toast chillies, coriander, cumin, cloves and cinnamon. Grind with coconut."
      },
      {
        "title": "Fry onions",
        "body": "Heat coconut oil. Fry onions and curry leaves till golden."
      },
      {
        "title": "Cook chicken",
        "body": "Add ginger-garlic paste and chicken. Fry for 8 minutes."
      },
      {
        "title": "Add masala",
        "body": "Add ground paste and hot water. Cover and cook for 20 minutes."
      },
      {
        "title": "Roast dry",
        "body": "Remove lid and cook, stirring, till masala clings to chicken."
      }
    ],
    "notes": [
      "Use fresh coconut for a softer texture.",
      "Add a splash of water if the masala catches before chicken cooks.",
      "Finish with curry leaves fried in coconut oil."
    ],
    "serveWith": [
      "Neer dosa",
      "Rice roti",
      "Rasam"
    ]
  },
  {
    "slug": "punjabi-saag-chicken",
    "name": "Punjabi Saag Chicken",
    "native": "Saagwala Murgh",
    "subtitle": "Chicken cooked in a spinach and mustard-greens gravy with garlic and garam masala.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 2,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Saagwala murgh pairs tender chicken with leafy greens. The greens are cooked and ground before being simmered with the chicken, keeping their colour and earthy taste.",
    "tags": [
      "Saagwala",
      "Spinach",
      "Greens"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "300 g spinach",
          "100 g mustard greens, optional",
          "3 tbsp ghee",
          "1 onion, chopped",
          "1 tomato, chopped",
          "1 tsp cumin seeds",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "½ tsp garam masala",
          "150 ml hot water",
          "4 garlic cloves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Blanch greens",
        "body": "Wash greens well. Blanch for 2 minutes, drain and grind coarsely."
      },
      {
        "title": "Temper",
        "body": "Heat ghee and cumin. Add chopped garlic and onion; fry till golden."
      },
      {
        "title": "Cook tomato",
        "body": "Add tomato, chilli and coriander powders. Cook till thick."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric. Fry for 7 minutes."
      },
      {
        "title": "Add greens",
        "body": "Add ground greens and hot water. Cover and cook for 20–25 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Add garam masala and adjust salt. Serve hot."
      }
    ],
    "notes": [
      "Spinach alone works when mustard greens are unavailable.",
      "Do not overcook greens after grinding or the colour dulls.",
      "Use bone-in pieces for a richer gravy."
    ],
    "serveWith": [
      "Makki di roti",
      "Steamed rice",
      "Onion salad"
    ]
  },
  {
    "slug": "gujarati-sali-marghi",
    "name": "Parsi Sali Marghi",
    "native": "Sali Marghi",
    "subtitle": "A gently spiced chicken gravy topped with crisp potato straws.",
    "region": "Gujarat",
    "origin": "Parsi community cuisine, Gujarat",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Sali marghi is a Parsi community dish popular in parts of Gujarat and Mumbai. It combines a gently spiced chicken gravy with crisp potato straws. This version keeps the gravy tangy and mildly sweet, with the sali added just before serving.",
    "tags": [
      "Parsi",
      "Sali marghi",
      "Crisp potato"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, medium pieces",
          "1 tsp ginger-garlic paste",
          "½ tsp turmeric",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp oil",
          "2 onions, sliced",
          "2 tomatoes, chopped",
          "1 tsp cumin",
          "1 tsp coriander powder",
          "½ tsp chilli powder",
          "1 tbsp vinegar",
          "1 tsp jaggery",
          "250 ml hot water",
          "2 potatoes, cut into thin straws",
          "Oil for frying",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare sali",
        "body": "Wash potato straws, dry fully and fry in batches till crisp. Drain."
      },
      {
        "title": "Fry onion",
        "body": "Heat oil and fry onion till golden. Add cumin and ginger-garlic paste."
      },
      {
        "title": "Cook tomato",
        "body": "Add tomato, chilli, coriander and turmeric. Cook till oil shows at the edges."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and salt. Fry for 7 minutes till coated."
      },
      {
        "title": "Simmer",
        "body": "Add hot water and cover. Cook 22–25 minutes till chicken is cooked."
      },
      {
        "title": "Balance and serve",
        "body": "Stir in vinegar and jaggery. Top with crisp sali and coriander at the table."
      }
    ],
    "notes": [
      "Keep potato straws crisp by adding only at serving time.",
      "Balance vinegar and jaggery gradually.",
      "This is a Parsi community dish, not a generic Gujarati curry."
    ],
    "serveWith": [
      "Steamed rice",
      "Bread rolls",
      "Salad"
    ]
  },
  {
    "slug": "lucknowi-chicken-yakhni-pulao",
    "name": "Lucknowi Chicken Yakhni Pulao",
    "native": "Murgh Yakhni Pulao",
    "subtitle": "Fragrant basmati rice cooked in a clear chicken stock with whole spices.",
    "region": "Awadh",
    "origin": "Lucknow, Uttar Pradesh",
    "heat": 1,
    "prep": 30,
    "cook": 50,
    "serves": 4,
    "variant": "rice",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Yakhni pulao begins with a stock made by simmering chicken and whole spices. The rice is then cooked in the strained stock, taking on flavour without the layered masala of biryani.",
    "tags": [
      "Awadhi",
      "Yakhni stock",
      "Basmati"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "600 g chicken, bone-in",
          "300 g basmati rice, rinsed",
          "150 g curd",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "1 onion, sliced",
          "1 tbsp ginger, sliced",
          "6 garlic cloves",
          "1 bay leaf",
          "4 green cardamom",
          "1 black cardamom",
          "1 cinnamon stick",
          "6 peppercorns",
          "2 tbsp ghee",
          "600 ml chicken stock",
          "Mint leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Make yakhni",
        "body": "Simmer chicken with ginger, garlic, whole spices and water for 25 minutes. Strain and keep 600 ml stock."
      },
      {
        "title": "Marinate briefly",
        "body": "Mix chicken with whisked curd and salt while the rice soaks."
      },
      {
        "title": "Fry onion",
        "body": "Heat ghee and fry onion till golden. Add chicken and cook for 5 minutes."
      },
      {
        "title": "Add rice",
        "body": "Add drained rice and stir gently for a minute."
      },
      {
        "title": "Cook pulao",
        "body": "Add hot stock. Cover and cook on low for 15–18 minutes till rice is done."
      },
      {
        "title": "Rest",
        "body": "Switch off heat and rest covered for 10 minutes. Fluff gently and garnish with mint."
      }
    ],
    "notes": [
      "Keep stock clear and strain out whole spices.",
      "Use the stock-to-rice ratio suited to your basmati brand.",
      "Do not stir repeatedly once rice is added."
    ],
    "serveWith": [
      "Raita",
      "Sheermal",
      "Kachumber"
    ]
  },
  {
    "slug": "kolkata-chicken-chaap",
    "name": "Kolkata Chicken Chaap",
    "native": "Kolkata Murgh Chaap",
    "subtitle": "Slow-cooked chicken leg in a rich poppy-seed, cashew and aromatic spice sauce.",
    "region": "West Bengal",
    "origin": "Kolkata, West Bengal",
    "heat": 2,
    "prep": 25,
    "cook": 50,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kolkata-style chicken chaap is inspired by the rich Mughlai restaurant preparation traditionally made with large cuts and a nutty, aromatic paste. This home version uses chicken leg quarters and a slow covered cook.",
    "tags": [
      "Kolkata",
      "Mughlai",
      "Poppy seed"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "4 chicken leg quarters, skin removed",
          "150 g curd",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp poppy seeds",
          "30 g cashews",
          "1 onion, fried and ground",
          "3 tbsp ghee",
          "1 bay leaf",
          "4 green cardamom",
          "½ tsp mace powder",
          "½ tsp chilli powder",
          "200 ml hot water",
          "1 tbsp fresh cream"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with curd, ginger-garlic paste and salt. Keep chilled for 1 hour."
      },
      {
        "title": "Make paste",
        "body": "Soak poppy seeds and cashews. Grind with fried onion to a smooth paste."
      },
      {
        "title": "Fry spices",
        "body": "Heat ghee. Add bay leaf and cardamom."
      },
      {
        "title": "Brown chicken",
        "body": "Add chicken and fry on medium heat till lightly golden."
      },
      {
        "title": "Cook sauce",
        "body": "Add nut paste, mace and chilli. Stir and add hot water."
      },
      {
        "title": "Slow cook",
        "body": "Cover and cook 30–35 minutes till chicken is tender. Finish with cream on low heat."
      }
    ],
    "notes": [
      "Soak poppy seeds long enough to grind smoothly.",
      "Keep heat low after adding nut paste to prevent sticking.",
      "Check the thickest part of the leg is fully cooked."
    ],
    "serveWith": [
      "Roomali roti",
      "Basmati pulao",
      "Onion salad"
    ]
  },
  {
    "slug": "bengali-murgir-jhol",
    "name": "Bengali Murgir Jhol",
    "native": "Murgir Jhol",
    "subtitle": "A light mustard-oil chicken curry with potatoes, ginger and a thin spiced broth.",
    "region": "West Bengal",
    "origin": "Bengal",
    "heat": 2,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Murgir jhol is a lighter Bengali chicken curry, often made with potatoes and a thin, fragrant gravy. Unlike kosha, it is not fried down to a dark paste. Let the potatoes soften in the broth and keep the spices simple.",
    "tags": [
      "Bengali",
      "Light gravy",
      "Potato"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "2 potatoes, quartered",
          "1 tsp turmeric",
          "1 tbsp ginger paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "1 bay leaf",
          "2 green cardamom",
          "1 tsp cumin seeds",
          "2 onions, sliced",
          "1 tomato, chopped",
          "1 tsp cumin powder",
          "1 tsp coriander powder",
          "300 ml hot water",
          "2 green chillies"
        ]
      }
    ],
    "steps": [
      {
        "title": "Marinate",
        "body": "Mix chicken with turmeric, ginger and salt. Keep aside for 20 minutes."
      },
      {
        "title": "Fry potatoes",
        "body": "Heat mustard oil and fry potatoes till lightly golden. Remove."
      },
      {
        "title": "Fry onion",
        "body": "Add bay leaf, cardamom, cumin and onions. Fry till golden."
      },
      {
        "title": "Add tomato",
        "body": "Add tomato and powdered spices. Cook till soft."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and fry for 6 minutes."
      },
      {
        "title": "Simmer",
        "body": "Return potatoes, add hot water and green chillies. Cover and cook 22–25 minutes. Finish with coriander."
      }
    ],
    "notes": [
      "Use waxy potatoes so they hold shape.",
      "Keep the gravy thin; it is meant to be eaten with rice.",
      "Do not confuse jhol with the darker kosha preparation."
    ],
    "serveWith": [
      "Steamed rice",
      "Masoor dal",
      "Lemon"
    ]
  },
  {
    "slug": "chhattisgarhi-chicken-saag",
    "name": "Chhattisgarhi Chicken Saag",
    "native": "Kukad Saag Inspired",
    "subtitle": "A homestyle chicken and leafy greens curry with garlic and local-style tempering.",
    "region": "Chhattisgarh",
    "origin": "Chhattisgarh",
    "heat": 2,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "This recipe is inspired by Chhattisgarhi greens-based home cooking, adapted with chicken. Use seasonal saag and a simple garlic masala. The result is a hearty curry that works with rice or millet roti.",
    "tags": [
      "Central India",
      "Saag",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "250 g seasonal leafy greens",
          "1 tsp turmeric",
          "1 tbsp garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp oil",
          "1 onion, chopped",
          "2 tomatoes, chopped",
          "1 tsp cumin seeds",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Wash greens",
        "body": "Wash leaves thoroughly and chop. Blanch briefly if fibrous."
      },
      {
        "title": "Temper",
        "body": "Heat oil and cumin. Add onion and fry till soft."
      },
      {
        "title": "Cook tomato",
        "body": "Add garlic, tomato, chilli and coriander powder. Cook till thick."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric. Fry for 7 minutes."
      },
      {
        "title": "Simmer with greens",
        "body": "Add greens and hot water. Cover and cook 22–25 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Adjust salt and garnish with coriander."
      }
    ],
    "notes": [
      "Use seasonal greens available locally.",
      "If greens are bitter, blanch and drain before adding.",
      "This is a household-style adaptation, not a single fixed regional formula."
    ],
    "serveWith": [
      "Steamed rice",
      "Millet roti",
      "Cucumber salad"
    ]
  },
  {
    "slug": "bhojpuri-achari-chicken",
    "name": "Bhojpuri Achari Chicken",
    "native": "Achari Murgh",
    "subtitle": "A sharp mustard-seed and fennel chicken curry with a pickle-style masala.",
    "region": "Bihar",
    "origin": "Eastern Uttar Pradesh and Bihar",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Achari chicken borrows the spice profile of Indian pickles: mustard, fennel, nigella and fenugreek. This home-style version is associated with North Indian cooking and can be adjusted to the pickle spices in your pantry.",
    "tags": [
      "Achari masala",
      "Mustard",
      "Tangy"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp mustard oil",
          "1 tsp mustard seeds",
          "1 tsp fennel seeds",
          "½ tsp nigella seeds",
          "¼ tsp fenugreek seeds",
          "2 onions, sliced",
          "2 tomatoes, chopped",
          "1 tsp chilli powder",
          "1 tsp coriander powder",
          "1 tbsp lemon juice",
          "250 ml hot water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Temper pickle spices",
        "body": "Heat mustard oil and add mustard, fennel, nigella and fenugreek. Let them crackle without burning."
      },
      {
        "title": "Fry onions",
        "body": "Add onions and fry till golden. Add ginger-garlic paste."
      },
      {
        "title": "Cook masala",
        "body": "Add tomato, chilli and coriander. Cook till thick."
      },
      {
        "title": "Fry chicken",
        "body": "Add chicken and turmeric and fry for 7 minutes."
      },
      {
        "title": "Simmer",
        "body": "Add hot water, cover and cook 22–25 minutes till chicken is done."
      },
      {
        "title": "Finish",
        "body": "Add lemon juice, adjust salt and serve."
      }
    ],
    "notes": [
      "Fenugreek turns bitter quickly; keep the heat moderate.",
      "Add lemon at the end so the sourness stays fresh.",
      "Use mustard oil for the sharp pickle aroma."
    ],
    "serveWith": [
      "Paratha",
      "Steamed rice",
      "Onion salad"
    ]
  },
  {
    "slug": "pallipalayam-chicken",
    "name": "Pallipalayam Chicken",
    "native": "Pallipalayam Kozhi",
    "subtitle": "A dry Tamil Nadu chicken fry with shallots, dried red chillies and coconut pieces.",
    "region": "Tamil Nadu",
    "origin": "Erode district, Tamil Nadu",
    "heat": 3,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Pallipalayam chicken is a dry preparation known for its simple combination of shallots, dried red chillies and coconut pieces. It does not need a thick tomato gravy; the flavour comes from slow frying of small onions and spice.",
    "tags": [
      "Kongu region",
      "Dry fry",
      "Shallots"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, small pieces",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "3 tbsp sesame oil",
          "20 shallots, peeled",
          "10 dried red chillies",
          "½ cup fresh coconut pieces",
          "2 sprigs curry leaves",
          "½ tsp fennel seeds",
          "100 ml water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Crush chillies",
        "body": "Break dried chillies into pieces and remove some seeds if you want less heat."
      },
      {
        "title": "Fry shallots",
        "body": "Heat sesame oil. Fry shallots till golden at the edges."
      },
      {
        "title": "Temper",
        "body": "Add fennel and curry leaves, then the dried chillies."
      },
      {
        "title": "Add chicken",
        "body": "Add ginger-garlic paste and chicken with turmeric and salt. Fry for 8 minutes."
      },
      {
        "title": "Cook",
        "body": "Add water, cover and cook 18 minutes till chicken is cooked through."
      },
      {
        "title": "Roast",
        "body": "Remove lid. Add coconut pieces and fry till the masala is dry and coats chicken."
      }
    ],
    "notes": [
      "Use small coconut pieces rather than grated coconut for the signature bite.",
      "Keep the flame moderate after adding dried chillies.",
      "Use chicken with bone for deeper flavour."
    ],
    "serveWith": [
      "Rasam rice",
      "Parotta",
      "Curd rice"
    ]
  },
  {
    "slug": "coorgi-chicken-curry",
    "name": "Coorgi Chicken Curry",
    "native": "Koli Curry",
    "subtitle": "A Kodava-style chicken curry with roasted spices, pepper and a tart tamarind finish.",
    "region": "Karnataka",
    "origin": "Kodagu, Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Kodava chicken curry often combines roasted spices, pepper and local souring agents. This home version uses a measured tamarind finish, with the spice paste providing depth and a gentle roasted aroma.",
    "tags": [
      "Coorgi",
      "Kodava",
      "Pepper"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken, bone-in",
          "1 tsp turmeric",
          "1 tbsp ginger-garlic paste",
          "1 tsp salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "2 tbsp oil",
          "1 onion, sliced",
          "1 tbsp coriander seeds",
          "1 tsp cumin",
          "1 tsp black pepper",
          "4 dried red chillies",
          "½ tsp mustard seeds",
          "Small ball tamarind",
          "250 ml hot water",
          "Curry leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Roast spices",
        "body": "Dry roast coriander, cumin, pepper and chillies till fragrant. Grind coarsely."
      },
      {
        "title": "Fry onion",
        "body": "Heat oil. Fry onion till golden and add mustard and curry leaves."
      },
      {
        "title": "Fry chicken",
        "body": "Add ginger-garlic paste and chicken. Fry for 7 minutes."
      },
      {
        "title": "Add spices",
        "body": "Add ground masala and turmeric. Fry till aromatic."
      },
      {
        "title": "Simmer",
        "body": "Add tamarind water and hot water. Cover and cook for 25 minutes till tender."
      },
      {
        "title": "Finish",
        "body": "Reduce gravy as desired and adjust salt."
      }
    ],
    "notes": [
      "Tamarind quantity varies; add strained water gradually.",
      "Use fresh black pepper for a warm finish.",
      "Regional styles vary between Kodava homes."
    ],
    "serveWith": [
      "Akki roti",
      "Steamed rice",
      "Kadambuttu"
    ]
  },
  {
    "slug": "rajasthani-laal-murgh",
    "name": "Rajasthani Laal Maas Style Chicken",
    "native": "Laal Murgh",
    "subtitle": "A fiery red chicken curry inspired by Rajasthan's chilli-forward laal maas tradition.",
    "region": "Rajasthan",
    "origin": "Rajasthan",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Laal maas is traditionally a mutton dish. This is explicitly a chicken adaptation inspired by its Mathania chilli, yoghurt and garlic profile, rather than a claim that the classic is chicken-based.",
    "tags": [
      "Rajasthani inspired",
      "Mathania chilli",
      "Adaptation"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g curd",
          "1 tbsp garlic paste",
          "1 tsp salt",
          "1 tsp turmeric"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "4 tbsp mustard oil",
          "8 Mathania or dried red chillies",
          "1 tsp cumin seeds",
          "4 cloves",
          "1 cinnamon stick",
          "2 onions, sliced",
          "200 ml hot water",
          "Coriander leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Soak chillies",
        "body": "Soak chillies in hot water for 15 minutes and grind to a paste."
      },
      {
        "title": "Temper",
        "body": "Heat mustard oil and add cumin, cloves and cinnamon."
      },
      {
        "title": "Fry onions",
        "body": "Add onions and fry till deep golden. Add garlic paste."
      },
      {
        "title": "Cook chicken",
        "body": "Add chicken, turmeric and salt. Fry till coated."
      },
      {
        "title": "Add curd and chilli",
        "body": "Lower heat, add whisked curd slowly, then chilli paste."
      },
      {
        "title": "Simmer",
        "body": "Add hot water and cover for 25 minutes till chicken is fully cooked. Adjust salt."
      }
    ],
    "notes": [
      "Use Mathania chillies when available for regional character.",
      "Traditional laal maas is made with meat, commonly mutton; this is a chicken adaptation.",
      "Adjust chilli quantity to your tolerance."
    ],
    "serveWith": [
      "Bajra roti",
      "Steamed rice",
      "Lahsun chutney"
    ]
  },
  {
    "slug": "hyderabadi-dum-ka-murgh",
    "name": "Hyderabadi Dum Ka Murgh",
    "native": "Dum Ka Murgh",
    "subtitle": "Yoghurt, browned onion, mint and whole spices.",
    "region": "Telangana",
    "origin": "Hyderabad",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Yoghurt, browned onion, mint and whole spices. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Telangana",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "150 g curd",
          "ginger-garlic paste",
          "chilli powder",
          "turmeric",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "oil",
          "fried onions",
          "cardamom",
          "black cardamom",
          "cinnamon",
          "cloves",
          "mint",
          "coriander",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with curd, ginger-garlic, chilli, turmeric and salt for 30 minutes."
      },
      {
        "title": "Cook",
        "body": "Temper whole spices in oil; add chicken and marinade. Add fried onion, mint and coriander."
      },
      {
        "title": "Finish",
        "body": "Cover tightly and cook on low for 30–35 minutes, stirring once. Check chicken is fully cooked."
      }
    ],
    "notes": [
      "Use a heavy pot and low flame; dum cooking releases moisture.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Bagara rice",
      "Roomali roti"
    ]
  },
  {
    "slug": "telangana-natu-kodi-pulusu",
    "name": "Telangana Natu Kodi Pulusu",
    "native": "Natu Kodi Pulusu",
    "subtitle": "Country chicken, tamarind and roasted sesame masala.",
    "region": "Telangana",
    "origin": "Telangana",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Country chicken, tamarind and roasted sesame masala. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Telangana",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g country chicken",
          "turmeric",
          "ginger-garlic paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "oil",
          "onion",
          "sesame",
          "coriander seeds",
          "dried chillies",
          "cumin",
          "tamarind",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Roast sesame, coriander, cumin and chillies; grind to a paste. Soak tamarind in warm water."
      },
      {
        "title": "Cook",
        "body": "Fry onions till golden; add ginger-garlic and chicken. Fry for 8 minutes."
      },
      {
        "title": "Finish",
        "body": "Add spice paste, strained tamarind water and hot water. Cover and simmer 35–45 minutes till tender."
      }
    ],
    "notes": [
      "Country chicken needs longer cooking than broiler chicken.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Rice",
      "Jonna roti"
    ]
  },
  {
    "slug": "tamil-chettinad-kari",
    "name": "Chettinad Chicken Curry",
    "native": "Kozhi Kuzhambu",
    "subtitle": "Roasted coconut, fennel, pepper and dried chilli.",
    "region": "Tamil Nadu",
    "origin": "Chettinad",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Roasted coconut, fennel, pepper and dried chilli. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Tamil Nadu",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "turmeric",
          "ginger-garlic paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "oil",
          "onion",
          "tomato",
          "coconut",
          "coriander seeds",
          "fennel",
          "pepper",
          "dried chillies",
          "cloves",
          "cinnamon",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Roast coconut, coriander, fennel, pepper, chillies and whole spices separately; grind with water."
      },
      {
        "title": "Cook",
        "body": "Fry onion, ginger-garlic and tomato. Add chicken, turmeric and salt; fry for 7 minutes."
      },
      {
        "title": "Finish",
        "body": "Add ground masala and water. Cover and simmer 22–25 minutes until chicken is cooked."
      }
    ],
    "notes": [
      "Roast spices without burning; freshly ground pepper is important.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Idiyappam",
      "Dosa"
    ]
  },
  {
    "slug": "tamil-milagu-kozhi",
    "name": "Tamil Pepper Chicken",
    "native": "Milagu Kozhi",
    "subtitle": "Black pepper, shallots, curry leaves and fennel.",
    "region": "Tamil Nadu",
    "origin": "Tamil Nadu",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Black pepper, shallots, curry leaves and fennel. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Tamil Nadu",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "ginger-garlic paste",
          "turmeric",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "sesame oil",
          "shallots",
          "curry leaves",
          "crushed pepper",
          "fennel",
          "cumin",
          "tomato",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Heat oil and temper fennel, cumin and curry leaves. Add shallots and fry till soft."
      },
      {
        "title": "Cook",
        "body": "Add ginger-garlic, tomato, chicken, turmeric and salt; fry for 6 minutes."
      },
      {
        "title": "Finish",
        "body": "Add a little water, cover and cook 18–20 minutes. Add pepper and roast till coated."
      }
    ],
    "notes": [
      "Crush pepper just before cooking and add near the end.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Rasam rice",
      "Dosa"
    ]
  },
  {
    "slug": "kerala-chicken-stew",
    "name": "Kerala Chicken Stew",
    "native": "Nadan Kozhi Ishtu",
    "subtitle": "Coconut milk, potato, pepper and whole spices.",
    "region": "Kerala",
    "origin": "Kerala",
    "heat": 1,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Coconut milk, potato, pepper and whole spices. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Kerala",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "700 g chicken",
          "potato",
          "carrot",
          "ginger",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "coconut oil",
          "onion",
          "green chillies",
          "cinnamon",
          "cloves",
          "cardamom",
          "curry leaves",
          "thin coconut milk",
          "thick coconut milk",
          "pepper"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Temper whole spices in coconut oil. Add onion, ginger, chillies and curry leaves; cook till soft."
      },
      {
        "title": "Cook",
        "body": "Add chicken, potato, carrot and salt. Pour in thin coconut milk and simmer 20 minutes."
      },
      {
        "title": "Finish",
        "body": "Add thick coconut milk and pepper; warm gently without boiling."
      }
    ],
    "notes": [
      "Do not boil after adding thick coconut milk.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Appam",
      "Idiyappam"
    ]
  },
  {
    "slug": "goan-chicken-cafreal",
    "name": "Goan Chicken Cafreal",
    "native": "Galinha Cafreal",
    "subtitle": "Green masala of coriander, mint, green chilli and warm spices.",
    "region": "Goa",
    "origin": "Goa",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "grill",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Green masala of coriander, mint, green chilli and warm spices. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Goa",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken legs or thighs",
          "lemon juice",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "coriander",
          "mint",
          "green chillies",
          "ginger",
          "garlic",
          "cumin",
          "pepper",
          "cloves",
          "cinnamon",
          "vinegar",
          "oil",
          "turmeric"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Grind herbs, chillies, ginger, garlic, spices, vinegar and turmeric to a paste."
      },
      {
        "title": "Cook",
        "body": "Make shallow cuts in chicken and coat with paste, salt and lemon; marinate 2 hours."
      },
      {
        "title": "Finish",
        "body": "Sear chicken in oil; cover and cook on low, turning, till fully cooked. Remove lid and char lightly."
      }
    ],
    "notes": [
      "Drain herbs well so the marinade stays thick.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Poi",
      "Goan rice"
    ]
  },
  {
    "slug": "bengali-murgir-kosha",
    "name": "Bengali Chicken Kosha",
    "native": "Murgir Kosha",
    "subtitle": "Mustard oil, deeply browned onion and slow-reduced masala.",
    "region": "West Bengal",
    "origin": "Bengal",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Mustard oil, deeply browned onion and slow-reduced masala. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "West Bengal",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "turmeric",
          "ginger paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "mustard oil",
          "onion",
          "tomato",
          "cumin",
          "coriander powder",
          "chilli powder",
          "bay leaf",
          "cardamom",
          "cinnamon",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with turmeric, ginger and salt for 20 minutes."
      },
      {
        "title": "Cook",
        "body": "Temper whole spices in mustard oil; fry onions slowly till deep golden. Add tomato and powdered spices."
      },
      {
        "title": "Finish",
        "body": "Add chicken and fry for 8–10 minutes. Add water, cover and cook till tender, then reduce gravy."
      }
    ],
    "notes": [
      "Do not rush onion browning; kosha gravy should be thick.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Steamed rice",
      "Luchi"
    ]
  },
  {
    "slug": "punjabi-dhaba-murgh",
    "name": "Punjabi Dhaba Chicken Curry",
    "native": "Dhaba Murgh",
    "subtitle": "Browned onions, tomato, ginger and dhaba-style masala.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Browned onions, tomato, ginger and dhaba-style masala. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Punjab",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g bone-in chicken",
          "turmeric",
          "ginger-garlic paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "oil",
          "onions",
          "tomatoes",
          "cumin",
          "coriander powder",
          "chilli powder",
          "cumin powder",
          "garam masala",
          "ginger",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Heat oil and cumin; fry onions till deep golden. Add ginger-garlic and tomatoes; cook till oil separates."
      },
      {
        "title": "Cook",
        "body": "Add powdered spices and chicken; fry for 8 minutes."
      },
      {
        "title": "Finish",
        "body": "Add water, cover and cook 22–25 minutes; finish with garam masala and ginger."
      }
    ],
    "notes": [
      "Use bone-in chicken and fry the masala patiently.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Tandoori roti",
      "Jeera rice"
    ]
  },
  {
    "slug": "awadhi-dum-korma",
    "name": "Awadhi Chicken Korma",
    "native": "Awadhi Murgh Korma",
    "subtitle": "Fried onion, yoghurt, saffron and gentle whole spices.",
    "region": "Uttar Pradesh",
    "origin": "Lucknow",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Fried onion, yoghurt, saffron and gentle whole spices. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Uttar Pradesh",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "curd",
          "ginger-garlic paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "ghee",
          "fried onions",
          "bay leaf",
          "green cardamom",
          "black cardamom",
          "cinnamon",
          "cloves",
          "coriander powder",
          "white pepper",
          "saffron milk",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with curd, ginger-garlic and salt for 30 minutes. Temper whole spices in ghee."
      },
      {
        "title": "Cook",
        "body": "Add chicken and marinade; fry gently. Add crushed fried onions, coriander and white pepper."
      },
      {
        "title": "Finish",
        "body": "Add water, cover and simmer 22–25 minutes; finish with saffron milk."
      }
    ],
    "notes": [
      "Add curd over low heat and avoid burning fried onions.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Sheermal",
      "Roomali roti"
    ]
  },
  {
    "slug": "odia-kukuda-kasa",
    "name": "Odia Chicken Kasa",
    "native": "Kukuda Kasa",
    "subtitle": "Mustard oil, browned onions and roasted coriander.",
    "region": "Odisha",
    "origin": "Odisha",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Mustard oil, browned onions and roasted coriander. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Odisha",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "turmeric",
          "ginger-garlic paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "mustard oil",
          "onions",
          "tomato",
          "cumin",
          "roasted coriander seeds",
          "chilli powder",
          "bay leaf",
          "cloves",
          "cinnamon",
          "water"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with turmeric, ginger-garlic and salt. Temper whole spices in mustard oil; fry onions till deep golden."
      },
      {
        "title": "Cook",
        "body": "Add tomato, ground coriander and chilli; cook till oil separates. Add chicken and fry for 8 minutes."
      },
      {
        "title": "Finish",
        "body": "Add water, cover and cook till tender; remove lid and reduce to thick kasa."
      }
    ],
    "notes": [
      "Reduce slowly; this home-style preparation varies across Odisha.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Steamed rice",
      "Pakhala"
    ]
  },
  {
    "slug": "mangalorean-kori-ghee-roast",
    "name": "Mangalorean Chicken Ghee Roast",
    "native": "Kori Ghee Roast",
    "subtitle": "Byadgi chilli, tamarind and roasted spices cooked in ghee.",
    "region": "Karnataka",
    "origin": "Mangaluru",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Byadgi chilli, tamarind and roasted spices cooked in ghee. This home-kitchen version uses accessible ingredients and a practical method. Cook until the thickest chicken piece is fully done.",
    "tags": [
      "Karnataka",
      "Indian chicken",
      "Home style"
    ],
    "ingredients": [
      {
        "title": "For the chicken",
        "items": [
          "800 g chicken",
          "curd",
          "ginger-garlic paste",
          "salt"
        ]
      },
      {
        "title": "For the masala",
        "items": [
          "ghee",
          "Byadgi chillies",
          "cumin",
          "coriander",
          "fenugreek",
          "cloves",
          "cinnamon",
          "tamarind",
          "jaggery",
          "curry leaves"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with curd, ginger-garlic and salt for 30 minutes. Soak chillies; roast spices and grind with tamarind."
      },
      {
        "title": "Cook",
        "body": "Fry curry leaves in ghee, add masala and cook till fragrant. Add chicken and marinade."
      },
      {
        "title": "Finish",
        "body": "Cover and cook 20–25 minutes till cooked; add jaggery and roast uncovered till glossy."
      }
    ],
    "notes": [
      "Use Byadgi chillies for colour; stir during final roast.",
      "Adjust chilli, salt and liquid to suit your ingredients and chicken cut.",
      "Check the thickest piece is fully cooked before serving."
    ],
    "serveWith": [
      "Neer dosa",
      "Ghee rice"
    ]
  },
  {
    "slug": "rajasthani-laal-maas-style-chicken",
    "name": "Rajasthani Laal Maas Chicken",
    "native": "Laal Maas Murgh",
    "subtitle": "Rajasthani Laal Maas Chicken — Mathania chilli, mustard oil and whole spices give this chicken adaptation a bold red gravy.",
    "region": "Rajasthan",
    "origin": "Rajasthan",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Mathania chilli, mustard oil and whole spices give this chicken adaptation a bold red gravy.",
    "tags": [
      "Mathania chilli",
      "Mustard oil",
      "Slow cooked"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "2 onions",
          "6 dried red chillies",
          "1 tbsp coriander seeds",
          "1 tsp cumin"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "4 cloves",
          "1 cinnamon",
          "200 g curd",
          "mustard oil",
          "hot water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Toast the chillies",
                  "body": "Soak the Mathania or Kashmiri chillies in hot water for 15 minutes. Drain and grind with garlic, cumin and a splash of water to a smooth red paste."
            },
            {
                  "title": "Season the meat",
                  "body": "Rub the chicken with yoghurt, turmeric and salt. Rest for 30 minutes while you prepare the onions and spices."
            },
            {
                  "title": "Build the laal masala",
                  "body": "Heat mustard oil until it just smokes, then cool slightly. Add bay leaf, cloves and cardamom. Fry sliced onions until deep golden, add the chilli-garlic paste and cook for 3–4 minutes."
            },
            {
                  "title": "Braise the chicken",
                  "body": "Add chicken and sear for 7–8 minutes, turning to coat every piece. Stir in coriander powder and yoghurt marinade, then add 250 ml hot water. Cover and simmer 20–25 minutes."
            },
            {
                  "title": "Finish and check",
                  "body": "Uncover and reduce the gravy until glossy. Check the thickest chicken piece reaches 74°C / 165°F; adjust salt and finish with a little ghee."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Bajra roti",
      "Rice",
      "Onion"
    ]
  },
  {
    "slug": "rajasthani-safed-maas-chicken",
    "name": "Rajasthani Safed Maas Chicken",
    "native": "Safed Murgh",
    "subtitle": "Rajasthani Safed Maas Chicken — A pale, mild curry with cashew, curd, cardamom and white pepper.",
    "region": "Rajasthan",
    "origin": "Rajasthan",
    "heat": 1,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A pale, mild curry with cashew, curd, cardamom and white pepper.",
    "tags": [
      "Mild",
      "Cashew gravy",
      "Festive"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "150 g curd",
          "15 cashews",
          "2 tbsp ghee",
          "1 onion"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "4 cardamom",
          "4 cloves",
          "1 cinnamon",
          "100 ml cream",
          "milk"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Marinate gently",
                  "body": "Coat chicken with whisked yoghurt, ginger-garlic paste, white pepper and salt. Refrigerate for 30 minutes."
            },
            {
                  "title": "Make the pale nut paste",
                  "body": "Soak almonds and cashews in hot water for 15 minutes. Peel almonds, then grind both nuts with melon seeds and a little milk until completely smooth."
            },
            {
                  "title": "Temper whole spices",
                  "body": "Warm ghee in a heavy pot. Add green cardamom, cloves, cinnamon and bay leaf; fry for 30 seconds. Add sliced onions and cook until soft and translucent, not brown."
            },
            {
                  "title": "Cook the chicken in yoghurt",
                  "body": "Add chicken and marinade. Cook on medium-low heat for 8 minutes, stirring so the yoghurt does not catch. Add nut paste and green chillies."
            },
            {
                  "title": "Simmer to tenderness",
                  "body": "Add 150–200 ml hot water and simmer covered for 20–25 minutes. Check 74°C / 165°F at the thickest piece, then finish with cream and a pinch of mace."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Roomali roti",
      "Jeera rice",
      "Cucumber salad"
    ]
  },
  {
    "slug": "kashmiri-murgh-yakhni",
    "name": "Kashmiri Chicken Yakhni",
    "native": "Murgh Yakhni",
    "subtitle": "Kashmiri Chicken Yakhni — Chicken in a delicate curd broth scented with fennel and dry ginger.",
    "region": "Kashmir",
    "origin": "Kashmir",
    "heat": 1,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Chicken in a delicate curd broth scented with fennel and dry ginger.",
    "tags": [
      "Curd broth",
      "Fennel",
      "Gentle spice"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "250 g curd",
          "1 tsp fennel powder",
          "½ tsp dry ginger",
          "1 black cardamom"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "4 green cardamom",
          "1 cinnamon",
          "3 cloves",
          "asafoetida",
          "mustard oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the spice bundle",
                  "body": "Tie fennel seeds, dry ginger, green cardamom, black cardamom, cloves and cinnamon in muslin. Whisk yoghurt with fennel powder, dry ginger powder and a pinch of asafoetida."
            },
            {
                  "title": "Par-cook the chicken",
                  "body": "Heat mustard oil in a deep pot until it just smokes, then lower the heat. Add chicken pieces and turn for 5–6 minutes until lightly sealed; remove and set aside."
            },
            {
                  "title": "Infuse the stock",
                  "body": "Add the spice bundle and 500 ml water to the pot. Simmer for 8 minutes, then return the chicken and cook gently for 12 minutes."
            },
            {
                  "title": "Add the yoghurt mixture",
                  "body": "Lower the flame. Whisk a ladle of hot stock into the yoghurt mixture, then pour it into the pot in a thin stream, stirring continuously. Keep below a hard boil."
            },
            {
                  "title": "Finish the yakhni",
                  "body": "Simmer uncovered until the chicken is tender, about 8–10 minutes more. Check 74°C / 165°F at the thickest piece, adjust salt and finish with crushed dried mint."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Rice",
      "Kashmiri naan",
      "Turnip salad"
    ]
  },
  {
    "slug": "bihari-chicken-masala",
    "name": "Bihari Chicken Masala",
    "native": "Bihari Murgh Masala",
    "subtitle": "Bihari Chicken Masala — A homestyle mustard-oil curry with garlic, cumin and roasted tomato.",
    "region": "Bihar",
    "origin": "Bihar",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A homestyle mustard-oil curry with garlic, cumin and roasted tomato.",
    "tags": [
      "Mustard oil",
      "Garlic",
      "Homestyle"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "1 tbsp garlic paste",
          "2 onions",
          "2 roasted tomatoes",
          "1 tsp cumin"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 tbsp coriander powder",
          "½ tsp pepper",
          "mustard oil",
          "hot water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Season the chicken",
                  "body": "Mix chicken with mustard oil, turmeric, chilli powder, crushed garlic, salt and a squeeze of lemon. Rest for 30 minutes."
            },
            {
                  "title": "Prepare the mustard-garlic base",
                  "body": "Pound garlic, ginger, cumin and coriander coarsely. Heat mustard oil until it just smokes, lower the flame and add the panch phoron."
            },
            {
                  "title": "Brown the onions",
                  "body": "Add sliced onions and fry until deep golden. Add the pounded spice mixture and cook for 2 minutes until aromatic."
            },
            {
                  "title": "Cook the chicken",
                  "body": "Add chicken and sear on high heat for 6–8 minutes. Add chopped tomatoes and cook until they collapse; sprinkle in coriander powder and a little hot water."
            },
            {
                  "title": "Reduce and finish",
                  "body": "Cover and simmer for 20–25 minutes, stirring occasionally. Reduce the gravy to a thick masala, check 74°C / 165°F internally and finish with green chilli and coriander."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Litti",
      "Rice",
      "Onion and green chilli"
    ]
  },
  {
    "slug": "bengali-chicken-jhol",
    "name": "Bengali Chicken Jhol",
    "native": "Murgir Jhol",
    "subtitle": "Bengali Chicken Jhol — A light Bengali curry with potatoes, whole garam masala and ginger.",
    "region": "West Bengal",
    "origin": "West Bengal",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A light Bengali curry with potatoes, whole garam masala and ginger.",
    "tags": [
      "Light gravy",
      "Potato",
      "Mustard oil"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "3 potatoes",
          "150 g curd",
          "2 onions",
          "1 tomato"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 bay leaf",
          "4 cardamom",
          "1 cinnamon",
          "mustard oil",
          "hot water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the potatoes",
                  "body": "Peel and halve the potatoes. Rub with turmeric and salt, then shallow-fry in mustard oil until golden on the outside; remove."
            },
            {
                  "title": "Temper the oil",
                  "body": "Heat the remaining mustard oil until it just smokes and cool slightly. Add bay leaf, cumin seeds, dried red chilli and green cardamom."
            },
            {
                  "title": "Fry the chicken",
                  "body": "Add chicken pieces and turmeric. Fry for 5–7 minutes until the surface changes colour, then remove briefly if the pan is crowded."
            },
            {
                  "title": "Make the light jhol",
                  "body": "Add ginger paste, cumin powder, coriander powder and chopped tomato. Cook for 3 minutes, return chicken and potatoes, then add 500 ml hot water."
            },
            {
                  "title": "Simmer and serve",
                  "body": "Cover and simmer 20–25 minutes until potatoes are tender and chicken reaches 74°C / 165°F. Keep the broth light; finish with slit green chillies and garam masala."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Gobindobhog rice",
      "Cucumber salad",
      "Lime"
    ]
  },
  {
    "slug": "bengali-doi-murgi",
    "name": "Bengali Doi Chicken",
    "native": "Doi Murgi",
    "subtitle": "Bengali Doi Chicken — A gentle yoghurt-based curry with ginger, cardamom and mustard oil.",
    "region": "West Bengal",
    "origin": "West Bengal",
    "heat": 1,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A gentle yoghurt-based curry with ginger, cardamom and mustard oil.",
    "tags": [
      "Curd based",
      "Mild",
      "Cardamom"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "250 g thick curd",
          "1 tbsp ginger paste",
          "2 onions",
          "1 bay leaf"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "4 cardamom",
          "1 cinnamon",
          "mustard oil",
          "ghee"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Marinate in yoghurt",
                  "body": "Whisk yoghurt with ginger paste, garlic paste, turmeric, chilli powder and salt. Coat chicken and refrigerate for 45 minutes."
            },
            {
                  "title": "Fry the onions",
                  "body": "Heat mustard oil in a kadai. Add bay leaf, cardamom, cinnamon and cloves, followed by sliced onions. Fry until evenly golden."
            },
            {
                  "title": "Cook the yoghurt masala",
                  "body": "Lower the heat and add the marinated chicken in batches. Stir continuously for 5 minutes, then cook uncovered until the yoghurt releases oil at the edges."
            },
            {
                  "title": "Braise until tender",
                  "body": "Add a little hot water, cover and simmer for 20–25 minutes. Stir twice and add water only if the masala becomes too thick."
            },
            {
                  "title": "Finish the doi murgi",
                  "body": "Check that the thickest chicken piece reaches 74°C / 165°F. Add green chillies and a pinch of garam masala; rest covered for 5 minutes."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Basanti pulao",
      "Rice",
      "Cucumber slices"
    ]
  },
  {
    "slug": "goan-chicken-xacuti",
    "name": "Goan Chicken Xacuti",
    "native": "Kombdi Xacuti",
    "subtitle": "Goan Chicken Xacuti — A fragrant curry with roasted coconut, poppy seeds and layered Goan spices.",
    "region": "Goa",
    "origin": "Goa",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A fragrant curry with roasted coconut, poppy seeds and layered Goan spices.",
    "tags": [
      "Roasted coconut",
      "Goan spices",
      "Tamarind"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "½ cup coconut",
          "2 tbsp coriander seeds",
          "1 tsp cumin",
          "1 tsp poppy seeds",
          "6 dried red chillies"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "4 cloves",
          "1 cinnamon",
          "1 onion",
          "tamarind",
          "oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Toast the xacuti spices",
                  "body": "Dry-roast coriander seeds, poppy seeds, cumin, fennel, peppercorns, cloves, cinnamon and dried red chillies separately until fragrant. Do not let the poppy seeds darken."
            },
            {
                  "title": "Roast coconut and aromatics",
                  "body": "In the same pan, roast grated coconut until deep golden. Fry sliced onion with a little oil until brown. Cool everything completely."
            },
            {
                  "title": "Grind the masala",
                  "body": "Grind the roasted spices, coconut, onion, garlic, ginger and tamarind with water to a thick, smooth paste."
            },
            {
                  "title": "Fry the chicken",
                  "body": "Heat coconut oil in a heavy pot. Add chicken, turmeric and salt; sear for 6–8 minutes. Add the xacuti paste and fry on medium-low heat for 5 minutes."
            },
            {
                  "title": "Simmer the curry",
                  "body": "Add 300 ml hot water, cover and simmer for 20–25 minutes. Check 74°C / 165°F at the thickest piece, then balance salt and tamarind before serving."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Goan poi",
      "Rice",
      "Kachumber"
    ]
  },
  {
    "slug": "kerala-nadan-kozhi-curry",
    "name": "Kerala Nadan Chicken Curry",
    "native": "Nadan Kozhi Curry",
    "subtitle": "Kerala Nadan Chicken Curry — A home-style curry with coconut oil, curry leaves, pepper and coconut milk.",
    "region": "Kerala",
    "origin": "Kerala",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A home-style curry with coconut oil, curry leaves, pepper and coconut milk.",
    "tags": [
      "Coconut oil",
      "Curry leaves",
      "Coconut milk"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "1 tsp turmeric",
          "ginger-garlic",
          "2 onions",
          "2 tomatoes"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "curry leaves",
          "2 tbsp coriander powder",
          "1 tsp black pepper",
          "thin coconut milk",
          "thick coconut milk"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Marinate the chicken",
                  "body": "Mix chicken with turmeric, chilli powder, coriander powder, ginger-garlic paste and salt. Rest for 20 minutes."
            },
            {
                  "title": "Temper coconut oil",
                  "body": "Heat coconut oil in a clay pot or kadai. Add mustard seeds; when they splutter, add curry leaves, sliced shallots and green chillies."
            },
            {
                  "title": "Cook the onion masala",
                  "body": "Fry shallots until golden at the edges. Add crushed black pepper and coriander powder, then stir for 30 seconds so the spices bloom without burning."
            },
            {
                  "title": "Braise the chicken",
                  "body": "Add chicken and toss for 6–8 minutes. Add chopped tomato and 250 ml hot water, cover and simmer for 20 minutes."
            },
            {
                  "title": "Finish with coconut",
                  "body": "Stir in thick coconut milk and simmer gently for 3–4 minutes without boiling hard. Check 74°C / 165°F internally and finish with fresh curry leaves."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Appam",
      "Matta rice",
      "Idiyappam"
    ]
  },
  {
    "slug": "kongunadu-chicken-curry",
    "name": "Kongunadu Chicken Curry",
    "native": "Kongu Kozhi Kuzhambu",
    "subtitle": "Kongunadu Chicken Curry — A pepper-forward curry with roasted coconut, fennel and shallots.",
    "region": "Tamil Nadu",
    "origin": "Tamil Nadu",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A pepper-forward curry with roasted coconut, fennel and shallots.",
    "tags": [
      "Pepper",
      "Shallots",
      "Roasted coconut"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "15 shallots",
          "½ cup coconut",
          "1 tbsp coriander seeds",
          "1 tsp fennel"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 tsp black pepper",
          "4 dried red chillies",
          "1 tomato",
          "curry leaves",
          "sesame oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Roast the Kongunadu masala",
                  "body": "Dry-roast coriander seeds, fennel, cumin, black pepper, dried red chillies and a small piece of cinnamon. Cool and grind coarsely."
            },
            {
                  "title": "Prepare the coconut paste",
                  "body": "Grind fresh coconut with roasted gram and a little water to a smooth paste. Keep separate from the spice powder."
            },
            {
                  "title": "Fry the aromatics",
                  "body": "Heat sesame oil, add fennel seeds, curry leaves and chopped shallots. Fry until the shallots turn golden, then add ginger-garlic paste."
            },
            {
                  "title": "Cook the chicken",
                  "body": "Add chicken, turmeric and salt. Sear for 7 minutes, add the roasted spice powder and chopped tomato, and cook until the tomato softens."
            },
            {
                  "title": "Simmer and finish",
                  "body": "Add 300 ml hot water and simmer covered for 18 minutes. Stir in coconut paste and cook 6–8 minutes more; verify 74°C / 165°F at the thickest piece."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Kambu kali",
      "Rice",
      "Dosa"
    ]
  },
  {
    "slug": "andhra-guntur-chicken-fry",
    "name": "Guntur Chicken Fry",
    "native": "Guntur Kodi Vepudu",
    "subtitle": "Guntur Chicken Fry — A spicy semi-dry fry with curry leaves, crushed garlic and Guntur chilli.",
    "region": "Andhra Pradesh",
    "origin": "Andhra Pradesh",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A spicy semi-dry fry with curry leaves, crushed garlic and Guntur chilli.",
    "tags": [
      "Guntur chilli",
      "Semi-dry",
      "Curry leaves"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "ginger-garlic",
          "Guntur chilli powder",
          "turmeric",
          "1 onion"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 tomato",
          "curry leaves",
          "4 garlic cloves",
          "cumin",
          "oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Make the chilli-garlic marinade",
                  "body": "Pound garlic, ginger, green chillies and Guntur chilli powder with lemon juice, turmeric and salt. Coat chicken and rest for 30 minutes."
            },
            {
                  "title": "Temper the curry leaves",
                  "body": "Heat oil in a wide kadai. Add mustard seeds, cumin, dried red chillies and a generous handful of curry leaves."
            },
            {
                  "title": "Brown the chicken",
                  "body": "Add marinated chicken in a single layer. Fry on medium-high heat for 8–10 minutes, turning often until the pieces are browned."
            },
            {
                  "title": "Cook through without gravy",
                  "body": "Lower the flame, add 80 ml water and cover for 12–15 minutes. Open and stir frequently as the liquid evaporates and the masala clings to the chicken."
            },
            {
                  "title": "Roast to finish",
                  "body": "Add crushed black pepper and coriander leaves. Continue tossing until dry and glossy; check 74°C / 165°F at the thickest piece."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Pesarattu",
      "Rice",
      "Onion rings"
    ]
  },
  {
    "slug": "punjabi-chicken-saagwala",
    "name": "Punjabi Chicken Saagwala",
    "native": "Murgh Saagwala",
    "subtitle": "Punjabi Chicken Saagwala — Chicken simmered in spinach and mustard greens with garlic and warming spices.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Chicken simmered in spinach and mustard greens with garlic and warming spices.",
    "tags": [
      "Leafy greens",
      "Garlic",
      "Winter favourite"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "700 g chicken",
          "300 g spinach",
          "100 g mustard greens",
          "5 garlic cloves",
          "1 onion"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 tomato",
          "cumin",
          "garam masala",
          "ghee"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Blanch the greens",
                  "body": "Wash spinach and mustard greens thoroughly. Blanch in boiling water for 2 minutes, transfer to cold water, drain and blend to a coarse purée."
            },
            {
                  "title": "Season and sear chicken",
                  "body": "Rub chicken with turmeric, chilli powder, ginger-garlic paste and salt. Heat ghee and sear in batches until lightly browned; remove."
            },
            {
                  "title": "Build the onion base",
                  "body": "Add cumin to the same pan, then chopped onion. Fry until golden, add ginger-garlic and tomato, and cook until the tomato breaks down."
            },
            {
                  "title": "Combine greens and chicken",
                  "body": "Stir in coriander powder and the greens purée. Return chicken, add 150 ml water, cover and simmer for 20–25 minutes."
            },
            {
                  "title": "Finish the saag",
                  "body": "Check 74°C / 165°F internally. Add garam masala, crushed kasuri methi and a spoon of butter; simmer uncovered until thick."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Makki di roti",
      "Jeera rice",
      "Pickled onion"
    ]
  },
  {
    "slug": "punjabi-achari-chicken",
    "name": "Punjabi Achari Chicken",
    "native": "Achari Murgh",
    "subtitle": "Punjabi Achari Chicken — A tangy curry with mustard, fennel, nigella and pickle masala.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A tangy curry with mustard, fennel, nigella and pickle masala.",
    "tags": [
      "Pickle spices",
      "Tangy",
      "Mustard oil"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "150 g curd",
          "mustard seeds",
          "fennel seeds",
          "nigella"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "fenugreek",
          "2 onions",
          "2 tomatoes",
          "pickle masala",
          "mustard oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the achari spice",
                  "body": "Lightly crush fennel, mustard, fenugreek, nigella and cumin seeds. Keep half whole for tempering and grind the rest coarsely."
            },
            {
                  "title": "Marinate the chicken",
                  "body": "Mix chicken with yoghurt, turmeric, chilli powder, ginger-garlic paste, ground achari spice and salt. Rest for 30 minutes."
            },
            {
                  "title": "Temper the pickle spices",
                  "body": "Heat mustard oil until it just smokes. Add the reserved whole seeds and dried red chilli; let them crackle briefly."
            },
            {
                  "title": "Cook the masala",
                  "body": "Add sliced onions and fry until golden. Add marinated chicken and cook for 8 minutes, stirring until the yoghurt thickens and oil appears."
            },
            {
                  "title": "Simmer and balance",
                  "body": "Add 150 ml hot water, cover and simmer 18–22 minutes. Check 74°C / 165°F, then finish with amchur or a little lemon for a bright pickle-like tang."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Tandoori roti",
      "Rice",
      "Laccha onion"
    ]
  },
  {
    "slug": "kumaoni-pahadi-chicken",
    "name": "Kumaoni Chicken Curry",
    "native": "Pahadi Murgh",
    "subtitle": "Kumaoni Chicken Curry — A hill-style curry with bhang jeera, coriander and restrained chilli heat.",
    "region": "Uttarakhand",
    "origin": "Uttarakhand",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A hill-style curry with bhang jeera, coriander and restrained chilli heat.",
    "tags": [
      "Hill cuisine",
      "Local herbs",
      "Rustic"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "1 onion",
          "coriander seeds",
          "bhang jeera or cumin",
          "black pepper"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "dried red chillies",
          "1 tomato",
          "ginger-garlic",
          "mustard oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Toast the local spice mix",
                  "body": "Dry-roast cumin, coriander, black pepper and a little jakhya if available. Crush coarsely with garlic and green chilli."
            },
            {
                  "title": "Prepare the simple base",
                  "body": "Heat mustard oil in a heavy pan. Add jakhya or cumin, then sliced onion and cook until translucent rather than deeply browned."
            },
            {
                  "title": "Season and sear",
                  "body": "Add chicken, turmeric and salt. Turn over medium-high heat for 7 minutes until the pieces are lightly browned."
            },
            {
                  "title": "Simmer with hill spices",
                  "body": "Add the crushed spice mix, chopped tomato and 250 ml hot water. Cover and cook gently for 20–25 minutes, stirring once halfway."
            },
            {
                  "title": "Finish with herbs",
                  "body": "Check 74°C / 165°F at the thickest piece. Reduce the broth to the consistency you like and finish with coriander and a squeeze of lemon."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Mandua roti",
      "Rice",
      "Pahadi cucumber salad"
    ]
  },
  {
    "slug": "himachali-anardana-chicken",
    "name": "Himachali Anardana Chicken",
    "native": "Anardana Murgh",
    "subtitle": "Himachali Anardana Chicken — A tangy hill-style curry with dried pomegranate, curd and whole spices.",
    "region": "Himachal Pradesh",
    "origin": "Himachal Pradesh",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A tangy hill-style curry with dried pomegranate, curd and whole spices.",
    "tags": [
      "Anardana",
      "Tangy",
      "Hill style"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "150 g curd",
          "dried pomegranate seeds",
          "coriander seeds",
          "cumin"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "4 cloves",
          "cinnamon",
          "1 onion",
          "1 tomato",
          "mustard oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Make the anardana masala",
                  "body": "Dry-roast coriander seeds, cumin and dried pomegranate seeds until aromatic. Cool and grind coarsely with black pepper."
            },
            {
                  "title": "Marinate the chicken",
                  "body": "Coat chicken with yoghurt, ginger-garlic paste, turmeric, chilli powder and salt. Rest for 30 minutes."
            },
            {
                  "title": "Brown the onions",
                  "body": "Heat mustard oil or ghee. Add cinnamon and bay leaf, then sliced onions; fry until golden at the edges."
            },
            {
                  "title": "Cook with the sour spice",
                  "body": "Add chicken and marinade, sear for 7 minutes, then stir in the anardana powder. Add 200 ml hot water and simmer covered for 20 minutes."
            },
            {
                  "title": "Reduce and check",
                  "body": "Uncover and reduce until the gravy clings to the chicken. Verify 74°C / 165°F internally, adjust sourness with a little more anardana and finish with coriander."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Siddu",
      "Rice",
      "Plain roti"
    ]
  },
  {
    "slug": "parsi-salli-murghi",
    "name": "Parsi Salli Murghi",
    "native": "Salli Murghi",
    "subtitle": "Parsi Salli Murghi — A sweet-sour Parsi curry finished with crisp potato straws and warm spices.",
    "region": "Parsi",
    "origin": "Parsi",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A sweet-sour Parsi curry finished with crisp potato straws and warm spices.",
    "tags": [
      "Parsi",
      "Sweet sour",
      "Crisp potato"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "2 onions",
          "2 tomatoes",
          "tomato purée",
          "cumin powder"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "garam masala",
          "vinegar",
          "jaggery",
          "potato salli",
          "oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the chicken",
                  "body": "Season chicken with ginger-garlic paste, turmeric, chilli powder and salt. Keep aside for 20 minutes."
            },
            {
                  "title": "Make the sweet-sour tomato base",
                  "body": "Heat oil in a wide pan. Fry sliced onions until golden, add ginger-garlic and chopped tomatoes, and cook until thick."
            },
            {
                  "title": "Layer the Parsi spices",
                  "body": "Add cumin, coriander, cinnamon and a small pinch of clove powder. Stir in vinegar and jaggery, tasting for a balanced sweet-sour flavour."
            },
            {
                  "title": "Simmer the chicken",
                  "body": "Add chicken and turn to coat in the masala. Pour in 150 ml hot water, cover and simmer for 20–25 minutes until tender."
            },
            {
                  "title": "Finish with salli",
                  "body": "Check 74°C / 165°F internally and reduce the sauce until glossy. Top with crisp potato salli just before serving so it stays crunchy."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Rice",
      "Pav",
      "Kachumber"
    ]
  },
  {
    "slug": "naga-bamboo-shoot-chicken",
    "name": "Naga-style Chicken with Bamboo Shoot",
    "native": "Smoked Chicken with Bamboo Shoot",
    "subtitle": "Naga-style Chicken with Bamboo Shoot — A smoky chilli-led preparation with fermented bamboo shoot and ginger.",
    "region": "Nagaland",
    "origin": "Nagaland",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A smoky chilli-led preparation with fermented bamboo shoot and ginger.",
    "tags": [
      "Bamboo shoot",
      "Smoky",
      "Chilli"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "ginger",
          "1 onion",
          "2 green chillies",
          "fermented bamboo shoot"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 tomato",
          "black pepper",
          "mustard oil",
          "water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the bamboo shoot",
                  "body": "If using fermented bamboo shoot, rinse lightly and drain; taste first because its salt and sourness vary. Slice fresh ginger and crush garlic."
            },
            {
                  "title": "Smoke or brown the chicken",
                  "body": "Rub chicken with salt and a little chilli. Brown in a heavy pan or over a grill until the skin and edges take on a light smoky colour."
            },
            {
                  "title": "Cook the aromatics",
                  "body": "Heat a little mustard oil, add crushed ginger and garlic, then add king chilli or bird's-eye chilli in a quantity suited to your heat tolerance."
            },
            {
                  "title": "Braise with bamboo shoot",
                  "body": "Add chicken and bamboo shoot, toss for 3 minutes and pour in 250 ml water. Cover and simmer for 20–25 minutes, stirring occasionally."
            },
            {
                  "title": "Check and finish",
                  "body": "Check 74°C / 165°F at the thickest piece. Adjust salt; keep the broth relatively light and finish with fresh herbs if available."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Rice",
      "Boiled greens",
      "Chilli chutney"
    ]
  },
  {
    "slug": "manipur-eromba-style-chicken",
    "name": "Manipuri Chicken with Eromba-style Mash",
    "native": "Eromba-style Murgh",
    "subtitle": "Manipuri Chicken with Eromba-style Mash — A simple chicken broth served with a chilli and seasonal vegetable mash.",
    "region": "Manipur",
    "origin": "Manipur",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A simple chicken broth served with a chilli and seasonal vegetable mash.",
    "tags": [
      "Eromba inspired",
      "Vegetable mash",
      "Light broth"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "700 g chicken",
          "2 potatoes",
          "1 raw banana",
          "2 roasted green chillies",
          "ngari optional"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "1 onion",
          "ginger-garlic",
          "water",
          "coriander"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Cook the vegetables",
                  "body": "Boil potatoes and seasonal vegetables such as beans or cabbage until just tender. Drain, reserving a little cooking water."
            },
            {
                  "title": "Prepare the chilli mash",
                  "body": "Roast or boil dried red chillies, then pound with fermented fish (ngari) if used in your household version. Mash the cooked vegetables roughly into this mixture."
            },
            {
                  "title": "Season the chicken",
                  "body": "Rub chicken with turmeric and salt. Heat mustard oil and sear the pieces for 5–6 minutes."
            },
            {
                  "title": "Simmer the chicken",
                  "body": "Add sliced onion, ginger and 250 ml water. Cover and simmer 18–22 minutes, stirring once, until chicken is nearly tender."
            },
            {
                  "title": "Combine and verify",
                  "body": "Fold in the vegetable-chilli mash and simmer 5 minutes. Check 74°C / 165°F internally; adjust salt and keep the texture rustic rather than smooth."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Rice",
      "Seasonal greens",
      "Herb salad"
    ]
  },
  {
    "slug": "chhattisgarh-chicken-curry",
    "name": "Chhattisgarhi Chicken Curry",
    "native": "Chaulai Murga",
    "subtitle": "Chhattisgarhi Chicken Curry — A simple rice-friendly curry with garlic, seasonal greens and light spices.",
    "region": "Chhattisgarh",
    "origin": "Chhattisgarh",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A simple rice-friendly curry with garlic, seasonal greens and light spices.",
    "tags": [
      "Seasonal greens",
      "Garlic",
      "Rice pairing"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "garlic paste",
          "1 onion",
          "1 tomato",
          "amaranth leaves"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "mustard seeds",
          "coriander powder",
          "turmeric",
          "oil",
          "water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the spice paste",
                  "body": "Pound garlic, ginger, dried red chilli and coriander seeds with a splash of water. Keep the paste coarse for a homestyle texture."
            },
            {
                  "title": "Fry the aromatics",
                  "body": "Heat mustard oil in a kadai. Add cumin and sliced onions; cook until golden, then add the spice paste and fry for 2–3 minutes."
            },
            {
                  "title": "Brown the chicken",
                  "body": "Add chicken, turmeric and salt. Fry on medium-high heat for 7–8 minutes, turning so the masala coats all sides."
            },
            {
                  "title": "Simmer the curry",
                  "body": "Add chopped tomato and 300 ml hot water. Cover and simmer for 20–25 minutes, stirring once or twice."
            },
            {
                  "title": "Finish with greens",
                  "body": "Add chopped seasonal greens and cook uncovered until wilted. Check 74°C / 165°F at the thickest piece, adjust salt and serve with rice."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Rice",
      "Bore-basi",
      "Seasonal greens"
    ]
  },
  {
    "slug": "konkani-kori-sukka",
    "name": "Konkan Chicken Sukka",
    "native": "Konkani Kori Sukka",
    "subtitle": "Konkan Chicken Sukka — A semi-dry coastal preparation with roasted coconut, red chilli and curry leaves.",
    "region": "Karnataka",
    "origin": "Karnataka",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A semi-dry coastal preparation with roasted coconut, red chilli and curry leaves.",
    "tags": [
      "Coastal",
      "Roasted coconut",
      "Semi-dry"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "½ cup coconut",
          "5 dried red chillies",
          "coriander seeds",
          "cumin"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "fennel",
          "cloves",
          "1 onion",
          "curry leaves",
          "coconut oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Roast the coconut masala",
                  "body": "Dry-roast grated coconut until golden. Separately roast coriander seeds, dried red chillies, cumin, peppercorns and a little fenugreek."
            },
            {
                  "title": "Grind the sukka paste",
                  "body": "Grind the roasted coconut and spices with garlic, tamarind and a little water to a thick, coarse paste."
            },
            {
                  "title": "Season the chicken",
                  "body": "Mix chicken with turmeric and salt. Heat coconut oil, add curry leaves and sliced onion, and cook until the onion softens."
            },
            {
                  "title": "Cook with the paste",
                  "body": "Add chicken and sear for 6–8 minutes. Stir in the ground masala and cook on low heat for 5 minutes, scraping the pan so it does not catch."
            },
            {
                  "title": "Roast until nearly dry",
                  "body": "Add 100 ml hot water, cover and simmer 18–22 minutes. Uncover and toss until the masala clings; verify 74°C / 165°F internally."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Neer dosa",
      "Kori rotti",
      "Rice"
    ]
  },
  {
    "slug": "sikkimese-chicken-thukpa",
    "name": "Sikkimese Chicken Thukpa",
    "native": "Chicken Thukpa",
    "subtitle": "Sikkimese Chicken Thukpa — A warming noodle soup with chicken, ginger, vegetables and clear peppery broth.",
    "region": "Sikkim",
    "origin": "Sikkim",
    "heat": 1,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A warming noodle soup with chicken, ginger, vegetables and clear peppery broth.",
    "tags": [
      "Himalayan",
      "Noodle soup",
      "Clear broth"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "500 g chicken",
          "1 litre water",
          "ginger",
          "4 garlic cloves",
          "1 onion",
          "black pepper"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "200 g noodles",
          "1 carrot",
          "cabbage",
          "spring onion",
          "soy sauce"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the broth base",
                  "body": "Bring 1.5 litres water or light chicken stock to a simmer with ginger slices, garlic, crushed peppercorns and a little salt."
            },
            {
                  "title": "Cook the chicken",
                  "body": "Add chicken thigh pieces and simmer gently for 15–18 minutes until cooked. Remove, shred or slice, and keep the broth hot; verify 74°C / 165°F."
            },
            {
                  "title": "Prepare the vegetables",
                  "body": "Heat a little oil in a separate pot. Briefly stir-fry sliced onion, carrot, cabbage and spring onion whites until just softened."
            },
            {
                  "title": "Build the noodle soup",
                  "body": "Pour in the hot broth and simmer vegetables for 4–5 minutes. Add wheat or egg noodles and cook according to the packet instructions."
            },
            {
                  "title": "Assemble the bowls",
                  "body": "Return sliced chicken to the broth to reheat. Taste for salt, add chilli oil or green chilli to taste, and finish with spring onion greens and coriander."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Chilli oil",
      "Momos",
      "Lemon"
    ]
  },
  {
    "slug": "awadhi-murgh-musallam",
    "name": "Awadhi Murgh Musallam",
    "native": "Murgh Musallam",
    "subtitle": "Awadhi Murgh Musallam — A festive whole-chicken preparation with nut paste, saffron and browned onion.",
    "region": "Uttar Pradesh",
    "origin": "Uttar Pradesh",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A festive whole-chicken preparation with nut paste, saffron and browned onion.",
    "tags": [
      "Festive",
      "Whole chicken",
      "Saffron"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "1 small whole chicken",
          "200 g curd",
          "2 onions",
          "15 almonds",
          "10 cashews"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "coriander powder",
          "saffron",
          "ghee",
          "water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Prepare the whole chicken",
                  "body": "Use a 1.2–1.4 kg whole chicken. Make deep slashes in the legs and breast; rub inside and out with yoghurt, ginger-garlic paste, chilli, turmeric, salt and lemon. Marinate 4 hours."
            },
            {
                  "title": "Make the stuffing",
                  "body": "Mix boiled eggs (optional), fried onions, chopped nuts, raisins, mint and coriander. Fill the cavity loosely and secure the opening with skewers or kitchen twine."
            },
            {
                  "title": "Prepare the korma masala",
                  "body": "Grind soaked cashews and melon seeds to a smooth paste. Fry sliced onions in ghee until golden, then grind with a little water."
            },
            {
                  "title": "Braise the chicken",
                  "body": "Heat ghee with cardamom, cloves and cinnamon. Add onion paste, nut paste and coriander powder; cook 3 minutes. Place chicken breast-side down, turn to coat, add 250 ml stock and cover."
            },
            {
                  "title": "Finish in oven and check",
                  "body": "Transfer the covered pot to a 180°C oven for 45–55 minutes, turning once. Check the thickest breast and inner thigh reach 74°C / 165°F; rest 10 minutes before carving."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Sheermal",
      "Zafrani pulao",
      "Mint raita"
    ]
  },
  {
    "slug": "indori-lehsuni-murgh",
    "name": "Indori Garlic Chicken",
    "native": "Lehsuni Murgh",
    "subtitle": "Indori Garlic Chicken — A bold garlic-forward curry with toasted cumin, chilli and fresh coriander.",
    "region": "Madhya Pradesh",
    "origin": "Madhya Pradesh",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A bold garlic-forward curry with toasted cumin, chilli and fresh coriander.",
    "tags": [
      "Garlic forward",
      "Indori",
      "Bold"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "12 garlic cloves",
          "cumin seeds",
          "2 onions",
          "2 tomatoes"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "coriander powder",
          "garam masala",
          "ginger-garlic",
          "oil",
          "water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Make the garlic marinade",
                  "body": "Crush garlic with green chilli, lemon juice, turmeric, chilli powder and salt. Rub over chicken and rest for 30 minutes."
            },
            {
                  "title": "Toast the Indori masala",
                  "body": "Dry-roast coriander seeds, fennel, cumin and black pepper until fragrant. Cool and crush coarsely."
            },
            {
                  "title": "Fry the garlic and onion",
                  "body": "Heat oil or ghee in a kadai. Add sliced garlic and fry until pale gold, then add onions and cook until translucent."
            },
            {
                  "title": "Cook the chicken",
                  "body": "Add marinated chicken and sear for 8 minutes. Add the crushed spice mix and chopped tomato; stir until the tomato softens."
            },
            {
                  "title": "Reduce to a thick roast",
                  "body": "Add 100 ml hot water, cover for 15–18 minutes, then uncover and roast until the masala clings. Check 74°C / 165°F and finish with coriander and lemon."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Poha",
      "Tandoori roti",
      "Jeera rice"
    ]
  },
  {
    "slug": "kolkata-mughlai-chicken-chaap",
    "name": "Kolkata Mughlai Chicken Chaap",
    "native": "Murgh Chaap",
    "subtitle": "Kolkata Mughlai Chicken Chaap — Chicken legs cooked in a rich poppy-seed, cashew and aromatic spice gravy.",
    "region": "West Bengal",
    "origin": "West Bengal",
    "heat": 2,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "Chicken legs cooked in a rich poppy-seed, cashew and aromatic spice gravy.",
    "tags": [
      "Kolkata Mughlai",
      "Poppy seed",
      "Rich gravy"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "4 chicken leg quarters",
          "150 g curd",
          "1 fried onion",
          "poppy seeds",
          "12 cashews"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "bay leaf",
          "cardamom",
          "cinnamon",
          "ghee",
          "water"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Marinate the leg quarters",
                  "body": "Make deep slashes in chicken leg quarters. Mix yoghurt, ginger-garlic paste, papaya paste (optional), chilli, garam masala, salt and lemon; coat chicken and refrigerate 2 hours."
            },
            {
                  "title": "Prepare the rich paste",
                  "body": "Soak cashews and poppy seeds in hot water for 20 minutes. Grind with fried onion and a little water to a smooth paste."
            },
            {
                  "title": "Sear the chicken",
                  "body": "Heat ghee and oil in a heavy pan. Add chicken pieces and brown on both sides, reserving the marinade."
            },
            {
                  "title": "Braise in the Mughlai sauce",
                  "body": "Add the nut paste, marinade, a pinch of sugar and 200 ml hot water. Cover and cook on low heat for 25–30 minutes, turning the pieces twice."
            },
            {
                  "title": "Finish and verify",
                  "body": "Uncover and reduce the sauce until thick and glossy. Check the thickest part reaches 74°C / 165°F; finish with kewra water sparingly and a little ghee."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Roomali roti",
      "Biryani",
      "Onion salad"
    ]
  },
  {
    "slug": "nagpur-saoji-chicken",
    "name": "Nagpur Saoji Chicken",
    "native": "Saoji Kombdi",
    "subtitle": "Nagpur Saoji Chicken — A fiery Vidarbha curry with roasted coconut, poppy seeds and dark spice paste.",
    "region": "Maharashtra",
    "origin": "Maharashtra",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A fiery Vidarbha curry with roasted coconut, poppy seeds and dark spice paste.",
    "tags": [
      "Vidarbha",
      "Roasted masala",
      "Very hot"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "dry coconut",
          "poppy seeds",
          "coriander seeds",
          "cumin",
          "6 dried red chillies"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "cloves",
          "cinnamon",
          "black cardamom",
          "2 onions",
          "oil"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Roast the Saoji masala",
                  "body": "Dry-roast dry coconut, coriander seeds, cumin, poppy seeds, sesame, black pepper, cloves, cinnamon and dried red chillies separately until fragrant."
            },
            {
                  "title": "Grind the dark paste",
                  "body": "Fry sliced onions until deep brown. Grind them with the roasted spices and coconut, adding water gradually to make a thick paste."
            },
            {
                  "title": "Sear the chicken",
                  "body": "Heat oil in a kadai. Add chicken, turmeric and salt; sear for 7–8 minutes until the surface is lightly browned."
            },
            {
                  "title": "Cook the Saoji gravy",
                  "body": "Add the ground masala and fry on medium-low heat for 6–8 minutes, stirring often. Add 350 ml hot water and cover."
            },
            {
                  "title": "Simmer and check",
                  "body": "Cook 20–25 minutes until tender. Check 74°C / 165°F at the thickest piece; adjust salt and serve the dark, spicy gravy with bhakri."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Jowar bhakri",
      "Rice",
      "Raw onion"
    ]
  },
  {
    "slug": "madurai-kozhi-chukka",
    "name": "Madurai Chicken Chukka",
    "native": "Madurai Kozhi Chukka",
    "subtitle": "Madurai Chicken Chukka — A peppery dry roast with curry leaves, shallots and freshly crushed spices.",
    "region": "Tamil Nadu",
    "origin": "Tamil Nadu",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadbc9",
      "curry": "#94411d",
      "deep": "#602a16",
      "piece": "#d29a6b",
      "garnish": "#456141",
      "accent": "#d9ad65"
    },
    "story": "A peppery dry roast with curry leaves, shallots and freshly crushed spices.",
    "tags": [
      "Dry roast",
      "Black pepper",
      "Shallots"
    ],
    "ingredients": [
      {
        "title": "For the chicken and base",
        "items": [
          "800 g chicken",
          "15 shallots",
          "fennel seeds",
          "black pepper",
          "1 tomato"
        ]
      },
      {
        "title": "For the masala and finish",
        "items": [
          "coriander powder",
          "curry leaves",
          "sesame oil",
          "ginger-garlic"
        ]
      }
    ],
    "steps": [
            {
                  "title": "Marinate briefly",
                  "body": "Mix chicken with turmeric, chilli powder, ginger-garlic paste, salt and lemon. Rest for 20 minutes."
            },
            {
                  "title": "Crush the chukka spices",
                  "body": "Coarsely crush fennel seeds, black peppercorns and cumin. Keep some pepper coarse for texture."
            },
            {
                  "title": "Fry shallots and curry leaves",
                  "body": "Heat sesame oil in a wide kadai. Add fennel, curry leaves and shallots; fry until the shallots turn golden at the edges."
            },
            {
                  "title": "Cook the chicken",
                  "body": "Add chicken and sear on high heat for 7–8 minutes. Add chopped tomato and the crushed spice mix; cook until tomato softens."
            },
            {
                  "title": "Roast dry and finish",
                  "body": "Add 100 ml water, cover and cook 15–18 minutes. Uncover and roast, tossing often, until dry and dark at the edges. Check 74°C / 165°F internally."
            }
      ],
    "notes": [
      "Regional spice blends vary between households; add chilli, souring agents and salt gradually.",
      "Use bone-in chicken for a fuller gravy, or reduce the cooking time for small boneless pieces.",
      "Check the thickest piece reaches 74°C / 165°F before serving."
    ],
    "serveWith": [
      "Parotta",
      "Rasam rice",
      "Onion raita"
    ]
  },
  {
    slug: "mughlai-chicken-rezala",
    name: "Mughlai Chicken Rezala",
    native: "Murgh Rezala",
    subtitle: "A pale, fragrant Kolkata-style curry with curd, cashew, poppy seeds and gentle whole spices.",
    region: "West Bengal",
    origin: "Kolkata, West Bengal",
    heat: 1,
    prep: 25,
    cook: 40,
    serves: 4,
    variant: "curry",
    palette: { bg: "#eee5d8", curry: "#c5a77d", deep: "#8e704d", piece: "#e1c49e", garnish: "#65734d", accent: "#f1dfb9" },
    story: "Rezala is known for its light colour and perfume rather than a red chilli-heavy gravy. Curd, a little nut paste and whole spices make a gently rich sauce. This home version keeps the technique manageable while retaining the characteristic pale finish.",
    tags: ["Kolkata", "Mild", "Curd gravy"],
    ingredients: [
      { title: "For the chicken", items: ["800 g bone-in chicken, medium pieces", "150 g thick curd, whisked", "1 tbsp ginger paste", "1 tbsp garlic paste", "½ tsp white pepper powder", "¾ tsp salt"] },
      { title: "For the rezala paste", items: ["2 tbsp poppy seeds, soaked for 20 minutes", "12 cashews, soaked", "2 tbsp warm water, as needed"] },
      { title: "For the gravy", items: ["3 tbsp ghee", "1 tbsp neutral oil", "1 small onion, finely sliced", "4 green cardamom", "4 cloves", "1 small cinnamon stick", "1 bay leaf", "2 green chillies, slit", "½ tsp sugar", "150–200 ml hot water", "1 tsp kewra water, optional"] }
    ],
    steps: [
      { title: "Marinate the chicken", body: "Mix the chicken with curd, ginger, garlic, white pepper and salt. Cover and refrigerate for at least 1 hour. Bring it out while you prepare the paste." },
      { title: "Make the nut paste", body: "Drain the poppy seeds and cashews. Grind them with a little warm water to a very smooth paste. Keep aside; a smooth paste prevents a grainy gravy." },
      { title: "Start the fragrant base", body: "Heat ghee and oil in a heavy kadai. Add cardamom, cloves, cinnamon and bay leaf. Fry for 30 seconds, then add the sliced onion and cook till soft and translucent without browning it deeply." },
      { title: "Cook the chicken gently", body: "Add the marinated chicken and its curd mixture. Cook on medium heat for 8–10 minutes, turning the pieces so they lose their raw surface colour. Add the nut paste and green chillies; stir continuously for 2 minutes." },
      { title: "Simmer and finish", body: "Add 150 ml hot water, cover and simmer on low heat for 20–25 minutes, stirring occasionally. Add a little more water if the gravy becomes too thick. Check the thickest chicken piece reaches 74°C / 165°F. Switch off the flame, add sugar and optional kewra water, then keep aside for 5 minutes." }
    ],
    notes: ["Keep the onion pale; deep browning changes both the colour and flavour of rezala.", "Grind the poppy seeds and cashews thoroughly, adding water a teaspoon at a time.", "Kewra is strong. Start with a few drops if you are unsure of its strength."],
    serveWith: ["Roomali roti", "Naan", "Light pulao"]
  },
  {
    slug: "methi-malai-murgh",
    name: "Methi Malai Murgh",
    native: "Methi Malai Chicken",
    subtitle: "Tender chicken in a mild fresh-cream gravy with fenugreek leaves, cashew and green chilli.",
    region: "Punjab",
    origin: "North Indian restaurant kitchens",
    heat: 1,
    prep: 20,
    cook: 30,
    serves: 4,
    variant: "curry",
    palette: { bg: "#e9e8d8", curry: "#b6a978", deep: "#756b42", piece: "#dfc49b", garnish: "#55704a", accent: "#e9d9ad" },
    story: "Methi malai murgh balances the slight bitterness of fenugreek with the sweetness of onion and the richness of cream. Fresh methi gives the best flavour, while a small amount of kasuri methi can deepen it when fresh leaves are out of season.",
    tags: ["Mild", "Creamy", "Fenugreek"],
    ingredients: [
      { title: "For the chicken", items: ["750 g boneless chicken thigh, bite-sized pieces", "½ cup thick curd", "1 tbsp ginger-garlic paste", "½ tsp white pepper", "¾ tsp salt"] },
      { title: "For the gravy", items: ["2 tbsp ghee", "1 tbsp oil", "2 medium onions, thinly sliced", "12 cashews, soaked for 15 minutes", "2 green chillies, slit", "1 tsp cumin seeds", "½ tsp coriander powder", "½ tsp garam masala", "2 packed cups fresh methi leaves, washed and chopped", "120 ml fresh cream", "100 ml hot water", "½ tsp sugar, optional"] }
    ],
    steps: [
      { title: "Season the chicken", body: "Mix chicken with curd, ginger-garlic paste, white pepper and salt. Keep aside for 20–30 minutes while preparing the gravy ingredients." },
      { title: "Prepare the onion-cashew base", body: "Heat 1 tbsp ghee and the oil. Cook the onions on medium-low heat till soft and lightly golden. Cool slightly, then grind with the drained cashews and a little water to a smooth paste." },
      { title: "Cook the methi", body: "Heat the remaining ghee. Add cumin and green chillies. Add chopped methi and cook for 3–4 minutes till wilted and its moisture reduces." },
      { title: "Simmer the chicken", body: "Add the onion-cashew paste, coriander powder and garam masala. Fry for 2 minutes, then add the chicken and marinade. Cook for 5–6 minutes, stirring so the paste does not catch. Add hot water, cover and simmer for 12–15 minutes." },
      { title: "Finish with cream", body: "Check the thickest chicken piece reaches 74°C / 165°F. Lower the flame and stir in the cream. Warm gently without boiling hard. Taste for salt and add a little sugar only if the methi is particularly bitter. Rest for 5 minutes." }
    ],
    notes: ["Wash fresh methi well and remove thick stems before chopping.", "If using kasuri methi instead of fresh leaves, use 1½ tbsp crushed leaves and add them with the cream.", "Do not boil the gravy vigorously after adding cream, as it can split."],
    serveWith: ["Butter naan", "Jeera rice", "Tandoori roti"]
  },
  {
    slug: "amritsari-chicken-masala",
    name: "Amritsari Chicken Masala",
    native: "Amritsari Murgh",
    subtitle: "A robust Punjabi chicken curry with browned onions, tomato, ginger and warming dhaba spices.",
    region: "Punjab",
    origin: "Amritsar, Punjab",
    heat: 2,
    prep: 20,
    cook: 40,
    serves: 4,
    variant: "curry",
    palette: { bg: "#eadfd0", curry: "#a94e28", deep: "#71301b", piece: "#d8a477", garnish: "#4c6b47", accent: "#e3bd83" },
    story: "This homestyle Amritsari-style masala uses a deeply cooked onion and tomato base, with ginger, coriander and a final touch of kasuri methi. It is thicker than a light everyday curry and works well with naan or kulcha.",
    tags: ["Punjabi", "Dhaba style", "Medium heat"],
    ingredients: [
      { title: "For the chicken", items: ["800 g bone-in chicken, medium pieces", "½ tsp turmeric", "1 tsp Kashmiri chilli powder", "1 tbsp ginger-garlic paste", "½ cup curd", "1 tsp salt"] },
      { title: "For the masala", items: ["3 tbsp mustard oil or neutral oil", "2 large onions, finely chopped", "2 medium tomatoes, finely chopped", "1 tbsp ginger, cut into fine strips", "1 tsp cumin seeds", "2 tsp coriander powder", "½ tsp cumin powder", "½ tsp garam masala", "½ tsp black pepper powder", "1 tbsp kasuri methi, crushed", "2 green chillies, slit", "250 ml hot water", "2 tbsp chopped coriander leaves"] }
    ],
    steps: [
      { title: "Marinate the chicken", body: "Mix chicken with turmeric, chilli powder, ginger-garlic paste, curd and salt. Keep aside for 30 minutes." },
      { title: "Brown the onions", body: "Heat the oil in a heavy kadai. If using mustard oil, heat till it just begins to smoke, then lower the flame. Add cumin and onions. Cook for 10–12 minutes till evenly golden brown." },
      { title: "Cook the tomato masala", body: "Add the chopped tomatoes and ginger strips. Cook till the tomatoes soften and the oil begins to show at the edges. Add coriander powder, cumin powder and black pepper; fry for 30 seconds." },
      { title: "Cook the chicken", body: "Add the chicken and all its marinade. Fry on medium-high heat for 6–8 minutes, turning the pieces so they are coated in masala. Add hot water, cover and simmer for 20–25 minutes, stirring twice." },
      { title: "Finish the curry", body: "Check that the thickest chicken piece reaches 74°C / 165°F. Add garam masala, kasuri methi and green chillies. Simmer uncovered for 2 minutes to thicken, then finish with coriander and rest for 5 minutes." }
    ],
    notes: ["Cook the onions patiently; pale onions will give a sweeter and thinner gravy.", "Use hot water when adjusting the consistency so the simmer does not stop.", "Bone-in pieces give the masala more flavour, but boneless thigh can be used with a shorter cooking time."],
    serveWith: ["Amritsari kulcha", "Tandoori roti", "Onion rings"]
  },
  {
    slug: "pahadi-hariyali-chicken",
    name: "Pahadi Hariyali Chicken",
    native: "Pahadi Hara Murgh",
    subtitle: "A green hill-style chicken curry with coriander, mint, curd, green chilli and warming spices.",
    region: "Uttarakhand",
    origin: "Uttarakhand",
    heat: 2,
    prep: 25,
    cook: 35,
    serves: 4,
    variant: "curry",
    palette: { bg: "#e2e8d9", curry: "#718454", deep: "#405331", piece: "#d7b98c", garnish: "#315a3b", accent: "#c8d29c" },
    story: "Green herb pastes are used in many north Indian home kitchens. This Pahadi-inspired version combines coriander, mint and green chilli with curd for a fresh, savoury curry that is different from tomato-heavy gravies.",
    tags: ["Herb gravy", "Hill-style", "Medium heat"],
    ingredients: [
      { title: "For the chicken", items: ["800 g chicken, bone-in pieces", "½ cup thick curd", "1 tbsp ginger-garlic paste", "½ tsp turmeric", "¾ tsp salt"] },
      { title: "For the green paste", items: ["1½ cups coriander leaves and tender stems", "½ cup mint leaves", "2–3 green chillies", "1 small onion, roughly chopped", "1 tbsp lemon juice", "2 tbsp water"] },
      { title: "For cooking", items: ["2 tbsp mustard oil or ghee", "1 tsp cumin seeds", "1 small cinnamon stick", "3 green cardamom", "1 tsp coriander powder", "½ tsp roasted cumin powder", "150 ml hot water", "1 tbsp chopped coriander to finish"] }
    ],
    steps: [
      { title: "Marinate the chicken", body: "Coat the chicken with curd, ginger-garlic paste, turmeric and salt. Keep aside for 30 minutes." },
      { title: "Grind the herbs", body: "Grind coriander, mint, green chillies, onion and lemon juice to a smooth green paste. Add only enough water to help the blades move; too much water makes the curry thin." },
      { title: "Temper the spices", body: "Heat oil in a kadai. Add cumin, cinnamon and cardamom. When fragrant, add the marinated chicken and fry for 6–8 minutes till the pieces turn opaque." },
      { title: "Cook with the green masala", body: "Add coriander powder and roasted cumin. Stir in the green paste and cook on medium-low heat for 4–5 minutes. Do not fry it on high heat, as the herbs can lose their fresh colour." },
      { title: "Simmer and serve", body: "Add hot water, cover and simmer for 18–22 minutes. Check that the thickest chicken piece reaches 74°C / 165°F. Adjust salt and lemon, finish with coriander and rest for 5 minutes." }
    ],
    notes: ["Use tender coriander stems; they add flavour and blend smoothly.", "Add mint in moderation so it does not overpower the coriander.", "The green colour naturally darkens a little during cooking; avoid prolonged high heat after adding the herb paste."],
    serveWith: ["Mandua roti", "Steamed rice", "Cucumber raita"]
  },
  {
    slug: "dahi-wala-chicken",
    name: "Dahi Wala Chicken",
    native: "Dahi Murgh",
    subtitle: "A tangy, homestyle curd chicken curry with browned onions, cumin and coriander.",
    region: "Uttar Pradesh",
    origin: "North Indian home kitchens",
    heat: 2,
    prep: 20,
    cook: 35,
    serves: 4,
    variant: "curry",
    palette: { bg: "#e9e0d1", curry: "#b18b55", deep: "#72532f", piece: "#d9b78d", garnish: "#526d48", accent: "#e5cf9d" },
    story: "Dahi wala chicken is a practical home-style curry where whisked curd forms much of the gravy. The key is to lower the heat before adding the curd and keep stirring until it blends with the onion masala.",
    tags: ["Homestyle", "Curd-based", "Everyday curry"],
    ingredients: [
      { title: "For the chicken", items: ["800 g chicken, medium pieces", "200 g thick curd, whisked smooth", "1 tbsp ginger-garlic paste", "½ tsp turmeric", "1 tsp Kashmiri chilli powder", "1 tsp salt"] },
      { title: "For the masala", items: ["3 tbsp oil", "2 medium onions, finely sliced", "1 tsp cumin seeds", "1 bay leaf", "1 small cinnamon stick", "3 cloves", "2 tsp coriander powder", "½ tsp cumin powder", "½ tsp garam masala", "2 green chillies, slit", "150 ml hot water", "2 tbsp chopped coriander leaves"] }
    ],
    steps: [
      { title: "Marinate briefly", body: "Mix the chicken with ginger-garlic paste, turmeric, chilli powder and salt. Keep aside for 20 minutes. Whisk the curd until completely smooth." },
      { title: "Cook the onions", body: "Heat oil in a kadai. Add cumin, bay leaf, cinnamon and cloves. Add onions and cook on medium heat till golden brown." },
      { title: "Add the chicken", body: "Add chicken and fry for 6–7 minutes till the outside turns opaque. Add coriander and cumin powders and stir for 30 seconds." },
      { title: "Blend in the curd", body: "Lower the flame. Add the whisked curd in 3 batches, stirring continuously after each addition. Once the curd blends into the masala, cook for 4–5 minutes till the oil starts to separate." },
      { title: "Simmer until tender", body: "Add hot water and green chillies. Cover and simmer for 18–22 minutes, stirring once or twice. Check that the thickest chicken piece reaches 74°C / 165°F. Add garam masala and coriander, then rest for 5 minutes." }
    ],
    notes: ["Use full-fat, slightly sour curd for a balanced gravy.", "Whisk curd well and add it on low heat to reduce the chance of splitting.", "If the gravy becomes too sharp, balance it with a small pinch of sugar rather than extra cream."],
    serveWith: ["Phulka", "Jeera rice", "Paratha"]
  },
  {
    slug: "chicken-yakhni-pulao",
    name: "Chicken Yakhni Pulao",
    native: "Murgh Yakhni Pulao",
    subtitle: "Fragrant basmati rice cooked in a whole-spice chicken stock with mint and fried onions.",
    region: "Awadh",
    origin: "Awadh, Uttar Pradesh",
    heat: 1,
    prep: 30,
    cook: 50,
    serves: 4,
    variant: "rice",
    palette: { bg: "#eee4d2", curry: "#c2a46c", deep: "#856b3f", piece: "#d7b88d", garnish: "#4d704d", accent: "#ead8a8" },
    story: "Yakhni pulao gets its aroma from stock made by simmering chicken with whole spices. The rice is cooked in this strained stock, so the flavour reaches every grain without the heavy layering of biryani.",
    tags: ["One-pot rice", "Awadhi", "Mild"],
    ingredients: [
      { title: "For the yakhni stock", items: ["700 g bone-in chicken", "1.2 litres water", "1 onion, quartered", "1 inch ginger, sliced", "6 garlic cloves", "1 tsp fennel seeds", "1 tsp coriander seeds", "1 bay leaf", "1 small cinnamon stick", "4 green cardamom", "5 cloves", "8 black peppercorns", "1 tsp salt"] },
      { title: "For the pulao", items: ["300 g aged basmati rice, washed and soaked 25 minutes", "2 tbsp ghee", "1 tbsp oil", "1 large onion, thinly sliced", "1 tsp cumin seeds", "2 green chillies, slit", "½ cup thick curd, whisked", "2 tbsp mint leaves", "2 tbsp coriander leaves", "About 550–650 ml strained yakhni, as needed", "Salt to taste"] }
    ],
    steps: [
      { title: "Make the stock", body: "Tie fennel, coriander, bay leaf, cinnamon, cardamom, cloves and peppercorns in a clean muslin cloth. Add to a pot with chicken, water, onion, ginger, garlic and salt. Simmer gently for 25–30 minutes, until chicken is cooked. Lift out the chicken and strain the stock." },
      { title: "Prepare the rice", body: "Drain the soaked rice. Measure 550 ml stock to start; keep extra hot stock ready in case it is needed. Remove the chicken from the bones if you prefer, or keep the pieces whole." },
      { title: "Fry the onion and chicken", body: "Heat ghee and oil in a heavy pot. Add cumin and sliced onion; fry till golden. Add green chillies and cooked chicken. Stir gently for 2 minutes." },
      { title: "Coat with curd and herbs", body: "Lower the flame and add whisked curd, mint and coriander. Stir until the curd blends into the juices. Add drained rice and turn gently so the grains are coated." },
      { title: "Cook the pulao", body: "Add the measured hot yakhni and check salt; the liquid should taste slightly saltier than you want the finished rice. Bring to a boil, cover tightly and cook on the lowest flame for 12–15 minutes. Switch off and keep covered for 10 minutes. Fluff gently and check the chicken is fully cooked through before serving." }
    ],
    notes: ["Stock yield varies with simmering; use the rice packet's absorption guidance and add hot stock gradually if needed.", "Do not stir the rice repeatedly after it begins cooking, or the grains may break.", "For a cleaner stock, skim the surface during simmering and strain through a fine sieve."],
    serveWith: ["Burani raita", "Kachumber", "Mirchi ka salan"]
  },
  {
    slug: "mangalorean-kori-gassi",
    name: "Mangalorean Kori Gassi",
    native: "Kori Gassi",
    subtitle: "Coastal chicken curry with roasted coconut, Byadgi chillies, tamarind and a deep red masala.",
    region: "Karnataka",
    origin: "Tulu Nadu, coastal Karnataka",
    heat: 2,
    prep: 25,
    cook: 45,
    serves: 4,
    variant: "curry",
    palette: { bg: "#eadcc9", curry: "#a74725", deep: "#672b19", piece: "#d6a174", garnish: "#4c6b47", accent: "#dfb56e" },
    story: "Kori gassi is a Tulu-style coastal chicken curry. Its signature comes from roasted coconut and a masala built with dried red chillies, coriander and tamarind. The curry is rich, tangy and usually served with rice-based accompaniments.",
    tags: ["Coastal Karnataka", "Coconut", "Tamarind"],
    ingredients: [
      { title: "For the chicken", items: ["800 g chicken, bone-in pieces", "½ tsp turmeric", "1 tsp salt", "1 tbsp ginger-garlic paste"] },
      { title: "For the roasted masala", items: ["1 cup freshly grated coconut", "6 Byadgi dried red chillies", "1 tsp coriander seeds", "½ tsp cumin seeds", "¼ tsp fenugreek seeds", "6 black peppercorns", "4 cloves", "1 small cinnamon stick", "1 small onion, sliced", "1 tsp tamarind paste"] },
      { title: "For the curry", items: ["2 tbsp coconut oil", "1 medium onion, finely sliced", "10 curry leaves", "400–500 ml hot water", "Salt to taste"] }
    ],
    steps: [
      { title: "Season the chicken", body: "Mix chicken with turmeric, salt and ginger-garlic paste. Keep aside for 20 minutes." },
      { title: "Roast the masala ingredients", body: "In a dry pan, roast the coconut till golden in patches; transfer to a plate. Roast chillies, coriander, cumin, fenugreek, pepper, cloves and cinnamon briefly till fragrant. Fry the small onion in a little oil till soft." },
      { title: "Grind the gassi paste", body: "Grind the roasted coconut, spices, fried onion and tamarind with enough water to make a smooth, thick paste. Taste the paste; it should be aromatic with a clear sour note." },
      { title: "Cook the chicken", body: "Heat coconut oil in a heavy pot. Add sliced onion and curry leaves; cook till the onion softens. Add chicken and fry for 6–8 minutes. Add the ground masala and fry on medium-low heat for 4 minutes." },
      { title: "Simmer the curry", body: "Add 400 ml hot water, cover and simmer for 20–25 minutes, stirring occasionally. Add more water for a thinner curry. Check the thickest chicken piece reaches 74°C / 165°F, adjust salt and rest for 5 minutes." }
    ],
    notes: ["Byadgi chillies give deep colour with moderate heat; use fewer if using a hotter variety.", "Roast coconut slowly. Burnt coconut makes the gravy bitter.", "Tamarind strength varies; start with the listed amount and adjust after simmering."],
    serveWith: ["Neer dosa", "Kori rotti", "Steamed rice"]
  },
  {
    slug: "andhra-gongura-chicken",
    name: "Andhra Gongura Chicken",
    native: "Gongura Kodi Kura",
    subtitle: "A tangy Andhra chicken curry where sorrel leaves bring a sharp, savoury finish to chilli masala.",
    region: "Andhra Pradesh",
    origin: "Andhra Pradesh",
    heat: 3,
    prep: 20,
    cook: 40,
    serves: 4,
    variant: "curry",
    palette: { bg: "#e5e4d3", curry: "#78804a", deep: "#424b2d", piece: "#d4a47a", garnish: "#4c6b47", accent: "#c7c78a" },
    story: "Gongura, or sorrel leaves, are prized in Andhra cooking for their strong sourness. In this curry the leaves are cooked down separately and folded into a chilli-forward chicken masala, giving the dish its distinctive tang.",
    tags: ["Andhra", "Sour and spicy", "Gongura"],
    ingredients: [
      { title: "For the chicken", items: ["800 g chicken, medium pieces", "1 tbsp ginger-garlic paste", "½ tsp turmeric", "1 tsp chilli powder", "¾ tsp salt"] },
      { title: "For the gongura", items: ["250 g gongura leaves, stems removed and washed", "1 tbsp oil", "3 green chillies"] },
      { title: "For the masala", items: ["3 tbsp oil", "2 medium onions, finely chopped", "1 tsp mustard seeds", "½ tsp cumin seeds", "2 dried red chillies", "½ tsp coriander powder", "½ tsp roasted cumin powder", "½ tsp garam masala", "150 ml hot water", "8 curry leaves"] }
    ],
    steps: [
      { title: "Season the chicken", body: "Mix chicken with ginger-garlic paste, turmeric, chilli powder and salt. Keep aside for 20 minutes." },
      { title: "Cook the gongura", body: "Heat 1 tbsp oil in a pan. Add gongura leaves and green chillies. Cook till the leaves collapse and become soft, about 6–8 minutes. Cool and grind or mash to a coarse paste." },
      { title: "Build the onion masala", body: "Heat oil in a kadai. Add mustard seeds, cumin, dried red chillies and curry leaves. When they crackle, add onions and cook till golden. Add coriander and roasted cumin powders." },
      { title: "Cook the chicken", body: "Add chicken and fry on medium-high heat for 7–8 minutes till the outside turns opaque. Add hot water, cover and simmer for 18–20 minutes, stirring once or twice." },
      { title: "Add gongura and finish", body: "Stir in the cooked gongura paste and garam masala. Simmer uncovered for 5–7 minutes so the sourness blends into the gravy. Check the thickest chicken piece reaches 74°C / 165°F, then adjust salt and rest for 5 minutes." }
    ],
    notes: ["Gongura is naturally sour; taste before adding lemon or tamarind.", "Red-stemmed gongura is often more sour than green-stemmed varieties.", "If fresh gongura is unavailable, do not replace it with spinach alone; the distinctive sour flavour will be missing."],
    serveWith: ["Steamed rice", "Jonna roti", "Onion salad"]
  },
  {
    slug: "chicken-cafreal",
    name: "Goan Chicken Cafreal",
    native: "Galinha Cafreal",
    subtitle: "Chicken coated in a fresh coriander, mint, green chilli and vinegar masala, then pan-roasted till browned.",
    region: "Goa",
    origin: "Goa",
    heat: 2,
    prep: 30,
    cook: 30,
    serves: 4,
    variant: "grill",
    palette: { bg: "#e3e8d9", curry: "#647b4d", deep: "#394b31", piece: "#d4b087", garnish: "#456141", accent: "#c7d19a" },
    story: "Cafreal is a Goan preparation with Portuguese-influenced roots. Chicken is coated in a vivid green masala with coriander, green chilli, garlic and vinegar, then cooked till the outside is browned and the inside stays juicy.",
    tags: ["Goan", "Green masala", "Pan roast"],
    ingredients: [
      { title: "For the cafreal paste", items: ["1½ cups coriander leaves", "½ cup mint leaves", "6 garlic cloves", "1 inch ginger", "3–4 green chillies", "1 tsp cumin seeds", "6 peppercorns", "4 cloves", "½ tsp cinnamon powder", "2 tbsp vinegar", "1 tbsp lemon juice", "½ tsp sugar", "¾ tsp salt"] },
      { title: "For the chicken", items: ["900 g chicken leg quarters or thighs, deep slashes made", "2 tbsp oil", "1 tbsp butter, optional", "2 medium potatoes, boiled and pan-fried, to serve", "Lime wedges and onion rings"] }
    ],
    steps: [
      { title: "Make the green masala", body: "Grind coriander, mint, garlic, ginger, green chillies, cumin, pepper, cloves, cinnamon, vinegar, lemon juice, sugar and salt to a thick paste. Use only a little water if needed." },
      { title: "Marinate the chicken", body: "Rub the paste into the chicken, working it into the slashes. Cover and refrigerate for at least 2 hours, preferably 4 hours. Keep a spoonful of clean paste aside before it touches raw chicken if you want extra sauce." },
      { title: "Brown the chicken", body: "Heat oil in a heavy pan. Wipe off only excess marinade and reserve it in the bowl with the raw chicken; do not use it as a finishing sauce unless fully cooked. Brown the chicken on all sides over medium heat." },
      { title: "Cook through", body: "Lower the flame, add 2–3 tbsp water and cover. Cook for 18–22 minutes, turning once or twice. Add a splash of water if the masala catches. Uncover and roast till the outside is well browned." },
      { title: "Check and serve", body: "Check the thickest part reaches 74°C / 165°F. If using the reserved marinade, boil it thoroughly in the pan before serving. Finish with optional butter and serve with fried potatoes, onion and lime." }
    ],
    notes: ["The paste should be thick enough to cling to the chicken; excess water makes it difficult to brown.", "Use vinegar gradually because its sharpness varies by brand.", "Never use marinade that touched raw chicken as a cold dip or garnish."],
    serveWith: ["Pan-fried potatoes", "Pao", "Green salad"]
  }
,
  {
    "slug": "nagaland-axone-chicken",
    "name": "Naga Axone Chicken",
    "native": "Axone Chicken",
    "subtitle": "Fermented soybean, smoked chilli and ginger create a pungent, savoury Naga-style curry.",
    "region": "Nagaland",
    "origin": "Nagaland",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "Fermented soybean, smoked chilli and ginger create a pungent, savoury Naga-style curry.",
    "tags": [
      "Nagaland",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g bone-in chicken",
          "2 tbsp axone (fermented soybean), mashed",
          "1 onion, sliced",
          "1 tomato, chopped",
          "1 tbsp ginger, crushed",
          "6 garlic cloves, crushed",
          "2 smoked dried chillies",
          "2 tbsp mustard oil",
          "300 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Mash axone with warm water; taste first because its salt and pungency vary."
      },
      {
        "title": "Build the base",
        "body": "Heat mustard oil and sear chicken with salt for 7 minutes; remove."
      },
      {
        "title": "Cook the chicken",
        "body": "Fry onion, ginger and garlic until soft, then add axone and cook gently for 3 minutes."
      },
      {
        "title": "Simmer or roast",
        "body": "Return chicken, add tomato, smoked chilli and hot water. Cover and simmer 22–25 minutes."
      },
      {
        "title": "Finish and check",
        "body": "Check the thickest piece reaches 74°C / 165°F; adjust seasoning and finish with spring onion."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Steamed rice",
      "Boiled greens"
    ]
  },
  {
    "slug": "assamese-chicken-tenga",
    "name": "Assamese Chicken Tenga",
    "native": "Chicken Tenga",
    "subtitle": "A light sour broth with chicken, tomato, potato and lemon, inspired by Assamese tenga cooking.",
    "region": "Assam",
    "origin": "Assam",
    "heat": 1,
    "prep": 15,
    "cook": 35,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A light sour broth with chicken, tomato, potato and lemon, inspired by Assamese tenga cooking.",
    "tags": [
      "Assam",
      "soup",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "700 g chicken, small bone-in pieces",
          "1 potato, cubed",
          "1 tomato, sliced",
          "1 tsp ginger paste",
          "1 tsp panch phoron",
          "1 tbsp mustard oil",
          "2 green chillies",
          "700 ml water",
          "1½ tbsp lemon juice",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Rub chicken with ginger and salt for 15 minutes; cut potato and tomato."
      },
      {
        "title": "Build the base",
        "body": "Heat mustard oil, add panch phoron and let it crackle briefly."
      },
      {
        "title": "Cook the chicken",
        "body": "Add tomato, potato and chicken; turn for 5 minutes until chicken loses its raw surface colour."
      },
      {
        "title": "Simmer or roast",
        "body": "Add water and green chillies; simmer gently for 20–25 minutes until potato is tender."
      },
      {
        "title": "Finish and check",
        "body": "Verify chicken reaches 74°C / 165°F; turn off heat, add lemon gradually and finish with coriander."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Steamed rice",
      "Boiled vegetables"
    ]
  },
  {
    "slug": "tripura-chicken-mosdeng",
    "name": "Tripuri Chilli-Garlic Chicken",
    "native": "Wahan Mosdeng-inspired Chicken",
    "subtitle": "A coarse, fiery chicken preparation with roasted chilli, garlic and tomato, inspired by Tripuri mosdeng flavours.",
    "region": "Tripura",
    "origin": "Tripura",
    "heat": 3,
    "prep": 20,
    "cook": 30,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A coarse, fiery chicken preparation with roasted chilli, garlic and tomato, inspired by Tripuri mosdeng flavours.",
    "tags": [
      "Tripura",
      "dry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "700 g boneless chicken thigh, diced",
          "5 dried red chillies",
          "8 garlic cloves",
          "1 onion, chopped",
          "2 tomatoes",
          "1 tbsp mustard oil",
          "½ tsp turmeric",
          "¾ tsp salt",
          "1 tbsp lemon juice"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Soak dried chillies in warm water for 10 minutes; pound with garlic to a coarse paste."
      },
      {
        "title": "Build the base",
        "body": "Heat mustard oil; add chicken, turmeric and salt, then brown for 7–8 minutes."
      },
      {
        "title": "Cook the chicken",
        "body": "Add tomatoes and cook until softened; mash them into the chicken."
      },
      {
        "title": "Simmer or roast",
        "body": "Add chilli-garlic paste and onion; cook 6–8 minutes, stirring so garlic cooks through."
      },
      {
        "title": "Finish and check",
        "body": "Check chicken reaches 74°C / 165°F; finish with lemon and coriander, keeping the texture coarse."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Steamed rice",
      "Boiled greens"
    ]
  },
  {
    "slug": "meghalaya-herb-chicken",
    "name": "Meghalaya Herb Chicken",
    "native": "Khasi-style Herb Chicken",
    "subtitle": "A peppery Khasi-inspired chicken stew with ginger, spring onion and a clean aromatic broth.",
    "region": "Meghalaya",
    "origin": "Meghalaya",
    "heat": 2,
    "prep": 15,
    "cook": 35,
    "serves": 4,
    "variant": "soup",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A peppery Khasi-inspired chicken stew with ginger, spring onion and a clean aromatic broth.",
    "tags": [
      "Meghalaya",
      "soup",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g bone-in chicken",
          "1 tbsp ginger, julienned",
          "6 garlic cloves, crushed",
          "1 tsp black pepper, crushed",
          "1 onion, sliced",
          "2 green chillies",
          "750 ml chicken stock",
          "1 cup cabbage, sliced",
          "2 spring onions",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Season chicken with ginger, garlic, pepper and salt for 15 minutes."
      },
      {
        "title": "Build the base",
        "body": "Heat a little oil; soften onion and green chillies for 3 minutes."
      },
      {
        "title": "Cook the chicken",
        "body": "Add chicken and turn for 5 minutes, then pour in stock and bring to a gentle boil."
      },
      {
        "title": "Simmer or roast",
        "body": "Cover and simmer 20 minutes; add cabbage and cook another 5–7 minutes."
      },
      {
        "title": "Finish and check",
        "body": "Check chicken reaches 74°C / 165°F; finish with spring onion and coriander."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Red rice",
      "Steamed rice"
    ]
  },
  {
    "slug": "uttarakhand-chainsoo-chicken",
    "name": "Uttarakhand Chainsoo Chicken",
    "native": "Chainsoo-inspired Murgh",
    "subtitle": "A Garhwali-inspired chicken curry thickened with roasted black urad dal, cumin and garlic.",
    "region": "Uttarakhand",
    "origin": "Uttarakhand",
    "heat": 2,
    "prep": 20,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A Garhwali-inspired chicken curry thickened with roasted black urad dal, cumin and garlic.",
    "tags": [
      "Uttarakhand",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "750 g bone-in chicken",
          "70 g whole black urad dal",
          "1 onion, chopped",
          "1 tomato, chopped",
          "1 tbsp ginger-garlic paste",
          "1 tsp cumin seeds",
          "1 tsp coriander powder",
          "½ tsp chilli powder",
          "2 tbsp mustard oil",
          "500 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Dry-roast urad dal over low heat for 8–10 minutes until aromatic; cool and grind coarsely."
      },
      {
        "title": "Build the base",
        "body": "Heat mustard oil, add cumin and onion, and fry until golden; add ginger-garlic."
      },
      {
        "title": "Cook the chicken",
        "body": "Add chicken, turmeric and salt; sear for 6 minutes, then add tomato and coriander powder."
      },
      {
        "title": "Simmer or roast",
        "body": "Whisk ground urad into the pot gradually and add hot water while stirring to prevent lumps."
      },
      {
        "title": "Finish and check",
        "body": "Cover and simmer 25–30 minutes, stirring often; verify chicken reaches 74°C / 165°F and loosen with hot water if needed."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Mandua roti",
      "Steamed rice"
    ]
  },
  {
    "slug": "sindhi-chicken-sai-bhaji",
    "name": "Sindhi Chicken Sai Bhaji",
    "native": "Sai Bhaji Murgh",
    "subtitle": "A hearty one-pot combination of chicken, spinach, dill, chana dal and vegetables.",
    "region": "Sindh",
    "origin": "Sindh",
    "heat": 1,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A hearty one-pot combination of chicken, spinach, dill, chana dal and vegetables.",
    "tags": [
      "Sindh",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "600 g boneless chicken thigh",
          "150 g spinach, chopped",
          "½ cup dill leaves",
          "¼ cup chana dal, soaked",
          "1 small brinjal, diced",
          "1 tomato, chopped",
          "1 onion, chopped",
          "1 tbsp ginger-garlic paste",
          "2 tbsp oil",
          "500 ml water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Drain soaked chana dal; wash spinach and dill thoroughly and chop the greens."
      },
      {
        "title": "Build the base",
        "body": "Heat oil; cook onion and ginger-garlic until fragrant, then add tomato."
      },
      {
        "title": "Cook the chicken",
        "body": "Add dal, brinjal, spinach, dill and water; simmer 15 minutes until dal begins to soften."
      },
      {
        "title": "Simmer or roast",
        "body": "Add chicken and salt; simmer uncovered for 12–15 minutes, stirring so greens do not stick."
      },
      {
        "title": "Finish and check",
        "body": "Check chicken reaches 74°C / 165°F and dal is soft; mash some vegetables to thicken."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Sindhi koki",
      "Steamed rice"
    ]
  },
  {
    "slug": "malvani-chicken-rassa",
    "name": "Malvani Chicken Rassa",
    "native": "Malvani Kombdi Rassa",
    "subtitle": "A coastal curry with roasted coconut, Malvani spices and kokum for a deep, tangy gravy.",
    "region": "Maharashtra",
    "origin": "Maharashtra",
    "heat": 3,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A coastal curry with roasted coconut, Malvani spices and kokum for a deep, tangy gravy.",
    "tags": [
      "Maharashtra",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g bone-in chicken",
          "¾ cup grated coconut",
          "6 dried red chillies",
          "1 tbsp coriander seeds",
          "1 tsp cumin seeds",
          "½ tsp fennel seeds",
          "1 onion, sliced",
          "2 tbsp coconut oil",
          "3 kokum petals",
          "500 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Dry-roast coconut until golden; separately roast chillies, coriander, cumin and fennel until fragrant."
      },
      {
        "title": "Build the base",
        "body": "Fry onion until golden, then grind with roasted coconut and spices to a smooth paste."
      },
      {
        "title": "Cook the chicken",
        "body": "Heat coconut oil; sear chicken with salt for 7 minutes."
      },
      {
        "title": "Simmer or roast",
        "body": "Add ground masala and fry 5 minutes; pour in hot water and add kokum."
      },
      {
        "title": "Finish and check",
        "body": "Cover and simmer 22–25 minutes; check chicken reaches 74°C / 165°F and adjust sourness."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Vade",
      "Steamed rice"
    ]
  },
  {
    "slug": "thalassery-chicken-biryani",
    "name": "Thalassery Chicken Biryani",
    "native": "Thalassery Kozhi Biriyani",
    "subtitle": "Malabar biryani with jeerakasala rice, a separately cooked chicken masala and a short dum finish.",
    "region": "Kerala",
    "origin": "Kerala",
    "heat": 2,
    "prep": 40,
    "cook": 55,
    "serves": 4,
    "variant": "rice",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "Malabar biryani with jeerakasala rice, a separately cooked chicken masala and a short dum finish.",
    "tags": [
      "Kerala",
      "rice",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "900 g chicken",
          "500 g jeerakasala rice",
          "3 onions, sliced",
          "2 tomatoes, chopped",
          "2 tbsp ginger-garlic paste",
          "½ cup curd",
          "3 green chillies",
          "½ cup mint and coriander",
          "3 tbsp coconut oil",
          "3 tbsp ghee",
          "4 cardamom",
          "4 cloves",
          "1 cinnamon stick",
          "850 ml water, adjust to rice",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with curd, turmeric, coriander powder and salt for 30 minutes; wash rice."
      },
      {
        "title": "Build the base",
        "body": "Fry onions in coconut oil until golden; add ginger-garlic, chillies and tomatoes, cooking until soft."
      },
      {
        "title": "Cook the chicken",
        "body": "Add chicken, garam masala and herbs; cover and cook 20–25 minutes until chicken reaches 74°C / 165°F. Reduce excess liquid."
      },
      {
        "title": "Simmer or roast",
        "body": "In another pot heat ghee and whole spices; add rice and measured water, then cook until just tender using the rice's absorption guidance."
      },
      {
        "title": "Finish and check",
        "body": "Layer rice over chicken, seal and dum on the lowest flame for 8–10 minutes; rest sealed 10 minutes."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Cucumber raita",
      "Coconut chammanthi"
    ]
  },
  {
    "slug": "arcot-chicken-kurma",
    "name": "Arcot Chicken Kurma",
    "native": "Arcot Kozhi Kurma",
    "subtitle": "A mild kurma with coconut, poppy seeds, roasted gram, fennel and green chillies.",
    "region": "Tamil Nadu",
    "origin": "Tamil Nadu",
    "heat": 1,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A mild kurma with coconut, poppy seeds, roasted gram, fennel and green chillies.",
    "tags": [
      "Tamil Nadu",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g bone-in chicken",
          "½ cup grated coconut",
          "1 tbsp poppy seeds, soaked",
          "1 tbsp roasted gram",
          "1 tsp fennel seeds",
          "3 green chillies",
          "8 cashews, soaked",
          "1 onion, sliced",
          "1 tomato, chopped",
          "2 tbsp oil",
          "1 tbsp ghee",
          "300 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Grind coconut, soaked poppy seeds, roasted gram, fennel, chillies and cashews with water until smooth."
      },
      {
        "title": "Build the base",
        "body": "Heat oil and ghee; temper cardamom and cinnamon, then soften onion."
      },
      {
        "title": "Cook the chicken",
        "body": "Add tomato and chicken with salt; sear for 6–7 minutes."
      },
      {
        "title": "Simmer or roast",
        "body": "Stir in the ground paste and hot water; cover and simmer 20–25 minutes, stirring occasionally."
      },
      {
        "title": "Finish and check",
        "body": "Check chicken reaches 74°C / 165°F; adjust water for a creamy, pourable kurma and finish with coriander."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Parotta",
      "Idiyappam"
    ]
  },
  {
    "slug": "telangana-chicken-pulusu",
    "name": "Telangana Chicken Pulusu",
    "native": "Kodi Pulusu",
    "subtitle": "A tangy tamarind chicken curry balanced with roasted sesame, coriander and curry leaves.",
    "region": "Telangana",
    "origin": "Telangana",
    "heat": 3,
    "prep": 20,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A tangy tamarind chicken curry balanced with roasted sesame, coriander and curry leaves.",
    "tags": [
      "Telangana",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g chicken",
          "2 tbsp sesame seeds",
          "1 tbsp coriander seeds",
          "1 tsp cumin seeds",
          "1 onion, chopped",
          "1 tomato, chopped",
          "2 tbsp tamarind pulp",
          "8 curry leaves",
          "2 tbsp oil",
          "400 ml hot water",
          "1 tsp jaggery, optional",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Dry-roast sesame, coriander and cumin separately; cool and grind finely."
      },
      {
        "title": "Build the base",
        "body": "Heat oil; add curry leaves and onion, cooking until golden. Add tomato and soften."
      },
      {
        "title": "Cook the chicken",
        "body": "Add chicken and salt; sear for 7 minutes until the surface turns opaque."
      },
      {
        "title": "Simmer or roast",
        "body": "Stir in ground sesame masala and tamarind pulp, add hot water and simmer covered for 20–25 minutes."
      },
      {
        "title": "Finish and check",
        "body": "Check chicken reaches 74°C / 165°F; balance sourness with a little jaggery only if needed."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Steamed rice",
      "Jowar roti"
    ]
  },
  {
    "slug": "bengali-chicken-rezala",
    "name": "Bengali Chicken Rezala",
    "native": "Murgh Rezala",
    "subtitle": "A pale Kolkata-style chicken curry with yoghurt, poppy seeds, cashews and aromatic whole spices.",
    "region": "West Bengal",
    "origin": "West Bengal",
    "heat": 1,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A pale Kolkata-style chicken curry with yoghurt, poppy seeds, cashews and aromatic whole spices.",
    "tags": [
      "West Bengal",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g bone-in chicken",
          "150 g thick yoghurt",
          "1 tbsp ginger paste",
          "1 tbsp garlic paste",
          "2 tbsp poppy seeds, soaked",
          "12 cashews, soaked",
          "3 tbsp ghee",
          "1 small onion, sliced",
          "4 cardamom",
          "4 cloves",
          "1 cinnamon stick",
          "2 green chillies",
          "150 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with yoghurt, ginger, garlic and salt for 1 hour."
      },
      {
        "title": "Build the base",
        "body": "Grind soaked poppy seeds and cashews with a little water to a completely smooth paste."
      },
      {
        "title": "Cook the chicken",
        "body": "Heat ghee; add whole spices and onion, cooking until soft and translucent without deep browning."
      },
      {
        "title": "Simmer or roast",
        "body": "Add chicken and marinade; cook 8 minutes, then stir in nut paste and green chillies."
      },
      {
        "title": "Finish and check",
        "body": "Add hot water, cover and simmer 20–25 minutes; check chicken reaches 74°C / 165°F and finish with a few drops of kewra if desired."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Roomali roti",
      "Light pulao"
    ]
  },
  {
    "slug": "lucknowi-chicken-korma",
    "name": "Lucknowi Chicken Korma",
    "native": "Awadhi Murgh Korma",
    "subtitle": "A gentle Awadhi korma with browned onion, yoghurt, saffron and warm whole spices.",
    "region": "Awadh",
    "origin": "Awadh",
    "heat": 1,
    "prep": 25,
    "cook": 45,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A gentle Awadhi korma with browned onion, yoghurt, saffron and warm whole spices.",
    "tags": [
      "Awadh",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g bone-in chicken",
          "180 g thick yoghurt",
          "2 onions, sliced",
          "10 cashews, soaked",
          "3 tbsp ghee",
          "4 cardamom",
          "4 cloves",
          "1 cinnamon stick",
          "1 bay leaf",
          "1 tbsp ginger-garlic paste",
          "1 tsp coriander powder",
          "A pinch of saffron in 2 tbsp warm milk",
          "250 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with yoghurt, ginger-garlic paste and salt for 30 minutes."
      },
      {
        "title": "Build the base",
        "body": "Fry onions slowly in ghee until deep golden; grind half with soaked cashews and a little water."
      },
      {
        "title": "Cook the chicken",
        "body": "Add whole spices to the remaining ghee; fry for 30 seconds."
      },
      {
        "title": "Simmer or roast",
        "body": "Add chicken and marinade, cook 8 minutes, then stir in onion-cashew paste, coriander and hot water."
      },
      {
        "title": "Finish and check",
        "body": "Cover and simmer 22–25 minutes; check chicken reaches 74°C / 165°F, add saffron milk and reserved onions."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Sheermal",
      "Roomali roti"
    ]
  },
  {
    "slug": "punjabi-tandoori-chicken-legs",
    "name": "Punjabi Tandoori Chicken Legs",
    "native": "Tandoori Tangdi",
    "subtitle": "Deep-slashed chicken legs roasted hot in a spiced yoghurt and mustard-oil marinade.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 2,
    "prep": 30,
    "cook": 40,
    "serves": 4,
    "variant": "grill",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "Deep-slashed chicken legs roasted hot in a spiced yoghurt and mustard-oil marinade.",
    "tags": [
      "Punjab",
      "grill",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "4 chicken leg quarters, about 1.2 kg",
          "180 g thick yoghurt",
          "1 tbsp lemon juice",
          "1 tbsp ginger-garlic paste",
          "2 tsp Kashmiri chilli powder",
          "1 tsp cumin powder",
          "1 tsp coriander powder",
          "½ tsp garam masala",
          "½ tsp turmeric",
          "1 tbsp mustard oil",
          "1 tsp salt",
          "1 tbsp melted butter"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Make deep slashes in the legs; rub with lemon, ginger-garlic and salt for 15 minutes."
      },
      {
        "title": "Build the base",
        "body": "Whisk yoghurt with chilli, cumin, coriander, garam masala, turmeric and mustard oil."
      },
      {
        "title": "Cook the chicken",
        "body": "Coat chicken thoroughly and refrigerate at least 4 hours, preferably overnight."
      },
      {
        "title": "Simmer or roast",
        "body": "Roast on a rack at 220°C for 30–35 minutes, turning once and brushing with butter."
      },
      {
        "title": "Finish and check",
        "body": "Grill briefly for char; verify the thickest part reaches 74°C / 165°F and rest 5 minutes."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Mint chutney",
      "Laccha onion"
    ]
  },
  {
    "slug": "bombay-chicken-keema",
    "name": "Bombay Chicken Keema",
    "native": "Mumbai Murgh Keema",
    "subtitle": "A quick minced chicken masala with peas, tomato, pav-bhaji spices and fresh lime.",
    "region": "Maharashtra",
    "origin": "Maharashtra",
    "heat": 2,
    "prep": 15,
    "cook": 25,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A quick minced chicken masala with peas, tomato, pav-bhaji spices and fresh lime.",
    "tags": [
      "Maharashtra",
      "dry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "600 g chicken mince",
          "2 tbsp oil",
          "1 tsp cumin seeds",
          "1 large onion, chopped",
          "1 tbsp ginger-garlic paste",
          "2 tomatoes, chopped",
          "½ cup green peas",
          "1 tsp pav bhaji masala",
          "½ tsp chilli powder",
          "½ tsp turmeric",
          "100 ml water",
          "¾ tsp salt",
          "2 tbsp coriander leaves",
          "1 tsp lemon juice"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Break up chicken mince with a fork; chop onion and tomato finely."
      },
      {
        "title": "Build the base",
        "body": "Heat oil, add cumin and onion, and cook until golden; add ginger-garlic paste."
      },
      {
        "title": "Cook the chicken",
        "body": "Add tomato, turmeric, chilli and pav bhaji masala; cook until tomato softens."
      },
      {
        "title": "Simmer or roast",
        "body": "Add mince, break up lumps and fry 6–8 minutes; add peas and water, cover 8–10 minutes."
      },
      {
        "title": "Finish and check",
        "body": "Ensure mince reaches 74°C / 165°F throughout; reduce to a moist masala and finish with coriander and lemon."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Pav",
      "Paratha"
    ]
  },
  {
    "slug": "kolkata-chicken-kathi-roll",
    "name": "Kolkata Chicken Kathi Roll",
    "native": "Chicken Kathi Roll",
    "subtitle": "Kolkata street-style spiced chicken strips wrapped in paratha with onion, green chilli and lime.",
    "region": "West Bengal",
    "origin": "West Bengal",
    "heat": 2,
    "prep": 25,
    "cook": 20,
    "serves": 4,
    "variant": "grill",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "Kolkata street-style spiced chicken strips wrapped in paratha with onion, green chilli and lime.",
    "tags": [
      "West Bengal",
      "grill",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "600 g boneless chicken thigh, thin strips",
          "100 g thick yoghurt",
          "1 tbsp ginger-garlic paste",
          "1 tsp Kashmiri chilli powder",
          "½ tsp cumin powder",
          "½ tsp garam masala",
          "1 tbsp mustard oil",
          "4 parathas",
          "1 onion, sliced",
          "2 green chillies",
          "1 lemon",
          "1 tbsp chaat masala",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Mix chicken with yoghurt, ginger-garlic, chilli, cumin, garam masala, mustard oil and salt; rest 20 minutes."
      },
      {
        "title": "Build the base",
        "body": "Heat a wide skillet; sear chicken in a single layer for 3–4 minutes, then toss and cook through."
      },
      {
        "title": "Cook the chicken",
        "body": "Lower heat and reduce the yoghurt coating until it clings; check chicken reaches 74°C / 165°F."
      },
      {
        "title": "Simmer or roast",
        "body": "Cook parathas on a tawa until golden on both sides; keep warm."
      },
      {
        "title": "Finish and check",
        "body": "Fill each paratha with chicken, onion, chilli, chaat masala and lemon; roll tightly and serve."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Mint chutney",
      "Masala chai"
    ]
  },
  {
    "slug": "hyderabadi-chicken-65-boneless",
    "name": "Hyderabadi Boneless Chicken 65",
    "native": "Chicken 65",
    "subtitle": "Crisp yoghurt-marinated chicken bites tossed with curry leaves, garlic and green chilli.",
    "region": "Hyderabad",
    "origin": "Hyderabad",
    "heat": 3,
    "prep": 30,
    "cook": 20,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "Crisp yoghurt-marinated chicken bites tossed with curry leaves, garlic and green chilli.",
    "tags": [
      "Hyderabad",
      "dry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "700 g boneless chicken thigh, 3 cm cubes",
          "100 g thick yoghurt",
          "1 tbsp ginger-garlic paste",
          "1 tsp chilli powder",
          "½ tsp turmeric",
          "2 tbsp cornflour",
          "2 tbsp rice flour",
          "1 tbsp lemon juice",
          "Oil for deep frying",
          "15 curry leaves",
          "3 green chillies",
          "4 garlic cloves, sliced",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Marinate chicken with yoghurt, ginger-garlic, chilli, turmeric, lemon and salt for 30 minutes."
      },
      {
        "title": "Build the base",
        "body": "Stir cornflour and rice flour into the chicken just before frying; coating should cling."
      },
      {
        "title": "Cook the chicken",
        "body": "Fry in batches at 170–175°C for 5–7 minutes until golden and the thickest pieces reach 74°C / 165°F."
      },
      {
        "title": "Simmer or roast",
        "body": "Heat 2 tbsp oil in a wok; fry garlic, curry leaves and green chillies until fragrant."
      },
      {
        "title": "Finish and check",
        "body": "Toss fried chicken through the tempering and serve immediately."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Onion rings",
      "Lemon wedges"
    ]
  },
  {
    "slug": "chicken-saag-korma",
    "name": "Chicken Saag Korma",
    "native": "Palak Murgh Korma",
    "subtitle": "A mild spinach chicken curry enriched with yoghurt, cashew and warming whole spices.",
    "region": "Punjab",
    "origin": "Punjab",
    "heat": 1,
    "prep": 20,
    "cook": 35,
    "serves": 4,
    "variant": "curry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A mild spinach chicken curry enriched with yoghurt, cashew and warming whole spices.",
    "tags": [
      "Punjab",
      "curry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "750 g boneless chicken thigh",
          "250 g spinach",
          "½ cup yoghurt",
          "10 cashews, soaked",
          "1 onion, sliced",
          "1 tbsp ginger-garlic paste",
          "1 tsp cumin seeds",
          "½ tsp coriander powder",
          "½ tsp garam masala",
          "1 tbsp oil",
          "1 tbsp ghee",
          "100 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Blanch spinach for 1 minute, cool in cold water, drain and blend to a smooth purée."
      },
      {
        "title": "Build the base",
        "body": "Grind soaked cashews with 2 tbsp water until smooth."
      },
      {
        "title": "Cook the chicken",
        "body": "Heat oil and ghee; add cumin and onion, cooking until soft. Add ginger-garlic and coriander powder."
      },
      {
        "title": "Simmer or roast",
        "body": "Add chicken and yoghurt; stir on medium-low heat for 5 minutes, then add water and simmer 12–15 minutes."
      },
      {
        "title": "Finish and check",
        "body": "Stir in spinach and cashew paste; simmer gently, verify 74°C / 165°F and finish with garam masala."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Roomali roti",
      "Jeera rice"
    ]
  },
  {
    "slug": "kolhapuri-chicken-sukka",
    "name": "Kolhapuri Chicken Sukka",
    "native": "Kolhapuri Kombdi Sukka",
    "subtitle": "A dry-roasted chicken dish with Kolhapuri masala, coconut and bold red chilli.",
    "region": "Maharashtra",
    "origin": "Maharashtra",
    "heat": 3,
    "prep": 25,
    "cook": 40,
    "serves": 4,
    "variant": "dry",
    "palette": {
      "bg": "#eadfd0",
      "curry": "#a94b27",
      "deep": "#652d1b",
      "piece": "#d5a477",
      "garnish": "#4d6b43",
      "accent": "#dfb675"
    },
    "story": "A dry-roasted chicken dish with Kolhapuri masala, coconut and bold red chilli.",
    "tags": [
      "Maharashtra",
      "dry",
      "Regional"
    ],
    "ingredients": [
      {
        "title": "Ingredients",
        "items": [
          "800 g small bone-in chicken pieces",
          "6 dried red chillies",
          "2 tbsp coriander seeds",
          "1 tsp cumin seeds",
          "½ cup grated dry coconut",
          "1 onion, sliced",
          "4 cloves",
          "1 cinnamon stick",
          "3 tbsp oil",
          "1 tbsp ginger-garlic paste",
          "150 ml hot water",
          "¾ tsp salt"
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "body": "Dry-roast chillies, coriander, cumin, cloves and cinnamon until fragrant; cool."
      },
      {
        "title": "Build the base",
        "body": "Roast coconut until golden; fry onion until deep brown, then grind with spices and coconut."
      },
      {
        "title": "Cook the chicken",
        "body": "Heat oil; sear chicken with ginger-garlic and salt for 8 minutes until lightly browned."
      },
      {
        "title": "Simmer or roast",
        "body": "Add ground masala and fry 5 minutes; add hot water, cover and simmer 20–25 minutes."
      },
      {
        "title": "Finish and check",
        "body": "Uncover and toss until liquid evaporates and masala clings; check chicken reaches 74°C / 165°F."
      }
    ],
    "notes": [
      "Regional seasoning and chilli strength vary; adjust gradually to taste.",
      "Use a food thermometer to confirm the thickest chicken piece reaches 74°C / 165°F.",
      "Keep raw chicken and its marinade separate from cooked food; wash hands and utensils after handling."
    ],
    "serveWith": [
      "Jowar bhakri",
      "Sliced onion"
    ]
  }
];

export const getRecipe = (slug: string) => recipes.find((recipe) => recipe.slug === slug);

export const totalTime = (recipe: Recipe) => recipe.prep + recipe.cook;

/** Translated recipe content, by language and then by slug. */
export const recipeTranslations: Record<string, Record<string, RecipeTranslation>> = { hi: hiRecipeTranslations };

export const hasRecipeTranslation = (recipe: Recipe, locale: string) => Boolean(recipeTranslations[locale]?.[recipe.slug]);

export const localizeRecipe = (recipe: Recipe, locale: string): Recipe => {
  const translation = recipeTranslations[locale]?.[recipe.slug];
  return translation ? { ...recipe, ...translation } : recipe;
};

export const localizeRecipes = (locale: string) => recipes.map((recipe) => localizeRecipe(recipe, locale));

export const regionNotes: Record<string, string> = {
  Delhi: "Tandoor, butter and tomato. Delhi's restaurant style.",
  Punjab: "Mustard oil, ghee and strong masala. Food for a crowd.",
  Hyderabad: "Dum cooking, saffron and dry fruits. Slow and royal.",
  "Tamil Nadu": "Pepper, curry leaves and coconut. Hot, but with balance.",
  Kerala: "Coconut milk and small onions. Milder than you think.",
  Goa: "Vinegar, jaggery and Kashmiri chilli. Sour before hot.",
  Awadh: "Mild and rich. Nothing browned, no chilli powder.",
  Bengal: "Mustard oil and slow frying. Dark, thick and slightly sweet.",
  Maharashtra: "Roasted coconut, goda masala and bold coastal and Deccan flavours.",
  "Andhra Pradesh": "Chilli, tamarind and curry leaves. Sharp, lively and full of heat.",
  Karnataka: "Coastal coconut masalas, Byadgi chillies and Kodava pepper.",
  "Himachal Pradesh": "Gentle hill cooking, curd gravies and whole spices.",
  Kashmir: "Fennel, dry ginger and delicate curd-based gravies.",
  Bihar: "Mustard oil, garlic and homestyle spice blends.",
  Rajasthan: "Robust spice, Mathania chilli and rich festive gravies.",
  Assam: "Light broths, seasonal vegetables and distinctive khar flavours.",
  Nagaland: "Smoked ingredients, chillies and bamboo shoot in varied home styles.",
  Manipur: "Light seasonal stews, vegetables, herbs and gentle broth.",
  Chhattisgarh: "Seasonal greens, garlic and rice-friendly home cooking.",
  "West Bengal": "Light jhols, mustard oil and slow-cooked Mughlai favourites.",
  Gujarat: "Parsi community cooking, sweet-sour gravies and crisp sali.",
  Telangana: "Country chicken, tamarind, chilli and roasted sesame masalas.",
  "Uttar Pradesh": "Awadhi slow cooking, fragrant whole spices, curd and saffron.",
  Odisha: "Mustard oil, roasted spices and slow-cooked kasa-style gravies.",
  Sindh: "Greens, lentils and balanced home-style spice blends.",
  Parsi: "Community cooking with layered spices and sweet-sour balance.",
  "North India": "Tandoor-style grills, herb marinades and warming spice blends.",
  Uttarakhand: "Hill herbs, local seeds, simple broths and rustic chicken curries.",
  "Madhya Pradesh": "Central Indian home cooking with garlic, nuts, roasted spices and regional masalas.",
  Sikkim: "Himalayan noodle soups, ginger-rich broths and warming mountain flavours.",

};

export const regions = Array.from(new Set(recipes.map((recipe) => recipe.region))).map((name) => ({
  name,
  note: regionNotes[name],
  count: recipes.filter((recipe) => recipe.region === name).length,
}));

export const featured = ["murgh-makhani", "hyderabadi-chicken-biryani", "chettinad-pepper-chicken"];

export const pantry = [
  { name: "Kashmiri chilli", note: "Gives red colour without too much heat. Used in most red curries." },
  { name: "Kasuri methi", note: "Dried fenugreek leaves. Crush in your palm and add at the end." },
  { name: "Green cardamom", note: "Gives a sweet smell. Crush the pods; do not grind them whole." },
  { name: "Black pepper", note: "The main heat in southern dishes. Roast lightly and grind fresh." },
  { name: "Coriander seed", note: "Crush it roughly for kadai masala instead of using powder." },
  { name: "Mustard oil", note: "Heat it till it just smokes, then lower the flame before cooking." },
  { name: "Curry leaves", note: "Fry in hot oil for 30 seconds, till they stop spluttering." },
  { name: "Ghee", note: "Add a spoon at the end, after switching off the heat." },
];

export const method = [
  { number: "01", title: "Marinate for long enough", body: "Curd and lemon carry the masala into the chicken. Four hours is the minimum; overnight is better. Take the chicken out of the fridge 30 minutes before cooking." },
  { number: "02", title: "Fry the whole spices first", body: "Whole spices need ghee and heat to release their smell. Fry them for 30–45 seconds, then add the powders. Burnt spices make the dish bitter and cannot be fixed." },
  { number: "03", title: "Cook the masala till the oil separates", body: "Every masala goes through a stage where it looks dry and the oil comes out at the sides. Only then add water, not before. Most of the taste is built here." },
  { number: "04", title: "Keep aside before serving", body: "Five minutes off the heat lets the gravy thicken and the masala settle into the chicken. Cover the pot and wait. It is the easiest way to improve any curry." },
];

export const regionSlug = (name: string) =>
  name.toLowerCase().normalize("NFKD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getRegionBySlug = (slug: string) =>
  regions.find((region) => regionSlug(region.name) === slug);
